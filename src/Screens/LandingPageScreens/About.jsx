import React from "react";
import FeatureSection1 from "../../Components/FeatureSection1";
import Faq from "../../Components/Faq";

import AboutImage from "../../assets/featureImg.png"; // Import the image directly

const featuresData = {
  title: "Your best nutritionist partner",
  description:
    "Zikollab supports and monitors children’s nutritional recovery after hospital discharge. It streamlines tracking dietary intake, health progress, and care adjustments, helping ensure sustained recovery and reducing relapse risks.",
  btnLink: "/search",
  btnLabel: "Get started",
  imgSrc: AboutImage, // Use the imported image here
};

const About = () => {
  return (
    <div className="mt-28">
      <FeatureSection1 featuresData={featuresData} />

      <div className="mx-48 my-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          FAQ's
        </h1>

        <Faq />
      </div>

      <div className="mx-16 my-16">
        <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Contact Us
        </h1>

        <div className=" flex flex-col justify-between px-32  gap-4">
          <p className="font-semibold">
            <span className="font-bold text-blue-700">Address : </span>
             Addis Ababa , Ethiopia
          </p>
          <div className="flex gap-2 items-center justify-center">
            <p className="font-semibold">
              <span className="font-bold text-blue-700">Email : </span>
              Zikollab@gmail.com
            </p>
            <p className="font-semibold">
              <span className="font-bold text-blue-700">Tel : </span>+2519456789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
