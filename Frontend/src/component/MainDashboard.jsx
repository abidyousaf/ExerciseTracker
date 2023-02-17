import React, { useState, useEffect, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Dash_Icon from "./Dash_Icon";
import Acitivites from "./Acitivites";
import User_Data from "./User_Data";
import Dashboard from "./Dash_Navbar";
import { ToastContainer, toast } from "react-toastify";
import { SignupContext } from "../App";
import "react-toastify/dist/ReactToastify.css";
const ContextProvider = createContext();
function MainDashboard() {
  const navigate = useNavigate();
  const { idcreate, page } = useContext(SignupContext);
  const [storage, setStorage] = useState("");
  //console.log("storage", storage);
  const getfunction = () => {
    setStorage(sessionStorage.getItem("id"));
  };
  useEffect(() => {
    getfunction();
  }, []);
  const [isEdit, setEdit] = useState(true);
  const [idPick, setIdPick] = useState();
  const emptyField = {
    activity: "",
    name: " ",
    weight: " ",
    minutes: " ",
    date: "",
    discription: "",
  };
  const [handle, sethandle] = useState(emptyField);
  const [data, setData] = useState([]);
  const inputFunction = (e) => {
    const { name, value } = e.target;
    sethandle({ ...handle, [name]: value });
  };
  const addactivity = async (id) => {
    if (
      handle.activity === "" ||
      handle.name === "" ||
      handle.weight === "" ||
      handle.minutes === "" ||
      handle.discription === "" ||
      handle.date === ""
    ) {
      toast.error("PLease Add Activity!", {
        position: "top-center",
      });
    } else {
      await fetch(`http://localhost:7080/addActivity/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(handle),
      });
      sethandle(emptyField);
      toast.success("Add Activity succesfully!", {
        position: "top-center",
      });
    }
    apiData();
  };
  const apiData = async () => {
   // console.log("myidandr", idcreate._id);
    const ids = sessionStorage.getItem("id");
    const api_id = await fetch(`http://localhost:7080/get_users/${ids}`);
    const final_Data = await api_id.json();
    setData(final_Data);
   //console.log("login api", data);
  };
  useEffect(() => {
    apiData();
  }, []);
  // const addactivity = ()=>{
  // setData([...data, handle])
  // console.log(data);
  // }
  const onDelete = async (ele) => {
    const pro = window.confirm("Are you Sure ? You want to delete")
    if(pro){
      await fetch(`http://localhost:7080/delteActivity/${ele}`, {
        method: "DELETE",
      });
    } 
    apiData();
  };
  const Edit = async (el) => {
    let old_Data = await fetch(`http://localhost:7080/edit/${el}`);
    old_Data = await old_Data.json();
    sethandle(old_Data);
    setIdPick(el);
    setEdit(false);
  };
  const updateinput = async () => {
    let id_Get = idPick;
    await fetch(`http://localhost:7080/update/${id_Get}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(handle),
    });
    apiData();
    setEdit(true);
    sethandle(emptyField);
  };
  return (
    <div>
      <ContextProvider.Provider
        value={{
          inputFunction,
          addactivity,
          data,
          handle,
          onDelete,
          isEdit,
          idcreate,
          Edit,
          updateinput,
          storage,
        }}
      >
        {storage == null ? (
          navigate("/login")
        ) : (
          <>
            <Dashboard />
            <Routes>
              <Route path="/" element={<Dash_Icon />} />
              <Route path="/activites" element={<Acitivites />} />
              <Route path="/User" element={<User_Data />} />
            </Routes>
          </>
        )}
        <ToastContainer />
      </ContextProvider.Provider>
    </div>
  );
}
export default MainDashboard;
export { ContextProvider };
