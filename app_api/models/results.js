const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({
    updateCount:{
        type: Number,
        'default': 0
    },
    chapter: {
        type: String,
        required: true
    },
    updater: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        // required: true,
        min: 0,
        max: 5
    },
    section: {
        type: String,
        required: true,
    },
    updateText: {
        type: String,
        required: true
    },
    update: {
        type: String,
        required: true
    },
    createOn : {
        type: Date,
        'default': Date.now
    }
});

const resultSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true
    },    
    edition: String,
    author: [String],
    publisher: String,
    isbn: {  // will do isbn length validation in agular 
        type: String,
        // required: true
    },  
    lastUpdate: String,
    updateCount: Number,
    updates: [updateSchema]
});


mongoose.model('Result', resultSchema);
// mongoose.model('Update', updateSchema);