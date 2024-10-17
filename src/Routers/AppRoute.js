import { Route, Routes } from "react-router-dom";
import Login from "../pages/Lgoin/Login";
import SignUp from "../pages/Signup/SignUP";
import PageNotFound from "../pages/404/PageNotFound";
import AdminHome from "../pages/Admin/AdminHome";
// import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import useAuth from "../components/useAuth/useAuth";
import CreateCustomer from "../pages/Admin/CreateCustomer/CreateCustomer";
import CreateAgent from "../pages/Admin/CreateAgent/CreateAgent";

const AppRoute = () => {
  const { isAuthenticated, role } = useAuth();
  return (
    <Routes>
      {!isAuthenticated ? (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </>
      ) : (
        <>
          {role === "admin" && (
            <>
              <Route path="/adminhome" element={<AdminHome />} />
              <Route path="/createcustomer" element={<CreateCustomer />} />
              <Route path="/createagent" element={<CreateAgent />} />
            </>
          )}
        </>
      )}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoute;
