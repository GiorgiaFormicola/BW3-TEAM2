import { Container, Row, Col } from "react-bootstrap";
import ProfileMainSection from "./ProfileMainSection";
import ProfileAside from "./ProfileAside";

const ProfilePage = () => {
  return (
    <Container fluid="md">
      <Row className="justify-content-center">
        <Col xs={12} md={7} lg={8}>
          <Row>
            <ProfileMainSection></ProfileMainSection>
          </Row>
        </Col>
        <Col xs={12} md={5} lg={4} className="mt-3 mt-md-0 col-xxl-3">
          <ProfileAside></ProfileAside>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
