const http = require('http');
const routes = require('./router');

console.log(routes.someText)

const server = http.createServer(routes.handles);

server.listen(3000);