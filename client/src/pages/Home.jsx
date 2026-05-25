import Navbar
from "../components/common/Navbar";

import HeroSection
from "../components/home/HeroSection";

import DegreeSection
from "../components/home/DegreeSection";

import FeaturedScholarships
from "../components/home/FeaturedScholarships";

import AIChatbot
from "../components/dashboard/AIChatbot";

import "./Home.css";

function Home() {

  return (

    <div className="home-page">

      <Navbar />

      <div className="home-top-layout">

        <HeroSection />

        <DegreeSection />

      </div>

      <FeaturedScholarships />

      <AIChatbot />

    </div>
  );
}

export default Home;