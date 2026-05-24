import "./DegreeGrid.css";
import { useNavigate } from "react-router-dom";

const degrees = [
  {
    title: "Bachelor of Technology",
    short: "B.Tech",
    description:
      "Engineering scholarships, technical opportunities, and government & private funding programs.",
  },

  {
    title: "Master of Technology",
    short: "M.Tech",
    description:
      "Postgraduate engineering scholarships and advanced technical research opportunities.",
  },

  {
    title: "Master of Business Administration",
    short: "MBA",
    description:
      "Management scholarships, leadership programs, and business-focused opportunities.",
  },

  {
    title: "Bachelor of Computer Applications",
    short: "BCA",
    description:
      "Technology scholarships and software-focused undergraduate opportunities.",
  },

  {
    title: "Master of Computer Applications",
    short: "MCA",
    description:
      "Postgraduate computer application scholarships and IT funding programs.",
  },

  {
    title: "Bachelor of Business Administration",
    short: "BBA",
    description:
      "Business administration scholarships and undergraduate management opportunities.",
  },
];

function DegreeGrid() {

  const navigate = useNavigate();

  return (
    <section className="degree-grid-section">

      <div className="degree-grid">

        {degrees.map((degree, index) => (
          <div
            className="dashboard-degree-card"
            key={index}
            onClick={() => navigate(`/degree/${degree.short}`)}
          >

            <div className="degree-card-top">

              <span>
                {degree.short}
              </span>

            </div>

            <h3>
              {degree.title}
            </h3>

            <p>
              {degree.description}
            </p>

            <button>
              Explore Scholarships
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default DegreeGrid;