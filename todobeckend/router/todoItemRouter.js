const express = require('express')
const router = express.Router()
const listController = require('../controller/todoItemController')

router.get('/', listController.getListItems)

module.exports = router