import React from "react";
import { useNavigate } from "react-router-dom";

function RoleSelection() {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    // You can store role in state or localStorage if needed
    // For now, navigate to registration page with role as param or state
    //changes
    // navigate("/registration", { state: { role } });
    if (role === "Donor") {
      navigate("/donor-registration"); // Adjust this path to match your route
    }
    else if(role === "Recipient"){
       navigate("/recipient-registration"); 
    }
    else if(role === "Hospital/Doctor"){
      navigate("/doctor-registration"); 
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#007bff" }}>
        Register As
      </h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-3">
          <div
            className="card text-center shadow-sm h-100"
            style={{ cursor: "pointer" }}
            onClick={() => handleRoleSelect("Donor")}
          >
            <div className="card-body">
              <h4 className="card-title mb-3 text-success">Donor</h4>
              <p className="card-text">
                Register as a donor to offer your organs for those in need.
              </p>
              <i className="bi bi-heart-fill display-4 text-danger"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div
            className="card text-center shadow-sm h-100"
            style={{ cursor: "pointer" }}
            onClick={() => handleRoleSelect("Recipient")}
          >
            <div className="card-body">
              <h4 className="card-title mb-3 text-primary">Recipient</h4>
              <p className="card-text">
                Register as a recipient to receive organ matching and support.
              </p>
              <i className="bi bi-person-fill display-4 text-primary"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div
            className="card text-center shadow-sm h-100"
            style={{ cursor: "pointer" }}
            onClick={() => handleRoleSelect("Hospital/Doctor")}
          >
            <div className="card-body">
              <h4 className="card-title mb-3 text-warning">Hospital / Doctor</h4>
              <p className="card-text">
                Register as a hospital or doctor to verify and manage transplants.
              </p>
              <i className="bi bi-building display-4 text-warning"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;
