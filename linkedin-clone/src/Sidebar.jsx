import { useSelector } from "react-redux";
import "./Sidebar.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function Sidebar() {
  const profile = useSelector((currentState) => currentState.profile.object);
  return (
    <div className="sidebar-container" id="sidebar-main-container">
      {/* SCHEDA 1: Profilo principale */}
      {/* <div className="sidebar-card rounded-3">
            <div className="sidebar-cover"></div>

            <div className="sidebar-profile-section">
              <img src={profile.image} alt="Profilo" className="sidebar-profile-pic" /> */}
      {/* Aggiunto id */}
      {/* <span className="sidebar-add-icon" id="sidebar-add-photo-btn">
                ➕
              </span>
            </div>

            <div className="sidebar-user-info">
              <h2>
                {profile.name} {profile.surname}
              </h2>
              <p>{profile.area}</p> */}

      {/* Aggiunto id e prefisso classe */}
      {/* <button className="sidebar-experience-btn" id="sidebar-add-experience-btn">
                ➕ Esperienza
              </button>
            </div>
          </div> */}

      {profile && (
        <Link to="/profile" className="text-decoration-none ">
          <Card className="rounded-3 mb-2" id="profile-card">
            <Card.Img variant="top" src={`https://picsum.photos/id/2/300/70`} />

            <Card.Body className="px-3 position-relative pt-5 lh-sm">
              <div style={{ cursor: "pointer", top: "-1.5em" }} className=" position-absolute">
                <div className="rounded-circle overflow-hidden">
                  <img src={profile.image} alt="" style={{ height: "4.5em", width: "4.5em" }} />
                </div>
              </div>

              <Card.Text className="fs-5 fw-semibold mb-0 d-flex gap-1 flex-wrap pt-2 pt-lg-0 pt-xl-2">
                <span>
                  {profile.name} {profile.surname}
                </span>
              </Card.Text>

              <Card.Text className="mb-1 fs-7">{profile.title}</Card.Text>

              <Card.Text className="fs-7 text-muted mb-1">{profile.area}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      )}

      {/* SCHEDA 2: Collegamenti */}
      <div className="sidebar-card sidebar-padding px-md-3 rounded-3">
        {/* Aggiunto id perché è una zona cliccabile */}
        <div className="sidebar-stat" id="sidebar-connections-link">
          <div>
            <span className="sidebar-stat-title">Collegamenti</span>
            <span className="sidebar-stat-subtitle">Espandi la tua rete</span>
          </div>
          <span className="sidebar-stat-icon">👤</span>
        </div>
      </div>

      {/* SCHEDA 3: Premium */}
      <div className="sidebar-card sidebar-padding px-md-3 rounded-3">
        <p className="sidebar-premium-text">Sblocca nuovi collegamenti con Premium</p>
        {/* Aggiunto id perché è un link */}
        <p className="sidebar-premium-link" id="sidebar-premium-promo-link">
          <span className="sidebar-gold-icon">🟨</span> Prova Premium per 0 euro
        </p>
      </div>

      {/* SCHEDA 4: Menu scorciatoie */}
      <div className="sidebar-card sidebar-padding px-md-3 rounded-3">
        {/* Aggiunti id per ogni voce del menu */}
        <div className="sidebar-menu-item pt-0 gap-3" id="sidebar-menu-saved">
          <i className="bi bi-bookmark-fill"></i> Elementi salvati
        </div>
        <div className="sidebar-menu-item gap-3" id="sidebar-menu-groups">
          <i className="bi bi-people-fill"></i> Gruppi
        </div>
        <div className="sidebar-menu-item gap-3" id="sidebar-menu-newsletters">
          <i className="bi bi-newspaper"></i> Newsletter
        </div>
        <div className="sidebar-menu-item pb-0 gap-3" id="sidebar-menu-events">
          <i className="bi bi-calendar"></i> Eventi
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
