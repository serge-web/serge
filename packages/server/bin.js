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

const dbPath = path.join(__dirname, 'db')
fs.readdir(dbPath, (err, dbs) => {
  if (err) {
    throw err
  }
  dbs.forEach(dbFile => {
    const dbData = fs.readFileSync(`${dbPath}/${dbFile}`)
    fs.writeFileSync(`${process.cwd()}/serge/db/${dbFile}`, dbData)
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

server(
  82, // event emmiter max listeners
  { prefix: 'serge/db/', adapter: 'websql' }, // PouchDb Options
  {
    // cors options
    credentials: true,
    origin: [
      'https://serge-dev.herokuapp.com',
      'http://localhost:3000',
      'http://localhost:8080',
      'http://localhost:8000'
    ]
  },
  dbDir, // database directory
  imgDir, // images directory
  process.env.PORT || 8080, // port
  remoteServer, // remote server path
  onAppInitListeningAddons,
  onAppStartListeningAddons
)
