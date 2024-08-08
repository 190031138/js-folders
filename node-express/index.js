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

const router = require('./routes/route');
const dishid = require('./routes/dishid');
const promotion = require('./routes/promotion');
const promotionid = require('./routes/promotionid');
const leaders = require('./routes/leaders');
const leadersid = require('./routes/leadersid');
// app.use((req, res, next) => {
//     console.log(req.headers);
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<html><body><h1>Welcome to my express server</h1></body></html>');
// });
app.use('/dishes',router);

app.use('/dishes/:dishId',dishid);

app.use('/leaders',leaders);

app.use('/leaders/:leadersId',leadersid)

app.use('/promotion',promotion);

app.use('/promotion/:promotionId',promotionid);

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});
