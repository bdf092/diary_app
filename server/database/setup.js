require('dotenv').config()
const fs = require('fs')

const db = require('./connect')


const sql = fs.readFileSync(__dirname + "/data.sql").toString() // Will let me come up the absolute path


db.query(sql)
  .then(data => {
    db.end()
    console.log("Setup-complete")
  })
  .catch(error => console.log(error))
