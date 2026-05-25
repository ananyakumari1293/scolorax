import "./DegreePage.css";

import { useState } from "react";

import { useParams } from "react-router-dom";

import { useAuth }
from "../context/AuthContext";

const scholarships = [

  // ================= B.TECH =================

  {
    title: "BITS Pilani Scholarship",
    type: "Private",
    location: "India",
    degree: "b.tech",
    college: "BITS Pilani",
    link:
      "https://www.bits-pilani.ac.in/fee-structure-scholarships/",
  },

  {
    title: "SRM Scholarship",
    type: "Private",
    location: "India",
    degree: "b.tech",
    college: "SRM University",
    link:
      "https://www.srmist.edu.in/policies/scholarship-policy/",
  },

  {
    title: "LPU Scholarship",
    type: "Private",
    location: "India",
    degree: "b.tech",
    college: "LPU",
    link:
      "https://www.lpu.in/scholarship/",
  },

  {
    title: "Thapar Scholarship",
    type: "Private",
    location: "India",
    degree: "b.tech",
    college: "Thapar University",
    link:
      "https://www.thapar.edu/admissions/pages/scholarships",
  },

  {
    title: "UPES Scholarship",
    type: "Private",
    location: "India",
    degree: "b.tech",
    college: "UPES",
    link:
      "https://www.upes.ac.in/admissions/scholarships",
  },

  {
    title: "VIT Scholarship",
    type: "Private",
    location: "India",
    degree: "b.tech",
    college: "VIT Vellore",
    link:
      "https://viteee.vit.ac.in/",
  },

  // ================= MBA =================

  {
    title: "ISB Scholarship",
    type: "Private",
    location: "India",
    degree: "mba",
    college: "ISB Hyderabad",
    link:
      "https://admitstreet.com/blog/isb-scholarships/",
  },

  {
    title: "IIM Ahmedabad Scholarship",
    type: "Government",
    location: "India",
    degree: "mba",
    college: "IIM Ahmedabad",
    link:
      "https://www.iquanta.in/blog/iim-ahmedabad-scholarship/",
  },

  {
    title: "XLRI Scholarship",
    type: "Private",
    location: "India",
    degree: "mba",
    college: "XLRI Jamshedpur",
    link:
      "https://bschool.careers360.com/articles/mba-scholarships-in-india-2026-amount-government-corporate-college-wise-eligibility-how-to-avail",
  },

  {
    title: "IIM Bangalore Scholarship",
    type: "Government",
    location: "India",
    degree: "mba",
    college: "IIM Bangalore",
    link:
      "https://gyanplug.com/blogs/mba-scholarships-india-2026-the-complete-guide-to-funding-your-dream",
  },

  {
    title: "SPJIMR Scholarship",
    type: "Private",
    location: "India",
    degree: "mba",
    college: "SPJIMR Mumbai",
    link:
      "https://www.buddy4study.com/article/mba-scholarships-in-india",
  },

];

