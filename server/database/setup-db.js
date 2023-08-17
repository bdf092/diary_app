const fs = require('fs');
require("dotenv").config(); // Load environment config



// Load in the SQL statements
const sql = fs.readFileSync('setup.sql').toString();

// Get a link to the database
const db = require("./db"); // Make sure your variables (dotenv) are loaded before the database

// Run the query - I am about to interact with my db
db.query(sql)
    .then(data => console.log("Set-up complete."))
    .catch(error => console.log(error));
