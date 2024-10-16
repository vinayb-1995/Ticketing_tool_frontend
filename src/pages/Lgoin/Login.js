import { Col, Row } from "react-bootstrap";
import { InputField } from "../../components/InputField/InputField";
import { Link, useNavigate } from "react-router-dom";
import ButtonStyle1 from "../../components/Buttons/ButtonStyle1";
import { MdAlternateEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../features/slice/authSlice";

const Login = () => {
  /* Store input changes */
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [getLoginAdmin, setLoginAdmin] = useState({
    email: "",
    password: "",
  });

  /* Store errors */
  const [errors, setErrors] = useState({});

  /* Handle input changes */
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginAdmin({
      ...getLoginAdmin,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  /* Validate inputs */
  const validate = () => {
    const newErrors = {};
    if (!getLoginAdmin.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(getLoginAdmin.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!getLoginAdmin.password) {
      newErrors.password = "Password is required";
    } 
    // else if (getLoginAdmin.password.length < 6) {
    //   newErrors.password = "Password must be at least 6 characters long";
    // }
    return newErrors;
  };

  /* On click submit */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      // console.log("getLoginAdmin>>", getLoginAdmin);
      // Add your fetch request here
      try {
        const response = await fetch(
          `http://localhost:5000/api/admin/adminlogin`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(getLoginAdmin),
          }
        );
        console.log("response>>", response);
        if (response.ok) {
          // alert("login succefull please login");
          const res_data = await response.json();
          const role = res_data.role;
          // console.log("role>>",role)
          // dispatch(setToken(res_data.token,res_data.role))
          dispatch(setToken({ token: res_data.token, role: res_data.role }));

          if (role === "admin") {
            navigate("/adminhome");
          } else if (role === "user") {
            navigate("/user");
          } else {
            alert("invalid credential");
          }
          // onOpen();
        } else if (response.status === 400) {
          alert("Some thing went wrong pleas login again");
          // onErrorOpen();
        } else {
          alert("some thing went wrong");
          // showToast({
          //   title: "Error",
          //   message: "Something went wrong during registration.",
          // });
        }
      } catch (err) {
        alert("login fiaild");
        // showToast({
        //   title: "Error",
        //   message: "Something went wrong during registration.",
        // });
        // console.log("register", err);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center login-form">
        <Row>
          <Col lg={12}>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-header">
                <p>Login to Your Account</p>
              </div>
              <InputField
                label="Email"
                placeholder="Email"
                name="email"
                type="text"
                onChange={handleChange}
                icon={<MdAlternateEmail />}
                error={errors.email}
              />
              <InputField
                label="Password"
                placeholder="Password"
                name="password"
                type="password"
                onChange={handleChange}
                icon={<IoLockClosedOutline />}
                error={errors.password}
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
