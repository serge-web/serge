const fs = require("fs");
const path = require("path");

fs.copyFile(
  path.resolve(__dirname, "sass-watcher"),
  path.resolve(__dirname, "../node_modules/.bin/sass-watcher"),
  err => {
    if (err) throw err;
    console.log("Done");
  }
);
