import { Container, Row, Col, Button } from "react-bootstrap";

const Activity = ({ profile }) => {
  return (
    <Container fluid className="bg-light rounded-3 border p-0 my-3 lh-sm">
      <Row className="px-3 pt-3 align-items-start">
        <Col>
          <p className="fs-5 fw-bold mb-1">Attività</p>
          <p className="text-primary fs-9 mb-0">Follower: {profile.followers ?? 0}</p>
        </Col>
        <Col xs="auto">
          <Button className="rounded-4 border border-primary text-primary p-2 fs-7 fw-bold">Crea un post</Button>
        </Col>
      </Row>

      <Row className="px-3 pb-3 pt-2">
        <Col>
          <p className="fs-6 fw-bold mb-1">Non hai ancora pubblicato nulla</p>
          <p className="fs-9 mb-0">I post che condividi appariranno qui</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Activity;
