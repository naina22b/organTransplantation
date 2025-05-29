import React, { useState } from "react";

function DoctorRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    licenseNumber: "",
    specialization: "",
    phone: "",
    email: "",
    hospitalName: "",
    hospitalRegNumber: "",
    department: "",
    designation: "",
    hospitalAddress: "",
    hospitalPhone: "",
    hospitalEmail: "",
    walletAddress: "",
    documents: {},
    consent: false,
  });

  const specializations = [
    "Nephrologist",
    "Transplant Surgeon",
    "Cardiologist",
    "Hepatologist",
    "Pulmonologist",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        documents: { ...formData.documents, [name]: files[0] },
      });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please accept consent to proceed.");
      return;
    }
    console.log("Doctor/Hospital Registration Data:", formData);
    alert("Doctor registration submitted successfully!");
    // You would handle smart contract logic or API submission here
  };

  return (
    <div className="container my-5">
      <div className="card shadow border-0">
        <div className="card-body p-4">
          <h3 className="card-title text-center text-primary mb-4">
            Hospital/Doctor Registration
          </h3>
          <form onSubmit={handleSubmit}>
            <h5 className="mb-3">Doctor Information</h5>

            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Medical License Number</label>
              <input type="text" className="form-control" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Specialization</label>
              <select className="form-select" name="specialization" value={formData.specialization} onChange={handleChange} required>
                <option value="">Select Specialization</option>
                {specializations.map((spec) => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <h5 className="mt-4 mb-3">Hospital Details</h5>

            <div className="mb-3">
              <label className="form-label">Hospital Name</label>
              <input type="text" className="form-control" name="hospitalName" value={formData.hospitalName} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Hospital Registration Number</label>
              <input type="text" className="form-control" name="hospitalRegNumber" value={formData.hospitalRegNumber} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Department</label>
              <input type="text" className="form-control" name="department" value={formData.department} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">Designation/Role</label>
              <input type="text" className="form-control" name="designation" value={formData.designation} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">Hospital Address</label>
              <textarea className="form-control" name="hospitalAddress" value={formData.hospitalAddress} onChange={handleChange} rows="2" />
            </div>

            <div className="mb-3">
              <label className="form-label">Hospital Phone</label>
              <input type="tel" className="form-control" name="hospitalPhone" value={formData.hospitalPhone} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">Hospital Email</label>
              <input type="email" className="form-control" name="hospitalEmail" value={formData.hospitalEmail} onChange={handleChange} />
            </div>

            <h5 className="mt-4 mb-3">Blockchain Integration</h5>

            <div className="mb-3">
              <label className="form-label">Public Wallet Address</label>
              <input type="text" className="form-control" name="walletAddress" value={formData.walletAddress} onChange={handleChange} required />
            </div>

            <h5 className="mt-4 mb-3">Document Uploads</h5>

            <div className="mb-3">
              <label className="form-label">Medical Council Certificate</label>
              <input type="file" className="form-control" name="medicalCouncil" onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">Degree Certificate</label>
              <input type="file" className="form-control" name="degreeCertificate" onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">Experience Letter</label>
              <input type="file" className="form-control" name="experienceLetter" onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">Hospital Accreditation Certificate</label>
              <input type="file" className="form-control" name="accreditation" onChange={handleChange} />
            </div>

            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                name="consent"
                id="consent"
                checked={formData.consent}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="consent">
                I confirm the above information is accurate and agree to data processing and blockchain binding.
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorRegistration;
