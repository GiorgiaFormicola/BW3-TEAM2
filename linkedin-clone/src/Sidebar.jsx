import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar-container" id="sidebar-main-container">
      {/* SCHEDA 1: Profilo principale */}
      <div className="sidebar-card">
        <div className="sidebar-cover"></div>

        <div className="sidebar-profile-section">
          <img
            src="https://picsum.photos/id/1005/70/70"
            alt="Profilo"
            className="sidebar-profile-pic"
          />
          {/* Aggiunto id */}
          <span className="sidebar-add-icon" id="sidebar-add-photo-btn">
            ➕
          </span>
        </div>

        <div className="sidebar-user-info">
          <h2>Francesco Proietti</h2>
          <p>Roma, Lazio</p>

          {/* Aggiunto id e prefisso classe */}
          <button
            className="sidebar-experience-btn"
            id="sidebar-add-experience-btn"
          >
            ➕ Esperienza
          </button>
        </div>
      </div>

      {/* SCHEDA 2: Collegamenti */}
      <div className="sidebar-card sidebar-padding">
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
      <div className="sidebar-card sidebar-padding">
        <p className="sidebar-premium-text">
          Sblocca nuovi collegamenti con Premium
        </p>
        {/* Aggiunto id perché è un link */}
        <p className="sidebar-premium-link" id="sidebar-premium-promo-link">
          <span className="sidebar-gold-icon">🟨</span> Prova di nuovo Premium
          gratis
        </p>
      </div>

      {/* SCHEDA 4: Menu scorciatoie */}
      <div className="sidebar-card sidebar-padding">
        {/* Aggiunti id per ogni voce del menu */}
        <div className="sidebar-menu-item" id="sidebar-menu-saved">
          <span>🔖</span> Elementi salvati
        </div>
        <div className="sidebar-menu-item" id="sidebar-menu-groups">
          <span>👥</span> Gruppi
        </div>
        <div className="sidebar-menu-item" id="sidebar-menu-newsletters">
          <span>📰</span> Newsletter
        </div>
        <div className="sidebar-menu-item" id="sidebar-menu-events">
          <span>📅</span> Eventi
        </div>
      </div>
    </div>
  )
}

export default Sidebar
