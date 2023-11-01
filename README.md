# Employee Tracker

## Technology Used

| Technology  | Resource URL                                         |
|-------------|------------------------------------------------------|
| Node.js     | [Node.js](https://nodejs.org/)                       |
| MySQL       | [MySQL](https://www.mysql.com/)                      |
| Inquirer    | [npm Inquirer](https://www.npmjs.com/package/inquirer) |
| JavaScript  | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |

## Description

Employee Tracker is a command-line application for managing a company's employee database. It is designed to make it easy to view and interact with information stored in databases. This application leverages Node.js, Inquirer, and MySQL to allow users to add, view, and update employee data, roles, and departments within a company.

![App Demo Video](./demo/Walkthrough.webm)

## Table of Contents
- [Installation](#installation)                                         
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Author Info](#author-info)
- [Credits](#credits)
- [License](#license)

## Installation

1. Clone the repository: `git@github.com:nba251522/Employee-Tracker.git`
2. Navigate to the cloned directory and run `npm install` to install dependencies.
3. Ensure MySQL is installed and running on your system.
4. Create a new database using the provided `db.sql` script.
5. Invoke the application with `node app.js`.

## Usage

After launching the application with `node app.js`, navigate through the menu to view and manage the employee database. You can add, view, and update employees, roles, and departments as needed.

## Database Schema

The database schema includes three tables:
- **department**: `id`, `name`
- **role**: `id`, `title`, `salary`, `department_id`
- **employee**: `id`, `first_name`, `last_name`, `role_id`, `manager_id`

## Author Info

**Thomas Er**
- [LinkedIn](https://www.linkedin.com/in/thomas-er-9b77321b9)
- [Github](https://github.com/nba251522)
- [Portfolio](https://nba251522.github.io/thomas-er-porfolio/)

## Credits

This project has been developed with the help of the following resources:
  - [MySQL Documentation](https://dev.mysql.com/doc/)
  - [Node.js Documentation](https://nodejs.org/en/docs/)
  - [Inquirer npm Documentation](https://www.npmjs.com/package/inquirer)

## License

This project is licensed under the terms of the MIT License.