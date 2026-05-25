import "./FeaturedScholarships.css";

const scholarships = [

  {
    title:
      "IIM Ahmedabad Scholarship",

    degree:
      "MBA",

    deadline:
      "Oct 12",

    college:
      "IIM Ahmedabad",

    link:
      "https://www.iquanta.in/blog/iim-ahmedabad-scholarship/",
  },

  {
    title:
      "ISB Scholarship",

    degree:
      "MBA",

    deadline:
      "Nov 04",

    college:
      "ISB Hyderabad",

    link:
      "https://admitstreet.com/blog/isb-scholarships/",
  },

  {
    title:
      "BITS Pilani Scholarship",

    degree:
      "B.Tech",

    deadline:
      "Sept 30",

    college:
      "BITS Pilani",

    link:
      "https://www.bits-pilani.ac.in/fee-structure-scholarships/",
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
                  {item.college}
                </span>

              </div>

              <div className="featured-buttons">

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >

                  <button className="view-btn">
                    View Details
                  </button>

                </a>

                <button className="save-btn">
                  Save
                </button>

              </div>

            </div>

          )
        )}

      </div>

      <div className="guest-note">

        <p>
          Login to save scholarships,
          personalize results,
          and access advanced filters.
        </p>

      </div>

    </section>
  );
}

export default FeaturedScholarships;