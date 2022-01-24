const db = require('../db/connect');
const cTable = require('console.table');

showEmployees = (sql) => {

    sql = `SELECT * FROM employee`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)

        } else {
            console.log("Here are ALL EMPLOYEES: ");
            console.table(rows);

            continueCheck();
        };
    });
};

module.exports = showEmployees;