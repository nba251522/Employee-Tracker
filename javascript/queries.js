const db = require('./db');

const getDepartments = async () => {
    const query = 'SELECT id, name FROM department';
    try {
        const [rows] = await db.promise().query(query);
        console.table(rows);
    } catch (err) {
        console.error(err);
    }
};

const addEmployee = async (firstName, lastName, roleId, managerId) => {
    const query = `
        INSERT INTO employee (first_name, last_name, role_id, manager_id) 
        VALUES (?, ?, ?, ?)
    `;
    try {
        const [result] = await db.promise().execute(query, [firstName, lastName, roleId, managerId]);
        console.log(`Added employee: ${firstName} ${lastName}`);
    } catch (err) {
        console.error(err);
    }
};

const viewAllRoles = async () => {
    const query = `
        SELECT role.id, role.title, department.name AS department, role.salary 
        FROM role
        INNER JOIN department ON role.department_id = department.id
    `;
    try {
        const [rows] = await db.promise().query(query);
        console.table(rows);
    } catch (err) {
        console.error(err);
    }
};

const viewAllEmployees = async () => {
    const query = `
        SELECT employee.id, employee.first_name, employee.last_name, 
               role.title, department.name AS department, role.salary, 
               CONCAT(manager.first_name, ' ', manager.last_name) AS manager
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee AS manager ON employee.manager_id = manager.id
    `;
    try {
        const [rows] = await db.promise().query(query);
        console.table(rows);
    } catch (err) {
        console.error(err);
    }
};

const addDepartment = async (departmentName) => {
    const query = `INSERT INTO department (name) VALUES (?)`;
    try {
        const [result] = await db.promise().execute(query, [departmentName]);
        console.log(`Added department: ${departmentName}`);
    } catch (err) {
        console.error(err);
    }
};

const addRole = async (title, salary, departmentId) => {
    const query = `
        INSERT INTO role (title, salary, department_id) 
        VALUES (?, ?, ?)
    `;
    try {
        const [result] = await db.promise().execute(query, [title, salary, departmentId]);
        console.log(`Added role: ${title}`);
    } catch (err) {
        console.error(err);
    }
};

const updateEmployeeRole = async (employeeId, newRoleId) => {
    const query = `UPDATE employee SET role_id = ? WHERE id = ?`;
    try {
        const [result] = await db.promise().execute(query, [newRoleId, employeeId]);
        console.log(`Updated employee's role`);
    } catch (err) {
        console.error(err);
    }
};
module.exports = {
    getDepartments,
    addEmployee,
    viewAllRoles,
    viewAllEmployees,
    addDepartment,
    addRole,
    updateEmployeeRole
};