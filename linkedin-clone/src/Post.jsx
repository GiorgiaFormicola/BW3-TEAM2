import { useSelector, useDispatch } from "react-redux";
import "./Post.css";
import { useState, useEffect } from "react";
import { Modal, Button, Toast, Form, InputGroup } from "react-bootstrap";
import { getPostsList } from "./redux/actions";
import AddComment from "./components/AddComment";
import CommentList from "./components/CommentList";

const commentsURL = "https://striveschool-api.herokuapp.com/api/comments/";
const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2Q1ODg1ZTNiMTAwMTViNWVkOTIiLCJpYXQiOjE3NzIxMDg3NDIsImV4cCI6MTc3MzMxODM0Mn0.49cRPY-_O-5kIvY7cftMLKypx68yUSC1-5UBtRyQDl4";

const Post = (props) => {
  const profileObject = useSelector((currentState) => currentState.profile.object);

  const token = useSelector((currentState) => currentState.profile.token);
  const profile = useSelector((currentState) => currentState.profile);
  const URL = useSelector((currentState) => currentState.posts.URL);
  const dispatch = useDispatch();

  const [showToast, setShowToast] = useState(false);
  const toggleShowToast = () => setShowToast(!showToast);
  const [showModal, setShowModal] = useState(false);
  const [formValue, setFormValue] = useState(props.post.text);

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

  const modifyPost = (post) => {
    fetch(URL + props.post._id, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("Post modified");
          dispatch(getPostsList());
        } else {
          throw new Error("Error in modifying the post");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const handleShow = () => setShowModal(true);

  // FUNZIONE PER OTTENERE COMMENTI DEL POST
  const [commentsArray, setCommentsArray] = useState(null);

  const getPostComments = () => {
    fetch(commentsURL, {
      headers: {
        Authorization: key,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error in getting the post comments");
        }
      })
      .then((allComments) => {
        const postComments = allComments.filter((comment) => comment.elementId === props.post._id);
        setCommentsArray(postComments);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  useEffect(() => {
    getPostComments();
  }, []);
  // FUNZIONE PER OTTENERE COMMENTI DEL POST

  // FUNZIONE PER LIKE RANDOM
  const randomNumber = Math.floor(Math.random() * 41);
  // FUNZIONE PER LIKE RANDOM

  return (
    <>
      {profileObject && (
        <>
          <div className="post-container mt-0 py-2 " id="post-main-container">
            <div className="post-header align-items-center position-relative pt-lg-1 pb-lg-2 ">
              <img src={props.post.user.image} alt="Profilo Azienda" className="post-profile-pic object-fit-cover" />
              <div className="post-header-info">
                <h3 className="fs-6">
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
                <>
                  <Button onClick={toggleShowToast} className="mb-2 bg-transparent border-0 text-dark fw-bolder fs-3 me-4 p-0 position-absolute top-0 end-0">
                    ...
                  </Button>
                  <Toast
                    onClose={toggleShowToast}
                    show={showToast}
                    animation={false}
                    className="position-absolute top-50 mt-2 end-0 bg-white shadow-sm"
                    style={{ width: "20em" }}
                  >
                    <Toast.Body className="text-black text-opacity-75 fs-7 fw-semibold d-flex flex-column gap-3">
                      <p
                        className="d-flex gap-2 align-items-center px-2 justify-content-start"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleShow();
                          toggleShowToast();
                        }}
                      >
                        <i className="bi bi-pencil fs-5"></i> Modifica post
                      </p>
                      <p
                        className="d-flex gap-2 align-items-center px-2 justify-content-start "
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          toggleShowToast();
                          deletePost();
                        }}
                      >
                        <i className="bi bi-trash-fill fs-5"></i>Elimina post
                      </p>
                    </Toast.Body>
                  </Toast>
                </>
              )}
            </div>

            <div className="post-body pb-2">
              <p>
                {props.post.text}
                {/* <span className="post-text-more" id="post-read-more-link">
              ... altro
            </span> */}
              </p>
            </div>

            {props.post.image && (
              <div className="post-media">
                <img src={props.post.image} alt="Strada nel deserto" className="post-main-image" />
                {/* <img src={`https://picsum.photos/seed/${props.post.text.split(" ")[0]}/500/500`} alt="Strada nel deserto" className="post-main-image" /> */}

                {/* <div className="post-media-footer">
          <h4>Puoi smettere di lavorare prima dei 67 anni?</h4>
          <p>121 invii</p>

          <button className="post-learn-more-btn" id="post-learn-more-btn">
            Scopri di più
          </button>
        </div> */}
              </div>
            )}

            <div className="post-stats align-items-center">
              <span className="post-reactions d-flex align-items-baseline gap-1">
                {randomNumber !== 0 && (
                  <>
                    <i className="bi bi-hand-thumbs-up-fill text-light bg-primary px-1 rounded-pill"></i> {randomNumber}
                  </>
                )}
              </span>

              <span className="post-comments">
                {commentsArray && (
                  <>
                    {commentsArray.length !== 0 && (
                      <>
                        {" "}
                        {commentsArray.length === 1 && "1 commento"} {commentsArray.length !== 1 && `${commentsArray.length} commenti`}
                      </>
                    )}
                  </>
                )}
              </span>
            </div>

            <hr className="post-divider text-secondary" />

            <div className="post-actions px-4 py-2">
              <button className="post-action-btn text-black text-opacity-75 d-md-flex flex-md-column gap-md-0 py-md-0" id="post-action-btn-like">
                <i className="bi bi-hand-thumbs-up text-black text-opacity-75" style={{ transform: "scaleX(-1)" }}></i> Consiglia
              </button>
              <button className="post-action-btn text-black text-opacity-75 d-md-flex flex-md-column gap-md-0 py-md-0 " id="post-action-btn-comment">
                <i className="bi bi-chat-dots text-black text-opacity-75"></i> Commenta
              </button>
              <button className="post-action-btn text-black text-opacity-75 d-md-flex flex-md-column gap-md-0 py-md-0" id="post-action-btn-share">
                <i className="bi bi-repeat text-black text-opacity-75"></i> Diffondi il post
              </button>
              <button className="post-action-btn text-black text-opacity-75 d-md-flex flex-md-column gap-md-0 py-md-0" id="post-action-btn-send">
                <i className="bi bi-send-fill text-black text-opacity-75"></i> Invia
              </button>
            </div>
            <AddComment postID={props.post._id}></AddComment>
            {commentsArray && <CommentList comments={commentsArray}></CommentList>}

            {/* <CommentArea postID={props.post._id} comments=></CommentArea> */}
          </div>
          {/* INIZIO MODALE */}
          <Modal show={showModal} onHide={handleClose} animation={false}>
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
              </div>
            </Modal.Body>
            <Modal.Footer className="px-4">
              {formValue === "" && (
                <Button className="border-0 rounded-pill py-1 px-3 bg-secondary bg-opacity-25 text-secondary fw-semibold" disabled>
                  Salva
                </Button>
              )}

              {formValue !== "" && (
                <Button
                  onClick={() => {
                    modifyPost({ text: formValue });
                    handleClose();
                  }}
                  className="border-0 rounded-pill py-1 px-3 bg-primary text-light fw-semibold"
                >
                  Salva
                </Button>
              )}
            </Modal.Footer>
          </Modal>
          {/* FINE MODALE */}
        </>
      )}
    </>
  );
};

export default Post;
