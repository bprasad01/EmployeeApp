import React, { Component } from "react";
import ListGroup from "../common/listGroup";
import Pagination from "../common/pagination";
import { getEmployees } from "../services/fakeEmployeesData";
import { getDepartment } from "../services/fakeDepartmentData";
import { paginate } from "../utils/paginate";
import EmployeeTable from "./employeeTable";
import _ from "lodash";

class Employee extends Component {
  state = {
    employees: [],
    departments: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: {path : "firstname", order : "asc"}
  };

  componentDidMount() {
    const departments = [{ id : "", name : "All Employee"}, ...getDepartment()]
    this.setState({ employees: getEmployees(), departments });
  }
  // function for delete employee data
  handleDelete = (employee) => {
    // creating a new employee array and check employee Id that passed to the employee object
    const employees = this.state.employees.filter(
      (emp) => emp.id !== employee.id
    );
    // update the employees state
    this.setState({ employees });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleDepartmentSelect = (department) => {
    this.setState({ selectedDepartment: department, currentPage : 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  }
  render() {
    const { length: count } = this.state.employees;
    const {
      pageSize,
      currentPage,
      selectedDepartment,
      sortColumn,
      employees: allEmployee,
    } = this.state;

    if (count === 0) return <p>There are no employee data available</p>;

    const filtered = selectedDepartment && selectedDepartment.id
      ? allEmployee.filter(
          (employee) => employee.department.id === selectedDepartment.id)
      : allEmployee;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
    const employees = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row mt-4">
        <div className="col-3">
          <ListGroup
            items={this.state.departments}
            selectedItem={this.state.selectedDepartment}
            onItemSelect={this.handleDepartmentSelect}
          />
        </div>

        <div className="col">
          <p>Showing {filtered.length} Employee Data Available</p>
          <h1>Employee Data</h1>
          <EmployeeTable 
            employees={employees}
            onSort={this.handleSort}
            onDelete={this.handleDelete}
          />

          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Employee;
