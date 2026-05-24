import "./SavedScholarships.css";

function SavedScholarships() {

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

        <div className="saved-card">

          <div className="saved-top">

            <span>
              Private
            </span>

            <span>
              ☆
            </span>

          </div>

          <h3>
            Tata Capital Pankh Scholarship
          </h3>

          <p>
            Financial assistance for
            undergraduate students.
          </p>

          <button>
            View Scholarship
          </button>

        </div>

      </div>

    </div>
  );
}

export default SavedScholarships;