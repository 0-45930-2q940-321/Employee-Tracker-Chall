const mysql = require("mysql2");

const db = mysql.createConnection({
    host: 'localhost',
    
    user: 'root',
    
    password: '',
    database: 'business_management'
},

    console.log('Test')

);

module.exports = db;