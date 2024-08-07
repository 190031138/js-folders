const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser'); // Use body-parser middleware

const hostname = 'localhost';
const port = 8080;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Welcome to my express server</h1></body></html>');
});

app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/dishes', (req, res) => {
    res.end('it is routed in the get method');
});

app.post('/dishes', (req, res) => {
    res.statusCode = 200;
    res.end('Will add the new one: ' + req.body.name + ' with details: ' + req.body.description);
});

app.put('/dishes', (req, res) => {
    res.statusCode = 403;
    res.end('This operation is not possible');
});

app.delete('/dishes', (req, res) => {
    res.end('Deleting all the items from the database');
});

app.get('/dishes/:dishId', (req, res) => {
    res.end('Will send the details of the dish with ID: ' + req.params.dishId);
});

app.post('/dishes/:dishId', (req, res) => {
    res.statusCode = 403;
    res.end('This operation is not supported in the current version');
});

app.put('/dishes/:dishId', (req, res) => {
    res.statusCode = 200;
    res.end('Will update the dish with ID: ' + req.params.dishId + ' to name: ' + req.body.name + ' and description: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req, res) => {
    res.statusCode = 200;
    res.end('Will delete the dish with ID: ' + req.params.dishId);
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});
