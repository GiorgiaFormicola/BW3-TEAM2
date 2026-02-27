import { Col, Container, Row } from "react-bootstrap";
import FooterPart from "./FooterpPart";

function MyFooter() {
  return (
    // <Container fluid className="mt-5 px-0">
    <>
      <Row>
        <Col>
          <div className="fs-9 d-flex text-muted text-center gap-3 text-nowrap flex-wrap justify-content-center p-3 lh-1" style={{ fontSize: "0.7em" }}>
            <span>Informazioni</span>
            <span>Accessibilità</span>
            <span>Centro assistenza</span>
            <span>Privacy e condizioni ▼</span>
            <span>Opzioni per gli annunci pubblicitari</span>
            <span>Pubblicità</span>
            <span>Servizi alle aziende ▼</span>
            <span>Scarica l'app Linkedin</span>
            <span>Altro</span>
          </div>
        </Col>

        {/* <Col className="fs-9 mb-3" xs={4}>
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
        </Col> */}
      </Row>
      <FooterPart />
      {/* </Container> */}
    </>
  );
}

export default MyFooter;
