import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { SignupContext } from "../App";
import { useContext } from "react";
//import { Link } from 'react-router-dom';
function Dashboard() {
  const { idcreate,page ,logout} = useContext(SignupContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-danger" href="#">
            myFitnesshub
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse  navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <a
                  className="float-rightb nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li> */}
              <li className="nav-item active"> 
                  <button onClick={logout} className='btn primary'>
                  Logout
                  </button>
              
        
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#"></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
      {/* <div id="bac" className='row'>
        <div className="col-lg-4  sidebar" id="sidebar">
          <li><Link to="/dash">Dashboard</Link></li>
          <li><a href="#">Acitivites </a></li>
          <li><a href="#">User Data</a></li>
        </div> 
      </div> */}
    </div>
  );
}

export default Dashboard;
