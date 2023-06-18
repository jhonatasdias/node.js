const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the Middleware!');
    next();
});

app.use((req, res, next) => {
    console.log('In another the Middleware!');
    res.send('<h1>Hello from Express</h1>')
});

const server = http.createServer(app);

server.listen(3000);