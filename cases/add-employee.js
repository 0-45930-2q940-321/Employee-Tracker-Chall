const inquirer = require("inquirer");
const db = require("../db/connect");

addEmployee = (sql, params) => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'What is the Employee\'s FIRST NAME?'
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'What is the Employee\'s LAST NAME'
            },
            {
                type: 'input',
                name: 'employeeId',
                message: 'What is the EMPLOYEE\'S ID?',
                validate: employeeIdInput => {
                    if (!isNaN(employeeIdInput) && employeeIdInput.length <= 4) {
                        return true

                    } else {
                        console.log('EMPLOYEE ID NEEDS TO BE A NUMBER AND CHARACTER AMOUNT LESS THAN OR EQUAL TO 4')
                    };
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is the Employee\'s MANAGER ID? (If the Employee is a Manager LEAVE BLANK!)'
            }

        ]).then(data => {
            if (!data.managerId) {
                data.managerId = null;
            };

            sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
            params = [data.first_name, data.last_name, data.employeeId, data.managerId];

            db.query(sql, params, (err) => {
                if (err) {
                    console.log(err)

                } else {
                    console.log(`Employee ${data.first_name} ${data.last_name} has been added to the EMPLOYEE TABLE`)

                    continueCheck();
                }
            })
        })
};

module.exports = addEmployee;