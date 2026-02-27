import { Modal, Button, Form, ModalBody } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CreatePost.css";
import { getPostsList } from "./redux/actions";

function CreatePost() {
  const token = useSelector((currentState) => currentState.profile.token);
  const profile = useSelector((currentState) => currentState.profile);
  const URL = useSelector((currentState) => currentState.posts.URL);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [formValue, setFormValue] = useState("");

  const addPost = (post) => {
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("Post added");
          dispatch(getPostsList());
        } else {
          throw new Error("Error in adding the post");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setFormValue("");
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      {profile.object && (
        <>
          <div className="createpost-container mx-0" style={{ width: "100%" }}>
            <div className="createpost-card pb-2 pt-3 pt-md-2 py-lg-1">
              <div className="createpost-top pt-md-2">
                <img src={profile.object.image} alt="Profilo" className="createpost-profile-pic" />

                <button
                  className="createpost-input-btn fs-6 py-2 py-md-1 lh-lg fw-bold text-black text-opacity-75"
                  id="createpost-start-btn"
                  onClick={handleShow}
                >
                  Crea un post
                </button>
              </div>

              <div className="createpost-actions mt-2 pt-1 mt-md-1 mt-lg-0">
                <button className="createpost-action-btn gap-2 fw-semibold text-secondary-emphasis" id="createpost-video-btn">
                  <i className="bi bi-youtube fs-3" style={{ color: "#44712E" }}></i> Video
                </button>
                <button className="createpost-action-btn gap-2 fw-semibold text-secondary-emphasis" id="createpost-photo-btn">
                  <i className="bi bi-image fs-5" style={{ color: "#0A66C2" }}></i> Foto
                </button>
                <button className="createpost-action-btn gap-2 fw-semibold text-secondary-emphasis" id="createpost-article-btn">
                  <i className="bi bi-text-indent-left fs-2" style={{ color: "#B24020" }}></i> Scrivi un articolo
                </button>
              </div>
            </div>

            <div className="createpost-sort-container my-1">
              <hr className="createpost-divider" />
              <span className="createpost-sort-text">
                Seleziona la visualizzazione del feed:{" "}
                {/* <span className="createpost-sort-anchor text-black text-opacity-50" id="createpost-sort-dropdown-anchor"> */}
                <span className="fw-medium">più rilevanti per primi ▼</span>
                {/* </span> */}
              </span>
            </div>
          </div>
          {/* INIZIO MODALE */}
          <Modal show={show} onHide={handleClose} animation={false}>
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
          </Modal>
          {/* FINE MODALE */}
        </>
      )}
    </>
  );
}

export default CreatePost;
