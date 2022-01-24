const inquirer = require("inquirer");
const db = require("../db/connect");

updateEmployee = (sql, params) => {
    inquirer
        .prompt([
            {
                type: 'number',
                name: 'employeeId',
                message: "Please enter the ID of the employee you'd like to update: ",
                validate: employeeIdInput => {
                    if (employeeIdInput) {

                        return true;

                    } else {
                        console.log('The ID you entered does NOT EXIST!');
                        return false;
                    };
                }
            },
            {
                type: 'number',
                name: 'newEmployeeRoleId',
                message: "Please enter the ID of the new role for the employee: ",
                validate: newEmployeeRoleInput => {
                    if (!isNaN(newEmployeeRoleInput) && newEmployeeRoleInput.length <= 6) {
                        return true

                    } else {
                        console.log('EMPLOYEE ID NEEDS TO BE A NUMBER AND CHARACTER AMOUNT LESS THAN OR EQUAL TO 6')
                    };
                }
            }
        ])
        .then(data => {

            sql = `UPDATE employee SET role_id = ? WHERE id =?`;
            params = [data.newEmployeeRoleId, data.employeeId];

            db.query(sql, params, (err, rows) => {
                if (err) {
                    console.log(err);

                } else {
                    console.log(`EMPLOYEE: ${data.employeeId} , ROLE ID has been CHANGED TO ${data.newEmployeeRoleId}`);

                    continueCheck();
                }
            });
        });
};

module.exports = updateEmployee;