import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Button, Toast } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2Q1ODg1ZTNiMTAwMTViNWVkOTIiLCJpYXQiOjE3NzIxMDg3NDIsImV4cCI6MTc3MzMxODM0Mn0.49cRPY-_O-5kIvY7cftMLKypx68yUSC1-5UBtRyQDl4";

const SingleComment = function (props) {
  const profileObject = useSelector((currentState) => currentState.profile.object);
  const [showToast, setShowToast] = useState(false);
  const toggleShowToast = () => setShowToast(!showToast);

  const removeComment = function () {
    fetch(URL + props.commentID, {
      method: "DELETE",
      headers: {
        Authorization: key,
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Comment successfully deleted!");
          // props.getComments();
        } else {
          throw new Error("Error in deleting the selected comment");
        }
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  //  const modifyComment = (modifiedComment) => {
  //     fetch(URL + props.commentID, {
  //       method: "PUT",
  //       body: JSON.stringify(post),
  //       headers: {
  //         Authorization: key,
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => {
  //         if (res.ok) {
  //           console.log("Comment modified");

  //         } else {
  //           throw new Error("Error in modifying the comment");
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  return (
    <>
      <ListGroup.Item className="d-flex justify-content-between px-0 align-items-baseline border-0 py-0">
        <div className="post-header align-items-start position-relative flex-grow-1">
          <img src={profileObject.image} alt="Profilo Azienda" className="post-profile-pic object-fit-cover" style={{ height: "2em", width: "2em" }} />
          <div className="post-header-info">
            <h3>{props.author}</h3>
            <p className="post-time">
              {new Date(props.createdAt).toLocaleDateString("it-IT", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="mb-0 text-black mt-2 fs-7">{props.text}</p>
            <p className="mt-2 d-flex gap-2 align-items-center fw-semibold text-black text-opacity-75">
              Consiglia <span className="fs-6">|</span> Rispondi
            </p>
          </div>

          {/* {props.author === profileObject.email && ( */}
          <>
            <Button onClick={toggleShowToast} className="mb-2 bg-transparent border-0 text-dark fw-bolder fs-3 me-4 p-0 position-absolute top-0 end-0">
              ...
            </Button>
            <Toast
              onClose={toggleShowToast}
              show={showToast}
              animation={false}
              className="position-absolute mt-5 top-0 end-0 bg-white shadow-lg z-1"
              style={{ width: "20em" }}
            >
              <Toast.Body className="text-black text-opacity-75 fs-7 fw-semibold d-flex flex-column gap-3">
                {/* FUNZIONALITA' MODIFICA DA AGGIUNGERE */}
                {/* <p
                  className="d-flex gap-2 align-items-center px-2 justify-content-start"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    toggleShowToast();
                  }}
                >
                  <i className="bi bi-pencil fs-5"></i> Modifica post
                </p> */}
                {/* FUNZIONALITA' MODIFICA DA AGGIUNGERE */}
                <p
                  className="d-flex gap-2 align-items-center px-2 justify-content-start "
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    toggleShowToast();
                    removeComment();
                  }}
                >
                  <i className="bi bi-trash-fill fs-5"></i>Elimina post
                </p>
              </Toast.Body>
            </Toast>
          </>
          {/* )} */}
        </div>
      </ListGroup.Item>
    </>
  );
};

export default SingleComment;
