import { Route, Routes } from "react-router-dom";
import Login from "../pages/Lgoin/Login";
import SignUp from "../pages/Signup/SignUP";
import PageNotFound from "../pages/404/PageNotFound";
import AdminHome from "../pages/Admin/AdminHome";
// import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import useAuth from "../components/useAuth/useAuth";
import CreateCustomer from "../pages/Admin/CreateCustomer/CreateCustomer";
import CreateAgent from "../pages/Admin/CreateAgent/CreateAgent";
import AssignTicketsTable from "../pages/Admin/AssignTickets/AssignTicketsTable";
import TicketManagerPro from "../pages/Admin/AssignTickets/TicketManagerPro/TicketManagerPro";

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
              {/* admin pages */}
              <Route path="/adminhome" element={<AdminHome />} />
              <Route path="/createcustomer" element={<CreateCustomer />} />
              <Route path="/createagent" element={<CreateAgent />} />
              <Route path="/assignticketstable" element={<AssignTicketsTable />} />
              <Route path="/ticketmanger" element={<TicketManagerPro />} />
            </>
          )}
        </>
      )}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoute;
