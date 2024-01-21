import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../helpers/const";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [addName, setAddName] = useState("");
  const [addSurname, setAddSurname] = useState("");
  const [addPosition, setAddPositon] = useState("");
  const [addDepartment, setAddDepartment] = useState("");
  const [addExp, setAddExp] = useState("");
  const [addImg, setAddImg] = useState("");
  async function addCard() {
    const newEmployee = {
      name: addName,
      surname: addSurname,
      position: addPosition,
      department: addDepartment,
      expirience: addExp,
      image: addImg,
    };
    let res = await axios.post(API,newEmployee);
    setAddName("");
    setAddSurname("");
    setAddPositon("");
    setAddDepartment("");
    setAddExp("");
    setAddImg("");
    navigate("/employee");
  }

  return (
    <div className="wrapper">
    <div className="modal-window-add add-new">
      <h2>Add Employee</h2>
      <p>Complete the form, to add a new Employee</p>
      <div className="input-box">
        <input onChange={(e) => setAddName(e.target.value)} type="text" />
        <input onChange={(e) => setAddSurname(e.target.value)} type="text" />
        <input onChange={(e) => setAddPositon(e.target.value)} type="text" />
        <input onChange={(e) => setAddDepartment(e.target.value)} type="text" />
        <input onChange={(e) => setAddExp(e.target.value)} type="text" />
        <input onChange={(e) => setAddImg(e.target.value)} type="text" />
        <button className="btn-add-card" onClick={() => addCard()}>
          Save Card
        </button>
      </div>
    </div>
    </div>
  );
};

export default AddEmployee;
