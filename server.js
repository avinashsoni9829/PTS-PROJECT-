// requiring the [port]


const http=require('http');

// require the app file here

const app= require('./app');


const port=process.env.PORT || 3000;

// creating the [server]

const server=http.createServer(app);

// starting the [server]

server.listen(port);
