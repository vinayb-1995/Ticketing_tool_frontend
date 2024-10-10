import { Col, Row } from "react-bootstrap";
import { InputField } from "../../components/InputField/InputField";
import { Link } from "react-router-dom";
import ButtonStyle1 from "../../components/Buttons/ButtonStyle1";
import { MdAlternateEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { useState } from "react";

const Login = () => {
  /* store input changes */
  const [getLoignAdmin, setLoignAdmin] = useState({
    email: "",
    password: "",
  });

  /* handel input changes */
  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoignAdmin({
      ...getLoignAdmin,
      [name]: value,
    });
  };

  /* on click submit  */
  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log("getLoignAdmin>>", getLoignAdmin);
    
  };
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center login-form">
        <Row>
          <Col lg={12}>
            <form className="form" onSubmit={handelSubmit}>
              <div className="form-header">
                <p>Login to Your Account</p>
              </div>
              <InputField
                label="Email"
                placeholder="Email"
                name="email"
                type="text"
                onChange={handelChange}
                icon={<MdAlternateEmail />}
              />
              <InputField
                label="Password"
                placeholder="Password"
                name="password"
                type="password"
                onChange={handelChange}
                icon={<IoLockClosedOutline />}
              />
              <div className="flex-row">
                {/* <div>
                  <input type="radio" />
                  <label>Remember me </label>
                </div> */}
                {/* <span className="span">Forgot password?</span> */}
              </div>
              <ButtonStyle1 type="submit">Login</ButtonStyle1>
              <p className="p">
                Don't have an account?
                <span className="span">
                  <Link to="/signup">Sign Up</Link>
                </span>
              </p>
            </form>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Login;
