import { Navbar, Nav, Container, Form, FormControl, Badge, InputGroup, Row, Col } from "react-bootstrap";
import {
  Bullseye,
  PlayBtn,
  House,
  People,
  Briefcase,
  ChatDots,
  Bell,
  Grid3x3Gap,
  Search,
  Compass,
  PeopleFill,
  BarChartFill,
  CardChecklist,
  PlusLg,
} from "react-bootstrap-icons";
import { useState, useRef, useEffect } from "react";
// PER OTTENERE PROFILO UTENTE
import { useDispatch } from "react-redux";
import { getMyProfileInfo } from "../redux/actions";
// PER OTTENERE PROFILO UTENTE

const MyNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const [showBusiness, setShowBusiness] = useState(false);
  const businessRef = useRef(null);

  // PER OTTENERE PROFILO UTENTE
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfileInfo());
  }, []);
  // PER OTTENERE PROFILO UTENTE

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
      if (businessRef.current && !businessRef.current.contains(event.target)) {
        setShowBusiness(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Navbar bg="light" expand="md" className="shadow-sm py-2">
      <Container fluid>
        <div className="d-flex align-items-center gap-2">
          <Navbar.Brand href="#">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" width="34" />
          </Navbar.Brand>

          <Form className="d-none d-md-block ms-0">
            <InputGroup style={{ width: "250px" }}>
              <InputGroup.Text className="bg-white border-end-0 rounded-start-pill ps-3">
                <Search size={16} className="text-muted" />
              </InputGroup.Text>
              <FormControl type="search" placeholder="Cerca" className="border-start-0 rounded-end-pill px-2" />
            </InputGroup>
          </Form>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="align-items-center text-center w-100">
            <Nav.Link href="#" className="mx-4 d-flex flex-column align-items-center">
              <House size={20} className="nav-icon" />
              <small className="d-none d-lg-inline text-nowrap">Home</small>
            </Nav.Link>

            <Nav.Link href="#" className="mx-4 d-flex flex-column align-items-center">
              <People size={20} className="nav-icon" />
              <small className="d-none d-lg-inline">Rete</small>
            </Nav.Link>

            <Nav.Link href="#" className="mx-4 position-relative d-flex flex-column align-items-center">
              <Briefcase size={20} className="nav-icon" />
              <Badge bg="danger" pill className="position-absolute top-10 start-100 translate-middle">
                2
              </Badge>
              <small className="d-none d-lg-inline">Lavoro</small>
            </Nav.Link>

            <Nav.Link href="#" className="mx-4 position-relative d-flex flex-column align-items-center">
              <ChatDots size={20} className="nav-icon" />
              <Badge bg="danger" pill className="position-absolute top-10 start-100 translate-middle">
                38
              </Badge>
              <small className="d-none d-lg-inline">Messaggistica</small>
            </Nav.Link>

            <Nav.Link href="#" className="mx-4 position-relative d-flex flex-column align-items-center">
              <Bell size={20} className="nav-icon" />
              <Badge bg="danger" pill className="position-absolute top-10 start-100 translate-middle">
                13
              </Badge>
              <small className="d-none d-lg-inline">Notifiche</small>
            </Nav.Link>

            <div
              ref={menuRef}
              className="mx-3 position-relative d-flex flex-column align-items-center"
              style={{ width: "80px", cursor: "pointer" }}
              onClick={() => setShowMenu(!showMenu)}
            >
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7f302c83-632c-4927-a659-0dfb6b024b0d/d8p12ep-69f36217-08fb-4193-a5f4-f2e893bc6029.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi83ZjMwMmM4My02MzJjLTQ5MjctYTY1OS0wZGZiNmIwMjRiMGQvZDhwMTJlcC02OWYzNjIxNy0wOGZiLTQxOTMtYTVmNC1mMmU4OTNiYzYwMjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bexbNTZhTImwrjCQY2BM0b7caAq2KBG2mlFRvQmZmOc"
                alt="avatar"
                className="rounded-circle"
                style={{ width: "36px", height: "36px", objectFit: "cover" }}
              />
              <small className="d-none d-lg-inline" style={{ fontSize: "12px", marginTop: "4px" }}>
                Tu ▾
              </small>

              {showMenu && (
                <div
                  className="position-absolute bg-white shadow rounded p-3"
                  style={{
                    top: "60px",
                    right: 0,
                    width: "280px",
                    zIndex: 1000,
                  }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7f302c83-632c-4927-a659-0dfb6b024b0d/d8p12ep-69f36217-08fb-4193-a5f4-f2e893bc6029.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi83ZjMwMmM4My02MzJjLTQ5MjctYTY1OS0wZGZiNmIwMjRiMGQvZDhwMTJlcC02OWYzNjIxNy0wOGZiLTQxOTMtYTVmNC1mMmU4OTNiYzYwMjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bexbNTZhTImwrjCQY2BM0b7caAq2KBG2mlFRvQmZmOc"
                      alt="avatar"
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "52px", height: "52px" }}
                    />
                    <div className="ms-2">
                      <strong>Antonino Palazzolo</strong>
                      <div style={{ fontSize: "14px" }}>Hanno frequentato Università Mercatorum</div>
                    </div>
                  </div>

                  <div className="d-flex gap-2 mb-3">
                    <button className="btn btn-outline-primary rounded-pill p-0 w-50">Visualizza profilo</button>
                    <button className="btn btn-primary rounded-pill p-0 w-50">Verifica</button>
                  </div>

                  <hr />
                  <div className="text-start">
                    <strong>Account</strong>
                    <div className="mt-2 text-muted">Impostazioni e privacy</div>
                    <div className="text-muted">Guida</div>
                    <div className="text-muted">Lingua</div>

                    <hr />

                    <strong>Gestisci</strong>
                    <div className="mt-2 text-muted">Post e attività</div>
                    <div className="text-muted">Account per la pubblicazione</div>

                    <hr />
                    <div className="text-muted">Esci</div>
                  </div>
                </div>
              )}
            </div>
            <div
              ref={businessRef}
              className="mx-2 position-relative d-flex flex-column align-items-center text-muted border-start ps-3"
              style={{ cursor: "pointer" }}
              onClick={() => setShowBusiness(!showBusiness)}
            >
              <Grid3x3Gap size={24} />
              <small className="d-none d-lg-inline" style={{ fontSize: "12px" }}>
                Per le aziende ▾
              </small>

              {showBusiness && (
                <div
                  className="position-absolute bg-white shadow-lg rounded border p-4 text-dark"
                  style={{ top: "55px", right: "0", width: "90vw", maxWidth: "650px", zIndex: 2000, cursor: "default" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <h5 className="fw-bold m-0" style={{ fontSize: "18px" }}>
                      Per le aziende
                    </h5>
                    <button type="button" className="btn-close" style={{ fontSize: "12px" }} onClick={() => setShowBusiness(false)}></button>
                  </div>

                  <Row>
                    <Col md={6} className="border-end pe-4 text-start">
                      <h6 className="fw-bold mb-4" style={{ fontSize: "16px" }}>
                        Le mie app
                      </h6>

                      <div className="d-flex align-items-center mb-3">
                        <Compass size={22} className="text-primary me-3" />
                        <strong style={{ fontSize: "14px" }}>Vendi</strong>
                      </div>

                      <div className="d-flex align-items-center mb-4">
                        <PeopleFill size={22} className="text-primary me-3" />
                        <strong style={{ fontSize: "14px" }}>Gruppi</strong>
                      </div>

                      <div className="text-muted fw-bold mt-4 mb-4" style={{ fontSize: "13px" }}>
                        Talent
                      </div>

                      <div className="d-flex align-items-center mb-3">
                        <BarChartFill size={22} className="text-primary me-3" />
                        <span style={{ fontSize: "14px" }}>Talent Insights</span>
                      </div>

                      <div className="d-flex align-items-center mb-4">
                        <CardChecklist size={22} className="text-primary me-3 mt-3" />
                        <span className="mt-3" style={{ fontSize: "14px" }}>
                          Pubblica un’offerta di lavoro
                        </span>
                      </div>

                      <div className="text-muted fw-bold mt-4 mb-3" style={{ fontSize: "13px" }}>
                        Vendite
                      </div>

                      <div className="d-flex align-items-center mb-4">
                        <Compass size={22} className="text-primary me-3" />
                        <span style={{ fontSize: "14px" }}>Marketplace dei servizi</span>
                      </div>

                      <div className="text-muted fw-bold mt-4 mb-3" style={{ fontSize: "13px" }}>
                        Marketing
                      </div>

                      <div className="d-flex align-items-center mb-4">
                        <Bullseye size={22} className="text-primary me-3" />
                        <span style={{ fontSize: "14px" }}>Pubblicizza</span>
                      </div>

                      <div className="text-muted fw-bold mt-4 mb-3" style={{ fontSize: "13px" }}>
                        Learning
                      </div>

                      <div className="d-flex align-items-center">
                        <PlayBtn size={22} className="text-primary me-3" />
                        <span style={{ fontSize: "14px" }}>Learning</span>
                      </div>
                    </Col>
                    <Col md={6} className="ps-4 text-start">
                      <h6 className="fw-bold mb-4" style={{ fontSize: "16px" }}>
                        Scopri altro per il business
                      </h6>

                      <div className="mb-3">
                        <strong>Assumi su LinkedIn</strong>
                        <div className="text-muted">Trova, attrai e assumi</div>
                      </div>

                      <div className="mb-3">
                        <strong>Vendi con LinkedIn</strong>
                        <div className="text-muted">Sblocca nuove opportunità</div>
                      </div>
                      <div className="mb-3">
                        <strong>Offerta di lavoro gratuita</strong>
                        <div className="text-muted">Candidati qualificati subito</div>
                      </div>
                      <div className="mb-3">
                        <strong>Fai pubblicità su LinkedIn</strong>
                        <div className="text-muted">Acquisisci clienti</div>
                      </div>
                      <div className="mb-3">
                        <strong>Inizia con Premium</strong>
                        <div className="text-muted">Amplia la tua rete</div>
                      </div>

                      <div className="mb-3">
                        <strong>Impara con LinkedIn</strong>
                        <div className="text-muted">Corsi per aziende</div>
                      </div>
                      <div className="mb-3">
                        <strong>Centro per amministratori</strong>
                        <div className="text-muted">Gestisci account</div>
                      </div>
                      <hr />
                      <div className="fw-bold d-flex align-items-center">
                        Crea una pagina aziendale
                        <PlusLg className="ms-2" />
                      </div>
                    </Col>
                  </Row>
                </div>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-md-none mt-3 w-100">
          <InputGroup>
            <InputGroup.Text>
              <Search size={16} />
            </InputGroup.Text>
            <FormControl placeholder="Cerca" />
          </InputGroup>
        </Form>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
