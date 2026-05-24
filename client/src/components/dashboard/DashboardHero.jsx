import "./DashboardHero.css";

function DashboardHero() {
  return (
    <section className="dashboard-hero">

      <div>

        <p>
          Welcome back 👋
        </p>

        <h1>
          Explore scholarships curated for students.
        </h1>

      </div>

      <div className="dashboard-filters">

        <button className="active-filter">
          All
        </button>

        <button>
          Government
        </button>

        <button>
          Private
        </button>

        <button>
          Engineering
        </button>

        <button>
          Recently Added
        </button>

      </div>

    </section>
  );
}

export default DashboardHero;