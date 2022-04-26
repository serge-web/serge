const listeners = {}
let addListenersQueue = []

const { wargameSettings, COUNTER_MESSAGE, dbSuffix, settings } = require('../consts')

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
    }).on('change', (result) => io.emit('changes', result.doc))
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
    const db = new CouchDB(couchDbURL(databaseName))
    const putData = req.body

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
          return db.put(doc).then(() => res.send({ msg: 'Saved', data: doc }))
        }
      })
    }

    retryUntilWritten(db, putData)
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
        const messages = result.rows.reduce((messages, { doc }) => {
          const isNotSystem = doc._id !== wargameSettings
          if (doc.messageType !== COUNTER_MESSAGE && isNotSystem) messages.push(doc)
          return messages
        }, [])
        res.send({ msg: 'ok', data: messages })
      }).catch(() => res.send([]))
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
