import React, { Component } from "react";
import { getAttendence } from "../services/fakeEmployeeAttendence";
import moment from "moment";

class Attendence extends Component {
  state = {
    attendences: getAttendence(),
  };

  render() {
    const { attendences } = this.state;
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
                  <tr key={atten.emp_id}>
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
      </div>
    );
  }
}

export default Attendence;
