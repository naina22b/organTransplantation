import React from 'react';

function Features() {
  return (
    <section className="container text-center my-5">
      <h2 className="mb-4">Why Choose Us?</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Blockchain Security</h5>
              <p className="card-text">
                All records stored securely and transparently on the blockchain, ensuring privacy and trust.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Real-Time Tracking</h5>
              <p className="card-text">
                Monitor the organ transport live with GPS location and environmental condition updates.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">AI-Powered Matching</h5>
              <p className="card-text">
                Intelligent donor-recipient matching based on medical criteria to improve transplant success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

