import React from "react";
import { Link } from "react-router-dom";
import DashbordL from "./Sidebar";
function Dash_Icon() {
  return (
    <div>
      <div id="bac" className="row">
        <div className="col-4">
          <DashbordL />
        </div>
        <div className="col-4" style={{ padding: "180px" }}>
          <span className="fa-stack fa-5x">
            <Link to="/dashboard/activites">
              {" "}
              <i className="fas fa-circle  text-primary" />
              <i className="fas fa-add  fa-stack-1x fa-inverse" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Dash_Icon;
