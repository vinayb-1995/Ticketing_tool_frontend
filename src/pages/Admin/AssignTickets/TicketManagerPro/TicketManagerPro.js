import { Col, Row } from "react-bootstrap";
import { MdAlternateEmail } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa6";
import Headings from "../../../../components/Heading/Headings";
import ButtonStyle1 from "../../../../components/Buttons/ButtonStyle1";
import { InputField } from "../../../../components/InputField/InputField";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Divider } from "@chakra-ui/react";
import { TextAreaField } from "../../../../components/TextAreaField/TextAreaField";

const TicketManagerPro = () => {
  const token = useSelector((state) => state.auth.token);
  const { id } = useParams(); // Get the ID from the URL
  const ticketID = id.slice(1).trim();
  const [getTicketData, setTicketData] = useState(null);
  console.log("getTicketData", getTicketData);
  // useEffect(async () =>{
  //   try {
  //     const response = await fetch(
  //         `http://localhost:5000/api/admin/tickets/${ticketID}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const ticketData = await response.json();

  //     return setTicketData(ticketData); // Assuming data is an array of customer objects
  //   } catch (error) {
  //     return console.error(error.message);
  //   }
  // },ticketID,token)
  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/admin/tickets/${ticketID}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTicketData(data); // Assuming data is an object representing the ticket
      } catch (error) {
        console.error(error.message);
      }
    };

    if (ticketID && token) {
      // Ensure ticketID and token are valid before fetching
      fetchTicketData();
    }
  }, [ticketID, token]);
  return (
    <div className="mt-4 mb-4 container createcutomer">
      <Headings
        navigtepath="/assignticketstable"
        headingname="Ticket Mangement"
        ticketID={ticketID}
      />
      <form>
        <Row>
          <Col xs={12} md={12} lg={12} className="mt-2">
            <p className="mb-0 fs-5 fw-medium">Ticket Details</p>
            <Divider
              className="m-0"
              borderColor="blue.400"
              borderWidth="0.5px"
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Ticket ID"
              // placeholder="Admin Name"
              name="uniqueticketID"
              type="text"
              value={getTicketData?.uniqueticketID || ""}
              // value={customerData?.customerBody?.adminDetails?.username || ""}
              // onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={true}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Customer Name"
              // placeholder="Admin Name"
              name="customerName"
              type="text"
              value={getTicketData?.customerName || ""}
              // value={customerData?.customerBody?.adminDetails?.username || ""}
              // onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={true}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Start Date and Time"
              // placeholder="Admin Name"
              name="createdAt"
              type="text"
              value={getTicketData?.createdAt || ""}
              // value={customerData?.customerBody?.adminDetails?.username || ""}
              // onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={true}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Customer Mail ID"
              // placeholder="Admin Name"
              name="customerMailID"
              type="text"
              value={getTicketData?.customerMailID || ""}
              // value={customerData?.customerBody?.adminDetails?.username || ""}
              // onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={true}
            />
          </Col>
          
          
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="department"
              // placeholder="Admin Name"
              name="department"
              type="text"
              value={getTicketData?.department || ""}
              // value={customerData?.customerBody?.adminDetails?.username || ""}
              // onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={true}
            />
          </Col>
          
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Sub Module"
              // placeholder="Admin Name"
              name="subModule"
              type="text"
              value={getTicketData?.subModule || ""}
              // value={customerData?.customerBody?.adminDetails?.username || ""}
              // onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={true}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Type of Issue"
              // placeholder="Admin Name"
              name="issueType"
              type="text"
              value={getTicketData?.issueType || ""}
              // value={customerData?.customerBody?.adminDetails?.username || ""}
              // onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={true}
            />
          </Col>
          <Col xs={12} md={8} lg={8} className="my-2">
            <TextAreaField
                label="Description of the Issue"
                name="description"
                id="description"
                value={getTicketData?.description || ""}
                disabled={true}
                // placeholder="Describe your issue here..."
                // onChange={handleChange}
                // error={errors.description}
                icon={<FaRegAddressCard />}
                // required
                // maxLength={1000}
                // extraLabel="Please provide detailed information"
              />
          </Col>
          <Col xs={12} md={12} lg={12} className="mt-2">
            <p className="mb-0 fs-5 fw-medium">Extra Details</p>
            <Divider
              className="m-0"
              borderColor="blue.400"
              borderWidth="0.5px"
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Status (dropdown)"
              placeholder="Status"
              name="issueType"
              type="text"
              // value={getTicketData?.issueType || ""}
              // value={customerData?.customerBody?.adminDetails?.username || ""}
              // onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={false}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="End Date and Time"
              placeholder="End Date and Time"
              name="issueType"
              type="date"
              // value={getTicketData?.issueType || ""}
              // value={customerData?.customerBody?.adminDetails?.username || ""}
              // onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={false}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Assign Agents(dropdown)"
              placeholder="Assign Agents"
              name="Assign Agents"
              type="text"
              // value={getTicketData?.issueType || ""}
              // value={customerData?.customerBody?.adminDetails?.username || ""}
              // onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={false}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="WRICEF (dropdown)"
              placeholder="WRICEF"
              name="WRICEF"
              type="text"
              // value={getTicketData?.issueType || ""}
              // value={customerData?.customerBody?.adminDetails?.username || ""}
              // onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={false}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Actual hrs"
              placeholder="1-24"
              name="issueType"
              type="text"
              // value={getTicketData?.issueType || ""}
              // value={customerData?.customerBody?.adminDetails?.username || ""}
              // onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={false}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Planed hrs"
              placeholder="1-24"
              name="Planed"
              type="text"
              // value={getTicketData?.issueType || ""}
              // value={customerData?.customerBody?.adminDetails?.username || ""}
              // onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={false}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Actual cost "
              placeholder="Actual cost "
              name="Actual"
              type="text"
              // value={getTicketData?.issueType || ""}
              // value={customerData?.customerBody?.adminDetails?.username || ""}
              // onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={false}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="planed  cost"
              placeholder="planed  cost"
              name="planed  cost"
              type="text"
              // value={getTicketData?.issueType || ""}
              // value={customerData?.customerBody?.adminDetails?.username || ""}
              // onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={false}
            />
          </Col>
        </Row>
        <div className="mt-4">
          <ButtonStyle1 type="submit">Update</ButtonStyle1>
        </div>
      </form>
    </div>
  );
};
export default TicketManagerPro;
