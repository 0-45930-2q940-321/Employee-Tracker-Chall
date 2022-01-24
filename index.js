const inquirer = require('inquirer');
const db = require('./db/connect');
const addDepartment = require('./cases/add-department.js');
const addRole = require('./cases/add-role');
const addEmployee = require('./cases/add-employee');
const updateEmployee = require('./cases/update-employee');
const showDepartments = require('./cases/show-departments');
const showRoles = require('./cases/show-roles');
const showEmployees = require('./cases/show-employees');

let sql;

start = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'options',
                message: 'What would you like to do?',
                choices: ["Add Department", "Add Role", "Add Employee", "Update Employee Role", "View All Departments", "View All Roles", "View All Employees"]
            }
        ]).then(data => {
            switch (data.options) {
                case 'Add Department':
                    addDepartment(sql);
                    break;
                case 'Add Role':
                    addRole(sql);
                    break;
                case 'Add Employee':
                    addEmployee(sql);
                    break;
                case 'Update Employee':
                    updateEmployee(sql);
                    break;
                case 'View All Departments':
                    showDepartments(sql);
                    break;
                case 'View All Roles':
                    showRoles(sql);
                    break;
                case 'View All Employees':
                    showEmployees(sql);
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