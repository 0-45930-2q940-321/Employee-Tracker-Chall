const inquirer = require("inquirer");
const db = require("../db/connect");

updateEmployee = (sql, params) => {
    inquirer
    .prompt([
        {
            type: "number",
            name: "employeeId",
            message: "Please enter the ID of the employee you'd like to update: ",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('The ID you entered does NOT EXIST!');
                    return false;
                }
            }
        },
        {
            type: "number",
            name: "newEmployeeRole",
            message: "Please enter the ID of the new role for the employee: ",
            validate: newEmployeeRoleInput => {
                if (!isNaN(newEmployeeRoleInput) && newEmployeeRoleInput.length <= 4) {
                    return true

                } else {
                    console.log('EMPLOYEE ID NEEDS TO BE A NUMBER AND CHARACTER AMOUNT LESS THAN OR EQUAL TO 4')
                }
            }
        }
    ])
    .then(data => {
        sql = `UPDATE employees SET role_id = ? WHERE id =?`;
        params = [data.newEmployeeRole, data.employeeId];

        db.query(sql, params, (err, rows) => {
            if (err) {
                console.log(err);

            } else {
                console.log(`EMPLOYEE: ${employeeId} , ROLE has been CHANGED TO ${newEmployeeRole}`);

                continueCheck();
            }
        });
    });
};

module.exports = updateEmployee;