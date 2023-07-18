const info = require('./info')
const ip = require('ip')

const runStaticQuote = (app, server) => {
  console.log(`App is listening on ${ip.address()}:${server.address().port}`)
}

module.exports = {
  run: runStaticQuote,
  info
}