function DegreePage() {

  const { degreeName } = useParams();

  const { currentUser } =
    useAuth();

  const [showFilters, setShowFilters] =
    useState(false);

  const [selectedType, setSelectedType] =
    useState("All");

  const [selectedLocation, setSelectedLocation] =
    useState("All");

  const [savedItems, setSavedItems] =
    useState([]);

  // ================= SAVE =================

  const handleSave =
    async (scholarship) => {

      if (!currentUser) {

        alert(
          "Please login first"
        );

        return;
      }

      try {

        const response =
          await fetch(

            `${import.meta.env.VITE_API_URL}/api/saved/save`,

            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({

                userEmail:
                  currentUser.email,

                title:
                  scholarship.title,

                type:
                  scholarship.type,

                location:
                  scholarship.location,

                college:
                  scholarship.college,

                link:
                  scholarship.link,

              }),
            }
          );

        const data =
          await response.json();

        alert(data.message);

        if (
          !savedItems.includes(
            scholarship.title
          )
        ) {

          setSavedItems([
            ...savedItems,
            scholarship.title
          ]);

        }

      } catch (error) {

        console.log(error);

      }
    };

  // ================= FILTER =================

  const filteredScholarships =
    scholarships.filter((item) => {

      const matchesDegree =

        item.degree.toLowerCase() ===
        degreeName.toLowerCase();

      const matchesType =

        selectedType === "All" ||
        item.type === selectedType;

      const matchesLocation =

        selectedLocation === "All" ||
        item.location === selectedLocation;

      return (

        matchesDegree &&
        matchesType &&
        matchesLocation

      );
    });

  return (

    <div className="degree-page">

      {/* ================= HEADER ================= */}

      <div className="degree-page-header">

        <p>
          Degree Category
        </p>

        <h1>
          {degreeName} Scholarships
        </h1>

      </div>

      {/* ================= FILTER ================= */}

      <div className="modern-filter-bar">

        <button
          className="filter-toggle-btn"

          onClick={() =>
            setShowFilters(
              !showFilters
            )
          }
        >
          Filters ⚙️
        </button>

        {showFilters && (

          <div className="filter-dropdown-modern">

            {/* TYPE */}

            <h4>
              Scholarship Type
            </h4>

            <div className="filter-grid">

              <div

                className={

                  selectedType ===
                  "Government"

                    ? "filter-card active-card"

                    : "filter-card"

                }

                onClick={() => {

                  setSelectedType(
                    "Government"
                  );

                  setShowFilters(false);

                }}
              >

                <div className="filter-icon">
                  🏛️
                </div>

                <span>
                  Government
                </span>

              </div>

              <div

                className={

                  selectedType ===
                  "Private"

                    ? "filter-card active-card"

                    : "filter-card"

                }

                onClick={() => {

                  setSelectedType(
                    "Private"
                  );

                  setShowFilters(false);

                }}
              >

                <div className="filter-icon">
                  🏢
                </div>

                <span>
                  Private
                </span>

              </div>

            </div>

            {/* LOCATION */}

            <h4>
              Location
            </h4>

            <div className="filter-grid">

              <div

                className={

                  selectedLocation ===
                  "India"

                    ? "filter-card active-card"

                    : "filter-card"

                }

                onClick={() => {

                  setSelectedLocation(
                    "India"
                  );

                  setShowFilters(false);

                }}
              >

                <div className="filter-icon">
                  🇮🇳
                </div>

                <span>
                  India
                </span>

              </div>

              <div

                className={

                  selectedLocation ===
                  "Abroad"

                    ? "filter-card active-card"

                    : "filter-card"

                }

                onClick={() => {

                  setSelectedLocation(
                    "Abroad"
                  );

                  setShowFilters(false);

                }}
              >

                <div className="filter-icon">
                  🌍
                </div>

                <span>
                  Abroad
                </span>

              </div>

            </div>

          </div>

        )}

      </div>

      {/* ================= SCHOLARSHIPS ================= */}

      <div className="degree-scholarship-grid">

        {filteredScholarships.map(
          (item, index) => (

            <div
              className="degree-scholarship-card"
              key={index}
            >

              <div className="degree-card-top">

                <span>
                  {item.type}
                </span>

                <span

                  className={

                    savedItems.includes(
                      item.title
                    )

                      ? "saved-star"

                      : "unsaved-star"

                  }

                  onClick={() =>
                    handleSave(item)
                  }
                >

                  {

                    savedItems.includes(
                      item.title
                    )

                      ? "★"

                      : "☆"

                  }

                </span>

              </div>

              <h3>
                {item.title}
              </h3>

              <p>

                College:
                {" "}
                {item.college}

                <br /><br />

                Location:
                {" "}
                {item.location}

              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >

                <button>
                  Apply Now
                </button>

              </a>

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default DegreePage;