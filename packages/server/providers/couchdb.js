const listeners = {}
let addListenersQueue = []
let wargameName = ''
const { wargameSettings, INFO_MESSAGE, dbSuffix, settings, CUSTOM_MESSAGE } = require('../consts')

const { COUCH_ACCOUNT, COUCH_URL, COUCH_PASSWORD } = process.env

const couchDb = (app, io, pouchOptions) => {
  const CouchDB = require('pouchdb-core')
  const PouchDB = require('pouchdb-core')
    .plugin(require('pouchdb-adapter-node-websql'))
    .plugin(require('pouchdb-adapter-http'))
    .plugin(require('pouchdb-mapreduce'))
    .plugin(require('pouchdb-replication'))
    .defaults(pouchOptions)
  require('pouchdb-all-dbs')(PouchDB)

  app.use('/db', require('express-pouchdb')(PouchDB))

  const couchDbURL = (databaseName = '') => {
    const dbWithoutSqlite = databaseName.replace(dbSuffix, '')
    return `http://${COUCH_ACCOUNT}:${COUCH_PASSWORD}@${COUCH_URL}/${dbWithoutSqlite}`
  }

  // changesListener
  const initChangesListener = (dbName) => {
    const db = new CouchDB(couchDbURL(dbName))
    // saving listener
    listeners[dbName] = db.changes({
      since: 'now',
      live: true,
      timeout: false,
      heartbeat: false,
      include_docs: true
    }).on('change', (result) => io.emit(wargameName, result.doc))
  }

  // check listeners queue to add a new listenr
  setInterval(() => {
    if (addListenersQueue.length) {
      for (const dbName of addListenersQueue) {
        initChangesListener(dbName)
      }
      // clean queue
      addListenersQueue = []
    }
  }, 5000)

  CouchDB.fetch(couchDbURL('_all_dbs'))
    .then(result => result.json().then(allDbs => {
      allDbs.forEach(db => initChangesListener(db))
    }).catch(err => console.log('Error on load alldbs', err))
    )

  const checkSqliteExists = (dbName) => {
    return dbName.indexOf('wargame') !== -1 && dbName.indexOf(dbSuffix) === -1 ? dbName + dbSuffix : dbName
  }

  // const connectToRemoteDb = (databaseName) => {
  //   const path = require('path')
  //   const sqlite3 = require('sqlite3')
  //   return new Promise((resolve, reject) => {
  //     const dbPath = path.resolve(__dirname, `../db/${databaseName}`)
  //     // eslint-disable-next-line no-new
  //     new sqlite3.Database(dbPath, async (err) => {
  //       if (err) return reject(new Error('Not exists file in db/' + err))
  //       const remoteDb = new CouchDB(couchDbURL(databaseName))
  //       resolve(remoteDb)
  //     })
  //   })
  // } // uncoment this part for sync

  app.put('/:wargame', (req, res) => {
    const databaseName = checkSqliteExists(req.params.wargame)
    const cleanName = databaseName.replace(dbSuffix, '')
    const db = new CouchDB(couchDbURL(databaseName))
    const putData = req.body
    wargameName = req.params.wargame

    if (!listeners[cleanName]) {
      addListenersQueue.push(cleanName)
    }

    const retryUntilWritten = (db, doc) => {
      return db.get(doc._id).then((origDoc) => {
        doc._rev = origDoc._rev
        return db.put(doc).then(async () => {
          await db.compact()
          res.send({ msg: 'Updated', data: doc })
        })
      }).catch(err => {
        if (err.status === 409) {
          return retryUntilWritten(db, doc)
        } else { // new doc
          return db.put(doc)
            .then(() => res.send({ msg: 'Saved', data: doc }))
            .catch(() => {
              const settingsDoc = {
                ...doc,
                _id: settings
              }
              return retryUntilWritten(db, settingsDoc)
            })
        }
      })
    }

    retryUntilWritten(db, putData)
  })

  app.put('/bulkDocs/:dbname', async (req, res) => {
    const databaseName = checkSqliteExists(req.params.dbname)
    const db = new CouchDB(couchDbURL(databaseName))
    const docs = req.body
    if (docs.length === 0) {
      // nothing to do
      res.send({ msg: 'OK' })
    } else {
      return db.bulkDocs(docs).then(async () => {
        await db.compact()
        io.emit(req.params.dbname, docs)
        res.send({ msg: 'OK', data: docs })
      }).catch(err => {
        res.send({ msg: 'err', data: err })
      })
    }
  })

  app.get('/replicate/:replicate/:dbname', (req, res) => {
    const newDbName = checkSqliteExists(req.params.replicate) // new db name
    const newDb = new CouchDB(couchDbURL(newDbName))
    const existingDatabase = checkSqliteExists(req.params.dbname) // copy data from
    newDb.replicate.from(existingDatabase).then(() => {
      res.send('Replicated')
    }).catch(err => res.status(400).send({ msg: 'Error on replication', data: err }))
  })

  app.delete('/delete/:dbName', (req, res) => {
    const dbName = checkSqliteExists(req.params.dbName)
    const remoteDb = new CouchDB(couchDbURL(dbName))
    remoteDb.destroy().then(() => {
      res.send({ msg: 'ok', data: dbName })
    }).catch((err) => res.status(400).send({ msg: 'error', data: err }))
  })

  app.delete('/clearAll', (req, res) => {
    CouchDB.fetch(couchDbURL('_all_dbs'))
      .then(result => result.json().then(allDbs => {
        const dbList = allDbs.map(async db => {
          const remoteDb = new CouchDB(couchDbURL(db))
          return remoteDb.destroy()
        })
        res.send({ msg: 'ok', data: dbList })
      })
        .catch(err => res.status(500).send(`Error on request clearAll ${err}`))
        .catch(() => res.send([])))
  })

  // get all wargame names
  app.get('/allDbs', (req, res) => {
    // PouchDB.allDbs().then(dbs => {
    //   dbs.forEach(dbName => {
    //     if (dbName.includes('wargame-kzod28lc')) {
    //       const db = new PouchDB(dbName, pouchOptions)
    //       connectToRemoteDb(dbName)
    //         .then(remoteDb => PouchDB.sync(db, remoteDb))
    //         .catch(err => console.log('ERR', err))
    //     }
    //     })
    // }) // uncoment this part for sync
    CouchDB.fetch(couchDbURL('_all_dbs')).then(result => result.json()
      .catch(err => res.status(500).send(`Error on request allDbs ${err}`))
      .then(allDbs => {
        res.send({ msg: 'ok', data: allDbs || [] })
      })
      .catch(() => res.send([])))
  })

  // get all documents for wargame
  app.get('/:wargame', (req, res) => {
    const databaseName = checkSqliteExists(req.params.wargame)

    if (!databaseName) {
      res.status(404).send({ msg: 'Wrong Wargame Name', data: null })
    }

    const remoteDb = new CouchDB(couchDbURL(databaseName))

    remoteDb.allDocs({ include_docs: true, attachments: true })
      .then(result => {
        // unpack the documents
        const docs = result.rows.map((item) => item.doc)
        // drop wargame & info messages
        // NO, don't. We need the info messages, for the turn markers
        // const ignoreTypes = [] //INFO_MESSAGE, COUNTER_MESSAGE]
        // const messages = docs.filter((doc) => !ignoreTypes.includes(doc.messageType))
        res.send({ msg: 'ok', data: docs })
      }).catch(() => res.send([]))
  })

  app.get('/:wargame/last', (req, res) => {
    const databaseName = checkSqliteExists(req.params.wargame)

    if (!databaseName) {
      res.status(404).send({ msg: 'Wrong Wargame Name', data: null })
    }

    const db = new CouchDB(couchDbURL(databaseName))

    db.find({
      selector: {
        messageType: INFO_MESSAGE,
        _id: { $ne: wargameSettings, $gte: null }
      },
      sort: [{ _id: 'desc' }],
      limit: 1
    }).then((resault) => res.send({ msg: 'ok', data: resault.docs }))
      .catch(() => res.send([]))
  })

  app.get('/:wargame/:dbname/logs', (req, res) => {
    const databaseName = checkSqliteExists(req.params.dbname)

    if (!databaseName) {
      res.status(404).send({ msg: 'Wrong Player Name', data: null })
    }

    const db = new CouchDB(couchDbURL(databaseName))

    db.find({
      selector: {
        wargame: req.params.wargame
      }
    }).then((result) => {
      res.send({ msg: 'ok', data: result.docs })
    })
      .catch(() => res.send([]))
  })

  app.get('/:wargame/turns', (req, res) => {
    const databaseName = checkSqliteExists(req.params.wargame)

    if (!databaseName) {
      res.status(404).send({ msg: 'Wrong Wargame Name', data: null })
    }

    const db = new CouchDB(couchDbURL(databaseName))

    db.find({
      selector: {
        adjudicationStartTime: { $exists: true }
      },
      fields: ['data', 'gameTurn']
    }).then((result) => {
      const uniqBy = (data, key) => {
        return [
          ...new Map(
            data.map(x => [key(x),
              {
                gameTurn: x.gameTurn,
                gameTurnTime: x.data.overview.gameTurnTime,
                gameDate: x.data.overview.gameDate

              }])
          ).values()
        ]
      }

      const resaultData = uniqBy(result.docs, it => it.gameTurn)

      res.send({ msg: 'ok', data: resaultData })
    })
      .catch(() => res.send([]))
  })

  app.get('/:wargame/:force/:id/counter', (req, res) => {
    const databaseName = checkSqliteExists(req.params.wargame)

    if (!databaseName) {
      res.status(404).send({ msg: 'Wrong Wargame Name', data: null })
    }

    const db = new CouchDB(couchDbURL(databaseName))

    let messageDefaultCount = 1

    db.get(req.params.id)
      .then(data => res.send({ msg: 'ok', data: data.details.counter }))
      .catch(() => {
        db.find({
          selector: {
            messageType: CUSTOM_MESSAGE,
            details: {
              from: { force: req.params.force },
              counter: { $exists: true }
            },
            _id: { $ne: settings, $gte: null }
          },
          fields: ['details.counter']
        }).then((result) => {
          if (result.docs.length) {
            const Biggestcount = Math.max(...result.docs.map(data => data.details.counter))
            if (Biggestcount) {
              messageDefaultCount += Biggestcount
            }
          }
          res.send({ msg: 'ok', data: messageDefaultCount })
        })
          .catch(() => res.send([]))
      })
  })

  app.get('/:wargame/:dbname/logs-latest', (req, res) => {
    const databaseName = checkSqliteExists(req.params.dbname)

    if (!databaseName) {
      res.status(404).send({ msg: 'Wrong Player Name', data: null })
    }

    const db = new CouchDB(couchDbURL(databaseName))

    db.find({
      selector: {
        wargame: req.params.wargame
      },
      fields: ['role', 'activityTime', 'activityType']
    }).then((result) => {
      const uniqByKeepLast = (data, key) => {
        return [
          ...new Map(
            data.map(x => [key(x), x])
          ).values()
        ]
      }

      const lastLogs = result.docs && uniqByKeepLast(result.docs, logs => logs.role)

      res.send({ msg: 'ok', data: lastLogs })
    })
      .catch(() => res.send([]))
  })

  // get document for wargame
  app.get('/get/:wargame/:id', (req, res) => {
    const databaseName = checkSqliteExists(req.params.wargame)
    const db = new CouchDB(couchDbURL(databaseName))
    const id = `${req.params.id}`

    if (!id || !databaseName) {
      res.status(404).send({ msg: 'Wrong Id or Wargame', data: null })
    }

    db.get(id)
      .then(data => res.send({ msg: 'ok', data: data }))
      .catch(() => {
        db.get(settings)
          .then(data => res.send({ msg: 'ok', data: data }))
          .catch((err) => res.send({ msg: 'err', data: err }))
      })
  })
}

module.exports = couchDb
