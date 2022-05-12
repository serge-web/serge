const fs = require("fs");
const path = require("path");

let srcFile = "sass-watcher-macos";
let targetFile = "../node_modules/.bin/sass-watcher";

if (process.platform === "linux") {
  srcFile = "sass-watcher-linux";
} else if (process.platform === "win32") {
  srcFile = "sass-watcher-win.exe";
  targetFile = "../node_modules/.bin/sass-watcher.exe";
}

fs.copyFile(
  path.resolve(__dirname, srcFile),
  path.resolve(__dirname, targetFile),
  err => {
    if (err) throw err;
    console.log("Done");
  }
);
