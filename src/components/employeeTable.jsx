import React, { Component } from "react";
import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";
import Table from "../common/table";

class EmployeeTable extends Component {

  columns = [
    { path : "id", label : "ID" },
    { path : "firstname", label : "First Name" },
    { path : "lastname", label : "Last Name" },
    { path : "department.name", label : "Department" },
    { path : "email", label : "Email" },
    { path : "contact", label : "Contact" },
    { key : "delete", label : "Action",
      content : employee => <button
      className="btn btn-danger btn-sm"
      onClick={() => this.props.onDelete(employee)}
    >
      DELETE
    </button>
    },
  ]
  render() {
    const { employees, columns, onSort, sortColumn } = this.props;
    return (
      <Table data={employees} columns={this.columns} onSort={onSort} sortColumn={sortColumn}/>
    );
  }
}

export default EmployeeTable;
