const express = require('express')
const router = express.Router()
const listController = require('../controller/todoItemController')

router.get('/', listController.getAllTask)
router.post('/', listController.postList)

module.exports = router