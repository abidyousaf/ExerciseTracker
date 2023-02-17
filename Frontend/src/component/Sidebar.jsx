import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
function DashbordL() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-4  sidebar" id="sidebar">
          <li>
            <Link to="/dashboard/activites">Acitivites </Link>
          </li>
          <li>
            <Link to="/dashboard/User">User Data</Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default DashbordL;
