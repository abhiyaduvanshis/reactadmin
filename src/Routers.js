import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

function Routers(){
    return(
        <Routes>
            <Route path='admin/dashboard' element={<Dashboard/>} />
            <Route path='admin/login' element={<Login/>} />
            <Route path='admin/register' element={<Register/>} />
        </Routes>
    )
}
export default Routers;