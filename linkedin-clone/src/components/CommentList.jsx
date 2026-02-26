import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";

const CommentList = function (props) {
  console.log(props.comments);
  return (
    <>
      {props.comments.length !== 0 && (
        <ListGroup variant="flush" className="mt-2">
          {props.comments.reverse().map((comment) => {
            return (
              <SingleComment
                key={comment._id}
                author={comment.author}
                text={comment.comment}
                postID={comment.elementId}
                createdAt={comment.createdAt}
                commentID={comment._id}
              ></SingleComment>
            );
          })}
        </ListGroup>
      )}
    </>
  );
};

export default CommentList;
