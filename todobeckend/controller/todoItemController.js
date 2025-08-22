const TodoItem = require('../model/todoItemModel')

// Get all todos
exports.getAllTask = async (req, res, next) => {
    try {
        const data = await TodoItem.find().sort({ createdAt: -1 }) // ✅ latest first
        res.status(200).json(data)
    } catch (error) {
        console.log('Error fetching todos:', error.message)
        res.status(500).json({ message: 'Error fetching todos' })
    }
}

// Add new todo
exports.postList = async (req, res, next) => {
    try {
        const { task, date } = req.body
        const todoItem = new TodoItem({ task, date })
        const itemSaved = await todoItem.save()
        res.status(201).json(itemSaved) // ✅ correct status
    } catch (error) {
        console.log('Error saving todo:', error.message)
        res.status(500).json({ message: 'Error saving todo' })
    }
}

// Delete todo by ID
exports.deleteList = async (req, res, next) => {
    try {
        const { id } = req.params
        const deleted = await TodoItem.findByIdAndDelete(id)
        if (!deleted) {
            return res.status(404).json({ message: 'Item not found' }) // ✅ handle missing id
        }
        res.status(200).json({ message: 'Item deleted', id })
    } catch (error) {
        console.log('Error deleting todo:', error.message)
        res.status(500).json({ message: 'Error deleting todo' })
    }
}
