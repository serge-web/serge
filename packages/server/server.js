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
  const io = new Server(4000, { cors: { origin: '*' } })

  app.use(express.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  const clientBuildPath = '../client/build'

  // log of time of receipt of player heartbeat messages
  const playerLog = []

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

  app.get('/healthcheck/:wargame/:role/:activityTime/:activityType/:healthcheck', (req, res) => {
    const { wargame, role } = req.params
    const activityTime = req.params.activityTime.replace(/[+]/g, ' ')
    const activityType = req.params.activityType.replace(/[+]/g, ' ')

    if (wargame !== 'missing' && role !== 'missing') {
      const existingPlayerIdx = playerLog.findIndex(
        player => player.role === role && player.wargame === wargame
      )
      if (existingPlayerIdx !== -1) {
        playerLog[existingPlayerIdx].activityTime = activityTime
        playerLog[existingPlayerIdx].activityType = activityType
      } else {
        const newPlayer = {
          wargame,
          role,
          activityType,
          activityTime
        }
        playerLog.push(newPlayer)
      }
    }

    return res.status(200).send({
      status: 'OK',
      activityType: activityType,
      mostRecentActivity: activityTime,
      wargame: wargame,
      role: role
    })
  })

  app.get('/playerlog', (_, res) => {
    res.status(200).send(playerLog)
  })

  app.get('/playerlog/:wargame', (req, res) => {
    const wargame = req.params.wargame
    const selectedWargame = playerLog.find(log => log.wargame === wargame) || {}
    res.status(200).send(selectedWargame)
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

  const POUCH_DB = 'POUCH_DB'
  const IBM_DB = 'IBM_DB'

  const providerInterface = (provider = '') => {
    if (provider === IBM_DB) {
      const ibmDb = require('./providers/ibmdb')
      ibmDb(app, io)
    } else if (provider === POUCH_DB) {
      const pouchDb = require('./providers/pouchdb')
      pouchDb(app, io, pouchOptions)
    }
  }

  providerInterface(IBM_DB)

  onAppInitListeningAddons.forEach(addon => {
    addon.run(app)
  })

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, clientBuildPath, 'index.html'))
  })

  const server = app.listen(port, () => {
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
