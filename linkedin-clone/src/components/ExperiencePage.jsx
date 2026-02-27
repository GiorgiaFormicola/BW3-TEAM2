import { Container, Row, Col, Modal, Card, Image } from "react-bootstrap";
import { SlPencil } from "react-icons/sl";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExperiences, deleteExperience } from "../redux/actions/experienceActions";
import AddExperienceForm from "./AddExperienceForm";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import imgAssets from "../assets/img/Ads.png";

function ExperiencesPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const experiences = useSelector((state) => state.experiences.list);
  const profile = useSelector((state) => state.profile.object);

  const [showModal, setShowModal] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    if (profile?._id) {
      dispatch(getExperiences());
    }
  }, [profile, dispatch]);

  const handleAdd = () => {
    setSelectedExperience(null);
    setShowModal(true);
  };

  const handleEdit = (exp) => {
    setSelectedExperience(exp);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedExperience(null);
  };

  return (
    <>
      <div className="page-wrapper">
        <Container fluid className="px-2 px-md-4">
          <Row className="justify-content-center">
            {/* COLONNA PRINCIPALE */}
            <Col xs={12} md={8} lg={7}>
              <div className="experience-card">
                {/* HEADER */}
                <Row className="align-items-center mb-3">
                  <Col xs="auto">
                    <span className="back-arrow" onClick={() => navigate(-1)}>
                      ←
                    </span>
                  </Col>

                  <Col>
                    <h4 className="fw-bold mb-0">Esperienza</h4>
                  </Col>

                  <Col xs="auto">
                    <FiPlus className="icon-action" onClick={handleAdd} />
                  </Col>
                </Row>

                <hr />

                {/* LISTA ESPERIENZE */}
                {experiences.length === 0 ? (
                  <p className="text-muted">Non hai ancora inserito esperienze</p>
                ) : (
                  experiences.map((exp) => (
                    <div key={exp._id} className="experience-item">
                      <Row>
                        <Col>
                          <p className="fw-bold mb-1">{exp.role}</p>

                          <p className="text-muted mb-1">
                            {exp.company} · {exp.area}
                          </p>

                          <p className="text-muted small mb-1">
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

                          <p className="mt-2 mb-0">{exp.description}</p>
                        </Col>

                        <Col xs="auto" className="d-flex align-items-start">
                          <SlPencil className="icon-action" onClick={() => handleEdit(exp)} />
                        </Col>
                      </Row>
                    </div>
                  ))
                )}
              </div>
            </Col>

            {/* SIDEBAR DESTRA (SPAZIO IMMAGINARIO, PER PRENDERE LA MISURA */}
            <Col md={4} lg={3} className="d-none d-md-block">
              <div className="sidebar-placeholder">
                <Card className="aside-card mb-2 overflow-hidden border-0">
                  <Image src={imgAssets} alt="Promozione" fluid />
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* MODAL */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedExperience ? "Modifica Esperienza" : "Aggiungi Esperienza"}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {showModal && <AddExperienceForm key={selectedExperience?._id || "new"} closeModal={handleClose} existingExperience={selectedExperience || null} />}
        </Modal.Body>

        {selectedExperience && (
          <Modal.Footer className="d-flex justify-content-between">
            <Button variant="outline-secondary" onClick={handleClose}>
              Annulla
            </Button>

            <Button
              variant="danger"
              onClick={() => {
                dispatch(deleteExperience(selectedExperience._id));
                handleClose();
              }}
            >
              Elimina esperienza
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}

export default ExperiencesPage;
