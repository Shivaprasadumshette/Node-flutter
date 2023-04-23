// steps 
// 1. define Schema ->note : id, uderid, title, content, dateadded
// 2. create model: <model name><schema> NOTE

const mongoose = require('mongoose');

const noteschema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    }
});


module.exports = mongoose.model("Note", noteschema);

