const inquirer = require('inquirer');
const db = require('./db/connect');
const addDepartment = require('./cases/add-department.js');
const addRole = require('./cases/add-role');

let sql;

start = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'options',
                message: 'What would you like to do?',
                choices: ["Add Department", "Add Role", "Add employee", "Update employee role", "View all departments", "View all roles", "View all employees"]
            }
        ]).then(data => {
            switch (data.options) {
                case 'Add Department':
                    addDepartment(sql);
                    break;
                case 'Add Role':
                    addRole(sql);
                    break;
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
            if (data.back) {
                start();

            } else {
                console.log('Press CTRL + C to exit.');
            }
        });
};

start();

module.exports = continueCheck;