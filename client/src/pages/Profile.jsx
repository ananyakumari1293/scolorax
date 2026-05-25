import "./Profile.css";

import {
  useEffect,
  useState
} from "react";

import { useAuth }
from "../context/AuthContext";

function Profile() {

  const { currentUser } =
    useAuth();

  const [savedCount, setSavedCount] =
    useState(0);

  useEffect(() => {

    const fetchSavedScholarships =
      async () => {

        if (!currentUser) return;

        try {

          const response =
            await fetch(

              `${import.meta.env.VITE_API_URL}/api/saved/${currentUser.email}`

            );

          const data =
            await response.json();

          setSavedCount(
            data.length
          );

        } catch (error) {

          console.log(error);

        }
      };

    fetchSavedScholarships();

  }, [currentUser]);

  return (

    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-top">

          <div className="profile-avatar">

            {currentUser?.email
              ?.charAt(0)
              .toUpperCase()}

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
              {savedCount} Saved
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;