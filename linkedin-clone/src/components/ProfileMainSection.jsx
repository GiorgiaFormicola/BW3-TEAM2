import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../ProfileMainSection.css";

const ProfileMainSection = () => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="bg-light min-vh-100 ">
      <Container fluid="md" className="min-vh-100 py-4 px-0 px-xxl-5">
        <Row className="bg-primary justify-content-between">
          <Col xs={12} md={7} lg={8} className=" min-vh-100">
            <Row>
              {/* INIZIO COLONNA COMPONENTE DA MONTARE */}
              <Col>
                <Card className="rounded-3 " id="profile-card">
                  <div className="position-relative">
                    <Card.Img variant="top" src="https://placecats.com/300/70" />
                    <div className=" position-absolute mx-4 " id="user-picture">
                      <div className="rounded-circle overflow-hidden  ">
                        <img src="https://placecats.com/120/120" alt="" />
                      </div>
                      <div className="position-absolute end-0 bottom-0">
                        <i className="bi bi-plus-lg position-relative fs-4"></i>
                      </div>
                    </div>
                  </div>
                  <Card.Body className="px-4">
                    <div className="text-end mb-4">
                      <i className="bi bi-pencil fs-5 animated"></i>
                    </div>

                    <div className="d-flex align-items-start justify-content-between">
                      <Card.Text className="fs-4 fw-semibold mb-0 d-flex gap-1 flex-wrap">
                        <span
                          id="profile-name"
                          onClick={() => {
                            setModal(1);
                            handleShow();
                          }}
                        >
                          Giorgia Formicola
                        </span>
                        <Button size="sm" className="rounded-pill blu-linkedin-text d-flex align-items-center gap-1 fw-semibold " id="add-verification-button">
                          <img src="/assets/icons/verified-blu.png" alt="verified-icon" className="verified-icon img-fluid" />
                          <span>Aggiungi badge di verifica</span>
                        </Button>
                      </Card.Text>
                      <div className="align-items-center d-none d-lg-flex gap-2">
                        <img src="https://placecats.com/30/30" alt="" />
                        <a href="" className="fs-7 text-decoration-none text-black fw-semibold text-nowrap">
                          Sapienza Università di Roma
                        </a>
                      </div>
                    </div>

                    <Card.Text className="mb-2">Studente presso Sapienza Università di Roma</Card.Text>
                    <Card.Text className="fs-7 text-muted mb-2 d-lg-none">Sapienza Università di Roma</Card.Text>
                    <Card.Text className="fs-7 text-muted mb-1">
                      Roma, Lazio, Italia <span>·</span>{" "}
                      <span
                        id="contact-info"
                        className="blu-linkedin-text fw-semibold"
                        onClick={() => {
                          setModal(2);
                          handleShow();
                        }}
                      >
                        Informazioni di contatto
                      </span>
                    </Card.Text>
                    <Card.Text className="mb-2">
                      <a href="" className="fs-7 blu-linkedin-text fw-semibold text-decoration-none">
                        1 collegamento
                      </a>
                    </Card.Text>
                    <div className="d-flex gap-2 align-content-start flex-wrap pe-4 pe-md-2 pe-lg-5 me-lg-5 me-xl-0">
                      <Button className="rounded-pill blu-linkedin-bg py-1 px-3 flex-grow-1 fw-medium order-1 mb-2 flex-lg-grow-0">Disponibile per</Button>
                      <Button className="rounded-pill  py-1 px-3 outlined-button fw-medium order-2 mb-2">Aggiungi sezione del profilo</Button>
                      <Button className="rounded-pill  py-1 px-3 outlined-button flex-grow-1 fw-medium order-4 order-lg-3 flex-lg-grow-0 mb-2">
                        Migliora profilo
                      </Button>
                      <Button className="rounded-pill  py-1 px-3 outlined-button-grey fw-medium order-3 order-lg-4 mb-2">Risorse</Button>
                    </div>
                    <div className=" fs-7 rounded-3 lh-sm p-3" id="available-to-work">
                      <p className="fw-semibold mb-0 d-flex align-items-center justify-content-between">
                        Disponibile a lavorare <i className="bi bi-pencil"></i>
                      </p>
                      <p className="mb-0 text-truncate ">Lorem ipsum xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                      <p className="fw-semibold blu-linkedin-text mb-0 mt-1" id="show-details">
                        Mostra dettagli
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              {/* FINE COLONNA COMPONENTE DA MONTARE */}
              {/* INIZIO MODALE  */}
              <Modal show={show} onHide={handleClose} animation={false}>
                {/* INIZIO CONTENUTO MODALE CLICK NOME PROFILO */}
                {modal === 1 && (
                  <>
                    <Modal.Header closeButton className="d-flex align-items-end px-4">
                      <Modal.Title className="fs-5">Informazioni su questo profilo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="px-4">
                      <h5>Giorgia Formicola</h5>
                      <div className="py-1">
                        <h6 className="mb-0">Iscrizione effettuata</h6>
                        <p className="fs-7 text-muted">settembre 2018</p>
                      </div>
                      <div className="py-1">
                        <h6 className="mb-0">Informazioni di contatto</h6>
                        <p className="fs-7 text-muted">Ultimo aggiornamento: più di 1 anno fa</p>
                      </div>
                      <hr className="text-secondary mt-1 mb-2" />
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <h5 className="pt-1">Verifiche</h5>
                        <img src="/assets/icons/verified.png" alt="verified-icon" className="verified-icon img-fluid" />
                      </div>
                      <a href="" className="fw-semibold blu-linkedin-text">
                        Scopri come gli utenti possono confermare le loro informazioni
                      </a>
                      <div className="d-flex justify-content-between align-items-center bg-light border border-1 rounded-3 p-3 mt-1">
                        <div>
                          <h6 className="mb-0">Verifica gratuitamente</h6>
                          <p className="fs-7">Mostra autenticità per guadagnare fiducia.</p>
                        </div>
                        <Button onClick={handleClose} className="rounded-pill px-3 fw-semibold blu-linkedin-bg py-1 text-nowrap">
                          Verifica ora
                        </Button>
                      </div>
                    </Modal.Body>
                  </>
                )}
                {/* FINE CONTENUTO MODALE CLICK NOME PROFILO */}
                {/* INIZIO CONTENUTO MODALE CLICK INFO CONTATTO */}
                {modal === 2 && (
                  <>
                    <Modal.Header closeButton className="d-flex align-items-end px-4">
                      <Modal.Title className="fs-5">Giorgia Formicola</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="px-4 pb-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fw-normal">Informazioni di contatto</h5>
                        <i className="bi bi-pencil fs-5"></i>
                      </div>

                      <div className="py-1 d-flex gap-3 align-items-baseline">
                        <i className="bi bi-linkedin fs-5"></i>
                        <div>
                          <h6 className="mb-1">Il tuo profilo</h6>
                          <a href="" className="fw-semibold blu-linkedin-text fs-7">
                            linkedin.com/in/giorgia-formicola-127b00170
                          </a>
                        </div>
                      </div>
                      <div className="py-1 d-flex gap-3 align-items-baseline mb-">
                        <i className="bi bi-envelope fs-5"></i>
                        <div>
                          <h6 className="mb-1">Email</h6>
                          <a href="" className="fw-semibold blu-linkedin-text fs-7">
                            giorgia.formicola97@gmail.com
                          </a>
                        </div>
                      </div>
                    </Modal.Body>
                  </>
                )}
                {/* FINE CONTENUTO MODALE CLICK INFO CONTATTO */}
              </Modal>
              {/* FINE MODALE */}
            </Row>
          </Col>
          <Col lg={3} className="bg-warning min-vh-100"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileMainSection;
