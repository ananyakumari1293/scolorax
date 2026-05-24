import "./Profile.css";

import { useAuth }
from "../context/AuthContext";

function Profile() {

  const { currentUser } = useAuth();

  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-top">

          <div className="profile-avatar">
            {currentUser?.email?.charAt(0).toUpperCase()}
          </div>

          <div>

            <h2>
              {currentUser?.email}
            </h2>

            <p>
              ScoloraX Student Account
            </p>

          </div>

        </div>

        <div className="profile-info">

          <div className="info-box">

            <p className="info-label">
              Email
            </p>

            <h3>
              {currentUser?.email}
            </h3>

          </div>

          <div className="info-box">

            <p className="info-label">
              Account Type
            </p>

            <h3>
              Student
            </h3>

          </div>

          <div className="info-box">

            <p className="info-label">
              Saved Scholarships
            </p>

            <h3>
              0 Saved
            </h3>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;