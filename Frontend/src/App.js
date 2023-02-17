import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import MainDashboard from "./component/MainDashboard";
import { useState } from "react";
import { createContext } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import NotFound from "./component/NotFound";
import Home from "./component/Home";
const SignupContext = createContext();
function App() {
  const navigate = useNavigate();
  const [page, setpage] = useState("");
  const forwardlogin = (responsepage) => {
    setpage(responsepage);
  };
  const emptyfield = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  const [idcreate, setIdcreate] = useState("");
  console.log(idcreate);
  const [handle, setHandle] = useState(emptyfield);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
  };
  const datasubmit = async () => {
    console.log(handle);
    if (
      handle.name === "" ||
      handle.email === "" ||
      handle.password === "" ||
      handle.password_confirmation === ""
    ) {
      NotificationManager.error("Please Fill the Form");
      // alert("Please fill the form")
    } else if (handle.password != handle.password_confirmation) {
      NotificationManager.error("Password does not matched");
    } else {
      let result = await fetch("http://localhost:7080/signup", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(handle),
      });
      setHandle(emptyfield);
      result = await result.json();
      if (result == "Email Already Exists") {
        NotificationManager.error("!Email Already Exists");
      } else {
        NotificationManager.success("Register Successfully");
        navigate("/login");
      }
    }
  };
  let [email, setemail] = useState("");
  let [password, setPassword] = useState("");
  // const datalogin = async (e) => {
  //   e.preventDefault();
  //   console.warn(email, password);
  //   let item = { email, password };
  //   console.log("email", email);
  //   var result = await fetch("http://localhost:7080/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accpet: "application/json",
  //     },
  //     body: JSON.stringify(item),
  //   });
  //   setemail("");
  //   setPassword("");
  //   result = await result.json();
  //   //console.log(check)
  //   // console.log("result",result);
  //   if (result == "exist") {
  //     // alert("login sucessfully")

  //     //console.log("result", result);
  //     NotificationManager.success("login scuccesfully");
  //     navigate("/Dashboard");
  //   } else {
  //     // alert("login unscuccesfully");
  //     NotificationManager.error("!login unscuccesfully");
  //   }
  // };
  let item = { email, password };
  const datalogin = async () => {
    if (item.email == "" || item.password == "") {
      //  alert("Fields are empty");
      NotificationManager.error("!login Failed");
    } else {
      const response = await fetch("http://localhost:7080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      if (response.status == 200) {
        const responseData = await response.json();
       // console.log(responseData);
       // forwardlogin(responseData);
        setIdcreate(responseData);
        sessionStorage.setItem('id', responseData._id)
        // localStorage.setItem('id',responseData._id)
        NotificationManager.success("login scuccesfully");
        navigate("/Dashboard");
      } else if (response.status == 400) {
        const responseData = await response.json();
        alert(responseData.message);
      }
    }
  };
  const logout = () => {
    setemail("");
    setPassword("");
    navigate("/");
    sessionStorage.clear();
  };
  return (
    <div>
      <SignupContext.Provider
        value={{
          handlechange,
          datalogin,
          datasubmit,
          setPassword,
          setemail,
          handle,
          idcreate,
          page,
          logout,
        }}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Dashboard/*" element={<MainDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NotificationContainer />
      </SignupContext.Provider>
    </div>
  );
}
export default App;
export { SignupContext };
