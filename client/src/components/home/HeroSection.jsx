import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

function HeroSection() {

  const navigate = useNavigate();

  return (
    <section className="hero">

      {/* LEFT SIDE */}
      <div className="hero-left">

        <p className="hero-label">
          Helping students discover opportunities
        </p>

        <h1>
          Finding scholarships
          shouldn’t feel impossible.
        </h1>

        <p className="hero-description">
          Students often spend hours searching across different
          websites, missing deadlines and valuable opportunities
          along the way.

          <br />
          <br />

          ScoloraX brings curated scholarships,
          degree-specific opportunities, and
          application resources together in one place.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() => navigate("/auth")}
          >
            Explore Scholarships
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/auth")}
          >
            Browse Degrees
          </button>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">

        {/* SCHOLARSHIP CARD */}
        <div className="scholarship-card">

          <div className="card-top">

            <span className="degree-tag">
              B.Tech
            </span>

            <span className="save-icon">
              ☆
            </span>

          </div>

          <h2>
            Tata Capital Pankh Scholarship
          </h2>

          <p>
            Financial assistance for students
            pursuing undergraduate professional courses.
          </p>

          <div className="card-info">

            <span>
              Deadline: Sept 30
            </span>

            <span>
              ₹50,000
            </span>

          </div>

          <button
            className="apply-btn"
            onClick={() => navigate("/auth")}
          >
            Apply Now
          </button>

        </div>

        {/* INFO CARD */}
        <div className="info-card">

          <p className="info-title">
            Why students use ScoloraX
          </p>

          <ul>
            <li>Curated opportunities in one place</li>
            <li>Degree-specific scholarship discovery</li>
            <li>Save and revisit scholarships easily</li>
          </ul>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;