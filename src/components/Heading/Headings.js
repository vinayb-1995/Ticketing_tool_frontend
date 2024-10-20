import { Col, Row } from "react-bootstrap";
import NavigationBackButton from "../Buttons/NavigationBackButton";
import { Divider } from "@chakra-ui/react";

const Headings = ({navigtepath,headingname}) => {
  return (
    <div className="mt-4 container secondary-headings">
      <Row className="d-flex align-items-center">
        <Col xs={3} md={1} lg={1}>
          <NavigationBackButton navigtepath={navigtepath} />
        </Col>
        <Col xs={9} md={9} lg={9} className="heading-name">
          <p>{headingname}</p>
        </Col>
      </Row>
      <Divider borderColor="blue.400" borderWidth="2px" />
    </div>
  );
};
export default Headings;
