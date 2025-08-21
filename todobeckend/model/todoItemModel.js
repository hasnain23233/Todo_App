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
    timestamp: true
})

module.exports = mongoose.model("todoItem", todoItemSchema)