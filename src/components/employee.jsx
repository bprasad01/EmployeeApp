import React, { Component } from "react";
import ListGroup from "../common/listGroup";
import Pagination from "../common/pagination";
import { getEmployees } from "../services/fakeEmployeesData";
import { getDepartment } from "../services/fakeDepartmentData";
import { paginate } from "../utils/paginate";
import EmployeeTable from "./employeeTable";
import _  from "lodash";

class Employee extends Component {
  state = {
    employees: [],
    departments: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "firstname", order: "asc" },
  };
   
  componentDidMount() {
    const departments = [{ id: "", name: "All Employee" }, ...getDepartment()];
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

  // function for handling page
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleDepartmentSelect = (department) => {
    console.log(department);
    this.setState({ selectedDepartment: department, currentPage: 1 });
  };

  // function for handling sort function
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleEdit = employee => {
    let empData = employee;
    console.log(empData);
    
  }

  // function for handling page Data
  getPageData = () => {
    const {
      pageSize,
      currentPage,
      selectedDepartment,
      sortColumn,
      employees: allEmployee,
    } = this.state;

    const filtered =
      selectedDepartment && selectedDepartment.id
        ? allEmployee.filter(
            (employee) => employee.department.id === selectedDepartment.id
          )
        : allEmployee;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const employees = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: employees };
  };
  render() {
    const { length: count } = this.state.employees;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) return <p>There are no employee data available</p>;
    const { totalCount, data : employees } = this.getPageData();

    return (
      <div className="row mt-4">
        <div className="col-2">
          <ListGroup
            items={this.state.departments}
            selectedItem={this.state.selectedDepartment}
            onItemSelect={this.handleDepartmentSelect}
          />
        </div>

        <div className="col-10">
          <p>Showing {totalCount} Employee Data Available</p>
          <h1>Employee Data</h1>
          <EmployeeTable
            employees={employees}
            sortColumn={sortColumn}
            onSort={this.handleSort}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
          />

          <Pagination
            itemsCount={totalCount}
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
