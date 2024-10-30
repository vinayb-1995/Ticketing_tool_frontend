import { Col, Row } from "react-bootstrap";
import { InputField } from "../../../components/InputField/InputField";
import { MdAlternateEmail } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa6";
import ButtonStyle1 from "../../../components/Buttons/ButtonStyle1";
import Headings from "../../../components/Heading/Headings";
import { useSelector } from "react-redux";
import { Divider, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DropdownField } from "../../../components/Dropdown/DropdownField";
import { TextAreaField } from "../../../components/TextAreaField/TextAreaField";
import ConformationModal from "../../../components/Modals/ConformationModal";

const departments = [
  { name: "IT", value: "it" },
  { name: "ERP", value: "erp" },
];

const subModules = [
  { name: "User Management", value: "user_management" },
  { name: "Access Control", value: "access_control" },
  { name: "Data Migration", value: "data_migration" },
  { name: "Reporting", value: "reporting" },
];

const issueTypes = [
  { name: "System Error", value: "system_error" },
  { name: "Access Issue", value: "access_issue" },
  { name: "Data Discrepancy", value: "data_discrepancy" },
  { name: "Performance Issue", value: "performance_issue" },
];

const CreateTickets = () => {
  /* customer data from redux */
  const customerData = useSelector((state) => state.customer.customerData);
  const customerName = `${customerData?.customerBody?.firstname || ""} ${
    customerData?.customerBody?.lastname || ""
  }`.trim();
  //   console.log("customerData>>", customerData);
  const [getNewTicket, setNewTicket] = useState({
    adminName: "",
    AdminID: "",
    customerName: "",
    customeID: "",
    cutomerMailID: "",
    customermobile: "",
    department: "",
    subModules: "",
    TypeofIssue: "",
    description: "",
  });
  // console.log('getNewTicket>>',getNewTicket)
  const [getConformfields, setConformfields] = useState({});

  // Update getConformfields whenever getNewTicket changes
  useEffect(() => {
    setConformfields({
      "Admin Name": getNewTicket.adminName,
      "Admin ID": getNewTicket.AdminID,
      "Customer Name": getNewTicket.customerName,
      "Customer ID": getNewTicket.customeID,
      "Customer Email": getNewTicket.cutomerMailID,
      "Customer Mobile": getNewTicket.customermobile,
      "Department": getNewTicket.department,
      "Sub Modules": getNewTicket.subModules,
      "Type of Issue": getNewTicket.TypeofIssue,
      "Description": getNewTicket.description,
    });
  }, [getNewTicket]);
  /* dropdown */
  const [getDropdownData, setDropdownData] = useState(null);
  useEffect(() => {
    // Prevent update if getDropdownData is null or undefined
    if (getDropdownData && getDropdownData.name && getDropdownData.textField) {
      setNewTicket((prevState) => {
        // Prevent setting state if the value is already the same to avoid re-renders
        if (prevState[getDropdownData.textField] === getDropdownData.name) {
          return prevState;
        }
        return {
          ...prevState,
          [getDropdownData.textField]: getDropdownData.name, // Update form field based on dropdown selection
        };
      });
    }
  }, [getDropdownData]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  /* Handle input changes */
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewTicket({
      ...getNewTicket,
      [name]: value,
      adminName: customerData?.customerBody?.adminDetails?.username,
      AdminID: customerData?.customerBody?.adminDetails?.email,
      customerName: customerName,
      customeID: customerData?.customerBody?.user_unique_ID || "",
      cutomerMailID: customerData?.customerBody?.email || "",
      customermobile: customerData?.customerBody?.mobile || "",
    });
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const tempErrors = {};

    if (!getNewTicket.department) {
      tempErrors.department = "Department is required";
    }
    if (!getNewTicket.subModules) {
      tempErrors.subModules = "Sub Module is required";
    }
    if (!getNewTicket.TypeofIssue) {
      tempErrors.TypeofIssue = "Type of Issue is required";
    }
    if (!getNewTicket.description) {
      tempErrors.description = "Description is required";
    } else if (getNewTicket.description.length > 1000) {
      tempErrors.description = "Description can't exceed 1000 characters";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  /* hande submit */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (newErrors) {
      console.log("getNewTicket", getNewTicket);
      // setFormData(getNewCustomer); // Save the data for modal display
      onOpen();
    }
  };
//handel Ok
const handleOk = async () => {
    console.log("ok try catch fetch post method here")
}
  return (
    <>
      <div className="mt-2 mb-4 container createcutomer">
        <Headings navigtepath="/" headingname="Create New Ticket" />
        <form onSubmit={handleSubmit}>
          <Row>
            <Col xs={12} md={12} lg={12} className="mt-2">
              <p className="mb-0 fs-5 fw-medium">Cutomer Details</p>
              <Divider
                className="m-0"
                borderColor="blue.400"
                borderWidth="0.5px"
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                label="Admin Name"
                placeholder="Admin Name"
                name="adminName"
                type="text"
                value={customerData?.customerBody?.adminDetails?.username || ""}
                onChange={handleChange}
                icon={<IoPersonOutline />}
                disabled={true}
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                label="Admin Mail-ID"
                placeholder="Admin Mail-ID"
                name="AdminID"
                type="text"
                value={customerData?.customerBody?.adminDetails?.email || ""}
                onChange={handleChange}
                icon={<IoPersonOutline />}
                disabled={true}
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                label="Customer Name"
                placeholder="Customer Name"
                name="customerName"
                type="text"
                value={customerName}
                onChange={handleChange}
                icon={<MdAlternateEmail />}
                disabled={true}
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                label="Customer ID"
                placeholder="Customer ID"
                value={customerData?.customerBody?.user_unique_ID || ""}
                name="customeID"
                type="text"
                onChange={handleChange}
                icon={<MdAlternateEmail />}
                disabled={true}
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                label="Customer Mail-ID"
                placeholder="Customer Mail-ID"
                name="cutomerMailID"
                type="text"
                value={customerData?.customerBody?.email || ""}
                onChange={handleChange}
                icon={<FiPhone />}
                disabled={true}
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <InputField
                label="Customer Contact Number"
                placeholder="Customer Contact Number"
                name="customermobile"
                type="text"
                value={customerData?.customerBody?.mobile || ""}
                onChange={handleChange}
                icon={<IoPhonePortraitOutline />}
                disabled={true}
              />
            </Col>
            <Col xs={12} md={12} lg={12} className="mt-2">
              <p className="mb-0 fs-5 fw-medium">
                Please Fill The Ticket Information
              </p>
              <Divider
                className="m-0"
                borderColor="blue.400"
                borderWidth="0.5px"
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <DropdownField
                index={0}
                label="Department(IT/ERP)"
                placeholder="Department/Expertise"
                id="Department(IT/ERP)"
                name="department"
                data={departments}
                setValue={setNewTicket?.department || ""}
                getvalue={setDropdownData}
                disabled={false}
                required={true}
                error={errors.department}
                icon={<IoLockClosedOutline />}
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <DropdownField
                index={0}
                label="Sub Modules"
                placeholder="Sub Modules"
                id="subModules"
                name="subModules"
                data={subModules}
                setValue={setNewTicket?.subModules || ""}
                getvalue={setDropdownData}
                disabled={false}
                required={true}
                error={errors.subModules}
                icon={<FaRegAddressCard />}
              />
            </Col>
            <Col xs={12} md={4} lg={4} className="my-2">
              <DropdownField
                index={0}
                label="Type of Issue"
                placeholder="Type of Issue"
                id="TypeofIssue"
                name="TypeofIssue"
                data={issueTypes}
                setValue={setNewTicket?.TypeofIssue || ""}
                getvalue={setDropdownData}
                disabled={false}
                required={true}
                error={errors.TypeofIssue}
                icon={<FaRegBuilding />}
              />
            </Col>
            <Col xs={12} md={8} lg={8} className="my-2">
              <TextAreaField
                label="Description of the Issue"
                name="description"
                id="description"
                placeholder="Describe your issue here..."
                onChange={handleChange}
                error={errors.description}
                icon={<FaRegAddressCard />}
                // required
                maxLength={1000}
                extraLabel="Please provide detailed information"
              />
            </Col>
          </Row>
          <div className="mt-4">
            <ButtonStyle1 type="submit">Create</ButtonStyle1>
          </div>
        </form>
        <ConformationModal
        title="Confirm Agent Details"
        // bodyText={getNewAgent}
        bodyText={getConformfields}
        isOpen={isOpen}
        onClose={onClose}
        onOk={handleOk}
      />
      </div>
    </>
  );
};
export default CreateTickets;
