const express = require('express');

const router = express.Router();

router.route('/promotions')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    next();
})
.get((req,res) =>{
    res.statusCode = 200;
    res.end("handled the get promotions method");
})
.post((req,res) =>{
    res.statusCode = 200;
    res.end("Handled the post method");
})
.put((req,res) =>{
    res.statusCode = 200;
    res.end("Handled Put method");
})
.delete((req,res) =>{
    res.statusCode = 403;
    res.end("This method is not supported in this version of this application");
});

module.exports = router;