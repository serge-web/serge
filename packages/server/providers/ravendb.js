const fs = require('fs')
const dotenv = require('dotenv')
const path = require('path')

let ravenUrl = process.env.RAVEN_URL
let certPath = process.env.CERT_PATH
let certPassword = process.env.CERT_PASSWORD

dotenv.config()
dotenv.config({ path: '.env.local' })

// if not exists and have data in env
if (!ravenUrl && process.env.RAVEN_URL) {
  ravenUrl = process.env.RAVEN_URL
  certPath = process.env.CERT_PATH
  certPassword = process.env.CERT_PASSWORD
}

// if not exists anyway
if (!ravenUrl) {
  ravenUrl = 'http://localhost:4040/'
  const architecture = require('os').arch()

  const executableRavenUrl = 'serge/localDbs/'

  // if OS is windows run db at server start
  if (architecture === 'x86' || architecture === 'x64') {
    if (fs.existsSync(executableRavenUrl)) {
      require('child_process').spawn('powershell.exe', [`${executableRavenUrl}/RavenDB-windows-${architecture}/run.ps1`])
    } else {
      require('child_process').spawn('powershell.exe', [path.join(__dirname, `../localDbs/RavenDB-windows-${architecture}/run.ps1`)])
    }
  }
}

const listeners = {}
let addListenersQueue = []
const { localSettings, COUNTER_MESSAGE } = require('../consts')

const {
  DocumentStore,
  CreateDatabaseOperation,
  GetStatisticsOperation,
  GetDatabaseNamesOperation,
  DeleteDatabasesOperation
} = require('ravendb')

