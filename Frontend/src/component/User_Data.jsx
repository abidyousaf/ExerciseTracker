import React from "react";
import DashbordL from "./Sidebar";
import { useContext } from "react";
import { ContextProvider } from "./MainDashboard";
import { Link } from "react-router-dom";
function User_Data() {
  const { inputFunction, addactivity, data, onDelete, Edit } =
    useContext(ContextProvider);

    
  return (
    <div id="bac" className="row">
      <div className="col-4">
        <DashbordL />
      </div>
      {data === undefined && data.length ? (
        <div style={{ width: "100px", height: "100px", textColor: "red" }}>
         No Activity
        </div>
      ) : (
        data.map((data, index) => {
          return (
            // <div >
            <div
              className="card col-lg-4 rounded-10"
              style={{
                width: "15rem",
                height: "400px",
                marginTop: "80px",
                marginLeft: "20px",
              }}
              key={index}
            >
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    ActivityName:
                  </span>
                  {data.activity}
                </li>
                <li className="list-group-item">
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    User Name:
                  </span>
                  {data.name}
                </li>
                <li className="list-group-item">
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    Weight:
                  </span>
                  {data.weight}KG
                </li>
                <li className="list-group-item">
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    Duration:
                  </span>
                  {data.minutes} (Minutes)
                </li>
                <li className="list-group-item">
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    Date:
                  </span>
                  {data.date}
                </li>

                <li className="list-group-item">
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    Discription:
                  </span>
                  {data.discription}
                </li>
              </ul>
              <div className="card-body" style={{ textAlign: "center" }}>
                <button
                  onClick={() => onDelete(data._id)}
                  className="btn btn-danger "
                  style={{}}
                >
                  Delete
                </button>
                <Link to="/dashboard/activites">
                  <button
                    onClick={() => Edit(data._id)}
                    className="btn btn-info m-1 "
                  >
                    Edit
                  </button>
                </Link>
              </div>
            </div>
            // </div>
          );
        })
      )}
    </div>
  );
}

export default User_Data;
