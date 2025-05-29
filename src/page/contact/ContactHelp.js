import React from "react";

function ContactHelp() {
  return (
    <div className="container my-5">
      <div className="row mb-4">
        <div className="col text-center">
          <h2 className="fw-bold">Contact & Help Desk</h2>
          <p className="text-muted">We're here to support you 24/7</p>
        </div>
      </div>

      {/* Help Desk Info */}
      <div className="row mb-5">
        <div className="col-md-6">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">Helpdesk Information</h5>
              <p>Email: <a href="mailto:support@organdonation.org">support@organdonation.org</a></p>
              <p>Phone: +91 9876543210</p>
              <p>Office Hours: 9:00 AM - 6:00 PM (Mon - Sat)</p>
            </div>
          </div>
        </div>

        {/* Hospital Contact List */}
        <div className="col-md-6">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">Verified Hospital Contacts</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">AIIMS Delhi – +91 1126588500</li>
                <li className="list-group-item">Apollo Hospital – +91 1146001066</li>
                <li className="list-group-item">Fortis Bangalore – +91 8022207272</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="row">
        <div className="col">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">Feedback Form</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Write your message here"></textarea>
                </div>

                <button type="submit" className="btn btn-primary px-4">Send Feedback</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactHelp;
