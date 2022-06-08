import React, { Component } from "react";

class EmployeeTable extends Component {
    
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    // check if sortColumn.path is equal to this path
    if (sortColumn.path === path)
      // first we check the existing order if order is asc then set it to desc
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      // if path is different then set the path and order is asc
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { employees, onDelete } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort("id")}>Id</th>
            <th onClick={() => this.raiseSort("firstname")}>First Name</th>
            <th onClick={() => this.raiseSort("lastname")}>Last Name</th>
            <th onClick={() => this.raiseSort("department.name")}>
              Department
            </th>
            <th onClick={() => this.raiseSort("email")}>Email</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.department.name}</td>
              <td>{employee.email}</td>
              <td>{employee.contact}</td>
              {/*pass a employee object to handle delete */}
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(employee)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default EmployeeTable;
