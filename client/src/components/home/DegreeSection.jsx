import "./DegreeSection.css";
import { useNavigate } from "react-router-dom";

const degrees = [
  {
    title: "B.Tech",
    description: "Engineering and technical scholarships",
  },

  {
    title: "MBA",
    description: "Management and business opportunities",
  },

  {
    title: "MCA",
    description: "Computer application scholarships",
  },

  {
    title: "BCA",
    description: "Technology and software focused funding",
  },

  {
    title: "BBA",
    description: "Business administration scholarships",
  },

  {
    title: "BSc",
    description: "Science and research opportunities",
  },
];

function DegreeSection() {

  const navigate = useNavigate();

  return (
    <section className="degree-section">

      <div className="degree-header">

        <p>
          Browse opportunities by degree
        </p>

        <h2>
          Find scholarships relevant to your academic path.
        </h2>

      </div>

      <div className="degree-grid">

        {degrees.map((degree, index) => (
          <div
            className="degree-card"
            key={index}
            onClick={() => navigate("/auth")}
          >

            <div className="degree-top">

              <h3>
                {degree.title}
              </h3>

              <span>
                →
              </span>

            </div>

            <p>
              {degree.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default DegreeSection;