const inquirer = require("inquirer");
const db = require("../db/connect");

addRole = (sql, params) => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the role\'s title?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the role\'s salary?',
                validate: salaryInput => {
                    if(!isNaN(salaryInput)) {
                        return true

                    } else {
                        console.log('Salary needs to be a number!')
                    }
                }
            },
            {
                type: 'input',
                name: 'departmentId',
                message: 'What is the role\'s DEPARTMENT ID?',
                validate: departmentIdInput => {
                    if (!isNaN(departmentIdInput) && departmentIdInput.length <= 6) {
                        return true

                    } else {
                        console.log('THE ID MUST BE A NUMBER AND LOWER THAN OR EQUAL TO 6')
                    };
                }
            }

        ]).then(data => {
            sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
            params = [data.title, data.salary, data.departmentId];
            
            db.query(sql, params, (err) => {
                if(err) {
                    return err;

                } else {
                    console.log(`The ROLE ${data.title} TITLE with a SALARY OF ${data.salary} and the DEPARTMENT ID: ${data.departmentId} will be added to the ROLE TABLE.`)

                    continueCheck();
                }
            })
        })
};

module.exports = addRole;