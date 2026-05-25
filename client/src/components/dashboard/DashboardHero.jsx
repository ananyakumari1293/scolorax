import "./DashboardHero.css";

import { useAuth }
from "../../context/AuthContext";

function DashboardHero() {

  const { currentUser } =
    useAuth();

  return (

    <section className="dashboard-hero">

      <div className="dashboard-hero-content">

        <p>

          Welcome back,
          {" "}

          {

            currentUser?.displayName ||

            currentUser?.email?.split("@")[0] ||

            "Student"

          }

          👋

        </p>

        <h1>

          Explore scholarships
          <br />

          curated for students.

        </h1>

        <span className="dashboard-subtext">

          Discover scholarships across different degrees
          and universities to fund your future.

        </span>

        <div className="dashboard-filters">

          <button className="active-filter">
            Engineering
          </button>

          <button>
            MBA
          </button>

          <button>
            Medical
          </button>

          <button>
            Law
          </button>

          <button>
            Design
          </button>

        </div>

      </div>

    </section>
  );
}

export default DashboardHero;