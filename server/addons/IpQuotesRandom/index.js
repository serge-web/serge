const info = require('./info')
const quotes = require('./quotes')
const ip = require('ip')

const runRandomQuotes = (app, server) => {
  const address = `${ip.address()}:${server.address().port}`
  const quote = quotes[Math.floor(Math.random() * quotes.length)]
  console.log(quote.replace(/\$address\$/g, address))
}

module.exports = {
  run: runRandomQuotes,
  info
}
