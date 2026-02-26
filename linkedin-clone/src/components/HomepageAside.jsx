import { Card, Button, Image } from "react-bootstrap";
import { useState } from "react";
import { InfoSquareFill, ChevronDown, ChevronUp, ChevronRight, EyeFill, PersonPlusFill } from "react-bootstrap-icons";
import "../assets/Aside.css";
import imgAssets from "../assets/img/Ads.png";
import snakeAsset from "../assets/img/Snake.png";

const HomepageAside = () => {
  const suggestedUsers = [
    { id: 1, name: "Alessandro Neri", title: "Lead UX/UI Designer presso Sketch", img: "https://placedog.net/56/56" },
    { id: 2, name: "Giulia Marchetti", title: "Full Stack Developer (React/Node.js)", img: "https://placedog.net/57/57" },
    { id: 3, name: "Roberto Piras", title: "Talent Acquisition Specialist IT", img: "https://placedog.net/58/58" },
    { id: 4, name: "Francesca Leone", title: "Data Scientist & AI Researcher", img: "https://placedog.net/59/59" },
    { id: 5, name: "Matteo Villa", title: "Android Developer @ Spotify", img: "https://placedog.net/60/60" },
  ];

  const [showAllNews, setShowAllNews] = useState(false);

  const newsList = [
    { id: 1, title: "I trend del settore tech 2026", time: "2 ore fa", readers: "12.450 lettori" },
    { id: 2, title: "Nuove regole per lo smart working", time: "5 ore fa", readers: "8.120 lettori" },
    { id: 3, title: "Venezia: record di turisti nel weekend", time: "1 giorno fa", readers: "5.300 lettori" },
    { id: 4, title: "L'intelligenza artificiale nel design", time: "1 giorno fa", readers: "15.900 lettori" },
    { id: 5, title: "Mercato immobiliare in crescita", time: "2 giorni fa", readers: "3.200 lettori" },
    { id: 6, title: "Sostenibilità: le nuove direttive", time: "2 giorni fa", readers: "4.100 lettori" },
  ];

  const visibleNews = showAllNews ? newsList : newsList.slice(0, 5);

  return (
    <div className="profile-aside">
      {/* SEZIONE NOTIZIE */}

      <Card className="aside-card mb-2 p-3 border-1 rounded-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="aside-section-title mb-0 fw-bold" style={{ fontSize: "1rem" }}>
            LinkedIn Notizie
          </h6>
          <InfoSquareFill size={14} className="text-muted cursor-pointer" />
        </div>

        <ul className="list-unstyled mb-0">
          {visibleNews.map((news) => (
            <li key={news.id} className="news-item mb-2">
              <div className="d-flex align-items-start">
                <span className="news-dot me-2">•</span>
                <div>
                  <span className="news-title text-truncate d-block" style={{ maxWidth: "250px" }}>
                    {news.title}
                  </span>
                  <span className="news-time">
                    {news.time} • {news.readers}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button className="btn-show-more d-flex align-items-center mt-1" onClick={() => setShowAllNews(!showAllNews)}>
          {showAllNews ? (
            <>
              Meno dettagli <ChevronUp className="ms-1" />
            </>
          ) : (
            <>
              Vedi altro <ChevronDown className="ms-1" />
            </>
          )}
        </button>
      </Card>

      {/* Snake AD */}

      <Card className="aside-card mb-2 p-3 border-1 rounded-3">
        <div className="mb-3">
          <h6 className="aside-section-title mb-0 fw-bold" style={{ fontSize: "0.9rem" }}>
            Rompicapo di LinkedIn in evidenza
          </h6>
        </div>

        <div className="puzzle-card d-flex align-items-start justify-content-between p-2 rounded">
          <div className="d-flex align-items-start">
            <div className="puzzle-icon-container me-3" style={{ width: "52px", height: "52px" }}>
              <Image src={snakeAsset} className="puzzle-icon-img" style={{ width: "80px" }} />
            </div>

            <div className="d-flex flex-column">
              <p className="puzzle-title mb-0">Zip — un rompicapo veloce</p>
              <p className="puzzle-desc mb-1">Risolvilo in 60 secondi o meno!</p>

              <div className="d-flex align-items-center">
                <EyeFill className="visibility-icon me-1" style={{ fontSize: "0.7rem" }} />
                <span className="puzzle-desc" style={{ fontSize: "0.7rem" }}>
                  Solo tu puoi vedere il punteggio
                </span>
                <ChevronRight className="text-muted mt-2" size={16} />
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* PEOPLE YOU MAY KNOW */}
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
      {/* ADS */}
      <Card className="aside-card mb-2 overflow-hidden border-0">
        <Image src={imgAssets} alt="Promozione" fluid />
      </Card>
    </div>
  );
};

export default HomepageAside;
