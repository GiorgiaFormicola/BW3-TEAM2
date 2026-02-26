import { Col, Card, Button, Form } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../assets/ProfileMainSection.css";
import { useSelector } from "react-redux";

const ProfileMainSection = () => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(null);
  const profileObject = useSelector((currentState) => currentState.profile.object);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {profileObject && (
        <>
          {/* INIZIO COLONNA */}
          <Col>
            <Card className="rounded-3" id="profile-card">
              <Card.Img variant="top" src={`https://picsum.photos/id/2/300/70`} />
              <i className="bi bi-camera-fill blu-linkedin-text position-absolute top-0 end-0 fs-6 me-4 mt-4 me-md-3 mt-md-3 me-lg-4 mt-lg-4 bg-white px-2 py-1 rounded-circle"></i>
              <Card.Body className="px-4 position-relative">
                <div
                  style={{ cursor: "pointer" }}
                  className=" position-absolute"
                  id="user-picture"
                  onClick={() => {
                    setModal(3);
                    handleShow();
                  }}
                >
                  <div className="rounded-circle overflow-hidden">
                    <img src={profileObject.image} alt="" style={{ height: "8em", width: "8em" }} />
                  </div>
                  <div className="position-absolute end-0 bottom-0">
                    <i className="bi bi-plus-lg position-relative fs-4"></i>
                  </div>
                </div>
                <div className="text-end mb-4">
                  <i className="bi bi-pencil fs-4 animated"></i>
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
                      {profileObject.name} {profileObject.surname}
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

                <Card.Text className="mb-2">{profileObject.title}</Card.Text>
                <Card.Text className="fs-7 text-muted mb-2 d-lg-none">Sapienza Università di Roma</Card.Text>
                <Card.Text className="fs-7 text-muted mb-1">
                  {profileObject.area}
                  {/* Roma, Lazio, Italia  */}
                  <span> · </span>
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
          {/* FINE COLONNA */}
          {/* INIZIO MODALE  */}
          <Modal show={show} onHide={handleClose} animation={false}>
            {/* INIZIO CONTENUTO MODALE CLICK NOME PROFILO */}
            {modal === 1 && (
              <>
                <Modal.Header closeButton className="d-flex align-items-center px-4">
                  <Modal.Title className="fs-5">Informazioni su questo profilo</Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-4">
                  <h5>
                    {profileObject.name} {profileObject.surname}
                  </h5>
                  <div className="py-1">
                    <h6 className="mb-0">Iscrizione effettuata</h6>
                    <p className="fs-7 text-muted">
                      {new Date(profileObject.createdAt).toLocaleDateString("it-IT", {
                        year: "numeric",
                        month: "long",
                      })}
                    </p>
                  </div>
                  <div className="py-1">
                    <h6 className="mb-0">Informazioni di contatto</h6>
                    <p className="fs-7 text-muted">
                      Ultimo aggiornamento:{" "}
                      {new Date(profileObject.updatedAt).toLocaleDateString("it-IT", {
                        year: "numeric",
                        month: "long",
                      })}
                    </p>
                  </div>
                  <hr className="text-secondary mt-1 mb-2" />
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <h5 className="pt-1">Verifiche</h5>
                    <img src="/assets/icons/verified.png" alt="verified-icon" className="verified-icon" style={{ height: "1.2em" }} />
                  </div>
                  <a href="" className="fw-semibold blu-linkedin-text">
                    Scopri come gli utenti possono confermare le loro informazioni
                  </a>
                  <div className="d-flex justify-content-between align-items-center bg-light border border-1 rounded-3 p-3 mt-1 gap-1">
                    <div>
                      <h6 className="mb-0">Verifica gratuitamente</h6>
                      <p className="fs-7 mb-0">Mostra autenticità per guadagnare fiducia.</p>
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
                <Modal.Header closeButton className="d-flex align-items-center px-4">
                  <Modal.Title className="fs-5">
                    {profileObject.name} {profileObject.surname}
                  </Modal.Title>
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
                        linkedin.com/in/xxxxxxxxxxxxx
                      </a>
                    </div>
                  </div>
                  <div className="py-1 d-flex gap-3 align-items-baseline mb-">
                    <i className="bi bi-envelope fs-5"></i>
                    <div>
                      <h6 className="mb-1">Email</h6>
                      <a href="" className="fw-semibold blu-linkedin-text fs-7">
                        {profileObject.email}
                      </a>
                    </div>
                  </div>
                </Modal.Body>
              </>
            )}
            {/* FINE CONTENUTO MODALE CLICK INFO CONTATTO */}
            {/* INIZIO CONTENUTO MODALE CLICK CAMBIO FOTO */}
            {modal === 3 && (
              <>
                <Modal.Header closeButton className="d-flex align-items-center px-4">
                  <Modal.Title className="fs-5">Aggiorna foto</Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-5 mx-3  my-3 text-center">
                  <p className="mb-0 fs-4 text-center">La tua foto non deve per forza essere un tuo primo piano! Ma qualcosa che ti rappresenti.</p>
                  <img src="https://static.licdn.com/aero-v1/sc/h/c5ybm82ti04zuasz2a0ubx7bu" alt="Esempi di foto del profilo" className="img-fluid my-4" />
                  <small className="text-muted">
                    Chiediamo agli utenti di LinkedIn di utilizzare le loro vere identità, quindi scatta o carica una tua foto. Poi ritagliala, applica dei
                    filtri e perfezionala come vuoi.
                  </small>
                </Modal.Body>
                <Modal.Footer className="justify-content-between px-4">
                  <a href="" className="">
                    Fotogrammi
                  </a>
                  <div className="d-flex gap-2">
                    <Button className="rounded-pill px-3 fw-semibold bg-transparent text-primary py-1 text-nowrap">Usa fotocamera</Button>

                    <Form>
                      <Form.Group>
                        <Form.Label
                          htmlFor="file-upload"
                          style={{ marginBottom: "0", cursor: "pointer" }}
                          className="btn bg-primary text-light rounded-pill px-3 fw-semibold py-1 text-nowrap"
                        >
                          Carica foto
                        </Form.Label>
                        <Form.Control className="d-none" type="file" accept="image/*,.pdf" id="file-upload" />
                      </Form.Group>
                    </Form>
                  </div>
                </Modal.Footer>
              </>
            )}
            {/* FINE CONTENUTO MODALE CLICK CAMBIO FOTO */}
          </Modal>
          {/* FINE MODALE */}
        </>
      )}
    </>
  );
};

export default ProfileMainSection;
