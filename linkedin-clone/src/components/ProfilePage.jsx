import { Container, Row, Col } from "react-bootstrap";
import ProfileMainSection from "./ProfileMainSection";
import ProfileAside from "./ProfileAside";
import ProfileSections from "./ProfileSection";
import Activity from "./Activity";
import Analisi from "./Analisi";
import MyFooter from "./MyFooter";
import FooterPart from "./FooterpPart";
const ProfilePage = () => {
  return (
    <>
      <Container fluid="md mt-4">
        <Row className="justify-content-center">
          <Col xs={12} md={7} lg={8}>
            <Row>
              <ProfileMainSection></ProfileMainSection>
              <Activity></Activity>
              <Analisi></Analisi>
              <ProfileSections></ProfileSections>
              <Col xs={12} md={7} lg={8}>
                <MyFooter></MyFooter>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={5} lg={4} className="mt-3 mt-md-0 col-xxl-3">
            <ProfileAside></ProfileAside>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfilePage;
