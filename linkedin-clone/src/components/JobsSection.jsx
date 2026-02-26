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
      <h4 className="mb-4">Le principali offerte di lavoro per te</h4>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      <Row className="g-4">
        {jobs.slice(0, 10).map((job) => (
          <Col key={job._id} xs={12}>
            <Card className="h-100 shadow-sm border-0 rounded-3">
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>

                <Card.Subtitle className="mb-2 text-muted">{job.company_name}</Card.Subtitle>

                <Card.Text>
                  <strong>Categoria:</strong> {job.category}
                </Card.Text>

                <Card.Text>
                  <strong>Tipo:</strong> {job.job_type}
                </Card.Text>

                <Card.Text>
                  <strong>Location:</strong> {job.candidate_required_location}
                </Card.Text>

                <Button variant="primary" size="sm" href={job.url} target="_blank" rel="noopener noreferrer">
                  Vedi Offerta
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JobsSection;
