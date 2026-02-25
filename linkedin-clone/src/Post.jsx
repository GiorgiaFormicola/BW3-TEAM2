import { useSelector, useDispatch } from "react-redux";
import "./Post.css";
import { Dropdown, Modal } from "react-bootstrap";
import { getPostsList } from "./redux/actions";

function Post(props) {
  const profileObject = useSelector((currentState) => currentState.profile.object);

  const token = useSelector((currentState) => currentState.profile.token);
  const profile = useSelector((currentState) => currentState.profile);
  const URL = useSelector((currentState) => currentState.posts.URL);
  const dispatch = useDispatch();

  // const [show, setShow] = useState(false);
  // const [formValue, setFormValue] = useState("");

  const deletePost = () => {
    fetch(URL + props.post._id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("Post deleted");
          dispatch(getPostsList());
        } else {
          throw new Error("Error in adding the post");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleClose = () => {
  //   setFormValue("");
  //   setShow(false);
  // };
  // const handleShow = () => setShow(true);

  return (
    <>
      <div className="post-container" id="post-main-container">
        <div className="post-header">
          <img src={props.post.user.image} alt="Profilo Azienda" className="post-profile-pic object-fit-cover" />
          <div className="post-header-info">
            <h3>
              {props.post.user.name} {props.post.user.surname}{" "}
              {props.post.user._id === profileObject._id && (
                <>
                  &middot;
                  <span className="text-secondary fw-light"> Tu</span>
                </>
              )}
            </h3>
            {props.post.user._id === profileObject._id && (
              <p>
                {profileObject.title} presso {profileObject.area}
              </p>
            )}

            <p className="post-time">
              {new Date(props.post.createdAt).toLocaleDateString("it-IT", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              {props.post.user._id === profileObject._id && (
                <>
                  &middot;
                  <span>
                    {" "}
                    <i className="bi bi-globe-americas"></i>
                  </span>
                </>
              )}
            </p>
          </div>
          {props.post.user._id === profileObject._id && (
            <div className="post-header-options align-self-start">
              <span id="post-options-menu-btn">
                <Dropdown>
                  <Dropdown.Toggle className="border-0 bg-transparent text-secondary fs-5 fw-bolder">...</Dropdown.Toggle>

                  <Dropdown.Menu>
                    <div className="text-black text-opacity-75">
                      <p className="d-flex gap-2 align-items-center py-2 fs-7 justify-content-center">
                        <i className="bi bi-pencil fs-5"></i> Modifica post
                      </p>
                      <p
                        className="d-flex gap-2 align-items-center py-2 fs-7 justify-content-center"
                        onClick={() => {
                          deletePost();
                        }}
                      >
                        <i className="bi bi-trash-fill fs-5"></i>Elimina post
                      </p>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </span>
            </div>
          )}
        </div>

        <div className="post-body">
          <p>
            {props.post.text}
            <span className="post-text-more" id="post-read-more-link">
              ... altro
            </span>
          </p>
        </div>

        <div className="post-media">
          <img src={`https://picsum.photos/seed/${props.post.text.split(" ")[0]}/500/500`} alt="Strada nel deserto" className="post-main-image" />

          {/* <div className="post-media-footer">
          <h4>Puoi smettere di lavorare prima dei 67 anni?</h4>
          <p>121 invii</p>

          <button className="post-learn-more-btn" id="post-learn-more-btn">
            Scopri di più
          </button>
        </div> */}
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
      {/* INIZIO MODALE */}
      {/* <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="align-items-start p-4 border-bottom-0" closeButton>
          <Modal.Title>
            <div className="d-flex align-items-center gap-3">
              <img src={profile.object.image} alt="Profilo" className="createpost-profile-pic" />
              <div className="lh-sm">
                <p className="mb-0 fs-5">
                  {profile.object.name} {profile.object.surname}
                </p>
                <p className="fs-7 fw-normal mb-0">Pubblica: Chiunque</p>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-2">
          <Form>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={8}
                placeholder="Di cosa vorresti parlare?"
                className="border-0 fs-5"
                value={formValue}
                onChange={(e) => {
                  setFormValue(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
          <div className="px-3">
            <i className="bi bi-emoji-smile"></i>
            <div className=" text-secondary d-flex gap-4 mt-3">
              <i className="bi bi-card-image"></i>
              <i className="bi bi-calendar-week"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-plus-lg"></i>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="gap-1 px-4">
          <i className="bi bi-clock"></i>

          {formValue === "" && (
            <Button className="border-0 rounded-pill py-1 px-3 bg-secondary bg-opacity-25 text-secondary fw-semibold" disabled>
              Pubblica
            </Button>
          )}

          {formValue !== "" && (
            <Button
              onClick={() => {
                addPost({ text: formValue });
                handleClose();
              }}
              className="border-0 rounded-pill py-1 px-3 bg-primary text-light fw-semibold"
            >
              Pubblica
            </Button>
          )}
        </Modal.Footer>
      </Modal> */}
      {/* FINE MODALE */}
    </>
  );
}

export default Post;
