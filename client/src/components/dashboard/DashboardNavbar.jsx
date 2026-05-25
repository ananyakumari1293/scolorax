import "./DashboardNavbar.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth }
from "../../context/AuthContext";

const degreeOptions = [
  "Bachelor of Technology",
  "Master of Technology",
  "MBA",
  "MCA",
  "BCA",
  "BBA",
  "BSc",
  "MSc",
];

function DashboardNavbar() {

  const [search, setSearch] =
    useState("");

  const [menuOpen, setMenuOpen] =
    useState(false);

  const navigate = useNavigate();

  const {
    currentUser,
    logout
  } = useAuth();

  const filteredDegrees =
    degreeOptions.filter((degree) =>
      degree
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  // LOGOUT
  const handleLogout = async () => {

    try {

      await logout();

      navigate("/auth");

    } catch (error) {

      alert(error.message);

    }
  };

  return (

    <nav className="dashboard-navbar">

      {/* LOGO */}
      <div className="dashboard-logo">

        <div className="dashboard-logo-box">
          S
        </div>

        <h2>
          Scolora<span>X</span>
        </h2>

      </div>

      {/* SEARCH */}
      <div className="dashboard-search">

        <input
          type="text"
          placeholder="Search degrees..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        {search && (

          <div className="search-dropdown">

            {filteredDegrees.length > 0 ? (

              filteredDegrees.map((degree, index) => (

                <div
                  className="dropdown-item"
                  key={index}
                  onClick={() => {

                    navigate(
                      `/degree/${degree}`
                    );

                    setSearch("");

                  }}
                >

                  {degree}

                </div>

              ))

            ) : (

              <div className="dropdown-item">
                No degree found
              </div>

            )}

          </div>

        )}

      </div>

      {/* RIGHT */}
      <div className="dashboard-actions">

        <div className="profile-wrapper">

          {/* THREE DOT MENU */}
          <div
            className="menu-trigger"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            ⋮
          </div>

          {menuOpen && (

            <div className="profile-dropdown">

              {/* PROFILE TOP */}
              <div className="profile-dropdown-top">

                <div className="profile-dropdown-avatar">

                  {currentUser?.email
                    ?.charAt(0)
                    .toUpperCase()}

                </div>

                <div>

                  <h4>

                    {
                      currentUser?.displayName ||
                      "Student User"
                    }

                  </h4>

                  <p>
                    {currentUser?.email}
                  </p>

                </div>

              </div>

              {/* PROFILE */}
              <div
                className="dropdown-menu-item"
                onClick={() => {

                  navigate("/profile");

                  setMenuOpen(false);

                }}
              >
                My Profile
              </div>

              {/* SAVED */}
              <div
                className="dropdown-menu-item"
                onClick={() => {

                  navigate("/saved");

                  setMenuOpen(false);

                }}
              >
                Saved Scholarships
              </div>

              {/* LOGOUT */}
              <div
                className="dropdown-menu-item logout-item"
                onClick={handleLogout}
              >
                Logout
              </div>

            </div>

          )}

        </div>

      </div>

    </nav>
  );
}

export default DashboardNavbar;