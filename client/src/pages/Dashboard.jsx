import "./Dashboard.css";

import DashboardNavbar
from "../components/dashboard/DashboardNavbar";

import DashboardHero
from "../components/dashboard/DashboardHero";

import DegreeGrid
from "../components/dashboard/DegreeGrid";

import FeaturedScholarships
from "../components/home/FeaturedScholarships";

import AIChatbot
from "../components/dashboard/AIChatbot";

function Dashboard() {

  return (

    <>

      <DashboardNavbar />

      <div className="dashboard-main-layout">

        <DashboardHero />

        <DegreeGrid />

      </div>

      <FeaturedScholarships />

      <AIChatbot />

    </>

  );
}

export default Dashboard;