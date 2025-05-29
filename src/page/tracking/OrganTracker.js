import React, { useState } from "react";

function Dashboard() {
  // Simulated user role (you can replace this with real auth context or props)
  const [role] = useState("Donor"); // Change to "Recipient", "Hospital", "Admin" as needed

  return (
    <div className="container my-5">
      <div className="card shadow border-0">
        <div className="card-body p-4">
          <h2 className="text-center text-success mb-4">Dashboard</h2>

          {role === "Donor" && (
            <>
              <h4 className="text-primary">Donor Panel</h4>
              <ul className="list-group mb-3">
                <li className="list-group-item">Donation Status: <strong>Pending Match</strong></li>
                <li className="list-group-item">Match History: <em>No matches yet</em></li>
              </ul>
              <button className="btn btn-outline-danger">Withdraw Donation</button>
            </>
          )}

          {role === "Recipient" && (
            <>
              <h4 className="text-primary">Recipient Panel</h4>
              <ul className="list-group mb-3">
                <li className="list-group-item">Organ Matching Status: <strong>In Progress</strong></li>
                <li className="list-group-item">Estimated Wait Time: <strong>2 weeks</strong></li>
              </ul>
              <div className="alert alert-info">You will be notified when a match is found.</div>
            </>
          )}

          {role === "Hospital" && (
            <>
              <h4 className="text-primary">Hospital/Doctor Panel</h4>
              <ul className="list-group mb-3">
                <li className="list-group-item">Matched Cases: <strong>3 new cases</strong></li>
                <li className="list-group-item">Organ Compatibility Status: <strong>Verification Required</strong></li>
              </ul>
              <button className="btn btn-outline-primary me-2">Verify Organ Compatibility</button>
              <button className="btn btn-outline-success">Initiate Dispatch</button>
            </>
          )}

          {role === "Admin" && (
            <>
              <h4 className="text-primary">Admin Panel</h4>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-group mb-3">
                    <li className="list-group-item">Total Registered Users: 240</li>
                    <li className="list-group-item">Total Matches: 56</li>
                    <li className="list-group-item">Ongoing Transports: 7</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-group mb-3">
                    <li className="list-group-item">Hospital Approvals: 2 pending</li>
                    <li className="list-group-item">Blockchain Logs: <a href="#!">View All</a></li>
                    <li className="list-group-item">Support Requests: 5</li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
