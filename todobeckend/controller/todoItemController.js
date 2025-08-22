const TodoItem = require('../model/todoItemModel')

exports.getListItems = (req, res, next) => {
    res.send('This request from controller of the website')
}

exports.postList = async (req, res, next) => {
    console.log(req.body)
    try {
        const { task, date } = req.body
        const todoItem = await new TodoItem({ task, date })
        const itemeSave = await todoItem.save()
        console.log('your data was saved ', itemeSave)
        res.status(200).json(itemeSave)
    } catch (error) {
        console.log('Sorry we can not save your data try again !!!', error.message)
    }
}