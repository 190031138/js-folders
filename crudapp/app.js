const express = require('express');

const mongoose = require('mongoose');

const url = 'mongodb://localhost/Devdb';

const dev = require('./routers/dev');

const http = require('http');

const bodyParser = require('body-parser');

const morgan = require('morgan');

const port = 8080;

const hostname = 'localhost';
//mongoose.connect(url ,{useNewUrlParser:true})
mongoose.connect(url)

const con = mongoose.connection

const app = express()

app.use(express.json());

app.use('/dev',dev);

app.use(morgan('dev'));

app.use(bodyParser.json());

con.on('open',() =>{
    console.log('connecting...');
});

const server = http.createServer(app);

server.listen(port,hostname, ()=>{
    console.log(`server is running on http://${hostname}:${port}`);
});