import React from 'react';

function Hero() {
  return (
    <section className="bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">Blockchain-Powered Organ Donation</h1>
        <p className="lead mb-4">
          Secure, Transparent & Efficient Organ Transplant System
        </p>
        <div>
          <a href="/register" className="btn btn-light btn-lg me-3">Register</a>
          <a href="/login" className="btn btn-outline-light btn-lg">Login</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;


