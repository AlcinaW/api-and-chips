const mongoose = require('mongoose');

//create schema, how the post/data looks

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//data will show in database, give it a name and a post schema
module.exports = mongoose.model('Posts', PostSchema);