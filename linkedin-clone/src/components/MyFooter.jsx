import { Col, Container, Row } from "react-bootstrap";
import Part2 from "./FooterpPart";
import { MdSos } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoShieldHalf } from "react-icons/io5";
import { Dropdown } from "react-bootstrap";
function MyFooter() {
  return (
    <Container className="mt-5">
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
      <Row>
        <Col xs={8}>
          <Row>
            <Col xs={1}>
              <FaQuestionCircle className="fs-4 me-1" />
            </Col>
            <Col xs={11} className="mb-3">
              <p className="text-secondary fw-bold d-flex align-items-center">Domande?</p>
              <p className="fs-9">Visita il nostro Centro assistenza.</p>
            </Col>
            <Col xs={1}>
              <IoMdSettings className="fs-4 me-1" />
            </Col>
            <Col xs={11} className="mb-3">
              <p className="text-secondary fw-bold d-flex align-items-center">Gestisci il tuo account e la tua privacy</p>
              <p className="fs-9">Vai alle impostazioni</p>
            </Col>
            <Col xs={1}>
              <IoShieldHalf className="fs-4 me-1" />
            </Col>
            <Col xs={11} className="mb-3">
              <p className="text-secondary fw-bold d-flex align-items-center">Trasparenza sui contenuti consigliati</p>
              <p className="fs-9">Scopri di più sui contenuti consigliati.</p>
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <Dropdown>
            <Dropdown.Toggle variant="white" className="border border-black rounded-0 py-1 px-5" id="dropdown-basic">
              Italiano
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">English</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Deustch</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
}

export default MyFooter;
