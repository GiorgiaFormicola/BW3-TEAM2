import { Card, Button, Image } from "react-bootstrap";
import { Pencil, PersonPlusFill, Briefcase, BookmarkFill, BellFill } from "react-bootstrap-icons";
import "../assets/ProfileAside.css";
import imgAssets from "../assets/img/Ads.png";
import snakeAsset from "../assets/img/Snake";

const HomepageAside = () => {
  const suggestedUsers = [
    { id: 1, name: "Alessandro Neri", title: "Lead UX/UI Designer presso Sketch", img: "https://placedog.net/56/56" },
    { id: 2, name: "Giulia Marchetti", title: "Full Stack Developer (React/Node.js)", img: "https://placedog.net/57/57" },
    { id: 3, name: "Roberto Piras", title: "Talent Acquisition Specialist IT", img: "https://placedog.net/58/58" },
    { id: 4, name: "Francesca Leone", title: "Data Scientist & AI Researcher", img: "https://placedog.net/59/59" },
    { id: 5, name: "Matteo Villa", title: "Android Developer @ Spotify", img: "https://placedog.net/60/60" },
  ];

  return (
    <div className="profile-aside">
      <Card className="aside-card mb-2 overflow-hidden border-0">
        <Image src={imgAssets} alt="Promozione" fluid />
      </Card>

      {/* 3. PEOPLE YOU MAY KNOW */}

      <Card className="aside-card mb-2 overflow-hidden border-0">
        <Image src={snakeAsset} alt="SnakeGame" fluid />
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
    </div>
  );
};

export default HomepageAside;
