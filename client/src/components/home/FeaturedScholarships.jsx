import "./FeaturedScholarships.css";

const scholarships = [
  {
    title: "Tata Capital Pankh Scholarship",
    degree: "B.Tech",
    amount: "₹50,000",
    deadline: "Sept 30",
  },

  {
    title: "INSPIRE Scholarship",
    degree: "BSc",
    amount: "₹80,000",
    deadline: "Oct 12",
  },

  {
    title: "Central Sector Scholarship",
    degree: "MBA",
    amount: "₹20,000",
    deadline: "Nov 04",
  },
];

function FeaturedScholarships() {
  return (
    <section className="featured-section">

      <div className="featured-header">

        <p>
          Featured opportunities
        </p>

        <h2>
          Explore scholarships students are applying for right now.
        </h2>

      </div>

      <div className="featured-grid">

        {scholarships.map((item, index) => (
          <div className="featured-card" key={index}>

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
                Deadline: {item.deadline}
              </span>

              <span>
                {item.amount}
              </span>

            </div>

            <div className="featured-buttons">

              <button className="view-btn">
                View Details
              </button>

              <button className="save-btn">
                Save
              </button>

            </div>

          </div>
        ))}

      </div>

      <div className="guest-note">
        <p>
          Login to save scholarships, personalize results,
          and access advanced filters.
        </p>
      </div>

    </section>
  );
}

export default FeaturedScholarships;