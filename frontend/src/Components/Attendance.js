import React from "react";
import Navbar from "./Navbar";

const Attendance = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container1">
        <div className="b1">
          <h2 className="Attendance">Attendance
          </h2>
        </div>
        <div className="b2">
          <table>
            <tr id="header">
              <th>No</th>
              <th>Name</th>
              <th>Time</th>
              <th>Image</th>
            </tr>
            <tr>
              <td>1 </td>
              <td>sasa </td>
              <td>10pm </td>
              <td>USA </td>

            </tr>

          </table>
        </div>

      </div>
    </div>
  );
};

export default Attendance;
