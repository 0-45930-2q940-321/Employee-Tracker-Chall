const inquirer = require('inquirer');
const db = require('./db/connect');
const addDepartment = require('./cases/add-department.js')

let sql;

start = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'options',
                message: 'What would you like to do?',
                choices: ["Add department", "Add role", "Add employee", "Update employee role", "View all departments", "View all roles", "View all employees"]
            }
        ]).then(data => {
            if(data.options === 'Add department') {
                addDepartment(sql);
            }
        });
};

continueCheck = () => {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'back',
                message: 'Would you like to return to the menu?',
                default: false
            }
        ]).then(data => {
            if(data.back) {
                start();

            } else {
                console.log('Press CTRL + C to exit.');
            }
        });
};

start();

module.exports = continueCheck;