import React from "react";
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          OrganTransplant
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active fw-bold" : "")
              }
              to="/"
              end
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active fw-bold" : "")
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active fw-bold" : "")
              }
              to="/role-selection"
            >
              Register
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active fw-bold" : "")
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active fw-bold" : "")
              }
              to="/organ-tracker"
            >
              Track Organ
            </NavLink>
            
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active fw-bold" : "")
              }
              to="/contact-help"
            >
              Contact
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active fw-bold" : "")
              }
              to="/blockchain-verification"
            >
              Blockchain
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
