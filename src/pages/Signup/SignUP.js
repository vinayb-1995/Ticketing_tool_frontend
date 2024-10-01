import { Col, Row } from "react-bootstrap";
import { InputField } from "../../components/InputField/InputField";
import { Link } from "react-router-dom";
import ButtonStyle1 from "../../components/Buttons/ButtonStyle1";
import { IoPersonOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { useState } from "react";

const SignUp = () => {
  /*storing input field  */
  const [getAdminRegister, setAdminRegister] = useState({
    userName: "",
    email: "",
    password: "",
    confomr_passowrd: "",
  });

  /* input filed handle change */
  const handelChange = (e) => {
    // console.log(e.target.value)
    const name = e.target.name;
    const value = e.target.value;

    setAdminRegister({
      ...getAdminRegister,
      [name]: value,
    });
  };

  /* handel submit */
  const hndelSubmit = (e) => {
    e.preventDefault();
    console.log("getAdminRegister>>", getAdminRegister);
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center signup-form">
        <Row className="">
          <Col lg={12}>
            <form className="form" onSubmit={hndelSubmit}>
              <div className="form-header">
                <p>Create Your Account</p>
              </div>
              <InputField
                label="Name"
                name="userName"
                placeholder="Name"
                type="text"
                onChange={handelChange}
                icon={<IoPersonOutline />}
              />
              <InputField
                label="Email"
                name="email"
                placeholder="Email"
                type="text"
                onChange={handelChange}
                icon={<MdAlternateEmail />}
              />
              <InputField
                label="Password"
                placeholder="Password"
                name="password"
                type="password"
                icon={<IoLockClosedOutline />}
                onChange={handelChange}
              />
              <InputField
                label="Conform Password"
                placeholder="Conform Password"
                name="confomr_passowrd"
                type="text"
                onChange={handelChange}
                icon={<FiEye />}
              />
              <div className="flex-row">
                {/* <div>
                  <input type="radio" />
                  <label>Remember me </label>
                </div> */}
                {/* <span className="span">Forgot password?</span> */}
              </div>
              {/* <ButtonStyle1 children="Sign Up" type="submit" /> */}
              <ButtonStyle1 type="submit">Submit</ButtonStyle1>
              <p className="p">
                Do you have an account?
                <span className="span">
                  <Link to="/">login</Link>
                </span>
              </p>
            </form>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default SignUp;
