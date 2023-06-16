const http = require('http');
const routes = require('./router');

console.log(routes.someText)

const server = http.createServer(routes.handler);

server.listen(3000);