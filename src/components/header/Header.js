import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBoxArrowLeft } from "react-icons/bs";
// import { BsBoxArrowRight } from "react-icons/bs";
import { TiUserAddOutline } from "react-icons/ti";
const Header = () => {
  return (
    <div className="container-fluid header">
      <Row className="container d-flex align-items-center">
        {/* Logo Column */}
        <Col xs={6} md={2} lg={2} className="logo">
          {/* <p>Logo</p> */}
          <img className="img-fluid m-0 p-0 w-25" src="./assets/images/Aatral_LOGO_PNG.png" alt="logo" />
        </Col>

        {/* Heading Column */}
        <Col
          xs={{ span: 4, offset: 2 }}
          md={{ span: 4, offset: 2 }}
          lg={{ span: 3, offset: 3 }}
          className="companyheading  d-none d-md-block"
        >
          <p>Welcome to ATT</p>
        </Col>

        {/* Auth Links (Login and Register) */}
        <Col
          xs={6}
          md={4}
          lg={4}
          className="auth-links d-flex justify-content-end"
        >
          <Link className="link me-4 d-flex align-items-center" to="/login">
            <p className="me-2">Login</p>
            <BsBoxArrowLeft className="icons" />
          </Link>
          <Link className="link d-flex align-items-center" to="/signup">
            <p className="me-2">Register</p>
            <TiUserAddOutline className="icons" />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
