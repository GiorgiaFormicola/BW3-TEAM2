import JobsSection from "./JobsSection";
import Sidebar from "../Sidebar";
import { Col, Row, Container } from "react-bootstrap";

function JobsPage() {
  return (
    <>
      <Container fluid="md" className="mb-4">
        <Row className="justify-content-center">
          <Col lg={3} md={4} xs={12} className="mt-4">
            <Sidebar></Sidebar>
          </Col>
          <Col xs={12} lg={6} md={8} className="mt-4">
            <JobsSection></JobsSection>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default JobsPage;
