import Navbar from "../components/common/Navbar";
import HeroSection from "../components/home/HeroSection";
import DegreeSection from "../components/home/DegreeSection";
import FeaturedScholarships from "../components/home/FeaturedScholarships";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DegreeSection />
      <FeaturedScholarships />
    </div>
  );
}

export default Home;