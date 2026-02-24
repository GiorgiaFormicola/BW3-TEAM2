import { Card, Button, Image } from "react-bootstrap";
import { Pencil, PersonPlusFill } from "react-bootstrap-icons";

const ProfileAside = ({ profile }) => {
  const suggestedUsers = profile.suggestedUsers ?? [];

  return (
    <div className="profile-aside">
      <Card className="aside-card shadow-sm p-3 mb-2">
        <div className="d-flex justify-content-between align-items-start mb-3 border-bottom pb-2">
          <div>
            <h6 className="aside-subtitle mb-0">Lingua del profilo</h6>
            <span className="aside-text-muted">{profile.language ?? "Italiano"}</span>
          </div>
          <Pencil size={14} className="text-muted" />
        </div>
      </Card>

      <Card className="aside-card shadow-sm p-3">
        <h6 className="aside-title mb-1">Persone che potresti conoscere</h6>
        <p className="aside-text-muted mb-3">Dal tuo settore</p>

        {suggestedUsers.map((user) => (
          <div key={user.id} className="d-flex align-items-start mt-3 user-item pb-3">
            <Image src={user.img} className="profile-img-aside me-2" />
            <div className="w-100">
              <h6 className="aside-subtitle mb-0">{user.name}</h6>
              <p className="aside-text-muted mb-2 lh-sm">{user.title}</p>
              <Button variant="outline-secondary" size="sm" className="btn-aside-connect">
                <PersonPlusFill size={16} className="me-1" />
                Collegati
              </Button>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default ProfileAside;
