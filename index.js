require('dotenv').config() // Make sure you are importing from .env file

const app = require('./app')
const port = 3000

app.listen(port, () => {
    console.log(`API running on port ${port}`)
})
