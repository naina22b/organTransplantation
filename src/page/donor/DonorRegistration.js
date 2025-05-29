import React, { useState } from "react";

function DonorRegistration() {
  const [formData, setFormData] = useState({
    organ: "",
    bloodGroup: "",
    illnesses: [],
    surgeries: "",
    location: "",
    age: "",
    consent: false,
  });

  const organs = ["Kidney", "Liver", "Heart", "Lungs", "Pancreas", "Intestines"];
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const illnessOptions = ["Diabetes", "Hypertension", "HIV", "Cancer", "Hepatitis"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "illnesses") {
      const updatedIllnesses = checked
        ? [...formData.illnesses, value]
        : formData.illnesses.filter((illness) => illness !== value);
      setFormData({ ...formData, illnesses: updatedIllnesses });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please provide your consent to proceed.");
      return;
    }
    console.log("Donor Registration Data:", formData);
    alert("Donor registration submitted successfully!");
  };

  return (
    <div className="container my-5">
      <div className="card shadow border-0">
        <div className="card-body p-4">
          <h3 className="card-title text-center text-success mb-4">
            Donor Registration
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Organ Willing to Donate</label>
              <select
                className="form-select"
                name="organ"
                value={formData.organ}
                onChange={handleChange}
              >
                <option value="">Select Organ</option>
                {organs.map((organ) => (
                  <option key={organ} value={organ}>
                    {organ}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Blood Group</label>
              <select
                className="form-select"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
              >
                <option value="">Select Blood Group</option>
                {bloodGroups.map((bg) => (
                  <option key={bg} value={bg}>
                    {bg}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Chronic Illnesses</label>
              <div className="d-flex flex-wrap gap-2">
                {illnessOptions.map((illness) => (
                  <div className="form-check" key={illness}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="illnesses"
                      value={illness}
                      id={illness}
                      checked={formData.illnesses.includes(illness)}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor={illness}>
                      {illness}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Previous Surgeries / Allergies</label>
              <textarea
                className="form-control"
                name="surgeries"
                rows="3"
                value={formData.surgeries}
                onChange={handleChange}
                placeholder="Optional"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                placeholder="Auto-detect or enter manually"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
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
                I agree to donate this organ and consent to share my data.
              </label>
            </div>

            <button type="submit" className="btn btn-success w-100">
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DonorRegistration;
