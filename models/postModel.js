const mongoose = require('mongoose');

const post = new mongoose.Schema({
    title:
        {type: String,
         required: true
        },
    description:
        {type: String,
         required: true
        },
    date: Date
})

module.exports = mongoose.model('Post', post);