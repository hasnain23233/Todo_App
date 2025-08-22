const mongoose = require('mongoose')

const todoItemSchema = new mongoose.Schema({
    task: { type: String, required: true },
    date: Date,
    completed: { type: Boolean, default: true } // ✅ keep "completed"
}, { timestamps: true });

module.exports = mongoose.model("TodoItem", todoItemSchema)
