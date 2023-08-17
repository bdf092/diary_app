require("dotenv").config(); // Load environment config
const fs = require('fs');

// Get a link to the database
const db = require("./db"); // Make sure your variables (dotenv) are loaded before the database
// Load in the SQL statements
const sql = fs.readFileSync(__dirname + '/setup.sql').toString();



// Run the query - I am about to interact with my db
db.query(sql)
    .then(data => console.log("Set-up complete."))
    .catch(error => console.log(error));
