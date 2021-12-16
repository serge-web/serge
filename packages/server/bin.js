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
const dataDir = './serge/data/'
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

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir)
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

const copyFileSync = (source, target) => {
  let targetFile = target

  // If target is a directory, a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source))
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source))
}

const ravenDbPath = path.join(__dirname, 'localDbs')

const copyFolderRecursiveSync = (source, target) => {
  let files = []

  // Check if folder needs to be created or integrated
  const targetFolder = path.join(target, path.basename(source))
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder)
  }
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source)
    files.forEach((file) => {
      const curSource = path.join(source, file)
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder)
      } else {
        copyFileSync(curSource, targetFolder)
      }
    })
  }
}

const arch = require('os').arch()

if (arch === 'x64' || arch === 'x86') {
  copyFolderRecursiveSync(ravenDbPath, root)
}

const dataPath = path.join(__dirname, '..', 'data')
fs.readdir(dataPath, (err, data) => {
  if (err) {
    throw err
  }
  data.forEach(json => {
    if (json === 'package.json') {
      return
    }
    extract(`${dataPath}/${json}`, `${dataDir}/${json}`)
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
    dataDir,
    process.env.PORT || 8080, // port
    remoteServer, // remote server path
    onAppInitListeningAddons,
    onAppStartListeningAddons
  )
}, 500) // 500ms delay, to let data folders fully unpack
