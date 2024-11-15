import { Col, Row } from "react-bootstrap";
import { IoPersonOutline } from "react-icons/io5";

import { FaRegAddressCard } from "react-icons/fa6";
import Headings from "../../../../components/Heading/Headings";
import ButtonStyle1 from "../../../../components/Buttons/ButtonStyle1";
import { InputField } from "../../../../components/InputField/InputField";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "@chakra-ui/react";
import { TextAreaField } from "../../../../components/TextAreaField/TextAreaField";
import { DropdownField } from "../../../../components/Dropdown/DropdownField";
import { AiOutlineUserSwitch } from "react-icons/ai";
import Toast from "../../../../components/Toast/Toast";
import { fetchAgentsAllData } from "../../../../features/slice/fetchAgentsAllData";
import { FaEdit } from "react-icons/fa";

const accoutnStatusDropDownOption = [
  { name: "open", value: "open" },
  { name: "close", value: "close" },
  { name: "pending", value: "pending" },
  { name: "resolved", value: "resolved" },
];
const WRICEFTypes = [
  { name: "Workflow", value: "workflow" },
  { name: "Reports", value: "reports" },
  { name: "Interfaces", value: "interfaces" },
  { name: "Conversions", value: "conversions" },
  { name: "Enhancements", value: "enhancements" },
  { name: "Forms", value: "forms" },
];
const TicketManagerPro = () => {
  const token = useSelector((state) => state.auth.token);
  const allAgentsData = useSelector((state) => state.allAgents.allAgentsData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { showToast } = Toast();
  const { id } = useParams(); // Get the ID from the URL
  const ticketID = id.slice(1).trim();
  const [getTicketData, setTicketData] = useState(null);
  const [getAllagents, setAllagents] = useState(null);
  const [geticketUpdate, seticketUpdate] = useState({
    plannedCost: "",
    actualCost: "",
    plannedHrs: "",
    actualHrs: "",
    wricef: "",
    agentId: "",
    status: "",
    endDateAdnTime: "",
    adminDescription: "",
  });
  console.log("geticketUpdate>>", geticketUpdate);
  console.log("getTicketData>>", getTicketData);
  console.log("getAllagents>>", getAllagents);

  // console.log("getTicketData isAssigned >>", getTicketData?.adminAssigned?.isAssigned);
  // console.log("getTicketData statu >>", getTicketData?.status);
  const status = getTicketData?.status;
  const isAssigned = getTicketData?.adminAssigned?.isAssigned;
  console.log("getTicketData isAssigned >>", isAssigned);

  const [gettogglefield, settogglefield] = useState();
  useEffect(() => {
    settogglefield(isAssigned);
  }, [isAssigned]);
  const handelEdit = () => {
    settogglefield(!gettogglefield);
  };

  console.log("gettogglefield", gettogglefield);
  const agentUsersIT = getAllagents?.filter(
    (agent) => agent?.agentAdminIT === false && agent?.department === "IT"
  );
  const agentsITID = (agentUsersIT || []).map(
    (agetnsitid) => agetnsitid?.user_unique_ID
  );
  // console.log("agentsITID>>",agentsITID)
  // console.log("agentUsersIT >>", agentUsersIT.map((agetnsitid)=>agetnsitid?.user_unique_ID));
  const agentUsersSAP = getAllagents?.filter(
    (agent) => agent?.agentAdminSAP === false && agent?.department === "SAP"
  );
  const agentsSAPId = (agentUsersSAP || []).map(
    (agetnsitid) => agetnsitid?.user_unique_ID
  );
  // console.log("agentsSAPId",agentsSAPId)
  // console.log("agentUsersSAP>>", agentUsersSAP.map((agetnsitid)=>agetnsitid?.user_unique_ID));
  const [getDropdownData, setDropdownData] = useState(null);

  useEffect(() => {
    dispatch(fetchAgentsAllData());

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
    setAllagents(allAgentsData);
    if (getDropdownData) {
      if (
        typeof getDropdownData === "object" &&
        getDropdownData.textField &&
        getDropdownData.name
      ) {
        seticketUpdate((prevState) => ({
          ...prevState,
          [getDropdownData.textField]: getDropdownData.name,
        }));
        // Handle the case where getDropdownData is a simple string
      } else {
        const isObject = typeof getDropdownData === "object";
        const result = isObject
          ? Object.values(getDropdownData).join("")
          : getDropdownData;
        const agentsid = result.split("").splice(0, 10).join("");
        // Handle the case where getDropdownData is an object with textField and name
        seticketUpdate((prevState) => ({
          ...prevState,
          agentId: agentsid,
        }));
      }
    }
    if (ticketID && token) {
      // Ensure ticketID and token are valid before fetching
      fetchTicketData();
    }
    // if (token) {
    //   fetchAllAgentData();
    // }
  }, [ticketID, token, getDropdownData, allAgentsData, dispatch]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    seticketUpdate({
      ...geticketUpdate,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = geticketUpdate;
    try {
      const response = await fetch(
        `http://localhost:5000/api/tickets/assignTickets/${ticketID}`,
        {
          method: "PUT", // HTTP Method (PUT in this case)
          headers: {
            "Content-Type": "application/json", // Specify that the request body is JSON
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming JWT is stored in localStorage
          },
          body: JSON.stringify(data), // Convert the data to JSON format
        }
      );
      if (response.ok) {
        navigate(isAssigned ? "/assignedtickets" : "/assignticketstable");
        showToast({
          title: "",
          message: `agent updated`,
          status: "success",
        });
      }
    } catch (error) {
      showToast({
        title: "Error",
        message: "Some thing went wrong pleas login again.",
        status: "warning",
      });
    }
  };

  return (
    <div className="mt-4 mb-4 container createcutomer">
      <Headings
        navigtepath={`${
          isAssigned ? "/assignedtickets" : "/assignticketstable"
        }`}
        headingname="Ticket Mangement"
        ticketID={ticketID}
      />
      <form onSubmit={handleSubmit}>
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
            <p className="mb-0 fs-5 fw-medium d-flex justify-content-start align-items-cente`r">
              Extra Details
              <span
                className={`mb-0 fs-5 ms-4 fw-medium ${
                  isAssigned ? "d-block" : "d-none"
                }`}
                style={{ cursor: "pointer" }}
                onClick={handelEdit}
              >
                <FaEdit />
              </span>
            </p>
            <Divider
              className="m-0"
              borderColor="blue.400"
              borderWidth="0.5px"
            />
          </Col>
          {/* =============================divider================================== */}
          {/* <Col xs={12} md={12} lg={12} className="mt-2">
            <span
              className={`mb-0 fs-5 fw-medium ${
                isAssigned ? "d-inline" : "d-none"
              }`}
              style={{ cursor: "pointer" }}
              onClick={handelEdit}
            >
              <FaEdit />
            </span>
          </Col> */}
          <Col xs={12} md={4} lg={4} className="my-2">
            {/* <InputField
            className={`${getassigned} ? "d-none" : "d-block"`}
              label="Account status"
              placeholder="status"
              name="status"
              type="text"
              value={"open"}
              onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={false}
            /> */}
            <DropdownField
              index={0}
              id="status"
              name="status"
              label="Account Status"
              placeholder={status || "open"}
              data={accoutnStatusDropDownOption}
              setValue={(!isAssigned && status) || "open" || ""}
              getvalue={setDropdownData} // Set dropdown data on change
              disabled={gettogglefield ? true : isAssigned ? false : true}
              required={true}
              // error={errors.accountstatus}
              icon={<AiOutlineUserSwitch />}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="End Date and Time"
              placeholder={
                getTicketData?.adminAssigned?.endDateAdnTime ||
                "End Date and Time"
              }
              name="endDateAdnTime"
              type={gettogglefield ? "text" : "date"}
              // value={customerData?.customerBody?.adminDetails?.username || ""}
              onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={gettogglefield}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <DropdownField
              index={0}
              id="agentId"
              name="agentId"
              label="Assign Agents"
              placeholder={
                getTicketData?.adminAssigned?.assignedTo || "Assign Agents"
              }
              data={
                getTicketData?.department === "IT" ? agentsITID : agentsSAPId
              } // Options for dropdown
              // setValue={} // Pre-filled value
              getvalue={setDropdownData} // Set dropdown data on change
              disabled={gettogglefield}
              required={true}
              // error={errors.accountstatus}
              icon={<AiOutlineUserSwitch />}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <DropdownField
              index={0}
              id="wricef"
              name="wricef"
              label="WRICEF"
              placeholder={getTicketData?.adminAssigned?.wricef || "WRICEF"}
              data={WRICEFTypes} // Options for dropdown
              // setValue={getNewAgent?.accountstatus} // Pre-filled value
              getvalue={setDropdownData} // Set dropdown data on change
              disabled={gettogglefield}
              required={true}
              // error={errors.accountstatus}
              icon={<AiOutlineUserSwitch />}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Actual hrs"
              // placeholder="1-24"
              placeholder={getTicketData?.adminAssigned?.actualHrs || "1-24"}
              name="actualHrs"
              type="text"
              // value={getTicketData?.adminAssigned?.actualHrs || ""}
              onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={gettogglefield}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Planed hrs"
              placeholder={getTicketData?.adminAssigned?.plannedHrs || "1-24"}
              name="plannedHrs"
              type="text"
              // value={getTicketData?.adminAssigned?.plannedHrs || ""}
              onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={gettogglefield}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="Actual cost "
              // placeholder="Actual cost"
              placeholder={
                getTicketData?.adminAssigned?.actualCost || "Actual cost"
              }
              name="actualCost"
              type="text"
              // value={getTicketData?.adminAssigned?.actualCost || ""}
              onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={gettogglefield}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <InputField
              label="planed  cost"
              // placeholder="planed  cost"
              placeholder={
                getTicketData?.adminAssigned?.plannedCost || "planed  cost"
              }
              name="plannedCost"
              type="text"
              // value={getTicketData?.adminAssigned?.plannedCost || ""}
              onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={gettogglefield}
            />
          </Col>
          <Col xs={12} md={4} lg={4} className="my-2">
            <TextAreaField
              label="Description of the Admin"
              placeholder={
                getTicketData?.adminAssigned?.adminDescription ||
                "Description of the Admin"
              }
              name="adminDescription"
              id="adminDescription"
              disabled={gettogglefield}
              // value={getTicketData?.adminAssigned?.adminDescription || ""}
              // placeholder="Describe your issue here..."
              onChange={handleChange}
              // error={errors.description}
              icon={<IoPersonOutline />}
              // required
              // maxLength={1000}
              // extraLabel="Please provide detailed information"
            />
            {/* <InputField
              label="planed  cost"
              placeholder="planed  cost"
              name="plannedCost"
              type="text"
              onChange={handleChange}
              icon={<IoPersonOutline />}
              disabled={false}
            /> */}
          </Col>
        </Row>
        <div className={`mt-4 ${gettogglefield ? "d-none" : "d-block"}`}>
          <ButtonStyle1 type="submit">Update</ButtonStyle1>{" "}
        </div>
      </form>
    </div>
  );
};
export default TicketManagerPro;
