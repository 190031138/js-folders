const express = require('express');
const http = require('http');
const port = 8080;

const hostname = 'localhost';

const app = express();

app.use((req,res,next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Welcome to my express server</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port,hostname, () =>{
    console.log(`server is running at http://${hostname}:${port}`);
});