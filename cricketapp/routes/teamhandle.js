const express = require('express');

const router = express.Router();

const cteam = require('../models/team.js');

//Sending all the data from DB
router.all('/',(req,res,next) =>{
    res.setHeader('Content-Type','html/json');
    next();
})

router.get('/',async(req,res) =>{
    try{
        
        res.statusCode = 200;

        const cricketers = await cteam.find();
        res.json(cricketers);
    }
    catch(err){
        res.statusCode = 400;
        res.send('Error Occured '+err);
    }
})


//sending particular object id from Db
router.get('/:id',async(req,res) =>{
    try{
        const cricketer = await cteam.findbyid(req.params.id);
        res.json(cricketer);
        res.statusCode = 200;
    }
    catch(err){
        res.statusCode = 400;
        res.send('Error '+err);
    }

})

//posting data to Db
router.post('/',async(req,res) =>{
    try{
        const cricketer = new cteam({
            player_id: req.body.player_id,
            player_name: req.body.player_name,
            jersey_number: req.body.jersey_number,
            role: req.body.role

        });
        if(!cteam.find(req.body.player_id) && !cteam.find(req.body.jersey_number)){
            const c1 = await cricketer.save();
            res.json(c1);
            res.statusCode = 200;
        }
        else{
            res.send("Already Present!");
            res.statusCode = 403;
        }

        
    }
    catch(err){
        res.statusCode = 405;
        res.send('Error '+err);
    }
})
module.exports = router;