const express = require('express');
const router = express.Router();
router.route('/')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    console.log("i am handling the function for unknown request and callback activated");
    // res.end('<html><body><h1>Welcome to express application</h1></body></html>');
    next();

})
.get((req,res) =>{
    res.statusCode = 200;
    res.end('<html><body><h1>Get Method is routed</h1></body></html>');

})
.post((req,res) =>{
    res.statusCode = 200;
    res.end('<html><body><h1>Post Method is routed</h1></body></html>');
})

.put((req,res) =>{
    res.statusCode = 200;
    res.end('<html><body><h1>Put Method is routed</h1></body></html>');
})

.delete((re,res) =>{
    res.statusCode = 403;
    res.end('<html><body><h1>Delete Method is routed</h1></body></html>');
});

module.exports = router;