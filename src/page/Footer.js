import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <div className="row mb-3">
          <div className="col-md-4">
            <h5>OrganChain</h5>
            <p className="small">Secure Organ Donation on Blockchain</p>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/register" className="text-light text-decoration-none">Register</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Help</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Contact Us</h6>
            <p className="small mb-1">Email: support@organchain.com</p>
            <p className="small">Phone: +91 98765 43210</p>
          </div>
        </div>

        <hr className="border-secondary" />

        <p className="mb-0 small">
          © {new Date().getFullYear()} OrganChain. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
