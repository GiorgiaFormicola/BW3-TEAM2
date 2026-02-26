// import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

// const URL = "https://striveschool-api.herokuapp.com/api/comments/";
// const key =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2Q1ODg1ZTNiMTAwMTViNWVkOTIiLCJpYXQiOjE3NzIxMDg3NDIsImV4cCI6MTc3MzMxODM0Mn0.49cRPY-_O-5kIvY7cftMLKypx68yUSC1-5UBtRyQDl4";

const CommentArea = function (props) {
  // const [commentsArray, setCommentsArray] = useState([]);
  // console.log(props.postID);

  // const getComments = () => {
  //   fetch(URL + props.postID, {
  //     headers: {
  //       Authorization: key,
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("Error in getting the post comments");
  //       }
  //     })
  //     .then((postCommentsArray) => {
  //       setCommentsArray(postCommentsArray);
  //     })
  //     .catch((err) => {
  //       console.log("ERROR", err);
  //     });
  // };

  // useEffect(() => {
  //   getComments();
  // }, []);

  return (
    <>
      {/* {props.postID && (
        <>
          {" "}
          <AddComment postID={props.postID}></AddComment>
          <CommentList comments={props.comments}></CommentList>
        </>
      )} */}
    </>
  );
};

export default CommentArea;
