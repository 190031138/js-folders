const mongoose = require('mongoose');

const devschema =new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    tech : {
        type: String,
        required: true
    },
    work: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('dev',devschema);