import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import EditEmployee from "./components/EditEmployee";
import AddEmployee from "./components/AddEmployee";
import HomePage from "./components/HomePage";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/Employees" element={<EmployeeList />} />
        <Route path="/EditEmplyee/:id" element={<EditEmployee />} />
        <Route path="/AddEmployee" element={<AddEmployee />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
