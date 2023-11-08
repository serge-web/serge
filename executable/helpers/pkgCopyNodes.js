const find = require('find')
const fs = require('fs')
const path = require('path')

const nodeFiles = [
  {
    name: 'sqllite',
    path: path.resolve(__dirname, '../../server/node_modules/sqlite3/lib/binding'),
    file: 'node_sqlite3.node'
  }
]

const pkgServerPath = path.resolve(__dirname, '../build')

console.log('Copy node files...')

let start = 1

for (const { name, path, file } of nodeFiles) {
  const prefix = `[${start}/${nodeFiles.length}] ${name}:`
  start++
  console.log(`${prefix} searching "${file}" file in directory ${path}...`)
  find.file(file, path, function (files) {
    if (files.length) {
      console.log(`${prefix} file "${file}" was founded`)
      console.log(`${prefix} copying to ${pkgServerPath}...`)
      fs.copyFile(files[0], `${pkgServerPath}/${file}`, err => {
        if (err) {
          console.log(`${prefix} copying failed`)
          console.log(err)
        } else {
          console.log(`${prefix} ${file} successfully copied`)
        }
      })
    } else {
      console.log(`${prefix} file "${file}" not found`)
    }
  })
}
