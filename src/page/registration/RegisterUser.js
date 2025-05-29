import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RegisterUser() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedRole = location.state?.role || ""; // role passed from RoleSelection

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    govtId: "",
    email: "",
    phone: "",
    address: "",
    role: selectedRole,
    password: "",
    idProof: null,
  });

  const [errors, setErrors] = useState({});

  // Simple validation example
  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = "Full Name is required";
    if (!formData.dob) tempErrors.dob = "Date of Birth is required";
    if (!formData.gender) tempErrors.gender = "Gender is required";
    if (!formData.govtId) tempErrors.govtId = "Government ID is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    if (!formData.address) tempErrors.address = "Address is required";
    if (!formData.role) tempErrors.role = "Role is required";
    if (!formData.password) tempErrors.password = "Password is required";
    if (!formData.idProof) tempErrors.idProof = "Please upload ID Proof";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "idProof") {
      setFormData({ ...formData, idProof: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Here you would send data to backend or blockchain interaction logic
      alert("Registration successful! (Demo only)");
      navigate("/login");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#0d6efd" }}>
        Register as {formData.role || "User"}
      </h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
            value={formData.fullName}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.fullName}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            name="dob"
            className={`form-control ${errors.dob ? "is-invalid" : ""}`}
            value={formData.dob}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.dob}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            name="gender"
            className={`form-select ${errors.gender ? "is-invalid" : ""}`}
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <div className="invalid-feedback">{errors.gender}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Aadhaar No. / Government ID</label>
          <input
            type="text"
            name="govtId"
            className={`form-control ${errors.govtId ? "is-invalid" : ""}`}
            value={formData.govtId}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.govtId}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={formData.email}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            value={formData.phone}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.phone}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
            name="address"
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
            value={formData.address}
            onChange={handleChange}
            rows="2"
          ></textarea>
          <div className="invalid-feedback">{errors.address}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Role</label>
          <select
            name="role"
            className={`form-select ${errors.role ? "is-invalid" : ""}`}
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option>Donor</option>
            <option>Recipient</option>
            <option>Hospital</option>
            <option>Doctor</option>
          </select>
          <div className="invalid-feedback">{errors.role}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            value={formData.password}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.password}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Upload ID Proof</label>
          <input
            type="file"
            name="idProof"
            className={`form-control ${errors.idProof ? "is-invalid" : ""}`}
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.idProof}</div>
        </div>

        {/* MetaMask Integration Placeholder */}
        <div className="mb-3">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => alert("MetaMask integration coming soon!")}
          >
            Connect with MetaMask (Optional)
          </button>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterUser;
