const express = require('express');

const route = require('./routes/route');
const port = 8080;

// const hostname = 'localhost';

const http = require('http');

const app = express();

app.use('/',route);
const server = http.createServer(app);

server.listen(port);