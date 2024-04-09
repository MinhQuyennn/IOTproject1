import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    async function fetchAllAttendance() {
      try {
        const response = await fetch("http://localhost:8080/");
        if (!response.ok) {
          throw new Error("Failed to fetch attendance data");
        }
        const data = await response.json();
        setAttendanceData(data);
      } catch (error) {
        console.error("Error fetching attendance data:", error.message);
      }
    }

    fetchAllAttendance();
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container1">
        <div className="b1">
          <h2 className="Attendance">Attendance</h2>
        </div>
        <div className="b2">
          <table>
            <tbody>
              <tr id="header">
                <th>No</th>
                <th>Name</th>
                <th>Time</th>
                <th>Image</th>
              </tr>
              {attendanceData.map((attendance) => (
                <tr key={attendance._id}>
                  <td>{attendance._id}</td>
                  <td>{attendance.name}</td>
                  <td>{attendance.time}</td>
                  <td>
                    {/* Display the image if available */}
                    {attendance.image && (
                      <img
                        src={`data:image/jpeg;base64,${encodeBase64FromArrayBuffer(
                          attendance.image.data
                        )}`}
                        alt="Attendance Image"
                        style={{ maxWidth: "100px" }}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;

function encodeBase64FromArrayBuffer(arrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
