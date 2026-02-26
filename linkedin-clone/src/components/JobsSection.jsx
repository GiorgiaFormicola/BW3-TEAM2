import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { fetchJobs } from "../redux/actions/index.js";

const JobsSection = () => {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.search.category);
  const { jobs, loading, error } = useSelector((state) => state.jobs);
  useEffect(() => {
    dispatch(fetchJobs(category || "development"));
  }, [category, dispatch]);

  return (
    <Container className="mt-4">
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      <Row className="g-4 bg-white border rounded-3">
        <h5 className="mb-1">Le principali offerte di lavoro per te</h5>
        <p className="fs-9 mt-0">In base al tuo profilo, alle tue preferenze e ad attività come candidature, ricerche e salvataggi</p>
        {jobs.slice(0, 10).map((job) => (
          <Col className="m-0 rounded-0 border-none" key={job._id} xs={12}>
            <a href={job.url} className="text-decoration-none">
              <Card className="rounded-0 cardborder border-white ">
                <Card.Body className="ps-0">
                  <Card.Title className="fs-7 text-primary">{job.title}</Card.Title>

                  <Card.Subtitle className="mb-2 fs-9">{job.company_name}</Card.Subtitle>

                  <Card.Text className="fs-9 text-muted">{job.category}</Card.Text>

                  <Card.Text className="fs-9 text-muted">{job.job_type}</Card.Text>

                  <Card.Text className="fs-9 text-muted">{job.candidate_required_location}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JobsSection;
