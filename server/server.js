const runServer = (
  pouchOptions,
  corsOptions,
  imgDir,
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
  const { dbSuffix } = require('./consts')
  const setupSwagger = require('./swagger')

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

  // Note: This API call will help you download the wargame SQLite database.
  // Note: This route handles the download of a wargame database in zip format.
  // Note: It expects a URL parameter 'wargame', which is the name of the SQLite file to download.
  // Example route with Swagger JSDoc comment
  /**
   * @swagger
   * /download/{wargame}:
   *   get:
   *     summary: Download wargame database
   *     description: Downloads a wargame database in zip format
   *     parameters:
   *       - in: path
   *         name: wargame
   *         required: true
   *         schema:
   *           type: string
   *         description: Name of the SQLite file to download
   *     responses:
   *       200:
   *         description: A successful response
   *         content:
   *           application/zip:
   *             schema:
   *               type: string
   *               format: binary
   */
  app.get('/download/:wargame', function (req, res) {
    const checkSqliteExists = (dbName) => {
      return dbName.indexOf('wargame') !== -1 && dbName.indexOf(dbSuffix) === -1 ? dbName + dbSuffix : dbName
    }

    const databaseName = checkSqliteExists(req.params.wargame)

    const zipName = databaseName + '.zip' // name of the zip file
    const dbPath = path.join(__dirname, 'db/' + databaseName) // path to the SQLite file

    // create a new zip archive
    const archive = archiver('zip', {
      zlib: { level: 9 } // set compression level
    })

    // add the SQLite file to the archive
    archive.file(dbPath, { name: databaseName })

    // set the response headers
    res.attachment(zipName)
    res.setHeader('Content-Type', 'application/zip')

    // stream the archive as the response
    archive.pipe(res)

    // finalize the archive
    archive.finalize()
  })

  /**
   * @swagger
   * /downloadAll:
   *   get:
   *     summary: Download all databases
   *     description: Downloads all databases in a zip format
   *     responses:
   *       200:
   *         description: A successful response
   *         content:
   *           application/zip:
   *             schema:
   *               type: string
   *               format: binary
   */
  app.get('/downloadAll', (req, res) => {
    const output = fs.createWriteStream('all_dbs.zip')
    const archive = archiver('zip')

    archive.pipe(output)

    archive.directory(path.join(__dirname, 'db'), false)

    archive.finalize()

    setTimeout(() => res.download(path.join(__dirname, 'all_dbs.zip')), 500)
  })

  /**
   * @swagger
   * /deleteDb:
   *   get:
   *     summary: Delete a database
   *     description: Deletes a database specified by the query parameter
   *     parameters:
   *       - in: query
   *         name: db
   *         required: true
   *         schema:
   *           type: string
   *         description: Name of the database to delete
   *     responses:
   *       200:
   *         description: A successful response
   *       500:
   *         description: An error occurred
   */
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

  /**
   * @swagger
   * /getIp:
   *   get:
   *     summary: Get IP address
   *     description: Returns the IP address of the request
   *     responses:
   *       200:
   *         description: A successful response
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 ip:
   *                   type: string
   */
  app.get('/getIp', (req, res) => {
    res.status(200).send({ ip: req.ip })
  })

  /**
   * @swagger
   * /tiles/{folder}/{z}/{y}/{x}:
   *   get:
   *     summary: Get tile image
   *     description: Returns a tile image based on the specified folder and coordinates
   *     parameters:
   *       - in: path
   *         name: folder
   *         required: true
   *         schema:
   *           type: string
   *         description: Folder name
   *       - in: path
   *         name: z
   *         required: true
   *         schema:
   *           type: string
   *         description: Z coordinate
   *       - in: path
   *         name: y
   *         required: true
   *         schema:
   *           type: string
   *         description: Y coordinate
   *       - in: path
   *         name: x
   *         required: true
   *         schema:
   *           type: string
   *         description: X coordinate
   *     responses:
   *       200:
   *         description: A successful response
   *         content:
   *           image/png:
   *             schema:
   *               type: string
   *               format: binary
   *           image/svg+xml:
   *             schema:
   *               type: string
   *               format: binary
   */
  app.get('/tiles/:folder/:z/:y/:x', (req, res) => {
    const { folder, z, y, x } = req.params

    const filePath = path.join(__dirname, '../', 'data', folder, z, y, x)

    res.sendFile(filePath)
  })

  app.use(
    '/saveIcon',
    express.raw({ type: ['image/png', 'image/svg+xml'], limit: '20kb' })
  )

  /**
 * @swagger
 * /saveIcon:
 *   post:
 *     summary: Save icon
 *     description: Uploads an icon image (PNG or SVG) and saves it to the server.
 *     requestBody:
 *       required: true
 *       content:
 *         image/png:
 *           schema:
 *             type: string
 *             format: binary
 *         image/svg+xml:
 *           schema:
 *             type: string
 *             format: binary
 *     responses:
 *       200:
 *         description: Successfully uploaded and saved the icon.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 path:
 *                   type: string
 *                   description: URL path to access the saved icon.
 */
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

  // serge/server.js
  /**
 * @swagger
 * /getIcon/{icon}:
 *   get:
 *     summary: Get icon
 *     description: Retrieves an icon image by its filename.
 *     parameters:
 *       - in: path
 *         name: icon
 *         required: true
 *         schema:
 *           type: string
 *         description: Filename of the icon to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved the icon.
 *         content:
 *           image/png:
 *             schema:
 *               type: string
 *               format: binary
 *           image/svg+xml:
 *             schema:
 *               type: string
 *               format: binary
 */
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
  setupSwagger(app)
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

    const openApi = process.argv.includes('--openapi')
    const startUrl = openApi ? `http://localhost:${port}/api-docs` : `http://localhost:${port}`
    const start =
      process.platform === 'darwin'
        ? 'open'
        : process.platform === 'win32'
          ? 'start'
          : 'xdg-open'
    require('child_process').exec(start + ' ' + startUrl)
  })
}

module.exports = runServer
