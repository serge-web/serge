var Service = require('node-windows').Service
var path = require('path')

// Create a new service object
var svc = new Service({
  name: 'Serge Wargame',
  description: 'The Serge wargame server.',
  script: path.resolve(__dirname, '/server.js')
})

// Listen for the 'install' event, which indicates the
// process is available as a service.
svc.on('install', function () {
  svc.start()
})

// install the service
svc.install()
