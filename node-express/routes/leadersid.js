const express = require('express');

const router = express.Router();

router.route('/leader/:leaderid')

.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res) =>{
    res.statusCode = 200;
    res.end("handled the get leadersid method");
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

modules.export = router;