const express = require('express')
const router = express.Router()
const listController = require('../controller/todoItemController')

router.get('/', listController.getAllTask)
router.post('/', listController.postList)

router.put('/:id', listController.updateList)


router.delete('/:id', listController.deleteList)

module.exports = router