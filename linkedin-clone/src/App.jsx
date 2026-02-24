import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import Analisi from "./components/Analisi";
import MyFooter from "./components/MyFooter";
import Activity from "./components/Activity";
import { Container, Row, Col } from "react-bootstrap";
import ProfileSections from "./components/ProfileSection";
function App() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="">
            <Analisi />
            <Activity></Activity>
            <ProfileSections></ProfileSections>
            <MyFooter />
          </Col>

          <Col xs={2}></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
