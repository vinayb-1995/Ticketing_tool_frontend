import { Col, Row } from "react-bootstrap";
import NavigationBackButton from "../../../components/Buttons/NavigationBackButton";
import { Divider } from "@chakra-ui/react";

const CreateAgent = () => {
  return (
    <div className="mt-4 container createagent">
      <Row className="d-flex align-items-center">
        <Col xs={3} md={1} lg={1}>
        <NavigationBackButton navigtepath={"/adminhome"}/>
        </Col>
        <Col xs={9} md={9} lg={9} className="creat-agent-heading">
        <p>New Agent Registration</p>
        </Col>
      </Row>
      <Divider borderColor="blue.400" borderWidth="2px" />
      <Row>
      <Col xs={12} md={12} lg={12}>
        
        </Col>
      </Row>
    </div>
  );
};
export default CreateAgent;
