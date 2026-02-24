import "./CreatePost.css"

function CreatePost() {
  return (
    <div className="createpost-container">
      <div className="createpost-card">
        <div className="createpost-top">
          <img
            src="https://picsum.photos/id/1005/50/50"
            alt="Profilo"
            className="createpost-profile-pic"
          />

          <button className="createpost-input-btn" id="createpost-start-btn">
            Crea un post
          </button>
        </div>

        <div className="createpost-actions">
          <button className="createpost-action-btn" id="createpost-video-btn">
            <span>▶️</span> Video
          </button>
          <button className="createpost-action-btn" id="createpost-photo-btn">
            <span>🖼️</span> Foto
          </button>
          <button className="createpost-action-btn" id="createpost-article-btn">
            <span>📰</span> Scrivi un articolo
          </button>
        </div>
      </div>

      <div className="createpost-sort-container">
        <hr className="createpost-divider" />
        <span className="createpost-sort-text">
          Seleziona la visualizzazione del feed:{" "}
          <span
            className="createpost-sort-anchor"
            id="createpost-sort-dropdown-anchor"
          >
            Più rilevanti per primi ▼
          </span>
        </span>
      </div>
    </div>
  )
}

export default CreatePost
