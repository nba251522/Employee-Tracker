const inquirer = require('inquirer');
const { 
    getDepartments, 
    addEmployee, 
    viewAllRoles, 
    viewAllEmployees, 
    addDepartment, 
    addRole, 
    updateEmployeeRole 
} = require('./queries');

const startApp = async () => {
    try {
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                ],
            },
        ]); 

        switch (answer.action) {
            case 'View all departments':
                await getDepartments();
                break;

            case 'Add an employee':
                const employeeDetails = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'firstName',
                        message: "What's the employee's first name?",
                    },
                    {
                        type: 'input',
                        name: 'lastName',
                        message: "What's the employee's last name?",
                    },
                    {
                        type: 'number',
                        name: 'roleId',
                        message: "What's the employee's role ID?",
                    },
                    {
                        type: 'number',
                        name: 'managerId',
                        message: "What's the manager's ID? (Leave blank if no manager)",
                        default: null,
                        filter: (value) => {
                            return value === '' ? null : value;
                        }
                    },
                ]);
                await addEmployee(
                    employeeDetails.firstName,
                    employeeDetails.lastName,
                    employeeDetails.roleId,
                    employeeDetails.managerId
                );
                break;
        }
    } catch (err) {
        console.error(err);
    } finally {
        startApp(); 
    }
};

startApp();