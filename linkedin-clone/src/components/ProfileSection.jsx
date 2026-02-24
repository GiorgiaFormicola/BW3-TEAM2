import { Container, Row, Col } from "react-bootstrap";

const ProfileSections = ({ profile }) => {
  return (
    <>
      {/* Esperienza */}
      <Container fluid className="bg-light rounded-3 border p-0 my-3">
        <Row className="px-3 pt-3 align-items-start">
          <Col>
            <p className="fs-5 fw-bold mb-0">Esperienza</p>
          </Col>
        </Row>
        <Row className="px-3 py-3">
          <Col>
            {profile.experience?.length > 0 ? (
              profile.experience.map((exp, i) => (
                <div key={i}>
                  <p className="fw-bold mb-0">{exp.role}</p>
                  <p className="mb-0">{exp.company}</p>
                  <p className="text-muted mb-0">{exp.duration}</p>
                  <hr />
                </div>
              ))
            ) : (
              <p>Qui verranno inserite le tue esperienze</p>
            )}
          </Col>
        </Row>
      </Container>

      {/* Formazione */}
      <Container fluid className="bg-light rounded-3 border p-0 my-3">
        <Row className="px-3 pt-3 align-items-start">
          <Col>
            <p className="fs-5 fw-bold mb-0">Formazione</p>
          </Col>
        </Row>
        <Row className="px-3 py-3">
          <Col>
            {profile.education?.length > 0 ? (
              profile.education.map((edu, i) => (
                <div key={i}>
                  <p className="fw-bold mb-0">{edu.degree}</p>
                  <p className="mb-0">{edu.institution}</p>
                  <p className="text-muted mb-0">{edu.year}</p>
                  <hr />
                </div>
              ))
            ) : (
              <p>Inserisci in questo campo i tuoi titoli di studio</p>
            )}
          </Col>
        </Row>
      </Container>

      {/* Competenze */}
      <Container fluid className="bg-light rounded-3 border p-0 my-3">
        <Row className="px-3 pt-3 align-items-start">
          <Col>
            <p className="fs-5 fw-bold mb-0">Competenze</p>
          </Col>
        </Row>
        <Row className="px-3 py-3">
          <Col>
            {profile.skills?.length > 0 ? (
              profile.skills.map((skill, i) => (
                <p key={i} className="mb-1">
                  {skill}
                </p>
              ))
            ) : (
              <p>Inserisci in questo campo le tue competenze</p>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfileSections;
