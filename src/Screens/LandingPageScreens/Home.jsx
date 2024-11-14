import HeroSection from "../../Components/HeroSection";
import WhyChooseUsSection from "../../Components/WhyChooseUsSection";
import HowItWorks from "../../Components/HowItWorks";
import Cta from "../../Components/Cta";
import FeatureSection1 from "../../Components/FeatureSection1";
import FeatureSection2 from "../../Components/FeatureSection2";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import About from "./About";

import featureImg1 from "../../assets/featureImg.png";
import featureImg2 from "../../assets/featureImg2.png";

const Home = () => {
  const navigate = useNavigate();
  const [displayPage, setDisplayPage] = useState("home");

  const featuresData = {
    title: "Your Trusted Nutrition Partner for Children's Recovery",
    description:
      "Welcome to Zikollab, the platform dedicated to supporting and monitoring children’s nutritional recovery after hospital discharge. Our mission is to help families and healthcare providers ensure children continue to thrive and stay healthy long after leaving the hospital.",
    btnLink: "/search",
    btnLabel: "Get started",
    imgSrc: featureImg1,
  };

  const featuresDataa = {
    title: "Comprehensive Support for Ongoing Recovery",
    description:
      "With Zikollab, you gain access to an innovative tool designed to make tracking a child's nutritional and health progress seamless and efficient. By providing real-time updates and insights, we help bridge the gap between hospital care and at-home recovery.",
    btnLink: "/search",
    btnLabel: "Get started",
    imgSrc: featureImg2,
  };

  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div className="mb-16"></div>

      <div>
        <FeatureSection1 featuresData={featuresData} />
      </div>

      <div>
        <FeatureSection2 featuresData={featuresDataa} />
      </div>

      <div>
        <HowItWorks />
      </div>

      <div>
        <Cta />
      </div>
    </div>
  );
};

export default Home;
