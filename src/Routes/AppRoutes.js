import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Admin from "../pages/Admin/Admin";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
