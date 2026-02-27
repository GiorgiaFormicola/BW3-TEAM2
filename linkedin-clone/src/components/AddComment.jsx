import { useState, useEffect } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

import { useSelector } from "react-redux";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2Q1ODg1ZTNiMTAwMTViNWVkOTIiLCJpYXQiOjE3NzIxMDg3NDIsImV4cCI6MTc3MzMxODM0Mn0.49cRPY-_O-5kIvY7cftMLKypx68yUSC1-5UBtRyQDl4";

const AddComment = function (props) {
  const profile = useSelector((currentState) => currentState.profile);
  const [newComment, setNewComment] = useState({
    comment: "",
    rate: "1",
    elementId: props.postID,
  });

  useEffect(() => {
    setNewComment({
      ...newComment,
      elementId: props.postID,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.postID]);

  const addComment = () => {
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        Authorization: key,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("New comment saved!");

          setNewComment({
            comment: "",
            rate: "1",
            elementId: props.postID,
          });
          // props.getPostComments();
        } else {
          throw new Error("Error in adding your comment");
        }
      })
      .catch((err) => {
        console.log("ERROR ON SUBMIT", err);
      });
  };

  return (
    <>
      <div className="createpost-top px-3 pb-2 pt-md-1 ">
        <img src={profile.object.image} alt="Profilo" className="createpost-profile-pic" style={{ height: "2em", width: "2em" }} />
        <Form
          className="flex-grow-1"
          onSubmit={(e) => {
            e.preventDefault();
            addComment();
          }}
        >
          <InputGroup className="border rounded-pill overflow-hidden pe-2">
            <Form.Control
              required
              type="text"
              className=" fs-7 "
              placeholder="Aggiungi un commento"
              style={{ border: "none" }}
              value={newComment.comment}
              onChange={(e) => {
                setNewComment({
                  ...newComment,
                  comment: e.target.value,
                });
              }}
            />
            <InputGroup.Text className="bg-transparent px-2 d-flex gap-3" style={{ border: "none" }}>
              <i className="bi bi-emoji-smile text-black fs-5"></i> <i className="bi bi-card-image fs-5"></i>
            </InputGroup.Text>
          </InputGroup>
        </Form>
      </div>
    </>
  );
};

export default AddComment;
