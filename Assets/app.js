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

            case 'View all roles':
                await viewAllRoles();
                break;

            case 'View all employees':
                await viewAllEmployees();
                break;

            case 'Add a department':
                const { departmentName } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'departmentName',
                        message: "What's the name of the department?"
                    }
                ]);
                await addDepartment(departmentName);
                break;

            case 'Add a role':
                const roleDetails = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'title',
                        message: "What's the title of the role?"
                    },
                    {
                        type: 'number',
                        name: 'salary',
                        message: "What's the salary for the role?"
                    },
                    {
                        type: 'number',
                        name: 'departmentId',
                        message: "What's the department ID for the role?"
                    }
                ]);
                await addRole(roleDetails.title, roleDetails.salary, roleDetails.departmentId);
                break;

            case 'Add an employee':
                const employeeDetails = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'firstName',
                        message: "What's the employee's first name?"
                    },
                    {
                        type: 'input',
                        name: 'lastName',
                        message: "What's the employee's last name?"
                    },
                    {
                        type: 'number',
                        name: 'roleId',
                        message: "What's the employee's role ID?"
                    },
                    {
                        type: 'input',
                        name: 'managerId',
                        message: "What's the manager's ID? (Leave blank if no manager)",
                        filter: (value) => {
                            value = value.toString().trim();
                            return value === '' ? null : Number(value);
                        },
                        validate: (value) => {
                            value = value.toString().trim();
                            if (value === '' || !isNaN(value)) {
                                return true;
                            }
                            return 'Please enter a valid number or leave blank for no manager';
                        }
                    }
                ]);
                await addEmployee(
                    employeeDetails.firstName,
                    employeeDetails.lastName,
                    employeeDetails.roleId,
                    employeeDetails.managerId
                );
                break;

            case 'Update an employee role':
                const updateDetails = await inquirer.prompt([
                    {
                        type: 'number',
                        name: 'employeeId',
                        message: "What's the ID of the employee whose role you want to update?"
                    },
                    {
                        type: 'number',
                        name: 'newRoleId',
                        message: "What's the new role ID for the employee?"
                    }
                ]);
                await updateEmployeeRole(updateDetails.employeeId, updateDetails.newRoleId);
                break;
        }
    } catch (err) {
        console.error(err);
    } finally {
        startApp(); 
    }
};

startApp();