const server = require('./server')
const path = require('path')

if (process.argv[2]) {
  console.log(`running client with remote server "${process.argv[2]}"`)
} else {
  console.log('running client with local server')
  console.log('(You can give the second parameter as the remote server URL)')
}

const fs = require('fs')

const root = './serge/'
const dbDir = './serge/db/'
const imgDir = './serge/img/'
const remoteServer = process.argv[2] || null

if (!fs.existsSync(root)) {
  fs.mkdirSync(root)
}

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir)
}

if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir)
}

const extract = (src, dest) => {
  if (!fs.existsSync(dest)) {
    const dbData = fs.readFileSync(src)
    fs.writeFileSync(dest, dbData)
  }
}

const dbPath = path.join(__dirname, 'db')
fs.readdir(dbPath, (err, dbs) => {
  if (err) {
    throw err
  }
  dbs.forEach(dbFile => {
    extract(`${dbPath}/${dbFile}`, `${dbDir}/${dbFile}`)
  })
})

const onAppInitListeningAddons = []
const onAppStartListeningAddons = []

const ipQuotesRandom = require('./addons/IpQuotesRandom')
initAddOnEvent(ipQuotesRandom)

function initAddOnEvent (addon) {
  switch (addon.info.on) {
    case 'app-start-listening':
      onAppStartListeningAddons.push(addon)
      break
    default:
      onAppInitListeningAddons.push(addon)
  }
}

setTimeout(() => {
  server(
    { prefix: 'serge/db/', adapter: 'websql' }, // PouchDb Options
    {
      // cors options
      credentials: true,
      origin: [
        'https://serge-dev.herokuapp.com',
        'http://localhost:3000',
        'http://localhost:8080',
        'http://localhost:8000',
        'http://localhost:6611'
      ]
    },
    imgDir, // images directory
    process.env.PORT || 8080, // port
    remoteServer, // remote server path
    onAppInitListeningAddons,
    onAppStartListeningAddons
  )
}, 500) // 500ms delay, to let data folders fully unpack
