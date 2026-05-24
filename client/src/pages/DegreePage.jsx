import "./DegreePage.css";
import { useParams } from "react-router-dom";

const scholarships = [
  {
    title: "Tata Capital Pankh Scholarship",
    type: "Private",
    amount: "₹50,000",
  },

  {
    title: "AICTE Pragati Scholarship",
    type: "Government",
    amount: "₹30,000",
  },

  {
    title: "INSPIRE Scholarship",
    type: "Government",
    amount: "₹80,000",
  },
];

function DegreePage() {

  const { degreeName } = useParams();

  return (
    <div className="degree-page">

      {/* HEADER */}
      <div className="degree-page-header">

        <p>
          Degree Category
        </p>

        <h1>
          {degreeName} Scholarships
        </h1>

      </div>

      {/* FILTERS */}
      <div className="degree-filters">

        <button className="active-filter">
          All
        </button>

        <button>
          Government
        </button>

        <button>
          Private
        </button>

      </div>

      {/* SCHOLARSHIPS */}
      <div className="degree-scholarship-grid">

        {scholarships.map((item, index) => (
          <div
            className="degree-scholarship-card"
            key={index}
          >

            <div className="degree-card-top">

              <span>
                {item.type}
              </span>

              <span>
                ☆
              </span>

            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              Scholarship amount:
              {" "}
              {item.amount}
            </p>

            <button>
              Apply Now
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default DegreePage;