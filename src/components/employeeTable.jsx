import React, {Component} from 'react';

class EmployeeTable extends Component {
   
    render() { 
        const { employees, onDelete, onSort } = this.props;
        return(
            <table className="table">
                <thead>
                <tr>
                    <th onClick={ () => onSort('id')}>Id</th>
                    <th onClick={ () => onSort('firstname')}>First Name</th>
                    <th onClick={ () => onSort('lastname')}>Last Name</th>
                    <th onClick={ () => onSort('department.name')}>Department</th>
                    <th onClick={ () => onSort('email')}>Email</th>
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
        )
    }
}
 
export default EmployeeTable;