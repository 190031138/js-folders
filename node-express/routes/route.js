const express = require('express');

const router = express.Router();

router.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end('it is routed in the get method');
})

.post((req, res) => {
    res.statusCode = 200;
    res.end('Will add the new one: ' + req.body.name + ' with details: ' + req.body.description);
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('This operation is not possible');
})

.delete((req, res) => {
    res.end('Deleting all the items from the database');
});

module.exports = router;