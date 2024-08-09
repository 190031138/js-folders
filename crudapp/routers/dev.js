const express = require('express');

const router = express.Router();

const dev = require('../models/devdetails');
router.get('/',async(req,res) =>{
    try{
        const developers = await dev.find();
        res.json(developers);
    }
    catch(err){
        res.send('Error '+err);
    }

})

router.get('/:id',async(req,res) =>{
    try{
        const developer = await dev.findById(req.params.id);
        res.json(developer);
    }
    catch(err){
        res.send('Error '+err);
    }
})

router.post('/',async(req,res) =>{
    const developer = new dev({
        name: req.body.name,
        tech: req.body.tech,
        work: req.body.work
    })
    try{
        const a1 = await developer.save();
        res.json(a1);
    }
    catch(err){
        res.statusCode = 403;
        res.send('Error');
    }
})

router.patch('/:id',async(req,res) =>{
    try{
        const developer = await dev.findById(req.params.id);
        developer.work = req.body.work;
        const a1 = await developer.save();
        res.json(a1)
    }
    catch(err){
        res.send('Error '+err);
    }
})

router.delete('/:id',async(req,res) =>{
    try{
        const developer = await dev.findByIdAndDelete(req.params.id);
        const a1 = await developer.save();
        res.json(a1);
    }
    catch(err){
        res.send('Error '+err);
    }
})

module.exports = router;