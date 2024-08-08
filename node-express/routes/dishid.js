const express = require('express')

const router = express.Router()
router.route('/dishes/:dishId')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Handling /dishes/:dishId end point');
})
.get((req, res) => {
    res.end('Will send the details of the dish with ID: ' + req.params.dishId);
})

.post((req, res) => {
    res.statusCode = 403;
    res.end('This operation is not supported in the current version');
})

.put((req, res) => {
    res.statusCode = 200;
    res.end('Will update the dish with ID: ' + req.params.dishId + ' to name: ' + req.body.name + ' and description: ' + req.body.description);
})

.delete((req, res) => {
    res.statusCode = 200;
    res.end('Will delete the dish with ID: ' + req.params.dishId);
});

module.exports = router;