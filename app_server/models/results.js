const mongoose = require('mongoose');
const resultSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },    
    edition: String,
    author: [String],
    publisher: String,
    isbn: {
        type: Number,
        required: true,
        min: 10,
        max: 13
    },    
    updates: {
        type: Number,
        'default': 0
    }
});