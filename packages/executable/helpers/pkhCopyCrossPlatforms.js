const find = require('find')
const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')

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
function findAndCopy (file, path, prefix, finalDir, cb) {
  find.file(file, path, (files) => {
    if (files.length) {
      console.log(`${prefix} file "${file}" was founded`)
      console.log(`${prefix} copying to ${finalDir}...`)
      fs.copyFile(files[0], `${finalDir}/${file}`, err => {
        if (err) {
          throw err
        } else {
          console.log(`${prefix} ${file} successfully copied`)
        }
        if (cb) cb()
      })
    } else {
      console.log(`${prefix} file "${file}" not found`)
    }
  })
}

nodeFiles.forEach((nodeFile, idx) => {
  const { name, pathExec, pathSqlNode, fileExec, fileSqlNode } = nodeFile
  const prefix = `[${idx + 1}/${nodeFiles.length}] ${name}:`
  findAndCopy(fileExec, pathExec, prefix, finalDir[idx])
  findAndCopy(fileSqlNode, pathSqlNode, prefix, finalDir[idx], () => {
    rimraf.sync(buildTmpDir)
  })
})
