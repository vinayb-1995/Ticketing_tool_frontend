import { useNavigate, useParams } from "react-router-dom";
import Headings from "../../../../components/Heading/Headings";
import { Col, Row } from "react-bootstrap";
import { InputField } from "../../../../components/InputField/InputField";
// import { DropdownField } from "../../../../components/Dropdown/DropdownField";
// import ButtonStyle1 from "../../../../components/Buttons/ButtonStyle1";
import { FaRegAddressCard } from "react-icons/fa";
import { AiOutlineUserSwitch } from "react-icons/ai";
import {
    // IoLockClosedOutline,
  IoPersonOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SecondaryHeader from "../../../../components/Heading/SecondaryHeader";
// import { DropdownField } from "../../../../components/Dropdown/DropdownField";
import ModalComponentSuccess from "../../../../components/Modals/ModalComponentSuccess";
import { useDisclosure } from "@chakra-ui/react";
import { DropdownField } from "../../../../components/Dropdown/DropdownField";
import { FaRegBuilding } from "react-icons/fa6";

// const accoutnStatusDropDownOption = [
//   { name: "Admin", value: true },
//   { name: "User", value: false },
// ];
// const contactMethod = [
//   { name: "Mail", value: "mail" },
//   { name: "Mobile", value: "Mobile" },
// ];
const CustomerByID = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  // console.log("token>>",token)
  const [getcustomerByID, setCustomerByID] = useState();
  console.log(getcustomerByID);
  const { id } = useParams();
  const customerId = id.slice(1).trim();
  console.log(">>customerId",customerId)
  // const [getDropdownData, setDropdownData] = useState(null);
  //   console.log("getDropdownData>>", getDropdownData?.value);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/admin/customer/${customerId}`,
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
        setCustomerByID(data);
      } catch (err) {
        console.error(err.message); // Set error in case of a failure
      }
    };
    fetchData();
  }, [token, customerId]);
  //   const [getNewAgent, setNewAgent] = useState({
  //   });
  //   console.log("getNewAgent",getNewAgent)

  const handleSubmit = async (event) => {
    event.preventDefault();
    onOpen();
    // console.log("handel submit>>", getDropdownData?.value);
    // console.log("agent ID>>", getcustomerByID?.user_unique_ID);
    // if (getcustomerByID?.department === "IT") {
    //   if (getDropdownData?.value === true) {
    //     try {
    //       const response = await fetch(
    //         "http://localhost:5000/api/admin/updateAdminAgentByIdIt",
    //         {
    //           method: "PATCH", // Use PATCH for partial update
    //           headers: {
    //             "Content-Type": "application/json",
    //             Authorization: `Bearer ${token}`, // Include token if needed
    //           },
    //           body: JSON.stringify({
    //             agentAdminIT: false,
    //           }),
    //         }
    //       );

    //       if (!response.ok) {
    //         throw new Error("Failed to update agent admin status");
    //       }
    //       // const data = await response.json();
    //       // console.log("Agent admin status updated successfully:", data);
    //     } catch (error) {
    //       console.error("Error updating agent admin status:", error.message);
    //     }
    //   }
    //   try {
    //     const response = await fetch(
    //       `http://localhost:5000/api/admin/updateAgentByIdIt/${getcustomerByID?.user_unique_ID}`,
    //       {
    //         method: "PUT", // Use PUT to update
    //         headers: {
    //           "Content-Type": "application/json",
    //           Authorization: `Bearer ${token}`, // Include token if needed
    //         },
    //         body: JSON.stringify({
    //           agentAdminIT: getDropdownData?.value,
    //         }),
    //       }
    //     );
    //     if (!response.ok) {
    //       throw new Error("Failed to update agent status");
    //     }
    //     if (response.ok) {
    //       onOpen();
    //     }
    //     // const data = await response.json();
    //     // console.log("Agent updated successfully:", data);
    //   } catch (error) {
    //     console.error("Error updating agent:", error.message);
    //   }
    // } else if (getcustomerByID?.department === "SAP") {
    //   if (getDropdownData?.value === true) {
    //     try {
    //       const response = await fetch(
    //         "http://localhost:5000/api/admin/updateAdminAgentByIdSap",
    //         {
    //           method: "PATCH", // Use PATCH for partial update
    //           headers: {
    //             "Content-Type": "application/json",
    //             Authorization: `Bearer ${token}`, // Include token if needed
    //           },
    //           body: JSON.stringify({
    //             agentAdminSAP: false,
    //           }),
    //         }
    //       );

    //       if (!response.ok) {
    //         throw new Error("Failed to update agent admin status");
    //       }

    //       // const data = await response.json();
    //       // console.log("Agent admin status updated successfully:", data);
    //     } catch (error) {
    //       console.error("Error updating agent admin status:", error.message);
    //     }
    //   }
    //   try {
    //     const response = await fetch(
    //       `http://localhost:5000/api/admin/updateAgentByIdSap/${getcustomerByID?.user_unique_ID}`,
    //       {
    //         method: "PUT", // Use PUT to update
    //         headers: {
    //           "Content-Type": "application/json",
    //           Authorization: `Bearer ${token}`, // Include token if needed
    //         },
    //         body: JSON.stringify({
    //           agentAdminSAP: getDropdownData?.value,
    //         }),
    //       }
    //     );
    //     if (!response.ok) {
    //       throw new Error("Failed to update agent status");
    //     }
    //     if (response.ok) {
    //       onOpen();
    //     }
    //     // const data = await response.json();
    //     // console.log("Agent updated successfully:", data);
    //   } catch (error) {
    //     console.error("Error updating agent:", error.message);
    //   }
    // }
  };
  const handleOk = () => {
    onClose();
    navigate("/allagents");
    // Additional actions can be added here if needed
  };

  //dropdown data store
  // const [preferedContact, setPreferedContact] = useState({ name: "", value: "" });

  // useEffect(() => {
  //   if (getcustomerByID?.preferedcontactmethod) {
  //     setPreferedContact({
  //       name: getcustomerByID.preferedcontactmethod,
  //       value: getcustomerByID.preferedcontactmethod
  //     });
  //   }
  // }, [getcustomerByID]);
  
  console.log(">>dataPreferContact",  getcustomerByID?.preferedcontactmethod);
  
  


  return (
    <>
      <div className="mt-4 container createagent mb-4">
        <Headings navigtepath="/allcustomer" headingname={`Customer`} />
        <form onSubmit={handleSubmit}>
          <Row>
            <SecondaryHeader header="Customer Detials" />
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                label="First Name"
                placeholder="First Name"
                name="firstname"
                type="text"
                value={getcustomerByID?.firstname||""}
                // onChange={handleChange}
                icon={<IoPersonOutline />}
                disabled={true}
                // error={errors.firstname}
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                label="Last Name"
                placeholder="Last Name"
                name="lastname"
                type="text"
                // onChange={handleChange}
                value={getcustomerByID?.lastname||""}
                icon={<IoPersonOutline />}
                // error={errors.lastname}
                disabled={true}
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <DropdownField
                index={0}
                id="preferedcontactmethod"
                name="preferedcontactmethod"
                label="Preferred Contact Method"
                // placeholder="Preferred Contact Method"
                // data={contactMethod} // Options for dropdown
                setValue={
                  getcustomerByID?.preferedcontactmethod
                    ? { name: getcustomerByID.preferedcontactmethod, value: getcustomerByID.preferedcontactmethod }
                    : null
                } // Ensure it's a string
                // getvalue={setPreferedContact} // Set dropdown data on change
                disabled={true}
                required={true}
                // error={errors.preferedcontactmethod}
                icon={<FaRegAddressCard />}
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                label="Email"
                placeholder="Email"
                name="email"
                type="text"
                value={getcustomerByID?.email||""}
                // onChange={handleChange}
                icon={<MdAlternateEmail />}
                disabled={true}
                // error={errors.email}
              />
            </Col>

            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                label="Secondary Email"
                placeholder="Secondary Email"
                name="secondaryemail"
                type="text"
                value={getcustomerByID?.secondaryemail||""}
                // onChange={handleChange}
                icon={<MdAlternateEmail />}
                // error={errors.secondaryemail}
                disabled={true}
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                label="Mobile"
                placeholder="Mobile"
                name="mobile"
                type="text"
                value={getcustomerByID?.mobile||""}
                // onChange={handleChange}
                icon={<IoPhonePortraitOutline />}
                // error={errors.mobile}
                disabled={true}
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                label="Alternative Mobile"
                placeholder="Alternative Mobile"
                name="alternativemobile"
                type="text"
                value={getcustomerByID?.alternativemobile||""}
                // onChange={handleChange}
                icon={<IoPhonePortraitOutline />}
                // error={errors.alternativemobile}
                disabled={true}
              />
            </Col>
            {/* <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                label="Password"
                placeholder="Password"
                name="password"
                type="text"
                value={getcustomerByID?.password||""}
                // onChange={handleChange}
                icon={<IoLockClosedOutline />}
                // error={errors.password}
                disabled={true}
              />
            </Col> */}
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                label="Company/Orgnization Name"
                placeholder="Company/Orgnization Name"
                name="companyorgnizationname"
                type="text"
                value={getcustomerByID?.companyorgnizationname||""}
                // onChange={handleChange}
                icon={<FaRegBuilding />}
                // error={errors.companyorgnizationname}
                disabled={true}
              />
            </Col>

            <Col xs={12} md={4} lg={4} className="my-2">
              <DropdownField
                index={0}
                id="accountstatus"
                name="accountstatus"
                label="Account Status"
                placeholder="Select account status"
                // data={accoutnStatusDropDownOption} // Options for dropdown
                setValue={getcustomerByID?.accountstatus||""} // Pre-filled value
                // getvalue={setDropdownData} // Set dropdown data on change
                disabled={true}
                required={true}
                // error={errors.accountstatus} // Display error if exists
                icon={<AiOutlineUserSwitch />}
              />
            </Col>
          </Row>
          {/* <div className="mt-4">
            <ButtonStyle1 >Update</ButtonStyle1>
          </div> */}
        </form>
        <ModalComponentSuccess
          isOpen={isOpen}
          onClose={onClose}
          title="Registration Successful"
          bodyText={`${getcustomerByID?.fullname} is Know for ${getcustomerByID?.department} Department`}
          onOk={handleOk}
        />
      </div>
    </>
  );
};
export default CustomerByID;
