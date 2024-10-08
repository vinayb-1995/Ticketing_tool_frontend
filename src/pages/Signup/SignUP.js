import { Col, Row } from "react-bootstrap";
import { InputField } from "../../components/InputField/InputField";
import { Link, useNavigate } from "react-router-dom";
import ButtonStyle1 from "../../components/Buttons/ButtonStyle1";
import { IoPersonOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  /*storing input field  */
  const [getAdminRegister, setAdminRegister] = useState({
    userName: "",
    email: "",
    password: "",
    confomr_passowrd: "",
  });
  const [errors, setErrors] = useState({});

  /* input filed handle change */
  const handelChange = (e) => {
    const { name, value } = e.target;

    setAdminRegister({
      ...getAdminRegister,
      [name]: value,
    });

    setErrors({ ...errors, [name]: "" });
  };

  /* Validation */
  const validate = () => {
    const newErrors = {};
    if (!getAdminRegister.userName) newErrors.userName = "Name is required";
    if (!getAdminRegister.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(getAdminRegister.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!getAdminRegister.password) {
      newErrors.password = "Password is required";
    } else if (getAdminRegister.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (getAdminRegister.password !== getAdminRegister.confomr_passowrd) {
      newErrors.confomr_passowrd = "Passwords do not match";
    }
    return newErrors;
  };

  /* handel submit */
  const hndelSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      console.log("getAdminRegister>>", getAdminRegister);
      /* use fetch here to post the data */
      navigate("/login");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center signup-form">
        <Row>
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
                error={errors.userName}
              />
              <InputField
                label="Email"
                name="email"
                placeholder="Email"
                type="text"
                onChange={handelChange}
                icon={<MdAlternateEmail />}
                error={errors.email}
              />
              <InputField
                label="Password"
                placeholder="Password"
                name="password"
                type="password"
                icon={<IoLockClosedOutline />}
                onChange={handelChange}
                error={errors.password}
              />
              <InputField
                label="Confirm Password"
                placeholder="Confirm Password"
                name="confomr_passowrd"
                type="password"
                onChange={handelChange}
                icon={<FiEye />}
                error={errors.confomr_passowrd}
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
                  <Link to="/login">login</Link>
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
