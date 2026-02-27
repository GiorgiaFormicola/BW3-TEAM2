import { Container, Row, Col, Button } from "react-bootstrap";
import { SlPencil } from "react-icons/sl";
import { FiPlus } from "react-icons/fi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExperiences } from "../redux/actions/experienceActions";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import AddExperienceForm from "./AddExperienceForm";
import { useNavigate } from "react-router-dom";

function ProfileSections() {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiences.list); // prendo la lista esperienze dallo store Redux
  const profile = useSelector((state) => state.profile.object); //  prendo il profilo corrente (cosi ottengo l'_id, grazie sergio per avermi spiegato bene sta parte tvb)
  const [showModal, setShowModal] = useState(false); //  stato per controllare apertura/chiusura della Modal
  const [selectedExperience, setSelectedExperience] = useState(null); // stato per capire se sto modificando o creando
  const navigate = useNavigate();
  //  Vedo quando cambia il profilo
  console.log("Profilo corrente:", profile);

  //  Vedo quando si riempiono le esperienze (dopo chiamata API)
  console.log("Esperienze nello store:", experiences);

  const handleClose = () => {
    setShowModal(false); //  Chiude la modal e resetta l'esperienza selezionata
    setSelectedExperience(null);
  };

  const handleAdd = () => {
    setSelectedExperience(null); // Modal per aggiungere nuova esperienza
    setShowModal(true);
  };

  useEffect(() => {
    if (profile?._id) {
      dispatch(getExperiences());
    }
  }, [profile, dispatch]);

  return (
    <>
      <Container fluid className="bg-white rounded-3 border p-0 my-3">
        <Row className="px-3 pt-3 align-items-start">
          <Col>
            <p className="fs-5 fw-bold mb-0">Esperienza</p>
          </Col>
          <Col xs="auto" className="d-flex gap-3">
            <FiPlus className="fs-4" style={{ cursor: "pointer" }} onClick={handleAdd} />
            <SlPencil className="fs-5" style={{ cursor: "pointer" }} onClick={() => navigate("/experiences")} />
          </Col>
        </Row>

        <Row className="px-3 py-3">
          <Col>
            <hr />

            {experiences.length === 0 ? (
              <p className="fw-bold mb-0">Non hai ancora inserito esperienze</p>
            ) : (
              experiences.map((exp) => (
                <div key={exp._id} className="mb-4 border-bottom pb-3">
                  <p className="fw-bold mb-0">{exp.role}</p>

                  <p className="mb-0">
                    {exp.company} · {exp.area}
                  </p>

                  <p className="text-muted mb-0">
                    {new Date(exp.startDate).toLocaleDateString("it-IT", {
                      month: "long",
                      year: "numeric",
                    })}{" "}
                    -{" "}
                    {exp.endDate
                      ? new Date(exp.endDate).toLocaleDateString("it-IT", {
                          month: "long",
                          year: "numeric",
                        })
                      : "Presente"}
                  </p>

                  <p className="mt-2">{exp.description}</p>
                </div>
              ))
            )}
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
            <p className="text-muted mb-3">Nessuna competenza inserita</p>
          </Col>
        </Row>

        <div className="text-center fw-bold border-top py-2">Mostra tutto →</div>
      </Container>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedExperience ? "Modifica Esperienza" : "Aggiungi Esperienza"}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddExperienceForm key={selectedExperience?._id || "new"} closeModal={handleClose} existingExperience={selectedExperience} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProfileSections;
