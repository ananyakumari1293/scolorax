import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import DashboardHero from "../components/dashboard/DashboardHero";
import DegreeGrid from "../components/dashboard/DegreeGrid";

function Dashboard() {
  return (
    <div
      style={{
        background: "#FAF8F5",
        minHeight: "100vh",
      }}
    >
      <DashboardNavbar />
      <DashboardHero />
      <DegreeGrid />
    </div>
  );
}

export default Dashboard;