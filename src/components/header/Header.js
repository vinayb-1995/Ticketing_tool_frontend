import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid header">
  <Row className="container d-flex align-items-center">
  {/* Logo Column */}
  <Col xs={6} md={2} lg={2} className="logo">
    <p>Logo</p>
  </Col>

  {/* Heading Column */}
  <Col xs={{ span: 4, offset: 2 }} md={{ span: 4, offset: 2 }} lg={{ span: 3, offset: 3 }} className="companyheading  d-none d-md-block">
    <p>Welcome to ATT</p>
  </Col>

  {/* Auth Links (Login and Register) */}
  <Col xs={6} md={4} lg={4} className="auth-links d-flex justify-content-end">
    <Link className="link me-3" to="/">
      <p>Login</p>
    </Link>
    <Link className="link" to="/signup">
      <p>Register</p>
    </Link>
  </Col>
</Row>

    </div>
  );
};

export default Header;
