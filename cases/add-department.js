const db = require('../db/connect');
const inquirer = require('inquirer');

addDepartment = (sql, params) => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'department',
                message: 'What is the name of your department?',
            }
        ]).then(data => {

            sql = `INSERT INTO department (name) VALUES (?)`;
            params = [data.department];

            db.query(sql, params, (err) => {

                if (err) {
                    return err;

                } else {
                    console.log(`${params} department was added.`);
                    
                }
                continueCheck();
            });
        });
}

module.exports = addDepartment;