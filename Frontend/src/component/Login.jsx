import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SignupContext } from "../App";
function Login() {
  const { datalogin, setPassword, setemail } = useContext(SignupContext);

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        {/* Icon */}
        <span className="fa-stack fa-6x">
          <i className="fas fa-circle  text-primary" />
          <i className="fas fa-user fa-stack-1x fa-inverse" />
        </span>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            datalogin();
          }}
        >
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="email"
            placeholder="email"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            className="fadeIn fourth"
            defaultValue="Log In"
          />
        </form>
        {/* <button className="btn btn-primary" defaultValue="Log In" onClick={datalogin}>Login</button> */}
        <div id="formFooter">
          <Link className="underlineHover" to="/signup">
            Do not have account yet? Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
