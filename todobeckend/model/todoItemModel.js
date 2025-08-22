const mongoose = require('mongoose')

const todoItemSchema = mongoose.Schema({
    task: {
        type: String,
        require: true
    },
    date: Date,
    complete: {
        type: Boolean,
        default: false
    },
    timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model("todoItem", todoItemSchema) 