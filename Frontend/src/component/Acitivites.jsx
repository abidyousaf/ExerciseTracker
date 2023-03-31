import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import DashbordL from "./Sidebar";
import { ContextProvider } from "./MainDashboard";
import { SignupContext } from "../App";
import { useForm } from "react-hook-form";
function Acitivites() {
  const { inputFunction, addactivity, handle, isEdit, updateinput, storage } =
    useContext(ContextProvider);
  const { idcreate } = useContext(SignupContext);
  return (
    <div id="bac" className="row">
      <div className="col-4">
        <DashbordL />
      </div>
      <div className="col-8 " id="form_dash" style={{ marginTop: "20px" }}>
        <select
          style={{ width: "200px" }}
          className="select mt-5"
          onChange={inputFunction}
          name="activity"
          value={handle.activity}
        >
          <option>Select Activity</option>
          <option>RUNING</option>
          <option>bicycle</option>
          <option>swimming</option>
          <option>Walk</option>
          <option>Hiking</option>
        </select>
        <div className="col-8 " style={{ paddingLeft: "170px" }}>
          <form className="form" method="post">
            <label>Your Name:</label>
            <input
              type="text"
              name="name"
              value={handle.name}
              onChange={inputFunction}
              placeholder="Enter name"
              style={{ width: "250px", height: "40px" }}
            />
            <ol className="fieldset">
              <li id="body_weight" className="field">
                <label>Your Weight:</label>
                <span className="unit-form-field standard">
                  <span className>
                    <input
                      type="number"
                      onChange={inputFunction}
                      name="weight"
                      min="1"
                      value={handle.weight}
                    />
                  </span>
                </span>
                <select className="select">
                  <option value={6}>Kilograms</option>
                  <option selected="selected" value={1}>
                    Pounds
                  </option>
                  <option value={12}>Stone/Pounds</option>
                </select>
              </li>
              <li className="field">
                <label>How Long:</label>
                <input
                  type="number"
                  name="minutes"
                  id="minutes"
                  min="0"
                  value={handle.minutes}
                  autoComplete="off"
                  onChange={inputFunction}
                />
                <span>Minutes</span>
              </li>
            </ol>
            <input
              type="date"
              name="date"
              onChange={inputFunction}
              value={handle.date}
            />
            <textarea
              name="discription"
              cols="30"
              rows="5"
              style={{ resize: "none" }}
              value={handle.discription}
              onChange={inputFunction}
              placeholder="Enter Discription"
            ></textarea>
            <span style={{ display: "flex"}}>
              {isEdit ? (
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => {
                    addactivity(storage);

                  }}
                  style={{width:'110px', height:'60px' ,textAlign:'center'}}
                >
                  Add Activity
                </button>
              ) : (
                <Link to="/dashboard/User">
                  {" "}
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={updateinput}
                  >
                    Update Activity
                  </button>
                </Link>
              )}
              <Link to="/dashboard/">
                {" "}
                <button className="btn btn-warning ms-5 "       style={{width:'100px', height:'60px' ,textAlign:'center'}}>Cancel</button>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Acitivites;
