const mongoose = require('mongoose')

const todoItemSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    date: Date,
}, { timestamps: true });

module.exports = mongoose.model("todoItem", todoItemSchema)