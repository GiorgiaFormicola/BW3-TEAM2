import { Container, Row, Col } from "react-bootstrap";
import CreatePost from "../CreatePost";
import Post from "../Post";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostsList } from "../redux/actions";

// const postsListURL = "https://striveschool-api.herokuapp.com/api/posts/";

const HomePage = () => {
  const postsList = useSelector((currentState) => currentState.posts.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsList());
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
        <Col md={8} lg={4} className="offset-md-4 offset-lg-0 col-xxl-3 bg-primary min-vh-100"></Col>
      </Row>
    </Container>
  );
};

export default HomePage;
