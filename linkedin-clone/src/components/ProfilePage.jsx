import { Container, Row, Col } from "react-bootstrap";
import ProfileMainSection from "./ProfileMainSection";
import Activity from "./Activity";
import Analisi from "./Analisi";
import ProfileSections from "./ProfileSection";
import ProfileAside from "./ProfileAside";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  // prendiamo il profilo selezionato, altrimenti il tuo
  const selectedProfile = useSelector((state) => state.profile.selectedProfile);
  const myProfile = useSelector((state) => state.profile.object);
  const profile = selectedProfile ?? myProfile;

  if (!profile) return <p>Caricamento profilo...</p>;

  return (
    <Container fluid="md">
      <Row className="justify-content-center">
        <Col xs={12} md={7} lg={8}>
          <Row>
            <ProfileMainSection profile={profile} />
            <Activity profile={profile} />
            <Analisi profile={profile} />
            <ProfileSections profile={profile} />
          </Row>
        </Col>

        <Col xs={12} md={5} lg={4} className="mt-3 mt-md-0 col-xxl-3">
          <ProfileAside profile={profile} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
