import React from 'react';

function Testimonials() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h3 className="text-center mb-5">What Our Users Say</h3>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card p-4 shadow-sm h-100">
              <blockquote className="blockquote mb-0">
                <p>“This platform saved my life. Everything was seamless and secure!”</p>
                <footer className="blockquote-footer mt-3">Recipient A</footer>
              </blockquote>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4 shadow-sm h-100">
              <blockquote className="blockquote mb-0">
                <p>“I donated through this portal and felt confident knowing it was all transparent.”</p>
                <footer className="blockquote-footer mt-3">Donor B</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
