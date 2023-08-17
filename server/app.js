const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const diaryRouter = require('./routers/routers')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req,res) => {
    res.json({
        name: "Diary  API",
        description: "Welcome to our diary_app"
    })
})

// app.use('/entries',diaryRouter)

module.exports = app
