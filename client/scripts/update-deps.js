/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, '../build/index.html')
let index = fs.readFileSync(filePath, 'utf-8')
index = index.replace('</head>', '\t<link rel="stylesheet" href="/leaflet/ruler/leaflet.ruler.css" />\n</head>').replace("<div id='root'></div>", '<script type="module" src="/leaflet/ruler/leaflet.ruler.js"></script>\n\t<div id="root"></div>')
fs.writeFileSync(filePath, index)
