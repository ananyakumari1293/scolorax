import "./DegreeGrid.css";

import { useNavigate } from "react-router-dom";

const degrees = [

  {
    title: "Bachelor of Technology",

    short: "B.Tech",

    description:
      "Engineering scholarships and technical funding opportunities.",

    icon: "⚙️",
  },

  {
    title: "Master of Technology",

    short: "M.Tech",

    description:
      "Advanced engineering and research scholarship programs.",

    icon: "🛠️",
  },

  {
    title: "Master of Business Administration",

    short: "MBA",

    description:
      "Management scholarships and leadership opportunities.",

    icon: "📊",
  },

  {
    title: "Bachelor of Computer Applications",

    short: "BCA",

    description:
      "Technology scholarships and software opportunities.",

    icon: "💻",
  },

  {
    title: "Master of Computer Applications",

    short: "MCA",

    description:
      "IT and postgraduate computer application scholarships.",

    icon: "🖥️",
  },

  {
    title: "Bachelor of Business Administration",

    short: "BBA",

    description:
      "Business administration scholarships and funding programs.",

    icon: "📈",
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

            onClick={() =>
              navigate(`/degree/${degree.short}`)
            }
          >

            <div className="degree-card-top">

              <span>
                {degree.short}
              </span>

              <div className="degree-icon">

                {degree.icon}

              </div>

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