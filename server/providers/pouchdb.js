const listeners = {}
let addListenersQueue = []
let wargameName = ''
const { wargameSettings, INFO_MESSAGE, dbSuffix, settings, CUSTOM_MESSAGE, databaseUrlPrefix } = require('../consts')

const pouchDb = (app, io, pouchOptions) => {
  const PouchDB = require('pouchdb-core')
    .plugin(require('pouchdb-adapter-node-websql'))
    .plugin(require('pouchdb-adapter-http'))
    .plugin(require('pouchdb-mapreduce'))
    .plugin(require('pouchdb-replication'))
    .defaults(pouchOptions)
  require('pouchdb-all-dbs')(PouchDB)

  const pouchHandle = require('express-pouchdb')(PouchDB, {
    overrideMode: {
      include: ['routes/fauxton']
    }
  })

  const fauxtonIntercept = (req, res, next) => {
    const FauxtonBundlePath = 'js/bundle-34997e32896293a1fa5d71f79eb1b4f7.js'

    if (req.url.endsWith(`_utils/dashboard.assets/${FauxtonBundlePath}`)) {
      const bundlePath = require('path').join(__dirname, '../node_modules/pouchdb-fauxton/www/dashboard.assets/', FauxtonBundlePath)
      let jsFile
      try {
        jsFile = require('fs').readFileSync(bundlePath).toString()
      } catch (err) {
        console.error(`Could not read Fauxton bundle file at ${bundlePath}: ${err.message}`)

        jsFile = ''
      }
      /* eslint-disable no-useless-escape */
      res.send(jsFile
        .replace('host:"../.."', 'host:".."')
        .replace('root:"/_utils"', `root:"${databaseUrlPrefix}/_utils"`)
        .replace(/url:\"\/_session/g, `url:"${databaseUrlPrefix}/_session`)
        .replace(/url:\"\/_replicator/g, `url:"${databaseUrlPrefix}/_replicator`)
        .replace(/window\.location\.origin\+\"\/_replicator/g, `window.location.origin+"${databaseUrlPrefix}/_replicator`)
        .replace(/url:\"\/_users/g, `url:"${databaseUrlPrefix}/_users`)
        .replace('window.location.origin+"/"+o.default.utils.safeURLName', `window.location.origin+"${databaseUrlPrefix}/"+o.default.utils.safeURLName`))
      return
    }
    return pouchHandle(req, res, next)
  }

  app.use(databaseUrlPrefix, fauxtonIntercept)

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
        return db.put(doc).then(async (result) => {
          doc._id = result.id
          doc._rev = result.rev
          await db.compact()
          res.send({ msg: 'Updated', data: doc })
        })
      }).catch(err => {
        if (err.status === 409) {
          return retryUntilWritten(db, doc)
        } else { // new doc
          return db.put(doc)
            .then((result) => {
              doc._id = result.id
              doc._rev = result.rev
              res.send({ msg: 'Saved', data: doc })
            })
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

  // Define a route to handle bulk document updates in a specified database
  app.put('/bulkDocs/:dbname', async (req, res) => {
    const databaseName = checkSqliteExists(req.params.dbname)
    const db = new PouchDB(databaseName, pouchOptions)
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
        // If the bulk update succeeds, emit an event to notify clients of the update
        io.emit(req.params.dbname, docs)

        // Compact the database to free up disk space
        await db.compact()
        res.send({ msg: 'OK' })
      }).catch(err => {
        // If there is an error with the bulk update, send a response with an error message and data
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

  app.get('/wargameList', async (req, res) => {
    PouchDB.allDbs()
      .then(dbList => {
        const dbLists = dbList.map(dbName => dbName.replace(dbSuffix, ''))
        const wargameDbs = dbLists.filter(name => name.includes('wargame'))
        const reversedWargameDbs = wargameDbs.reverse()
        const serverPath = `${req.protocol}://${req.get('host')}`

        return Promise.all(reversedWargameDbs.map(async db => {
          const databaseName = checkSqliteExists(db)
          if (!databaseName) {
            return null
          }
          const dbInstance = new PouchDB(databaseName)
          return dbInstance.find({
            selector: {
              $or: [{ messageType: INFO_MESSAGE }, { _id: wargameSettings }],
              _id: { $gte: null }
            },
            sort: [{ _id: 'desc' }],
            fields: ['wargameTitle', 'wargameInitiated', 'name', '_id'],
            limit: 2
          })
            .then(result => {
              if (result.docs && result.docs.length > 0) {
                const lastWargame = result.docs.length > 1 && result.docs[0]._id === wargameSettings ? result.docs[1] : result.docs[0]
                return {
                  name: `${serverPath}/db/${db}`,
                  title: lastWargame.wargameTitle,
                  initiated: lastWargame.wargameInitiated,
                  shortName: lastWargame.name
                }
              } else {
                return null
              }
            })
            .catch(error => {
              console.error(`Error fetching data for database ${db}:`, error)
              return Promise.reject(error)
            })
        }))
      })
      .then(aggregatedData => {
        const filteredData = aggregatedData.filter(data => data !== null)
        res.status(200).json(filteredData)
      })
      .catch(error => {
        console.error('Error fetching wargame list:', error)
        res.status(500).json({ error: 'Internal Server Error' })
      })
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
    ).catch(() => res.send([]))
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
