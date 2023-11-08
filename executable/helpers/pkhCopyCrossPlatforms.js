const find = require('find')
const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const archiver = require('archiver')

const buildTmpDir = path.resolve(process.cwd(), 'build-temp')
const sqlite3NodeDir = path.resolve(process.cwd(), 'sqlite3.nodes')

/**
 * define the exec file and sqlite3.node information
 */
const nodeFiles = [
  {
    name: 'executable-linux',
    pathExec: buildTmpDir,
    pathSqlNode: `${sqlite3NodeDir}/linux`,
    fileExec: 'executable-linux',
    fileSqlNode: 'node_sqlite3.node'
  },
  {
    name: 'executable-macos',
    pathExec: buildTmpDir,
    pathSqlNode: `${sqlite3NodeDir}/mac`,
    fileExec: 'executable-macos',
    fileSqlNode: 'node_sqlite3.node'
  },
  {
    name: 'executable-win',
    pathExec: buildTmpDir,
    pathSqlNode: `${sqlite3NodeDir}/win`,
    fileExec: 'executable-win.exe',
    fileSqlNode: 'node_sqlite3.node'
  }
]

const buildDir = path.resolve(process.cwd(), 'builds')
const finalDir = [`${buildDir}/linux`, `${buildDir}/macos`, `${buildDir}/win`]

/**
 * remove the old one
 */
if (fs.existsSync(buildDir)) {
  console.log('Clean the old build directory')
  rimraf.sync(buildDir)
}

/**
 * create the new one
 */
if (!fs.existsSync(buildDir)) {
  console.log('Create new build directory')
  fs.mkdirSync(buildDir)
  finalDir.forEach(dir => fs.mkdirSync(dir))
}

/**
 * find exec and sqlite3.node file then copy to build
 * @param {*} file
 * @param {*} path
 * @param {*} prefix
 * @param {*} finalDir
 * @param {*} cb
 */
const findAndCopy = async (file, path, prefix, finalDir) => {
  return new Promise((resolve, reject) => {
    find.file(file, path, (files) => {
      if (files.length) {
        console.log(`${prefix} file "${file}" was founded`)
        console.log(`${prefix} copying to ${finalDir}...`)
        fs.copyFile(files[0], `${finalDir}/${file}`, err => {
          if (err) {
            reject(err)
          } else {
            console.log(`${prefix} ${file} successfully copied`)
            resolve()
          }
        })
      } else {
        console.log(`${prefix} file "${file}" not found`)
        reject(Error('File not found'))
      }
    })
  })
}

const promises = nodeFiles.map(async (nodeFile, idx) => {
  const { name, pathExec, pathSqlNode, fileExec, fileSqlNode } = nodeFile
  const prefix = `[${idx + 1}/${nodeFiles.length}] ${name}:`
  await findAndCopy(fileExec, pathExec, prefix, finalDir[idx])
  await findAndCopy(fileSqlNode, pathSqlNode, prefix, finalDir[idx])
})

Promise.all(promises).then(() => {
  rimraf.sync(buildTmpDir)
  finalDir.forEach(async dir => {
    const zipPath = path.join(__dirname, '..', 'builds')
    let outputPath = `${zipPath}/SERGE_${getDate()}`
    if (dir.indexOf('linux') !== -1) {
      outputPath += '_linux.zip'
    } else if (dir.indexOf('macos') !== -1) {
      outputPath += '_macos.zip'
    } else {
      outputPath += '_win64.zip'
    }
    await zipDirectory(dir, outputPath)
    rimraf.sync(dir)
  })
}, err => {
  console.log(err)
})

/**
 * get date format yyyyddmm
 * @returns string
 */
function getDate () {
  const d = new Date()
  const yyyy = d.getFullYear()
  const month = d.getMonth() + 1
  const mm = month < 10 ? `0${month}` : month
  const date = d.getDate()
  const dd = date < 10 ? `0${date}` : date
  return `${yyyy}${mm}${dd}`
}
/**
 * @param {String} source
 * @param {String} out
 * @returns {Promise}
 */
function zipDirectory (source, out) {
  const archive = archiver('zip', { zlib: { level: 9 } })
  const stream = fs.createWriteStream(out)

  return new Promise((resolve, reject) => {
    archive
      .directory(source, false)
      .on('error', err => reject(err))
      .pipe(stream)

    stream.on('close', () => resolve())
    archive.finalize()
  })
}
