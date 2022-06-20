import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "../common/table";

class EmployeeTable extends Component {


  handleEmployeeAttendence = employee =>{
    console.log(employee);
    this.setState({selectedEmployee : employee})
  }

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
    { key : "edit", label : "Edit",
      content : employee =>  <Link to={`/employees/${employee.id}`}><button
      className="btn btn-primary btn-sm"
      onClick={() => this.props.onEdit(employee)}
    >
     Edit
    </button> </Link>
    },
    { key : "attendence", label : "Attendence",
      content : employee =>  <Link to={`/attendence/${employee.id}`}><button
      className="btn btn-primary btn-sm" onClick={ () => this.handleEmployeeAttendence(employee)}
    >
     Attendence
    </button> </Link>
    }
  ]
  render() {
    
    const { employees, columns, onSort, sortColumn } = this.props;
    return (
      <Table data={employees} columns={this.columns} onSort={onSort} sortColumn={sortColumn}/>
    );
  }
}

export default EmployeeTable;
