import { Container, Row, Col } from "react-bootstrap";
import { SlPencil } from "react-icons/sl";
import { FiPlus } from "react-icons/fi";

function ProfileSections() {
  return (
    <>
      <Container fluid className="bg-light rounded-3 border p-0 my-3">
        <Row className="px-3 pt-3 align-items-start">
          <Col>
            <p className="fs-5 fw-bold mb-0">Esperienza</p>
          </Col>
          <Col xs="auto" className="d-flex gap-3">
            <FiPlus className="fs-4" />
            <SlPencil className="fs-5" />
          </Col>
        </Row>

        <Row className="px-3 py-3">
          <Col>
            <p className="fw-bold mb-0">Qui verranno inserite le tue esperienze</p>

            <hr />

            <p className="fw-bold mb-0">Esempio 1</p>
            <p className="mb-0">xxxxx · presso xxxx</p>
            <p className="text-muted mb-0"></p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-light rounded-3 border p-0 my-3">
        <Row className="px-3 pt-3 align-items-start">
          <Col>
            <p className="fs-5 fw-bold mb-0">Formazione</p>
          </Col>
          <Col xs="auto" className="d-flex gap-3">
            <FiPlus className="fs-4" />
            <SlPencil className="fs-5" />
          </Col>
        </Row>

        <Row className="px-3 py-3">
          <Col>
            <p className="fw-bold mb-0">Inserisci in questo campo i tuoi titoli di studio</p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-light rounded-3 border p-0 my-3">
        <Row className="px-3 pt-3 align-items-start">
          <Col>
            <p className="fs-5 fw-bold mb-0">Competenze</p>
          </Col>
          <Col xs="auto" className="d-flex gap-3">
            <FiPlus className="fs-4" />
            <SlPencil className="fs-5" />
          </Col>
        </Row>

        <Row className="px-3 py-3">
          <Col>
            <p className="fw-bold mb-1">Inserisci in questo campo le tue competenze</p>
            <p className="text-muted mb-3">xxxxx xxxxx</p>

            <hr />

            <p className="fw-bold mb-1">xxxxx</p>
            <p className="text-muted mb-0">xxxxx xxxxx</p>
          </Col>
        </Row>

        <div className="text-center fw-bold border-top py-2">Mostra tutto →</div>
      </Container>
    </>
  );
}

export default ProfileSections;
