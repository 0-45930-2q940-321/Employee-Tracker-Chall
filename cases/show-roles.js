const db = require('../db/connect');
const cTable = require('console.table');

showRoles = (sql, params) => {

    sql = `SELECT * FROM role`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)

        } else {
            console.log("Here are ALL ROLES: ");
            console.table(rows);

            continueCheck();
        };
    });
};

module.exports = showRoles;