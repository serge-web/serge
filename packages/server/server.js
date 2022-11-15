const runServer = (
  pouchOptions,
  corsOptions,
  imgDir,
  dataDir,
  port,
  remoteServer,
  onAppInitListeningAddons,
  onAppStartListeningAddons
) => {
  const express = require('express')
  const bodyParser = require('body-parser')
  const path = require('path')
  const uniqid = require('uniqid')
  const archiver = require('archiver')

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
  const cors = require('cors')
  const app = express()
  const { Server } = require('socket.io')
  const http = require('http').createServer(app)

  let { COUCH_ACCOUNT, COUCH_URL, COUCH_PASSWORD } = process.env

  if (!COUCH_ACCOUNT || !COUCH_URL || !COUCH_PASSWORD) {
    require('dotenv').config()
    COUCH_ACCOUNT = process.env.COUCH_ACCOUNT
    COUCH_URL = process.env.COUCH_URL
    COUCH_PASSWORD = process.env.COUCH_PASSWORD
  }

  // note: use use the presence of `process.env.PORT` as an
  // note: indicator that we're running on Heroku
  const io = new Server(process.env.PORT ? http : 4000, { cors: { origin: '*' } })

  // workaround to allow large documents to be saved
  app.use(bodyParser.json({ limit: '200mb' }))
  app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }))

  const clientBuildPath = '../client/build'

  // log of time of receipt of player heartbeat messages

  app.use(cors(corsOptions))

  app.get('/downloadAll', (req, res) => {
    const output = fs.createWriteStream('all_dbs.zip')
    const archive = archiver('zip')

    archive.pipe(output)

    archive.directory(path.join(__dirname, 'db'), false)

    archive.finalize()

    setTimeout(() => res.download(path.join(__dirname, 'all_dbs.zip')), 500)
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

  app.get('/cells/:filename', (req, res) => {
    if (dataDir) {
      return res.sendFile(
        path.join(process.cwd(), dataDir, req.params.filename)
      )
    }
    res.sendFile(path.join(__dirname, '../', 'data', req.params.filename))
  })

  app.use(
    '/saveIcon',
    express.raw({ type: ['image/png', 'image/svg+xml'], limit: '20kb' })
  )
  app.post('/saveIcon', (req, res) => {
    const imageName = `${uniqid.time('icon-')}.${
      req.headers['content-type'] === 'image/svg+xml' ? 'svg' : 'png'
    }`
    const image = `${imgDir}/${imageName}`
    let imagePath = `${req.headers.host}/getIcon/${imageName}`
    if (!/https?/.test(imagePath)) imagePath = '//' + imagePath
    fs.writeFile(image, req.body, err => console.log(err))

    res.status(200).send({ path: imagePath })
  })

  app.get('/getIcon/:icon', (req, res) => {
    if (imgDir) {
      res.sendFile(path.join(process.cwd(), imgDir, req.params.icon))
      return
    }
    res.sendFile(path.join(__dirname, '../', 'img', req.params.icon))
  })

  app.use('/saveLogo', express.raw({ type: ['image/png', 'image/svg+xml'], limit: '100kb' }))
  app.post('/saveLogo', (req, res) => {
    const imagePath = `${imgDir}/${uniqid.time('logo-')}.${req.headers['content-type'] === 'image/svg+xml' ? 'svg' : 'png'}`
    fs.writeFile(imagePath, req.body, err => console.log(err))
    res.status(200).send({ path: imagePath })
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

  if (COUCH_ACCOUNT && COUCH_URL && COUCH_PASSWORD) {
    const couchDb = require('./providers/couchdb')
    couchDb(app, io, pouchOptions)
  } else {
    const pouchDb = require('./providers/pouchdb')
    pouchDb(app, io, pouchOptions)
  }

  onAppInitListeningAddons.forEach(addon => {
    addon.run(app)
  })

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, clientBuildPath, 'index.html'))
  })

  const server = http.listen(port, () => {
    onAppStartListeningAddons.forEach(addon => {
      addon.run(app, server)
    })
    const start =
      process.platform === 'darwin'
        ? 'open'
        : process.platform === 'win32'
          ? 'start'
          : 'xdg-open'
    require('child_process').exec(start + ' ' + `http://localhost:${port}`)
  })
}

module.exports = runServer
