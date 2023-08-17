const { Router } = require('express')
const diaryController = require('../controllers/diary')

const diaryRouter = Router()

diaryRouter.get('/', diaryController.index)
diaryRouter.get('/:id', diaryController.index)
diaryRouter.post('/', diaryController.create)



module.exports = diaryRouter
