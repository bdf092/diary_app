require('dotenv').config()
const db = require('./database/db');

const app = require('./app')
const port = 3000

app.listen(port, () => {
    console.log(`API running on port ${port}`)
})
