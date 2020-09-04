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



const updateSchema = new mongoose.Schema({
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
        required: true,
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
    createdOn: {
        type: Date,
        'default': Date.now
    }
});

// const locationSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     address: String,
//     phone: String,
//     rating: {
//         type: Number,
//         'default': 1,
//         min: 1,
//         max: 5
//     },
//     facilities: [String],
//     coords: {
//         type: { type: String },
//         coordinates: [Number]
//     },
//     openingTimes: [openingTimeSchema],
//     reviews: [reviewSchema]
// });

mongoose.model('Result', resultSchema);