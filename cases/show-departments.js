const db = require('../db/connect');
const cTable = require('console.table');

showDepartments = (sql, params) => {

    sql = `SELECT * FROM department`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)

        } else {
            console.log("Here are ALL DEPARTMENTS: ");
            console.table(rows);

            continueCheck();
        };
    });
};

module.exports = showDepartments;