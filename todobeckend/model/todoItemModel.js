const mongoose = require('mongoose')

const todoItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: Date,
}, { timestamps: true });

module.exports = mongoose.model("todoItem", todoItemSchema)