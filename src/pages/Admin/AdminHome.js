// import { useDispatch, useSelector } from "react-redux";
// import { fetchAdminData } from "../../features/slice/adminDataSlice";
// import { useEffect } from "react";

import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
    const navigate=useNavigate()
  /* admin data from redux */
  // const dispatch = useDispatch();
  // const userData = useSelector((state) => state.admin.adminData);
  // // const status = useSelector((state) => state.user.status);
  // // const error = useSelector((state) => state.user.error);
  // useEffect(() => {
  //   dispatch(fetchAdminData());
  // }, [dispatch]);
  // console.log('UserData:', userData);
  const handleCreatCustomer=()=>{
    navigate("/createcustomer")
  }
  const handleCreatAgent=()=>{
    navigate("/createagent")
  }
  const handleAssignTickets=()=>{
    navigate("/assignticketstable")
  }
  return (
    <>
      <div className="container mt-2 adminhome">
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={3} lg={3}>
            <p>Total Number of Customer : 100</p>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <p>Total Number of Agents : 50</p>
          </Col>
        </Row>
        <Row className="m-2 d-flex justify-content-center ">
        <Col xs={12} md={3} lg={3} onClick={handleCreatCustomer} className="dashboardbutton">
            <p>Creat Cutomer</p>
          </Col>
        <Col xs={12} md={3} lg={3} onClick={handleCreatAgent} className="dashboardbutton">
            <p>Creat Agent</p>
          </Col>
        <Col xs={12} md={3} lg={3} onClick={handleAssignTickets} className="dashboardbutton">
            <p>Assign Tickets</p>
          </Col>
        <Col xs={12} md={3} lg={3} className="dashboardbutton">
            <p>All Cutomer</p>
          </Col>
        <Col xs={12} md={3} lg={3} className="dashboardbutton">
            <p>All Agents</p>
          </Col>
        <Col xs={12} md={3} lg={3} className="dashboardbutton">
            <p>Open, Closed & Pending tickets</p>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default AdminHome;