import {  Route, Routes } from "react-router-dom";
import Login from "../pages/Lgoin/Login";
import SignUp from "../pages/Signup/SignUP";


const AppRoute=()=>{
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
           
       
        </Routes>
    )
}

export default AppRoute;