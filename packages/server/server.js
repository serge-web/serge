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

  const fs = require('fs')

  onAppInitListeningAddons.forEach(addon => {
    addon.run(app)
  })

  require('pouchdb-all-dbs')(PouchDB)
  const cors = require('cors')
  const app = express()

  const clientBuildPath = '../client/build'

  app.use(cors(corsOptions))
  app.use('/db', require('express-pouchdb')(PouchDB))

  app.get('/allDbs', (req, res) => {
    PouchDB.allDbs().then(dbs => {
      res.send(dbs)
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

  app.use('/saveIcon', bodyParser.raw({ type: 'image/png', limit: '20kb' }))
  app.post('/saveIcon', (req, res) => {
    const image = `${imgDir}/${uniqid.time('icon-')}.png`

    fs.writeFile(image, req.body, err => console.log(err))

    res.status(200).send({ path: image })
  })

  app.use('/saveLogo', bodyParser.raw({ type: 'image/png', limit: '100kb' }))
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

  app.use(express.static(path.join(__dirname, clientBuildPath)))
  app.use('/img', express.static(path.join(__dirname, './img')))
  app.use('/default_img', express.static(path.join(__dirname, './default_img')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, clientBuildPath, 'index.html'))
  })

  const server = app.listen(port, () => {
    onAppStartListeningAddons.forEach(addon => {
      addon.run(app, server)
    })
    const start = (process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open')
    require('child_process').exec(start + ' ' + `http://localhost:${port}`)
  })
}

module.exports = runServer
