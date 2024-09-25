import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Admin from "../pages/Admin/Admin";

const AppRoutes=()=>{
    return(
        <>
        <Routes>
            <Route path="/" elemetn={<Login/>}/>
            <Route path="/admin" elemetn={<Admin/>}/>
        </Routes>
        </>
    )
}
export default AppRoutes;