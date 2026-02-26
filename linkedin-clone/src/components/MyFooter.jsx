import { Col, Container, Row } from "react-bootstrap";
import FooterPart from "./FooterpPart";

function MyFooter() {
  return (
    <Container fluid className="mt-5 px-0">
      <Row>
        <Col className="fs-9 mb-3" xs={4}>
          Informazioni
        </Col>
        <Col className="fs-9 mb-3" xs={4}>
          Accessibilità
        </Col>
        <Col className="fs-9 mb-3" xs={4}>
          Talent Solutions
        </Col>
        <Col className="fs-9 mb-3" xs={4}>
          Linee guida della community
        </Col>
        <Col className="fs-9 mb-3" xs={4}>
          Carriera
        </Col>
        <Col className="fs-9 mb-3" xs={4}>
          Soluzioni di marketing
        </Col>
        <Col className="fs-9 mb-3" xs={4}>
          Privacy e condizioni
        </Col>
        <Col className="fs-9 mb-3" xs={4}>
          Opzioni per gli annunci pubblicitari
        </Col>
        <Col className="fs-9 mb-3" xs={4}>
          Pubblicità
        </Col>
        <Col className="fs-9 mb-3" xs={4}>
          Sales Solutions
        </Col>
        <Col className="fs-9 mb-3" xs={4}>
          Mobile
        </Col>
        <Col className="fs-9 mb-3" xs={4}>
          Piccole imprese
        </Col>
        <Col className="fs-9 mb-3" xs={4}>
          Centro sicurezza
        </Col>
      </Row>
      <FooterPart />
    </Container>
  );
}

export default MyFooter;
