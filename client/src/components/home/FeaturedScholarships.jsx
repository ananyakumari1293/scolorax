import "./FeaturedScholarships.css";

import { useNavigate }
from "react-router-dom";

const scholarships = [

  {
    title:
      "BITS Pilani Merit Scholarship",

    degree:
      "B.Tech",

    amount:
      "₹80,000",

    deadline:
      "Sept 30",
  },

  {
    title:
      "ISB MBA Excellence Scholarship",

    degree:
      "MBA",

    amount:
      "₹1,20,000",

    deadline:
      "Oct 14",
  },

  {
    title:
      "IIM Ahmedabad Future Leaders Scholarship",

    degree:
      "MBA",

    amount:
      "₹95,000",

    deadline:
      "Nov 08",
  },

];

function FeaturedScholarships() {

  const navigate =
    useNavigate();

  return (

    <section className="featured-section">

      <div className="featured-header">

        <p>
          Featured opportunities
        </p>

        <h2>
          Explore scholarships students
          are applying for right now.
        </h2>

      </div>

      <div className="featured-grid">

        {scholarships.map(
          (item, index) => (

            <div
              className="featured-card"
              key={index}
            >

              <div className="featured-top">

                <span className="featured-degree">

                  {item.degree}

                </span>

                <span className="featured-save">

                  🔒

                </span>

              </div>

              <h3>
                {item.title}
              </h3>

              <div className="featured-info">

                <span>

                  Deadline:
                  {" "}
                  {item.deadline}

                </span>

                <span>
                  {item.amount}
                </span>

              </div>

              <div className="featured-buttons">

                <button

                  className="view-btn"

                  onClick={() =>
                    navigate("/auth")
                  }
                >

                  Unlock Access

                </button>

                <button

                  className="save-btn"

                  onClick={() =>
                    navigate("/auth")
                  }
                >

                  Login

                </button>

              </div>

            </div>

          )
        )}

      </div>

      <div className="guest-note">

        <p>

          Login to unlock scholarship
          details, save opportunities,
          and personalize your dashboard.

        </p>

      </div>

    </section>
  );
}

export default FeaturedScholarships;