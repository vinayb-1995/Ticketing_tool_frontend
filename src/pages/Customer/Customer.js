import { Col, Row } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

const Customer = () => {
  const navigate=useNavigate()
  const  handelnavigate=()=>{
    navigate("/createtickets")
  }
  
  return (
    <>
      <div className="container mt-2 adminhome">
        <Row className="d-flex justify-content-around">
          <Col xs={12} md={3} lg={3}>
            <p>Total Number of Tickets : 100</p>
          </Col>
          <Col xs={12} md={3} lg={3}>
            <p>Tickets Open : 50</p>
          </Col>
          <Col xs={12} md={3} lg={3}>
            <p>Tickets Closed : 50</p>
          </Col>
          <Col xs={12} md={3} lg={3}>
            <p>Tickets Pending : 50</p>
          </Col>
        </Row>
        <Row className="m-2 d-flex justify-content-start">
          <Col xs={12} md={3} lg={3} className="dashboardbutton" onClick={handelnavigate}>
            <p>Create Tickets</p>
          </Col>
          <Col xs={12} md={3} lg={3} className="dashboardbutton">
            <p>Ticket Status</p>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Customer;