const ravenDb = (app, io) => {
  // if we have CERT_PATH then we need to define authorization options
  const authOptions = certPath ? {
    certificate: fs.readFileSync(certPath),
    type: 'pfx',
    password: certPassword
  } : undefined

  // we don't need a default selected database bcos we need to work with multiple databases so default database is null
  const store = new DocumentStore(ravenUrl, null, authOptions)
  store.initialize()

  // changesListener
  const initChangesListener = (dbName) => {
    // get all databases and init listener for them
    // saving listener
    listeners[dbName] = store.changes(dbName)
    // adding subscription for listener
    listeners[dbName].forAllDocuments().on('data', async change => {
      // connectiong to the db
      const session = store.openSession(dbName)
      // get changed doc
      const loadData = await session.load(change.id)
      // send it to client
      io.emit('changes', loadData)
    })
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

  // check if database not exists then create it and add changes listener
  const ensureDatabaseExists = (store, dbName, createIfNotExists = false) => {
    return new Promise((resolve, reject) => {
      // dbName required
      if (!dbName) {
        return reject(new Error('Value cannot be null or whitespace.' + dbName))
      }

      // checking if database exists
      store.maintenance
        .forDatabase(dbName)
        .send(new GetStatisticsOperation())
        .then(() => resolve(false)) // database exists
        .catch((err) => { // database not found
          if (createIfNotExists) { // do we need to create database?
            // creating database object
            const database = { databaseName: dbName }
            // creating new database
            store.maintenance.server
              .send(new CreateDatabaseOperation(database))
              .then(() => { // database created successfully
                addListenersQueue.push(dbName) // add on change listeners
                resolve(true)
              }).catch(err => reject(err))
          } else resolve(err)
        })
    })
  }

  setTimeout(() => {
    // get all databases and init listener for them
    const operation = new GetDatabaseNamesOperation(0, 1000)
    store.maintenance.server.send(operation).then((wargames) => {
      for (const wargame of wargames) {
        initChangesListener(wargame)
      }
    })
  }, 2000)

  app.put('/:wargame', (req, res) => {
    const databaseName = req.params.wargame
    ensureDatabaseExists(store, databaseName, true).then(() => {
      const id = req.body._id
      const messageType = req.body.details?.messageType || req.body.title
      const putData = {
        '@metadata': {
          '@collection': messageType ? `${messageType}` : `${id}`
        },
        ...req.body
      }

      const session = store.openSession(databaseName)
      session.load(id).then(result => {
        if (result) {
          // update an document
          for (const keys in req.body) {
            result[keys] = req.body[keys]
            session.saveChanges().catch(err => res.status(400).send({ msg: 'Error in save changes', data: err }))
          }
          res.send({ msg: 'updated', data: putData })
        } else {
          // create an document
          session.store(putData, id).then(() => {
            session.saveChanges().then(() => {
              res.send({ msg: 'created', data: putData })
            }).catch(err => res.status(400).send({ msg: 'Error in save data', data: err }))
          }).catch(err => res.status(400).send({ msg: 'Error on put', data: err }))
        }
      }).catch((err) => res.status(404).send(err))
    }).catch(() => res.send([]))
  })

  app.get('/replicate/:replicate/:dbname', (req, res) => {
    const newDatabase = req.params.replicate // new db name
    const existingDatabase = req.params.dbname // copy data from
    ensureDatabaseExists(store, existingDatabase).then(() => {
      ensureDatabaseExists(store, newDatabase, true).then((isNewDatabase) => {
        if (!isNewDatabase) {
          res.status(500).send({ msg: `replication error: "${newDatabase}": already exsits`, data: {} })
          return
        }
        const session = store.openSession(existingDatabase)
        session.query({}).all().then(async (messages) => {
          const insertOperation = store.openSession(newDatabase)
          for (const message of messages) await insertOperation.store(message)
          await insertOperation.saveChanges()
          res.send({ msg: 'ok', data: messages })
        }).catch((err) => res.status(500).send({ msg: `error on load data from ${existingDatabase}`, data: err }))
      }).catch((err) => res.status(500).send({ msg: `error on ${newDatabase} database creation`, data: err }))
    }).catch((err) => res.status(500).send({ msg: `${existingDatabase} not exists`, data: err }))
  })

  app.delete('/delete/:dbName', (req, res) => {
    const dbName = req.params.dbName
    listeners[dbName] = store.changes(dbName)
    listeners[dbName].dispose()
    store.maintenance.server.send(new DeleteDatabasesOperation({ databaseNames: [dbName] }))
      .then(() => res.send('Deleted db ' + dbName))
      .catch((err) => res.status(400).send({ msg: 'Error on delete db', data: err }))
  })

  app.delete('/clearAll', async (req, res) => {
    const operation = new GetDatabaseNamesOperation(0, 1000)
    const allDbs = await store.maintenance.server.send(operation)
      .catch((err) => res.status(400).send({ msg: 'Error on load all dbs', data: err }))
    Object.keys(listeners).forEach(dbName => {
      listeners[dbName] = store.changes(dbName)
      listeners[dbName].dispose()
    })
    store.maintenance.server.send(new DeleteDatabasesOperation({ databaseNames: allDbs }))
      .then(() => res.send('Deleted all dbs'))
      .catch((err) => res.status(400).send({ msg: 'Error on clear all dbs', data: err }))
  })

  // get all wargame names
  app.get('/allDbs', async (req, res) => {
    const operation = new GetDatabaseNamesOperation(0, 1000)
    store.maintenance.server.send(operation).then((items) => {
      res.send({ msg: 'ok', data: items || [] })
    }).catch(() => res.send([]))
  })

  // get all documents for wargame
  app.get('/:wargame', async (req, res) => {
    const databaseName = `${req.params.wargame}`

    if (!databaseName) {
      res.status(404).send({ msg: 'Wrong Wargame Name', data: null })
    }

    ensureDatabaseExists(store, databaseName, true).then(() => {
      const session = store.openSession(databaseName)
      session.query({}).all().then((items) => {
        const messages = items.reduce((messages, doc) => {
          const isNotSystem = doc._id !== localSettings
          if (doc.messageType !== COUNTER_MESSAGE && isNotSystem) messages.push(doc)
          return messages
        }, [])
        res.send({ msg: 'ok', data: messages })
      }).catch(() => {
        res.send([])
      })
    }).catch(() => res.send([]))
  })

  // get document for wargame
  app.get('/:wargame/:id/:idp2', async (req, res) => {
    const databaseName = `${req.params.wargame}`
    let id = `${req.params.id}`

    if (req.params.idp2) {
      id += '/' + req.params.idp2
    }

    if (!id || !databaseName) {
      res.status(404).send({ msg: 'Wrong Id or Wargame', data: null })
    }

    ensureDatabaseExists(store, databaseName).then(() => {
      const session = store.openSession(databaseName)
      session.load(id).then((data) => {
        res.send({ msg: 'ok', data: data || [] })
      }).catch(() => res.send([]))
    }).catch(() => res.send())
  })
}

module.exports = ravenDb
