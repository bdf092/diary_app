const { Router } = require('express')
const diaryController = require('../controllers/diary')

const diaryRouter = Router()

diaryRouter.get('/', diaryController.index)
diaryRouter.get('/:id', diaryController.index)
diaryRouter.post('/', diaryController.create)
diaryRouter.get('/search', diaryController.search)
diaryRouter.patch('/:id', diaryController.update)
diaryRouter.delete('/:id', diaryController.delete)


module.exports = diaryRouter
