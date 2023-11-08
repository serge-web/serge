const fs = require('fs')
const path = require('path')
// fix pouchdb-fauxton errr on pkg build
/*
> Error! Unexpected token (14:0)
  C:\Users\User\Documents\serge\node_modules\pouchdb-fauxton\www\index.html
*/

const file = path.resolve(__dirname, '../../server/node_modules/pouchdb-fauxton/www/index.html')
console.log(`Correction [pouchdb-fauxton]: ${file}`)
fs.writeFile(file, '', 'utf8', err => {
  if (err) return console.log(err)
  else console.log('Correction [pouchdb-fauxton]: success')
})
console.log('')
