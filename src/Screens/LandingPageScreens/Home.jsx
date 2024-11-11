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

import featureImg1 from "../../assets/feature2.png";
import featureImg2 from "../../assets/features3.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [displayPage, setDisplayPage] = useState("home");

  const featuresData = {
    title: "Why use Fetena",
    description:
      "Fetena.com offers a user-friendly interface that simplifies the exam creation and management process for examiners, making it straightforward and efficient. The platform ensures a fair testing environment with robust security measures, allowing exams to be conducted securely and without concerns about cheating. Grading is made efficient and easy, enabling examiners to grade exams quickly and provide instant results to examinees. Additionally, Fetena.com supports multiple question formats, including multiple-choice, essays, and more, catering to diverse exam needs. Real-time monitoring features keep exams secure by enabling real-time proctoring, ensuring the integrity of the examination process.",
    btnLink: "/search",
    btnLabel: "Get started",
    imgSrc: featureImg1,
  };

  const featuresDataa = {
    title: "For Examiners",
    description:
      "Fetena.com is dedicated to simplifying the exam process for examiners. The platform allows examiners to effortlessly create and manage exams with its intuitive interface. They can monitor examinees in real-time, ensuring the integrity of the exam, and utilize efficient grading tools to provide quick and accurate results. This seamless integration of exam management tools significantly reduces administrative workload and enhances the overall efficiency of conducting exams.",
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
