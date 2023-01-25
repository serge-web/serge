const listeners = {}
let addListenersQueue = []
let wargameName = ''
const { wargameSettings, INFO_MESSAGE, dbSuffix, settings, CUSTOM_MESSAGE } = require('../consts')

const pouchDb = (app, io, pouchOptions) => {
  const PouchDB = require('pouchdb-core')
    .plugin(require('pouchdb-adapter-node-websql'))
    .plugin(require('pouchdb-adapter-http'))
    .plugin(require('pouchdb-mapreduce'))
    .plugin(require('pouchdb-replication'))
    .defaults(pouchOptions)
  require('pouchdb-all-dbs')(PouchDB)

  app.use('/db', require('express-pouchdb')(PouchDB))

  // changesListener
  const initChangesListener = (dbName) => {
    const db = new PouchDB(dbName, pouchOptions)
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

  PouchDB.allDbs().then(dbs => {
    dbs.forEach(db => initChangesListener(db))
  }).catch(err => console.log('Error on load alldbs', err))

  const checkSqliteExists = (dbName) => {
    return dbName.indexOf('wargame') !== -1 && dbName.indexOf(dbSuffix) === -1 ? dbName + dbSuffix : dbName
  }

  app.put('/:wargame', async (req, res) => {
    // TODO: if this req is an activity document (or list of them)
    // then we should actually push it to the player logs database
    const databaseName = checkSqliteExists(req.params.wargame)
    const db = new PouchDB(databaseName, pouchOptions)
    const putData = req.body
    wargameName = req.params.wargame

    if (!listeners[databaseName]) {
      addListenersQueue.push(databaseName)
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
                // TODO: this seems to be changing the doc name from date-time (or 'initial-settings')
                // TODO: to 'settings'
                _id: settings
              }
              return retryUntilWritten(db, settingsDoc)
            })
        }
      })
    }
    retryUntilWritten(db, putData)
  })

  app.put('/healthcheck/:dbname', async (req, res) => {
    const databaseName = checkSqliteExists(req.params.dbname)
    const db = new PouchDB(databaseName, pouchOptions)
    const docs = req.body
    if (docs.length === 0) {
      // nothing to do
      res.send({ msg: 'OK' })
    } else {
      return db.bulkDocs(req.body).then(async () => {
        await db.compact()
        res.send({ msg: 'OK' })
      }).catch(err => {
        res.send({ msg: 'err', data: err })
      })
    }
  })

  app.get('/replicate/:replicate/:dbname', (req, res) => {
    const newDbName = checkSqliteExists(req.params.replicate) // new db name
    const newDb = new PouchDB(newDbName, pouchOptions)
    const existingDatabase = checkSqliteExists(req.params.dbname) // copy data from
    newDb.replicate.from(existingDatabase).then(() => {
      res.send('Replicated')
    }).catch(err => res.status(400).send({ msg: 'Error on replication', data: err }))
  })

  app.delete('/delete/:dbName', (req, res) => {
    const dbName = checkSqliteExists(req.params.dbName)
    const db = new PouchDB(dbName, pouchOptions)
    db.destroy().then(() => {
      res.send({ msg: 'ok', data: dbName })
    }).catch((err) => res.status(400).send({ msg: 'error', data: err }))
  })

  app.delete('/clearAll', (req, res) => {
    PouchDB.resetAllDbs()
      .then(() => res.send())
      .catch(err => res.status(500).send(`Error on clearAll ${err}`))
  })

  // get all wargame names
  app.get('/allDbs', async (req, res) => {
    PouchDB.allDbs().then(dbs => {
      const dbList = dbs.map(dbName => dbName.replace(dbSuffix, ''))
      res.send({ msg: 'ok', data: dbList || [] })
    }).catch(() => res.send([]))
  })

  // get all message documents for wargame
  app.get('/:wargame', async (req, res) => {
    const databaseName = checkSqliteExists(req.params.wargame)

    if (!databaseName) {
      res.status(404).send({ msg: 'Wrong Wargame Name', data: null })
    }
    const db = new PouchDB(databaseName, pouchOptions)

    db.allDocs({ include_docs: true, attachments: true })
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

    const db = new PouchDB(databaseName, pouchOptions)
    // NOTE: if we end up with a performance problem from the "reverse sort" processing
    // NOTE: here is a suggested alternate strategy:
    // NOTE: for each "new wargame" we push two documents: the wargame with date-time id
    // NOTE: "and" one with a fixed id "settings"
    // NOTE: So, when calling 'last' we first try to retrieve "settings", if it's not there
    // NOTE: then we do reverse-sort to find the latest one.
    // NOTE: If we do "wind-back" of wargame, delete "settings"
    db.find({
      selector: {
        messageType: INFO_MESSAGE,
        _id: { $ne: wargameSettings }
      },
      limit: 1,
      sort: [{ _id: 'desc' }]
    }).then((result) => res.send({ msg: 'ok', data: result.docs }))
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
        messageType: INFO_MESSAGE,
        _id: { $ne: wargameSettings }
      },
      fields: ['data', '_id']
    }).then((result) => {
      const resaultData = result.docs.map((data) => {
        const { gameDate, gameTurnTime } = data.data.overview
        return {
          gameDate,
          gameTurnTime,
          _id: data._id
        }
      })
      res.send({ msg: 'ok', data: resaultData })
    })
      .catch(() => res.send([]))
  })

  app.get('/:wargame/:dbname/logs', (req, res) => {
    const databaseName = checkSqliteExists(req.params.dbname)

    if (!databaseName) {
      res.status(404).send({ msg: 'Wrong Player Name', data: null })
    }

    const db = new PouchDB(databaseName, pouchOptions)

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

    const db = new PouchDB(databaseName, pouchOptions)
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
            _id: { $ne: settings }
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

    const db = new PouchDB(databaseName, pouchOptions)

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

      const lastLogs = result.docs && uniqByKeepLast(result.docs, it => it.role)

      res.send({ msg: 'ok', data: lastLogs })
    })
      .catch(() => res.send([]))
  })

  // get document for wargame
  app.get('/get/:wargame/:id', (req, res) => {
    const databaseName = checkSqliteExists(req.params.wargame)
    const db = new PouchDB(databaseName, pouchOptions)
    const id = `${req.params.id}`

    if (!id || !databaseName) {
      res.status(404).send({ msg: 'Wrong Id or Wargame', data: null })
    }

    db.get(id)
      .then(data => res.send({ msg: 'ok', data: data }))
      .catch(() => {
        // TODO: if the id doesn't exist, it looks for 'settings', but we
        // TODO: won't have a 'settings' document.
        db.get(settings)
          .then(data => res.send({ msg: 'ok', data: data }))
          .catch((err) => res.send({ msg: 'err', data: err }))
      })
  })
}

module.exports = pouchDb
