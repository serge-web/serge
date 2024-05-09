const listeners = {}
let addListenersQueue = []
let wargameName = ''
const { wargameSettings, INFO_MESSAGE, dbSuffix, settings, databaseUrlPrefix, CUSTOM_MESSAGE, GLOBAL_CHANGES } = require('../consts')

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

  app.use(databaseUrlPrefix, require('express-pouchdb')(PouchDB))

  const couchDbURL = (databaseName = '') => {
    const dbWithoutSqlite = databaseName.replace(dbSuffix, '')
    return `http://${COUCH_ACCOUNT}:${COUCH_PASSWORD}@${COUCH_URL}/${dbWithoutSqlite}`
  }

  // changesListener
  const initChangesListener = (dbName) => {
    const db = new CouchDB(couchDbURL(dbName))

    // Check if the database name is `_global_changes`, if so, return
    if (dbName === GLOBAL_CHANGES) {
      return
    }

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

  // Define a route to handle bulk document updates in a specified database
  app.put('/bulkDocs/:dbname', async (req, res) => {
    const databaseName = checkSqliteExists(req.params.dbname)
    const db = new CouchDB(couchDbURL(databaseName))
    // Get the array of documents from the request body
    const docs = req.body

    if (!listeners[databaseName]) {
      addListenersQueue.push(databaseName)
    }

    // Check if there are any documents to update
    if (docs.length === 0) {
      // nothing to do
      res.send({ msg: 'OK' })
    } else {
      // If there are documents, update them in bulk
      return db.bulkDocs(docs).then(async () => {
        // Compact the database to free up disk space
        await db.compact()

        // If the bulk update succeeds, emit an event to notify clients of the update
        io.emit(req.params.dbname, docs)
        res.send({ msg: 'OK', data: docs })
      }).catch(err => {
        // If there is an error with the bulk update, send a response with an error message and data
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

  app.get('/wargameList', async (req, res) => {
    const allDbsPromise = CouchDB.fetch(couchDbURL('_all_dbs')).then(result => result.json())
    const serverPath = `${req.protocol}://${req.get('host')}`

    const wargameListPromise = allDbsPromise.then(allDbs => {
      const wargameDbs = allDbs.filter(name => name.includes('wargame'))
      const reversedWargameDbs = wargameDbs.reverse()
      return Promise.all(reversedWargameDbs.map(async db => {
        const databaseName = checkSqliteExists(db)
        if (!databaseName) {
          return null
        }
        const dbInstance = new CouchDB(couchDbURL(databaseName))
        return dbInstance.find({
          selector: {
            $or: [{ messageType: INFO_MESSAGE }, { _id: wargameSettings }],
            _id: { $gte: null }
          },
          sort: [{ _id: 'desc' }],
          fields: ['wargameTitle', 'wargameInitiated', 'name'],
          limit: 2
        }).then(result => {
          if (result.docs && result.docs.length > 0) {
            return {
              name: `${serverPath}/db/${db}`,
              title: result.docs.length > 1 && result.docs[0]._id === wargameSettings ? result.docs[1].wargameTitle : result.docs[0].wargameTitle,
              initiated: result.docs.length > 1 && result.docs[0]._id === wargameSettings ? result.docs[1].wargameInitiated : result.docs[0].wargameInitiated,
              shortName: result.docs.length > 1 && result.docs[0]._id === wargameSettings ? result.docs[1].name : result.docs[0].name
            }
          } else {
            return null
          }
        }).catch(error => {
          console.error(`Error fetching data from database ${db}:`, error)
          return null
        })
      }))
    })

    Promise.all([allDbsPromise, wargameListPromise])
      .then(([allDbs, aggregatedData]) => {
        const filteredData = aggregatedData.filter(data => data !== null)
        res.status(200).json(filteredData)
      })
      .catch(err => {
        console.error('Error on load alldbs:', err)
        res.status(500).json({ error: 'Internal Server Error' })
      })
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
        $or: [{ messageType: INFO_MESSAGE }, { _id: wargameSettings }],
        _id: { $gte: null }
      },
      sort: [{ _id: 'desc' }],
      limit: 2
    }).then((result) => {
      if (result.docs && result.docs.length > 0) {
        const responseData = result.docs.length > 1 && result.docs[0]._id === wargameSettings ? [result.docs[1]] : [result.docs[0]]

        return res.send({ msg: 'ok', data: responseData })
      } else {
        return res.send([])
      }
    }
    )
      .catch(() => res.send([]))
  })

  app.get('/:wargame/turns', (req, res) => {
    const databaseName = checkSqliteExists(req.params.wargame)

    if (!databaseName) {
      res.status(404).send({ msg: 'Wrong Wargame Name', data: null })
    }

    const db = new PouchDB(databaseName, pouchOptions)

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
