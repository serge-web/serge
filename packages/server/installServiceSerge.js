var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name: 'Serge Wargame',
  description: 'The Serge wargame server.',
  script: __dirname + '/server.js'
});

// Listen for the 'install' event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

// install the service
svc.install();
