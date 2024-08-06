const express = require('express');
const http = require('http');
const port = 8080;
const morgan = require('morgan');
const hostname = 'localhost';
const bodyparse = require('body-parser');

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));
app.use((req,res,next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Welcome to my express server</h1></body></html>');
});

app.all('/dishes',(req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    // next();
});
app.get('/dishes',(req,res) => {
    res.end('it is routed in the get method');
});

app.post('/dishes',(req,res,next) =>{
    res.statusCode = 403;
    res.end('will add the newone '+req.body.name+' in the database '+req.body.description);

});
app.put('/dishes',(req,res,next) =>{
    res.status = 403; //not possible
    res.end('This operation is not possible');

});
app.delete('/dishes',(req,res,next) =>{
    res.end('Deleting all the items from database');
});

app.get('/dishes/:dishId',(req,res,next) =>{
    res.end('will send the details of the '+req.body.name+' with details '+ req.body.description);

});
app.post('/dishes/:dishId',(req,res,next) =>{
    res.end('this is option is not supported in current version');
});
app.put('/dishes/:dishId',(req,res,next) =>{
    res.end('will update the existing '+req.body.name+' to the'+ req.body.description);
});

app.delete('/dishes/:dishId',(req,res,next) =>{
    res.end('Will delete the object '+res.body.name+' with '+res.bosy.description);
})
const server = http.createServer(app);
server.listen(port,hostname, () =>{
    console.log(`server is running at http://${hostname}:${port}`);
});