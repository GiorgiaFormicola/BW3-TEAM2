import "./Recommendations.css"

function Recommendations() {
  return (
    <div
      className="recommendations-container"
      id="recommendations-main-container"
    >
      <h2 className="recommendations-title">Consigli per te</h2>

      <div className="recommendations-item">
        <img
          src="https://picsum.photos/id/111/50/50"
          alt="Leonardo Logo"
          className="recommendations-logo"
        />
        <div className="recommendations-info">
          <h3 className="recommendations-name">Leonardo</h3>
          <p className="recommendations-desc">Technology for a safer future.</p>
          <p className="recommendations-reason">
            <span>↗</span> Le persone che vivono in Italia seguono anche queste
            pagine
          </p>
        </div>

        <button
          className="recommendations-follow-btn"
          id="recommendations-follow-leonardo-btn"
        >
          + Segui
        </button>
      </div>

      <hr className="recommendations-divider" />

      <div className="recommendations-item">
        <img
          src="https://picsum.photos/id/112/50/50"
          alt="Biodiversity Logo"
          className="recommendations-logo"
        />
        <div className="recommendations-info">
          <h3 className="recommendations-name">Biodiversity Council</h3>
          <p className="recommendations-desc">
            A trusted expert voice communicating accurate information on
            Australia's most pressing biodiversity issues.
          </p>
          <p className="recommendations-reason">
            <span>↗</span> Le persone che segui seguono anche queste pagine
          </p>
        </div>

        <button
          className="recommendations-follow-btn"
          id="recommendations-follow-biodiversity-btn"
        >
          + Segui
        </button>
      </div>

      <hr className="recommendations-divider" />

      <div className="recommendations-item">
        <img
          src="https://picsum.photos/id/113/50/50"
          alt="Leonardo Aero Logo"
          className="recommendations-logo"
        />
        <div className="recommendations-info">
          <h3 className="recommendations-name">Leonardo Aeronautics</h3>
          <p className="recommendations-desc">
            Advanced design, highest performance
          </p>
          <p className="recommendations-reason">
            <span>↗</span> Le persone che vivono in Italia seguono anche queste
            pagine
          </p>
        </div>

        <button
          className="recommendations-follow-btn"
          id="recommendations-follow-leoaero-btn"
        >
          + Segui
        </button>
      </div>

      <div className="recommendations-footer">
        <button
          className="recommendations-view-all"
          id="recommendations-view-all-btn"
        >
          Visualizza altro ➔
        </button>
      </div>
    </div>
  )
}

export default Recommendations
