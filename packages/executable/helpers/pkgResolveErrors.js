const fs = require('fs')
const path = require('path')
// fix pouchdb-fauxton errr on pkg build
/*
> Error! Unexpected token (14:0)
  C:\Users\User\Documents\serge\node_modules\pouchdb-fauxton\www\index.html
*/

const file = path.resolve(__dirname, '../../../node_modules/pouchdb-fauxton/www/index.html')
console.log(`error correction [pouchdb-fauxton]: ${file}`)
fs.writeFile(file, '', 'utf8', err => {
  if (err) return console.log(err)
  else console.log('error correction [pouchdb-fauxton]: success')
})
console.log('')
