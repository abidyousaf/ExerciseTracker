import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand text-danger" href="#page-top">
            myFitnesshub
            {/* <img
              src="assets/img/logo1.png"
              alt="..."
              style={{ width: "200px", border: "none" }}
            /> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item">
                <a className="nav-link" href="#services" >
                  Servises
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To Fitnesshub</div>
          <div className="masthead-heading text-uppercase">
            When the Sun Comes Up, You'd Better Be Running
          </div>
          <a className="btn btn-primary btn-xl text-uppercase" href="#services">
            Join Us
          </a>
        </div>
      </header>
    </div>
  );
}
export default Navbar;
