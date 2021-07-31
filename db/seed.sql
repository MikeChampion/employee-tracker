use employees;
INSERT INTO
  department (name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal');
INSERT INTO
  role (title, salary, department_id)
VALUES
  ('Sales Lead', 100000, 1),
  ('Salesperson', 80000, 1),
  ('Lead Engineer', 150000, 2),
  ('Software Engineer', 120000, 2),
  ('Account Manager', 160000, 3),
  ('Accountant', 125000, 3),
  ('Legal Team Lead', 250000, 4),
  ('Lawyer', 190000, 4);
INSERT INTO
  employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Don', 'Draper', 1, NULL),
  ('Peggy', 'Olson', 2, 1),
  ('Geordi', 'LaForge', 3, NULL),
  ('Sonya', 'Gomez', 4, 3),
  ('Gordon', 'Gecko', 5, NULL),
  ('Jordan', 'Belfort', 6, 5),
  ('Saul', 'Goodman', 7, NULL),
  ('Bob', 'Loblaw', 8, 7);