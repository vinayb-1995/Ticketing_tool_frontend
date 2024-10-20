import { Col, Row } from "react-bootstrap";
import Headings from "../../../components/Heading/Headings";
import { InputField } from "../../../components/InputField/InputField";
import { IoPersonOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import ButtonStyle1 from "../../../components/Buttons/ButtonStyle1";
import { FaRegBuilding } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa6";
import { useState } from "react";
import { DropdownField } from "../../../components/Dropdown/DropdownField";

const CreateAgent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleDropdownChange = (index, name, selectedName) => {
    console.log(`Selected ${name}: ${selectedName}`);
    setSelectedOption(selectedName);
  };
  const dropdownData = [
    { id: "1", name: "Option 1" },
    { id: "2", name: "Option 2" },
    { id: "3", name: "Option 3" },
  ];

  return (
    <div className="mt-4 container createagent">
      <Headings navigtepath="/adminhome" headingname="New Agent Registration" />
      <form>
        <Row>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Full Name"
              placeholder="Full Name"
              name="fullname"
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
              label="Phone Number "
              placeholder="Phone Number "
              name="phonenumber "
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
              icon={<IoLockClosedOutline />}
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
              label="Account Status"
              placeholder="Account Status"
              name="accountstatus"
              type="text"
              // className="file-input"
              // onChange={handleChange}
              icon={<FaRegBuilding />}
              // error={errors.email}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <DropdownField
              index={0}
              id="dropdown"
              name="exampleDropdown"
              code="code"
              label="Department/Expertise"
              placeholder="Select one"
              error=""
              data={dropdownData}
              setValue={selectedOption}
              getvalue={(value) =>
                console.log("Dropdown selected value:", value)
              }
              onChangeValue={handleDropdownChange}
              disabled={false}
              required={false}
              icon={<FaRegAddressCard />}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
              <DropdownField
              index={0}
              id="teamgroup"
              name="exampleDropdown"
              code="code"
              label="Team/Group"
              placeholder="Select one"
              error=""
              data={dropdownData}
              setValue={selectedOption}
              getvalue={(value) =>
                console.log("Dropdown selected value:", value)
              }
              onChangeValue={handleDropdownChange}
              disabled={false}
              required={false}
              icon={<FaRegAddressCard />}
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
export default CreateAgent;
