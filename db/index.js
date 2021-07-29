const connection = require("./connection");

class DB {
    // Keeping a reference to the connection on the class in case we need it later
    constructor(connection) {
        this.connection = connection;
    }

    // Find all departments
    viewAllDepartments() {
        return this.connection
            .promise()
            .query("SELECT department.id, department.name FROM department;");
    }

    // Find all roles, join with departments to display the department name
    viewAllRoles() {
        return this.connection
            .promise()
            .query(
                "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
            );
    }

    // Find all employees, join with roles and departments to display their roles, salaries, departments, and managers
    viewAllEmployees() {
        return this.connection
            .promise()
            .query(
                "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
            );
    }

    // ADD NEW DEPARTMENT
    addDepartment(department) {
        return this.connection
            .promise()
            .query("INSERT INTO department SET ?", department);
    }

    // Create a new role
    addRole(role) {
        return this.connection.promise().query("INSERT INTO role SET ?", role);
    }

    // Create a new employee
    addEmployee(employee) {
        return this.connection
            .promise()
            .query("INSERT INTO employee SET ?", employee);
    }

    // Update the given employee's role
    updateEmpRole(employeeId, roleId) {
        return this.connection
            .promise()
            .query("UPDATE employee SET role_id = ? WHERE id = ?", [
                roleId,
                employeeId,
            ]);
    }
}

module.exports = new DB(connection);
