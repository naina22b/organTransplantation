import React from "react";
import { FaEthereum, FaSearch, FaQrcode } from "react-icons/fa";

function BlockchainVerification() {
  return (
    <div className="container my-5">
      <div className="card shadow border-0">
        <div className="card-header bg-dark text-white d-flex align-items-center">
          <FaEthereum className="me-2" />
          <h4 className="mb-0">Blockchain Verification Portal</h4>
        </div>
        <div className="card-body">
          <p className="text-muted">
            This page displays real-time verification of organ transactions stored on the Ethereum blockchain.
          </p>

          {/* <div className="mb-4">
            <label htmlFor="txnId" className="form-label fw-bold">
              Enter Transaction ID or Government ID:
            </label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="e.g. 0xA12...F9C" id="txnId" />
              <button className="btn btn-outline-secondary" type="button">
                <FaSearch /> Search
              </button>
            </div>
          </div> */}

          {/* <div className="border rounded p-3 bg-light mb-4">
            <h5>Smart Contract Logs</h5>
            <ul className="list-group">
              <li className="list-group-item">✔ Donor Registered – 0xA13F...</li>
              <li className="list-group-item">✔ Organ Matched with Recipient – 0xA15B...</li>
              <li className="list-group-item">✔ Dispatch Confirmed – 0xA18E...</li>
              <li className="list-group-item">✔ Delivered to Hospital – 0xA1A4...</li>
            </ul>
          </div> */}

          <div className="text-center mt-4">
            <h5>Verify via QR Code</h5>
            <div className="d-flex justify-content-center">
              <div
                className="border p-4 rounded bg-white"
                style={{ width: "180px", height: "180px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <FaQrcode size={60} className="text-muted" />
              </div>
            </div>
            <p className="text-muted mt-2">Scan to verify blockchain transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockchainVerification;
