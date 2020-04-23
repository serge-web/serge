var Service = require('node-windows').Service
var path = require('path')

// Create a new service object
var svc = new Service({
  name: 'Serge Wargame',
  description: 'The Serge wargame server.',
  script: path.resolve(__dirname, '/server.js')
})

// Listen for the 'uninstall' event so we know when it is done.
svc.on('uninstall', function () {
  console.log('Uninstall complete.')
  console.log('The service exists: ', svc.exists)
})

// Uninstall the service.
svc.uninstall()
