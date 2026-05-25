import "./DegreePage.css";

import { useState } from "react";

import { useParams } from "react-router-dom";

import { useAuth }
from "../context/AuthContext";

const scholarships = [

  {
    title: "Tata Capital Pankh Scholarship",
    type: "Private",
    location: "India",
    amount: "₹50,000",
  },

  {
    title: "AICTE Pragati Scholarship",
    type: "Government",
    location: "India",
    amount: "₹30,000",
  },

  {
    title: "INSPIRE Scholarship",
    type: "Government",
    location: "Abroad",
    amount: "₹80,000",
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

  // SAVE SCHOLARSHIP
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

                amount:
                  scholarship.amount,

              }),
            }
          );

        const data =
          await response.json();

        alert(data.message);

      } catch (error) {

        console.log(error);

      }
    };

  // FILTERS
  const filteredScholarships =
    scholarships.filter((item) => {

      const matchesType =
        selectedType === "All" ||
        item.type === selectedType;

      const matchesLocation =
        selectedLocation === "All" ||
        item.location === selectedLocation;

      return (
        matchesType &&
        matchesLocation
      );
    });

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

      {/* MODERN FILTER */}
      <div className="modern-filter-bar">

        <button
          className="filter-toggle-btn"
          onClick={() =>
            setShowFilters(!showFilters)
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
                  selectedType === "Government"
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
                  selectedType === "Private"
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
                  selectedLocation === "India"
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
                  selectedLocation === "Abroad"
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

      {/* SCHOLARSHIPS */}
      <div className="degree-scholarship-grid">

        {filteredScholarships.map((item, index) => (

          <div
            className="degree-scholarship-card"
            key={index}
          >

            <div className="degree-card-top">

              <span>
                {item.type}
              </span>

              <span
                onClick={() =>
                  handleSave(item)
                }
              >
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

              <br /><br />

              Location:
              {" "}
              {item.location}

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