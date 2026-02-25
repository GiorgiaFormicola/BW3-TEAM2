import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const JobsSection = () => {
  const [jobs, setJobs] = useState([]);
  const [category, setCategory] = useState("");
  useEffect(() => {
    fetch(`https://strive-benchmark.herokuapp.com/api/jobs?category=${category}&limit=10`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error in getting the jobs");
        }
      })
      .then((data) => {
        setJobs(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container className="mt-4">
      <h4 className="mb-4">Le principali offerte di lavoro per te</h4>

      {/* DEVO MODIFICARE LO STILE */}
      <Row className="g-4">
        {jobs.slice(0, 10).map((job) => (
          <Col key={job._id} xs={12} md={6} lg={4}>
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

                <Button variant="primary" size="sm" href={job.url} target="_blank">
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
