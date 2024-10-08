import {  Route, Routes } from "react-router-dom";
import Login from "../pages/Lgoin/Login";
import SignUp from "../pages/Signup/SignUP";
import PageNotFound from "../pages/404/PageNotFound";


const AppRoute=()=>{
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}

export default AppRoute;