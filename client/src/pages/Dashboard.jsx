import DashboardNavbar
from "../components/dashboard/DashboardNavbar";

import DashboardHero
from "../components/dashboard/DashboardHero";

import DegreeGrid
from "../components/dashboard/DegreeGrid";

import FeaturedScholarships
from "../components/home/FeaturedScholarships";

function Dashboard() {

  return (

    <div
      style={{

        background:"#FAF8F5",

        minHeight:"100vh",

        overflowX:"hidden",
      }}
    >

      <DashboardNavbar />

      <DashboardHero />

      <DegreeGrid />

      <FeaturedScholarships />

    </div>
  );
}

export default Dashboard;