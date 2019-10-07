const server = require("./server");

server(
  82,                                   //event emmiter max listeners
  { prefix: 'db/', adapter: 'websql' }, //PouchDb Options
  {                                     //cors options
    credentials: true,
    origin: [
      'https://serge-dev.herokuapp.com',
      'http://localhost:3000',
      'http://localhost:8080',
      'http://localhost:8000',
    ]
  },
  './db',                               //database directory
  './img',                              //images directory
  process.env.PORT || 8080,             //port
  null,                                 //remote server path
);
