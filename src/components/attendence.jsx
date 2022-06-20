import React, { Component } from "react";
import { getAttendence } from "../services/fakeEmployeeAttendence";
import moment from "moment";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Attendence extends Component {
  state = {
    attendences: getAttendence(),
    pageSize : 7,
    currentPage : 1,
  };
  
  // function for handling page
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    
    const attend = this.state.attendences.map( item => item);
    const indexLength = attend[0].attendance;
    const count = indexLength.length;
    const { pageSize, currentPage, attendences : allAttendence } = this.state;
    const attendences = paginate(allAttendence, currentPage, pageSize);

    return (
      <div>
        <h1>Attendence</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>check In</th>
              <th>check Out</th>
              <th>Total Hours</th>
            </tr>
          </thead>
          <tbody>
            {attendences.map((atten) => (
              <>
                {atten.attendance.map((empData) => (
                  <tr key={empData.date}>
                    <td key={empData.date}>
                      {moment(empData.date).format("MMM Do YY")}
                    </td>
                    <td>{empData.start_time}</td>
                    <td>{empData.end_time}</td>
                    <td>{empData.total_hours}</td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
        <Pagination 
        itemsCount={count}
        pageSize = {pageSize}
        currentPage={currentPage}
        onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Attendence;
