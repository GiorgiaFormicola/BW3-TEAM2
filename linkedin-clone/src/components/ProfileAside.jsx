import { Card, Button, Image } from "react-bootstrap";
import { Pencil, PersonPlusFill, Briefcase, BookmarkFill, BellFill } from "react-bootstrap-icons";
import "../assets/Aside.css";
import imgAssets from "../assets/img/Ads.png";

const ProfileAside = ({ profile }) => {
  const alsoViewed = [
    { id: 101, name: "Federico Gatti", title: "Senior Software Engineer @ Amazon", img: "https://placedog.net/50/50" },
    { id: 102, name: "Elena Valeri", title: "Product Manager | Fintech Expert", img: "https://placedog.net/51/51" },
    { id: 103, name: "Claudio Mentana", title: "DevOps Lead at Satispay", img: "https://placedog.net/52/52" },
    { id: 104, name: "Simona Riva", title: "Head of Marketing & Communications", img: "https://placedog.net/53/53" },
  ];

  const suggestedUsers = [
    { id: 1, name: "Alessandro Neri", title: "Lead UX/UI Designer presso Sketch", img: "https://placedog.net/56/56" },
    { id: 2, name: "Giulia Marchetti", title: "Full Stack Developer (React/Node.js)", img: "https://placedog.net/57/57" },
    { id: 3, name: "Roberto Piras", title: "Talent Acquisition Specialist IT", img: "https://placedog.net/58/58" },
    { id: 4, name: "Francesca Leone", title: "Data Scientist & AI Researcher", img: "https://placedog.net/59/59" },
    { id: 5, name: "Matteo Villa", title: "Android Developer @ Spotify", img: "https://placedog.net/60/60" },
  ];

  return (
    <div className="profile-aside">
      {/* Lingue */}
      <Card className="aside-card p-3 mb-2">
        <div className="d-flex justify-content-between align-items-start mb-3 border-bottom pb-2">
          <div>
            <h6 className="aside-subtitle mb-0">Lingua del profilo</h6>
            <span className="aside-text-muted">{profile?.language ?? "Italiano"}</span>
          </div>
          <Pencil size={14} className="icon-edit-aside" />
        </div>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h6 className="aside-subtitle mb-0">Profilo pubblico e URL</h6>
            <span className="aside-text-muted text-truncate d-block" style={{ maxWidth: "150px" }}>
              www.linkedin.com/in/{profile?.username ?? "username"}
            </span>
          </div>
          <Pencil size={14} className="icon-edit-aside" />
        </div>
      </Card>

      {/* 1. ADS */}

      <Card className="aside-card mb-2 overflow-hidden border-0">
        <Image src={imgAssets} alt="Promozione" fluid />
      </Card>

      {/* 2. WHO VIEWS MY PROFILE */}

      <Card className="aside-card p-3 mb-2">
        <h6 className="aside-title mb-3">Scopri chi ha visitato il tuo profilo</h6>
        {alsoViewed.map((user) => (
          <div key={user.id} className="d-flex align-items-start user-item py-3">
            <div className="profile-img-container me-2 flex-shrink-0">
              <img src={user.img} className="blurred-inner-img" alt="user" />
            </div>
            <div className="w-100">
              <h6 className="aside-subtitle mb-0">Utente LinkedIn</h6>
              <p className="aside-text-muted mb-2 lh-sm text-truncate" style={{ maxWidth: "180px" }}>
                {user.title}
              </p>
              <Button variant="outline-secondary" size="sm" className="btn-aside-connect">
                Vedi
              </Button>
            </div>
          </div>
        ))}
      </Card>

      {/* 3. PEOPLE YOU MAY KNOW */}
      <Card className="aside-card p-3 mb-2">
        <h6 className="aside-title mb-1">Persone che potresti conoscere</h6>
        <p className="aside-text-muted mb-0">Dal tuo settore</p>
        {suggestedUsers.map((user) => (
          <div key={user.id} className="d-flex align-items-start user-item py-3">
            <Image src={user.img} className="profile-img-aside me-2 flex-shrink-0" />
            <div className="w-100">
              <h6 className="aside-subtitle mb-0">{user.name}</h6>
              <p className="aside-text-muted mb-2 lh-sm">{user.title}</p>
              <Button variant="outline-secondary" size="sm" className="btn-aside-connect">
                <PersonPlusFill size={16} className="me-1" />
                Collegati
              </Button>
            </div>
          </div>
        ))}
      </Card>

      {/* 4. YOUR JOB SEARCH */}
      <Card className="aside-card  p-3">
        <h6 className="aside-title mb-3">La tua ricerca di lavoro</h6>
        <div className="job-search-item d-flex align-items-center p-2 mb-1">
          <BookmarkFill className="job-search-icon me-3" />
          <span className="fw-semibold fs-7">I miei elementi</span>
        </div>
        <div className="job-search-item d-flex align-items-center p-2 mb-1">
          <Briefcase className="job-search-icon me-3" />
          <span className="fw-semibold fs-7">Offerte di lavoro</span>
        </div>
        <div className="job-search-item d-flex align-items-center p-2">
          <BellFill className="job-search-icon me-3" />
          <span className="fw-semibold fs-7">Avvisi per le offerte di lavoro</span>
        </div>
      </Card>
    </div>
  );
};

export default ProfileAside;
