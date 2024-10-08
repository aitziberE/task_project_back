
const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.post('/', TaskController.create);
router.get('/all', TaskController.getAll);
router.get('/id/:_id', TaskController.getById);
router.put('/complete/:_id', TaskController.markAsCompleted);
router.put('/update/:_id', TaskController.updateTitle);
router.delete('/id/:_id', TaskController.delete);

module.exports = router