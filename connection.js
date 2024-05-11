const mysql = require("mysql");

const db = mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: "sql6705579",
    database: "ssql6705579",
    password: "mD1VW5QiIX",
});

module.exports = db;