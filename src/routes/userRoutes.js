const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.list)
router.post('/', userController.create)
router.get('/:userId', userController.retrieve)
router.put('/:userId', userController.update)
router.delete('/:userId', userController.destroy)

module.exports = router
