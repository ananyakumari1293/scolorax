import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import DashboardHero from "../components/dashboard/DashboardHero";
import DegreeGrid from "../components/dashboard/DegreeGrid";
import AIChatbot from "../components/dashboard/AIChatbot";

function Dashboard() {

  return (

    <div
      style={{
        background:"#FAF8F5",
        minHeight:"100vh",
      }}
    >

      <DashboardNavbar />

      <DashboardHero />

      <DegreeGrid />

      <AIChatbot />

    </div>

  );
}

export default Dashboard;