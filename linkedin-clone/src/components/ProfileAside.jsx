import { Card, Button, Image, ListGroup } from "react-bootstrap";
import { Pencil, PersonPlusFill, Globe } from "react-bootstrap-icons";

const MOCK_USERS = [
  {
    _id: "1",
    name: "Bruce",
    surname: "Wayne",
    title: "Chairman at Wayne Enterprises",
    image: "https://picsum.photos/50/50",
  },
  {
    _id: "2",
    name: "Bruce",
    surname: "Wayne",
    title: "Chairman at Wayne Enterprises",
    image: "https://picsum.photos/50/50",
  },
  {
    _id: "3",
    name: "Bruce",
    surname: "Wayne",
    title: "Chairman at Wayne Enterprises",
    image: "https://picsum.photos/50/50",
  },
  {
    _id: "4",
    name: "Bruce",
    surname: "Wayne",
    title: "Chairman at Wayne Enterprises",
    image: "https://picsum.photos/50/50",
  },
  {
    _id: "5",
    name: "Bruce",
    surname: "Wayne",
    title: "Chairman at Wayne Enterprises",
    image: "https://picsum.photos/50/50",
  },
];

const ProfileAside = () => {
  return (
    <aside className="profile-aside">
      {/* SEZIONE: LINGUE E PROFILO PUBBLICO */}
      <Card className="mb-2 shadow-sm border-1">
        <ListGroup variant="flush">
          <ListGroup.Item className="py-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-0 fw-bold" style={{ fontSize: "0.9rem" }}>
                  Lingua del profilo
                </h6>
                <p className="text-muted mb-0 small">Italiano</p>
              </div>
              <Pencil size={14} className="text-muted cursor-pointer" />
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-0 fw-bold" style={{ fontSize: "0.9rem" }}>
                  Profilo pubblico e URL
                </h6>
                <p className="text-muted mb-0 small">www.linkedin.com/in/tuo-nome</p>
              </div>
              <Pencil size={14} className="text-muted cursor-pointer" />
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      {/* SEZIONE: PEOPLE ALSO VIEWED */}
      <Card className="mb-2 shadow-sm border-1 p-3">
        <h6 className="fw-bold mb-3" style={{ fontSize: "1rem" }}>
          Altri profili consultati
        </h6>
        {MOCK_USERS.map((user) => (
          <div key={user._id} className="d-flex align-items-start mb-3">
            <Image src={user.image} roundedCircle className="me-2" style={{ width: "48px", height: "48px", objectFit: "cover" }} />
            <div className="border-bottom pb-2 w-100">
              <h6 className="mb-0 small fw-bold">
                {user.name} {user.surname}
              </h6>
              <p className="text-muted mb-2 lh-sm" style={{ fontSize: "0.75rem" }}>
                {user.title}
              </p>
              <Button variant="outline-secondary" size="sm" className="rounded-pill fw-bold px-3 py-0" style={{ fontSize: "0.85rem" }}>
                Messaggio
              </Button>
            </div>
          </div>
        ))}
      </Card>

      {/* SEZIONE: PEOPLE YOU MAY KNOW */}
      <Card className="shadow-sm border-1 p-3">
        <div className="mb-1">
          <h6 className="fw-bold mb-0" style={{ fontSize: "1rem" }}>
            Persone che potresti conoscere
          </h6>
          <p className="text-muted small">Dal tuo settore</p>
        </div>

        {MOCK_USERS.slice(0, 5).map((user) => (
          <div key={`know-${user._id}`} className="d-flex align-items-start mt-3">
            <Image src={user.image} roundedCircle className="me-2" style={{ width: "48px", height: "48px", objectFit: "cover" }} />
            <div className="w-100">
              <h6 className="mb-0 small fw-bold">
                {user.name} {user.surname}
              </h6>
              <p className="text-muted mb-2 lh-sm" style={{ fontSize: "0.75rem" }}>
                {user.title}
              </p>
              <Button variant="outline-secondary" size="sm" className="rounded-pill fw-bold px-3 d-flex align-items-center gap-1">
                <PersonPlusFill size={14} />
                Collegati
              </Button>
            </div>
          </div>
        ))}
      </Card>
    </aside>
  );
};

export default ProfileAside;
