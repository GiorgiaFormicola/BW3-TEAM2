import { MdSupervisorAccount } from "react-icons/md";
import { IoIosStats } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
  return (
    <Container fluid className="bg-light rounded-3 border p-0">
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
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex align-items-start gap-3">
            <IoIosStats className="fs-4 flex-shrink-0" />
            <div>
              <p className="fw-bold mb-1">Impressioni dei post</p>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex align-items-start gap-3">
            <BsSearch className="fs-5 flex-shrink-0" />
            <div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
export default Analisi;
