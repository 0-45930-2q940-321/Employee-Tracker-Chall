INSERT INTO
    department (name)
VALUES
    ('Engineering'),
    ('Finace'),
    ('HR'),
    ('Legal'),
    ('Sales');

INSERT INTO
    role (title, salary, department_id)
VALUES
    ('Account Manager', 200000.00, 2),
    ('Accountant', 190000.00, 2),
    ('Director', 200000.00, 3),
    ('Lead Engineer', 300000.00, 1),
    ('Legal Team Lead', 250000.00, 4),
    ('Lawyer', 200000.00, 4),
    ('Recruiter', 150000.00, 3),
    ('Salesperson', 180000.00, 1),
    ('Sales Manager', 220000.00, 1),
    ('Software Engineer', 200000.00, 5);

INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Joe', 'Mama', 1342, 654),
    ('Poo', 'Bear', 23576, NULL),
    ('Lexie', 'Liu', 35345, NULL),
    ('Wendy', 'Red', 43456, 234),
    ('Ferris', 'Wheeler', 7543, 3217),
    ('Nicki', 'Minaja', 11174, NULL),
    ('Peter', 'File', 8213, 112),
    ('Jo', 'King', 93614, NULL),
    ('Snow', 'White', 1012, 184),
    ('Deez', 'Nutz', 9481, 3730),
    ('Ben', 'Dover', 13210, 1426),
    ('Cass', 'Light', 13245, 7234),
    ('Nate', 'Keep', 61734, NULL),
    ('Shirl', 'Boss', 29774, 434);