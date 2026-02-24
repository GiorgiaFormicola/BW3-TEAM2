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
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchQuery, fetchSearchResults, setSelectedProfile } from "../redux/actions";

const MyNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMjI0YzBiYzFkZTAwMTU3N2I3YTAiLCJpYXQiOjE3NzE4NDAwNzYsImV4cCI6MTc3MzA0OTY3Nn0HWt5UOlv8ooOYdlCh1J5YaAzTQg8mdKEX4ogJdbuqJM";

  // Menu toggle
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Business toggle
  const [showBusiness, setShowBusiness] = useState(false);
  const businessRef = useRef(null);

  // Dropdown risultati ricerca
  const [showResults, setShowResults] = useState(false);

  // Redux
  const query = useSelector((state) => state.profile.searchQuery);
  const results = useSelector((state) => state.profile.searchResults);

  // Profilo da mostrare nella sezione "Tu"
  // prende selectedProfile se cliccato, altrimenti il tuo profilo
  const profileObject = useSelector((state) => state.profile.selectedProfile || state.profile.object);
  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
          headers: { Authorization: "Bearer " + token },
        });
        const data = await res.json();
        dispatch({ type: "SET_PROFILE", payload: data });
      } catch (err) {
        console.log(err);
      }
    };

    if (token) fetchMyProfile();
  }, [dispatch, token]);

  // Click fuori dai menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setShowMenu(false);
      if (businessRef.current && !businessRef.current.contains(event.target)) setShowBusiness(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Navbar bg="light" expand="md" className="shadow-sm py-2">
      <Container fluid>
        <div className="d-flex align-items-center ms-5 ps-5">
          <Navbar.Brand href="#">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" width="34" />
          </Navbar.Brand>

          <Form className="d-none d-md-block ms-0">
            <InputGroup style={{ width: "250px" }}>
              <InputGroup.Text className="bg-white border-end-0 rounded-start-pill ps-3">
                <Search size={16} className="text-muted" />
              </InputGroup.Text>
              <FormControl
                type="search"
                placeholder="Cerca"
                value={query}
                onChange={(e) => {
                  dispatch(setSearchQuery(e.target.value));
                  dispatch(fetchSearchResults(e.target.value));
                }}
                onFocus={() => results.length > 0 && setShowResults(true)}
                className="border-start-0 rounded-end-pill px-2"
              />
            </InputGroup>
            {/* Risultati dinamici */}
            {showResults && results.length > 0 && (
              <div className="position-absolute bg-white shadow rounded mt-1 p-2" style={{ width: "100%", top: "100%", left: 0, zIndex: 1000 }}>
                {results.map((user) => (
                  <div
                    key={user._id}
                    className="d-flex align-items-center p-2 hover-bg"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch(setSelectedProfile(user));
                      navigate(`/profile/${user._id}`); // <-- qui stai usando navigate
                      setShowResults(false);
                    }}
                  >
                    <img
                      src={user.image && user.image.startsWith("http") ? user.image : "https://via.placeholder.com/30"}
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: "30px", height: "30px", objectFit: "cover" }}
                    />
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: "500" }}>
                        {user.name} {user.surname}
                      </div>
                      <div style={{ fontSize: "12px" }} className="text-muted">
                        {user.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Form>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-evenly">
          <Nav className="align-items-center text-center">
            <Nav.Link href="#" className="mx-4 d-flex flex-column align-items-center">
              <House size={20} className="nav-icon" />
              <small className="d-none d-lg-inline">Home</small>
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
                src={profileObject?.image || "https://via.placeholder.com/52"}
                alt="avatar"
                className="rounded-circle"
                style={{ width: "36px", height: "36px", objectFit: "cover" }}
              />
              <small className="d-none d-lg-inline" style={{ fontSize: "12px", marginTop: "4px" }}>
                {" "}
                {profileObject?.name || "Tu"} ▾
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
                      src={profileObject?.image || "https://via.placeholder.com/52"}
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "52px", height: "52px" }}
                    />
                    <div className="ms-2">
                      <strong>
                        {profileObject?.name} {profileObject?.surname}
                      </strong>
                      <div style={{ fontSize: "14px" }}>{profileObject?.title}</div>
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
                  style={{ top: "55px", right: "0", width: "650px", zIndex: 2000, cursor: "default" }}
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
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
