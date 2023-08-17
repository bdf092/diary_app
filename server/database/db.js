// require('dotenv').config();
const { Pool } = require('pg')

const db = new Pool ({
    connectionString: process.env.DB_URL
})

console.log('DB Connection established')
module.exports = db
