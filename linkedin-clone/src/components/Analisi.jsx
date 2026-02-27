import { Col, Container, Row } from "react-bootstrap";
import { MdSupervisorAccount } from "react-icons/md";
import { IoIosStats } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
function Analisi() {
  return (
    <Container fluid className="bg-white rounded-3 border p-0">
      <div className="px-3 pt-3">
        <p className="fs-5 fw-bold mb-1">Attività</p>
        <p className="fs-9 mb-0">
          Visibile solo a te <IoEye />
        </p>
      </div>
      <Row className="px-3 py-3 g-4">
        <Col md={4}>
          <div className="d-flex align-items-start gap-3">
            <MdSupervisorAccount className="fs-3 flex-shrink-0" />
            <div>
              <p className="fw-bold mb-1">Visualizzazioni del profilo</p>
              <p className="fs-9 mb-0">Scopri chi ha visitato il tuo profilo</p>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex align-items-start gap-3">
            <IoIosStats className="fs-4 flex-shrink-0" />
            <div>
              <p className="fw-bold mb-1">Impressioni dei post</p>
              <p className="fs-9 mb-0">Crea un post per aumentare l'interesse</p>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex align-items-start gap-3">
            <BsSearch className="fs-5 flex-shrink-0" />
            <div>
              <p className="fw-bold mb-1">comparse nelle ricerche</p>
              <p className="fs-9 mb-0">Vedi quante volte il tuo proilo è comparso nei risultati di ricerca</p>
            </div>
          </div>
        </Col>
      </Row>
      <div className="text-center fw-bold border-top py-2">Mostra tutto</div>
    </Container>
  );
}
export default Analisi;
