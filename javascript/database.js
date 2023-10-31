const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'company_db'
});

module.exports = db;