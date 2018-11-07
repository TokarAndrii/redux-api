const mongoose = require('mongoose')


const ArticlesSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    imageUrl: {
        type: String,
        require: true,
    },

    author: {
        type: String,
        min: 18, max: 65,
    },
    datePublish: {
        type: Date,
        default: Date.now,
    },

    text: {
        type: String,
        require: true,
    },

    comments: String,
})

module.exports = mongoose.model("articles",ArticlesSchema);