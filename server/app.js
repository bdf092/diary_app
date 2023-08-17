const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req,res) => {
    res.json({
        name: "Country API",
        description: "Welcome to our diary_app"
    })
})

module.exports = app
