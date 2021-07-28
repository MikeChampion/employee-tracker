const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    // username
    user: "root",
    // password
    password: "B@byl0n5",
    // password: "t3$tingi2e",
    database: "employees",
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;
