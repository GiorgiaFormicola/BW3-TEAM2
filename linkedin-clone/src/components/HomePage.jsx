import { Container, Row, Col } from "react-bootstrap";
import CreatePost from "../CreatePost";
import Post from "../Post";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostsList } from "../redux/actions";
import MyFooter from "./MyFooter";

const HomePage = () => {
  const postsList = useSelector((currentState) => currentState.posts.list);
  const dispatch = useDispatch();

  // const [commentsArray, setCommentsArray] = useState(null);

  // const getAllComments = () => {
  //   fetch(URL, {
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
  //     .then((allComments) => {
  //       setCommentsArray(allComments);
  //     })
  //     .catch((err) => {
  //       console.log("ERROR", err);
  //     });
  // };

  useEffect(() => {
    dispatch(getPostsList());
    // getAllComments();
  }, []);

  return (
    <Container fluid="md mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={4} lg={3} className="col-xxl-2 ">
          <Sidebar></Sidebar>
        </Col>
        <Col xs={12} md={8} lg={5} className="">
          <CreatePost></CreatePost>
          {postsList &&
            postsList
              .slice(-50)
              .reverse()
              .map((post) => <Post key={post._id} post={post}></Post>)}
        </Col>
        <Col md={8} lg={4} className="offset-md-4 offset-lg-0 col-xxl-3 min-vh-100">
          <MyFooter />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
