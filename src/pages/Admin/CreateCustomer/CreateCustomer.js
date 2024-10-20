import { Col, Row } from "react-bootstrap";
import Headings from "../../../components/Heading/Headings";
import { InputField } from "../../../components/InputField/InputField";
import { MdAlternateEmail } from "react-icons/md";
import ButtonStyle1 from "../../../components/Buttons/ButtonStyle1";
import { IoPersonOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa6";
const CreateCustomer = () => {
  return (
    <div className="mt-4 container createcutomer">
      <Headings
        navigtepath="/adminhome"
        headingname="New Customer Registration"
      />
      <form>
        <Row>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="First Name"
              placeholder="First Name"
              name="firstname"
              type="text"
              // onChange={handleChange}
              icon={<IoPersonOutline />}
              // error={errors.email}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Last Name"
              placeholder="Last Name"
              name="lastname"
              type="text"
              // onChange={handleChange}
              icon={<IoPersonOutline />}
              // error={errors.email}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Email"
              placeholder="Email"
              name="email"
              type="text"
              // onChange={handleChange}
              icon={<MdAlternateEmail />}
              // error={errors.email}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Secondary Email"
              placeholder="Secondary Email"
              name="secondaryemail"
              type="text"
              // onChange={handleChange}
              icon={<MdAlternateEmail />}
              // error={errors.email}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Phone"
              placeholder="Phone"
              name="phone"
              type="text"
              // onChange={handleChange}
              icon={<FiPhone />
              }
              // error={errors.email}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="mobile"
              placeholder="mobile"
              name="mobile"
              type="text"
              // onChange={handleChange}
              icon={<IoPhonePortraitOutline />}
              // error={errors.email}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Password"
              placeholder="Password"
              name="password"
              type="text"
              // onChange={handleChange}
              icon={ <IoLockClosedOutline />

              }
              // error={errors.email}
            />
          </Col>
          {/* <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Role"
              placeholder="Role"
              name="role"
              type="text"
              // onChange={handleChange}
              icon={<MdAlternateEmail />}
              // error={errors.email}
            />
          </Col> */}
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="company/orgnization Name"
              placeholder="company/orgnization Name"
              name="companyorgnizationname"
              type="text"
              // onChange={handleChange}
              icon={<FaRegBuilding /> }
              // error={errors.email}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Prefered contact Method"
              placeholder="Prefered contact Method"
              name="Prefered contact Method"
              type="text"
              // onChange={handleChange}
              icon={<FaRegAddressCard />
              }
              // error={errors.email}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Account Status"
              placeholder="Account Status"
              name="Account Status"
              type="text"
              // onChange={handleChange}
              icon={<MdAlternateEmail />}
              // error={errors.email}
            />
          </Col>
        </Row>
        <div className="mt-4">
          <ButtonStyle1 type="submit">Create</ButtonStyle1>
        </div>
      </form>
    </div>
  );
};
export default CreateCustomer;
