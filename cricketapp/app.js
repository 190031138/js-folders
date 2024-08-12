const express = require('express');

const mongoose = require('mongoose');

const players = require('./routes/teamhandle')

const url = 'mongodb://localhost/CrickeTeamDb';

mongoose.connect(url);

const con = mongoose.connection;

con.on('open',() =>{
    console.log('db connection successful ...');
});

const app = express();

app.use(express.json());

app.use('/players',players);

app.listen(3000);
