import React, { useState } from "react";

function RecipientRegistration() {
  const [formData, setFormData] = useState({
    requiredOrgan: "",
    bloodGroup: "",
    condition: "",
    urgencyLevel: "Low",
    location: "",
    age: "",
    consent: false,
  });

  const organs = ["Kidney", "Liver", "Heart", "Lungs", "Pancreas", "Intestines"];
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const urgencyLevels = ["Low", "Medium", "High", "Critical"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please give your consent before submitting.");
      return;
    }
    console.log("Recipient Registration Data:", formData);
    alert("Recipient registration submitted successfully!");
  };

  return (
    <div className="container my-5">
      <div className="card shadow border-0">
        <div className="card-body p-4">
          <h3 className="card-title text-center text-primary mb-4">
            Recipient Registration
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Required Organ</label>
              <select
                className="form-select"
                name="requiredOrgan"
                value={formData.requiredOrgan}
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
              <label className="form-label">Medical Condition</label>
              <textarea
                className="form-control"
                name="condition"
                rows="3"
                placeholder="Describe your medical condition"
                value={formData.condition}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Urgency Level</label>
              <select
                className="form-select"
                name="urgencyLevel"
                value={formData.urgencyLevel}
                onChange={handleChange}
              >
                {urgencyLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                placeholder="City or State"
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
                I confirm that the above details are correct and I consent to data usage.
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

export default RecipientRegistration;
