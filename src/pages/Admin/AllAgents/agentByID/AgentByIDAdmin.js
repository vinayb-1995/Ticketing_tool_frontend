import { useParams } from "react-router-dom";
import Headings from "../../../../components/Heading/Headings";
import { Col, Row } from "react-bootstrap";
import { InputField } from "../../../../components/InputField/InputField";
// import { DropdownField } from "../../../../components/Dropdown/DropdownField";
import ButtonStyle1 from "../../../../components/Buttons/ButtonStyle1";
import { FaRegAddressCard } from "react-icons/fa";
import { AiOutlineUserSwitch } from "react-icons/ai";
import {
  //   IoLockClosedOutline,
  IoPersonOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SecondaryHeader from "../../../../components/Heading/SecondaryHeader";

const AgentByIDAdmin = () => {
  const token = useSelector((state) => state.auth.token);
  // console.log("token>>",token)
  const [getAgentByIDAdmin, setAgentByIDAdmin] = useState();
  //   console.log(getAgentByIDAdmin);
  const { id } = useParams();
  const ticketID = id.slice(1).trim();
  //   console.log("id>>agent>>", ticketID);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/admin/agent/${ticketID}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch itid"); // Handle HTTP errors
        }
        const data = await response.json(); // Parse the JSON response
        setAgentByIDAdmin(data);
      } catch (err) {
        console.error(err.message); // Set error in case of a failure
      }
    };
    fetchData();
  }, [token, ticketID]);
  const handleSubmit = () => {
    console.log("handel submit");
  };
  return (
    <>
      <div className="mt-4 container createagent mb-4">
        <Headings navigtepath="/allagents" headingname={`Udate Agent`} />
        <form onSubmit={handleSubmit}>
          <Row>
        <SecondaryHeader header="Aget Detials" />
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                label="Full Name"
                placeholder="Full Name"
                name="fullname"
                value={getAgentByIDAdmin?.fullname}
                type="text"
                icon={<IoPersonOutline />}
                disabled={true}
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                label="Email"
                placeholder="Email"
                name="email"
                value={getAgentByIDAdmin?.email}
                type="text"
                icon={<MdAlternateEmail />}
                disabled={true}
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                label="Agent ID"
                placeholder="Agent ID"
                name="user_unique_ID"
                value={getAgentByIDAdmin?.user_unique_ID}
                type="text"
                icon={<MdAlternateEmail />}
                disabled={true}
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                label="Phone Number"
                placeholder="Phone Number"
                name="phoneNumber"
                value={getAgentByIDAdmin?.phoneNumber}
                type="text"
                icon={<IoPhonePortraitOutline />}
                disabled={true}
              />
            </Col>

            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                id="accountstatus"
                name="accountstatus"
                value={getAgentByIDAdmin?.accountStatus}
                label="Account Status"
                placeholder="Select account status"
                type="text"
                icon={<AiOutlineUserSwitch />}
                disabled={true}
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                id="department"
                name="department"
                value={getAgentByIDAdmin?.department}
                label="Department/Expertise"
                placeholder="Department/Expertise"
                type="text"
                icon={<FaRegAddressCard />}
                disabled={true}
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                id="group"
                name="group"
                value={getAgentByIDAdmin?.group}
                label="team/group"
                placeholder="team/group"
                type="text"
                icon={<FaRegAddressCard />}
                disabled={true}
              />
            </Col>
            <Col xs={12} md={12} lg={12} className="my-2">
            <SecondaryHeader header="Set Agent Admin" />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                id="agentadmin"
                name="agentadmin "
                // value={getAgentByIDAdmin?.group}
                label="Agent Admin"
                placeholder="Agent Admin"
                type="text"
                icon={<FaRegAddressCard />}
                // disabled={true}
              />
            </Col>
          </Row>
          <div className="mt-4">
            <ButtonStyle1 type="submit">Update</ButtonStyle1>
          </div>
        </form>
        {/* <ConformationModal
        title="Confirm Agent Details"
        // bodyText={getNewAgent}
        bodyText={getConformfields}
        isOpen={isOpen}
        onClose={onClose}
        onOk={handleOk}
      /> */}
      </div>
    </>
  );
};
export default AgentByIDAdmin;
