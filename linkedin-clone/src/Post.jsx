import "./Post.css"

function Post() {
  return (
    <div className="post-container" id="post-main-container">
      <div className="post-header">
        <img
          src="https://picsum.photos/id/1025/50/50"
          alt="Profilo Azienda"
          className="post-profile-pic"
        />
        <div className="post-header-info">
          <h3>Fisher Investments Italia</h3>
          <p>23.050 follower</p>
          <p className="post-time">Post sponsorizzato</p>
        </div>
        <div className="post-header-options">
          <span id="post-options-menu-btn">...</span>
        </div>
      </div>

      <div className="post-body">
        <p>
          Per le persone con risparmi a partire da 500.000 € ottieni la guida e
          gli aggiornamenti periodici per aiutarti a raggiungere la libertà{" "}
          <span className="post-text-more" id="post-read-more-link">
            ... altro
          </span>
        </p>
      </div>

      <div className="post-media">
        <img
          src="https://picsum.photos/id/29/500/500"
          alt="Strada nel deserto"
          className="post-main-image"
        />

        <div className="post-media-footer">
          <h4>Puoi smettere di lavorare prima dei 67 anni?</h4>
          <p>121 invii</p>

          <button className="post-learn-more-btn" id="post-learn-more-btn">
            Scopri di più
          </button>
        </div>
      </div>

      <div className="post-stats">
        <span className="post-reactions">👍❤️ 198</span>
        <span className="post-comments">1 diffusione post</span>
      </div>

      <hr className="post-divider" />

      <div className="post-actions">
        <button className="post-action-btn" id="post-action-btn-like">
          👍 Consiglia
        </button>
        <button className="post-action-btn" id="post-action-btn-comment">
          💬 Commenta
        </button>
        <button className="post-action-btn" id="post-action-btn-share">
          🔁 Diffondi il post
        </button>
        <button className="post-action-btn" id="post-action-btn-send">
          ✈️ Invia
        </button>
      </div>
    </div>
  )
}

export default Post
