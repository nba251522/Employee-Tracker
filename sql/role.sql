CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

INSERT INTO role (title, salary, department_id) VALUES 
('Cashier', 30000.00, 1),
('Janitor', 28000.00, 1),
('Manager', 50000.00, 2),
('Cook', 35000.00, 1);