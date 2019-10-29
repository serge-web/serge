const find = require('find');
const fs = require('fs');

const nodeFiles = [
  {
    name: "sqllite",
    path: __dirname + "/../../../node_modules/sqlite3/lib/binding",
    file: "node_sqlite3.node"
  }
];

const pkgServerPath = __dirname + "/../builds";

console.log("Copy node files...");

let start = 1;

for(let {name, path, file} of nodeFiles) {
  let prefix = `[${start}/${nodeFiles.length}] ${name}:`;
  start ++;
  console.log(`${prefix} searching "${file}" file in directory ${path}...`);
  find.file(file, path, function(files) {
    if(files.length) {
      console.log(`${prefix} file "${file}" was founded`);
      console.log(`${prefix} copying to ${pkgServerPath}...`);
      fs.copyFile(files[0], `${pkgServerPath}/${file}`, (err) => {
        if(err) {
          console.log(`${prefix} copying failed`);
          console.log(err);
        }
        else {
          console.log(`${prefix} ${file} successfully copied`);
        }
      });
    }
    else {
      console.log(`${prefix} file "${file}" not found`);
    }
  })
}
