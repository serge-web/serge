const runServer = (
  eventEmmiterMaxListeners,
  pouchOptions,
  corsOptions,
  imgDir,
  dataDir,
  port,
  remoteServer,
  onAppInitListeningAddons,
  onAppStartListeningAddons
) => {
  require('events').EventEmitter.defaultMaxListeners = eventEmmiterMaxListeners
  const express = require('express')
  const bodyParser = require('body-parser')
  const path = require('path')
  const uniqid = require('uniqid')

  const PouchDB = require('pouchdb-core')
    .plugin(require('pouchdb-adapter-node-websql'))
    .plugin(require('pouchdb-adapter-http'))
    .plugin(require('pouchdb-mapreduce'))
    .plugin(require('pouchdb-replication'))
    .defaults(pouchOptions)

  /*
  // replicate database
  const localDB = new PouchDB('message_types')

  const nextDb = new PouchDB('message_types.sqlite')

  localDB.replicate.to(nextDb).on('complete', function () {
    console.log('yay, we\'re done!');
  }).on('error', function (err) {
    console.log('boo, something went wrong!');
  });
  // end replicate database
  return
  */
  const fs = require('fs')

  const { Server } = require('socket.io')

  const io = new Server(4000, { cors: { origin: '*' } })

  const {
    DocumentStore,
    CreateDatabaseOperation,
    GetStatisticsOperation,
    GetDatabaseNamesOperation,
    DeleteDatabasesOperation
  } = require('ravendb')

  onAppInitListeningAddons.forEach(addon => {
    addon.run(app)
  })

  require('pouchdb-all-dbs')(PouchDB)
  const cors = require('cors')
  const app = express()
  const listeners = {}
  // let addListenersQueue = []

  const clientBuildPath = '../client/build'

  app.use(cors(corsOptions))
  app.use('/db', require('express-pouchdb')(PouchDB))

  const rdbPrefix = '/ravendb'

  app.use(express.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // init store
  const ravenURL = process.env.RAVEN_URL
  const certPath = process.env.CERT_PATH
  const certPassword = process.env.CERT_PASSWORD

  const authOptions = {
    certificate: fs.readFileSync(certPath),
    type: 'pfx',
    password: certPassword
  }
  // remote or local raven db?
  const remoteRaven = true
  const store = remoteRaven
    ? new DocumentStore(ravenURL, 'ravendb', authOptions)
    : new DocumentStore('http://localhost:4040/')

  store.initialize()

  // changesListener
  const initChangesListener = (dbName) => {
    listeners[dbName] = store.changes(dbName)
    listeners[dbName].forAllDocuments().on('data', async change => {
      const session = store.openSession(dbName)
      const loadData = await session.load(change.id)
      io.emit('changes', loadData)
    })
  }

  // check if database not exists then create it and add changes listener
  const ensureDatabaseExists = (store, dbName, createIfNotExists = false) => {
    return new Promise((resolve, reject) => {
      if (!dbName) {
        return reject(new Error('Value cannot be null or whitespace.' + dbName))
      }

      store.maintenance
        .forDatabase(dbName)
        .send(new GetStatisticsOperation())
        .then(() => resolve())
        .catch((err) => {
          if (createIfNotExists) {
            const database = { databaseName: dbName }
            store.maintenance.server
              .send(new CreateDatabaseOperation(database))
              .then(() => {
                resolve()
              })
              .catch(err => {
                reject(err)
              })
          } else {
            reject(err)
          }
        })
    })
  }

  // get all databases and init listener for them
  const operation = new GetDatabaseNamesOperation(0, 1000)
  store.maintenance.server.send(operation).then((wargames) => {
    for (const wargame of wargames) {
      initChangesListener(wargame)
    }
  })

  app.put(rdbPrefix + '/:wargame', (req, res) => {
    const databaseName = req.params.wargame
    ensureDatabaseExists(store, databaseName, true).then(() => {
      const id = req.body._id
      const messageType = req.body.messageType
      let putData = {}

      if (!messageType) {
        putData = {
          '@metadata': {
            '@collection': `${id}`
          },
          ...req.body
        }
      } else {
        putData = {
          '@metadata': {
            '@collection': `${messageType}`
          },
          ...req.body
        }
      }

      const session = store.openSession(databaseName)
      session.load(id).then(result => {
        if (result) {
          // update an document
          for (const keys in req.body) {
            result[keys] = req.body[keys]
            session.saveChanges().catch(err => {
              res.status(400).send(err)
            })
          }
          res.send({ msg: 'updated', data: putData })
        } else {
          // create an document
          session.store(putData, id).then(() => {
            session.saveChanges().then(() => {
              res.send({ msg: 'created', data: putData })
            }).catch(err => {
              res.status(400).send(err)
            })
          }).catch(err => {
            res.status(400).send(err)
          })
        }
      }).catch((err) => { res.status(404).send(err) })
    }).catch((err) => { res.status(500).send(err) })
  })

  app.get(rdbPrefix + 'replicate/:replicate/:dbname', async (req, res) => {
    const replicateData = req.params.replicate // new db name
    const dbName = req.params.dbname // copy data from

    ensureDatabaseExists(store, replicateData, true).then(async () => {
      const session = store.openSession(dbName)
      const loadDataForReplicate = await session.query({}).all()
      const sessionForNewData = store.openSession(replicateData)
      const messages = loadDataForReplicate.map(async message => {
        const id = message._id
        const putData = {
          '@metadata': {
            '@collection': `${id}`
          },
          ...message
        }
        await sessionForNewData.store(putData, id)
        await sessionForNewData.saveChanges()
        return putData
      })
      res.send({ msg: 'ok', data: messages })
    }).catch((err) => res.status(500).send(err))
  })

  app.delete(rdbPrefix + '/delete/:dbName', (req, res) => {
    const dbName = req.params.dbName
    listeners[dbName] = store.changes(dbName)
    listeners[dbName].dispose()
    store.maintenance.server.send(new DeleteDatabasesOperation({ databaseNames: [dbName] }))
      .then(() => res.send('Deleted db ' + dbName))
      .catch((err) => res.status(400).send(err))
  })

  // get all wargame names
  app.get(rdbPrefix, async (req, res) => {
    const operation = new GetDatabaseNamesOperation(0, 1000)
    store.maintenance.server.send(operation).then((items) => {
      res.send({ msg: 'ok', data: items || [] })
    }).catch((err) => {
      res.status(404).send({
        msg: 'Something went wrong on docs load ',
        data: err
      })
    })
  })

  // get all documents for wargame
  app.get(rdbPrefix + '/:wargame', async (req, res) => {
    const databaseName = `${req.params.wargame}`

    if (!databaseName) {
      res.status(404).send({ msg: 'Wrong Wargame Name', data: null })
    }

    ensureDatabaseExists(store, databaseName).then(() => {
      const session = store.openSession(databaseName)
      session.query({}).all().then((items) => {
        res.send({ msg: 'ok', data: items || [] })
      }).catch((err) => {
        res.status(404).send({
          msg: 'Something went wrong on docs load ',
          data: err
        })
      })
    }).catch((err) => {
      res.status(500).send(err)
    })
  })

  // get document for wargame
  app.get(rdbPrefix + '/:wargame/:id/:idp2', async (req, res) => {
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
        if (data) {
          res.send({ msg: 'ok', data })
        } else {
          res.status(404).send({ msg: `Doc with id: "${id}" not found`, data })
        }
      }).catch((err) => {
        res.status(404).send({
          msg: 'Something went wrong on doc load ',
          data: err
        })
      })
    }).catch((err) => {
      res.status(500).send(err)
    })
  })

  app.get('/clearAll', (req, res) => {
    PouchDB.allDbs()
      .then(dbs => {
        dbs.forEach(db => {
          new PouchDB(db).destroy()
        })
      })
      .then(() => {
        res.send()
      })
  })

  app.get('/deleteDb', (req, res) => {
    fs.unlink('db/' + req.query.db, err => {
      console.log(err)
      if (err) {
        res.status(500).send()
      } else {
        res.status(200).send()
      }
    })
  })

  app.get('/getIp', (req, res) => {
    res.status(200).send({ ip: req.ip })
  })

  app.get('/healthcheck', (req, res) => {
    res.status(200).send({
      status: 'OK',
      uptime: process.uptime()
    })
  })

  app.get('/cells/:filename', (req, res) => {
    if (dataDir) {
      res.sendFile(path.join(process.cwd(), dataDir, req.params.filename))
      return
    }
    res.sendFile(path.join(__dirname, '../', 'data', req.params.filename))
  })

  app.use('/saveIcon', express.raw({ type: ['image/png', 'image/svg+xml'], limit: '20kb' }))
  app.post('/saveIcon', (req, res) => {
    const imageName = `${uniqid.time('icon-')}.${req.headers['content-type'] === 'image/svg+xml' ? 'svg' : 'png'}`
    const image = `${imgDir}/${imageName}`
    let imagePath = `${req.headers.host}/getIcon/${imageName}`
    if (!/https?/.test(imagePath)) imagePath = '//' + imagePath
    fs.writeFile(image, req.body, err => console.log(err))

    res.status(200).send({ path: imagePath })
    // const buff = Buffer.from(req.body, 'utf8').toString()
    // const newBuff = buff.replace('data:image/png;base64,', '')
    // const imageName = `${uniqid.time('icon-')}.png`
    // const imagePath = `${imgDir}/${imageName}`
    // fs.writeFile(imagePath, newBuff, 'base64', err => console.log(err))

    // let imageFullPath = `${req.headers.host}/getIcon/${imageName}`
    // if (!/https?/.test(imageFullPath)) imageFullPath = '//' + imageFullPath
    // res.status(200).send({ path: imageFullPath })
  })

  app.get('/getIcon/:icon', (req, res) => {
    if (imgDir) {
      res.sendFile(path.join(process.cwd(), imgDir, req.params.icon))
      return
    }
    res.sendFile(path.join(__dirname, '../', 'img', req.params.icon))
  })

  app.use('/saveLogo', express.raw({ type: 'image/png', limit: '100kb' }))
  app.post('/saveLogo', (req, res) => {
    const image = `${imgDir}/${uniqid.time('logo-')}.png`

    fs.writeFile(image, req.body, err => console.log(err))

    res.status(200).send({ path: image })
  })

  if (remoteServer) {
    app.get(clientBuildPath + '/gconfig.js', (req, res) => {
      res.type('.js').send(`
        window.G_CONFIG = {
          REACT_APP_SERVER_PATH: "${remoteServer}"
        }
      `)
    })
  }

  const file404Error = (req, res) => res.send(404, '404: File not found')

  app.use(express.static(path.join(__dirname, clientBuildPath)))
  app.use('/static/*', file404Error)
  app.use('/img', express.static(path.join(__dirname, './img')))
  app.use('/img/*', file404Error)
  app.use('/serge/img', express.static(path.join(process.cwd(), imgDir)))
  app.use('/default_img', express.static(path.join(__dirname, './default_img')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, clientBuildPath, 'index.html'))
  })

  const server = app.listen(port, () => {
    onAppStartListeningAddons.forEach(addon => {
      addon.run(app, server)
    })
    // const start = (process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open')
    // require('child_process').exec(start + ' ' + `http://localhost:${port}`)
  })
}

module.exports = runServer
