import { Col, Container, Row } from "react-bootstrap";
import { SlPencil } from "react-icons/sl";
function Activity() {
  return (
    <Container fluid className="bg-white rounded-3 border p-0 my-3 lh-sm">
      <Row className="px-3 pt-3 align-items-start">
        <Col>
          <p className="fs-5 fw-bold mb-1">Attività</p>
          <p className="text-primary fs-9 mb-0">3 follower</p>
        </Col>

        <Col xs="auto">
          <button className="rounded-4 border border-primary text-primary p-2 fs-7 fw-bold">Crea un post</button>
          <SlPencil className="fs-5 ms-3" />
        </Col>
      </Row>

      <Row className="px-3 pb-3 pt-2">
        <Col>
          <p className="fs-6 fw-bold mb-1">Non hai ancora pubblicato nulla</p>
          <p className="fs-9 mb-0">I post che condividi appariranno qui</p>
        </Col>
      </Row>

      <div className="text-center fw-bold border-top py-2">Mostra tutto</div>
    </Container>
  );
}

export default Activity;
