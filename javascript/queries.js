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

module.exports = { getDepartments, addEmployee };