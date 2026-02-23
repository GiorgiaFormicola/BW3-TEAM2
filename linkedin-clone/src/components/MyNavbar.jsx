import { Navbar, Nav, Container, Form, FormControl, Badge } from "react-bootstrap";
import { House, People, Briefcase, ChatDots, Bell, Grid3x3Gap } from "react-bootstrap-icons";
import { useState, useRef, useEffect } from "react";

const MyNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-2">
      <Container fluid>
        <div className="d-flex align-items-center ms-5 ps-5">
          <Navbar.Brand href="#">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" width="34" />
          </Navbar.Brand>

          <Form className="d-none d-md-block ms-0">
            <FormControl type="search" placeholder="Cerca" className="rounded-pill px-3" style={{ width: "250px" }} />
          </Form>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-evenly">
          <Nav className="align-items-center text-center">
            <Nav.Link href="#" className="mx-4 d-flex flex-column align-items-center">
              <House size={20} className="nav-icon" />
              <small>Home</small>
            </Nav.Link>

            <Nav.Link href="#" className="mx-4 d-flex flex-column align-items-center">
              <People size={20} className="nav-icon" />
              <small>Rete</small>
            </Nav.Link>

            <Nav.Link href="#" className="mx-4 position-relative d-flex flex-column align-items-center">
              <Briefcase size={20} className="nav-icon" />
              <Badge bg="danger" pill className="position-absolute top-10 start-100 translate-middle">
                2
              </Badge>
              <small>Lavoro</small>
            </Nav.Link>

            <Nav.Link href="#" className="mx-4 position-relative d-flex flex-column align-items-center">
              <ChatDots size={20} className="nav-icon" />
              <Badge bg="danger" pill className="position-absolute top-10 start-100 translate-middle">
                38
              </Badge>
              <small>Messaggistica</small>
            </Nav.Link>

            <Nav.Link href="#" className="mx-4 position-relative d-flex flex-column align-items-center">
              <Bell size={20} className="nav-icon" />
              <Badge bg="danger" pill className="position-absolute top-10 start-100 translate-middle">
                13
              </Badge>
              <small>Notifiche</small>
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
              <small style={{ fontSize: "12px", marginTop: "4px" }}>Tu ▾</small>

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
            <Nav.Link href="#" className="mx-4 d-flex flex-column align-items-center">
              <Grid3x3Gap size={20} className="nav-icon" />
              <small>Per le aziende</small>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
