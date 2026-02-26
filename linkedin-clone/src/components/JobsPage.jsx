import JobsSection from "./JobsSection";
import Sidebar from "../Sidebar";
import { Col, Row, Container } from "react-bootstrap";

function JobsPage() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={3} className="mt-4">
            <Sidebar></Sidebar>
          </Col>
          <Col xs={7} className="mt-4">
            <JobsSection></JobsSection>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default JobsPage;
