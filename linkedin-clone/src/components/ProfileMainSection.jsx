import { Col, Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";

const ProfileMainSection = ({ profile }) => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col>
        <Card className="rounded-3" id="profile-card">
          <Card.Img variant="top" src="https://placecats.com/300/70" />
          <i className="bi bi-camera-fill blu-linkedin-text position-absolute top-0 end-0 fs-6 me-4 mt-4 bg-white px-2 py-1 rounded-circle"></i>
          <Card.Body className="px-4 position-relative">
            <div className="position-absolute" id="user-picture">
              <div className="rounded-circle overflow-hidden">
                <img src={profile.image} alt="" style={{ height: "8em", width: "8em" }} />
              </div>
            </div>

            <div className="d-flex align-items-start justify-content-between">
              <Card.Text className="fs-4 fw-semibold mb-0">
                <span
                  id="profile-name"
                  onClick={() => {
                    setModal(1);
                    handleShow();
                  }}
                >
                  {profile.name} {profile.surname}
                </span>
              </Card.Text>
            </div>

            <Card.Text className="mb-2">{profile.title}</Card.Text>
            <Card.Text className="fs-7 text-muted mb-1">{profile.area}</Card.Text>
            <Card.Text className="fs-7 text-muted mb-1">
              Email: <span className="blu-linkedin-text fw-semibold">{profile.email}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* MODALE */}
      <Modal show={show} onHide={handleClose} animation={false}>
        {modal === 1 && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Informazioni su questo profilo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>
                {profile.name} {profile.surname}
              </h5>
              <p>Email: {profile.email}</p>
              <p>Area: {profile.area}</p>
              <p>Titolo: {profile.title}</p>
              <p>Creato il: {profile.createdAt}</p>
              <p>Aggiornato il: {profile.updatedAt}</p>
            </Modal.Body>
          </>
        )}
      </Modal>
    </>
  );
};

export default ProfileMainSection;
