import React from "react";
import FeatureSection1 from "../../Components/FeatureSection1";
import Faq from "../../Components/Faq";
import { Card } from "antd";
import Developers from "../../Components/Developers";
import AboutImage from "../../assets/feature2.png"; // Import the image directly

const featuresData = {
  title: "About Us",
  description:
    "We are a team of passionate 5th-year graduating software engineering students behind Fetena.com, our final year capstone project. Our aim is to simplify and modernize the exam process, replacing traditional paper-based exams with a user-friendly and secure online platform. Throughout our academic journey, we've leveraged our skills to create a seamless experience for both examiners and examinees. Fetena.com represents a fusion of theoretical learning and practical application, driving us to continuously enhance its efficiency and convenience. Thank you for joining us on this journey towards innovative exam management.",
  btnLink: "/search",
  btnLabel: "Get started",
  imgSrc: AboutImage, // Use the imported image here
};

const About = () => {
  return (
    <div className="mt-28">
      <FeatureSection1 featuresData={featuresData} />

      <div className="mx-48 my-8">
        <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
          FAQ's
        </h1>

        <Faq />
      </div>

      <div className="mx-16 my-16">
        <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Contact Us
        </h1>

        <div className=" flex flex-col justify-between px-32  gap-4">
          <p className="font-semibold">
            <span className="font-bold text-blue-700">Address : </span>Addis
            Ababa Science & Technology University , Addis Ababa , Ethiopia
          </p>
          <div className="flex gap-2 items-center justify-center">
            <p className="font-semibold">
              <span className="font-bold text-blue-700">Email : </span>
              fetena@gmail.com
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