import "./SavedScholarships.css";

import { useEffect, useState }
from "react";

function SavedScholarships() {

  const [savedScholarships,
    setSavedScholarships] =
    useState([]);

  useEffect(() => {

    const savedData =
      JSON.parse(
        localStorage.getItem(
          "savedScholarships"
        )
      ) || [];

    setSavedScholarships(savedData);

  }, []);

  return (

    <div className="saved-page">

      <div className="saved-header">

        <p>
          Your Collection
        </p>

        <h1>
          Saved Scholarships
        </h1>

      </div>

      <div className="saved-grid">

        {savedScholarships.length === 0 ? (

          <div className="empty-saved">

            <h3>
              No saved scholarships yet
            </h3>

            <p>
              Start saving scholarships
              to see them here.
            </p>

          </div>

        ) : (

          savedScholarships.map(
            (item, index) => (

              <div
                className="saved-card"
                key={index}
              >

                <div className="saved-top">

                  <span>
                    {item.type || "Scholarship"}
                  </span>

                  <span>
                    ⭐
                  </span>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                <button
                  onClick={() =>
                    window.open(
                      item.link,
                      "_blank"
                    )
                  }
                >
                  View Scholarship
                </button>

              </div>

            )
          )

        )}

      </div>

    </div>

  );
}

export default SavedScholarships;