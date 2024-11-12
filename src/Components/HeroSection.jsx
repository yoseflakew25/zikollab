import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const { Search } = Input;
import HeroImg from "../assets/hero.png";

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const HeroSection = () => {
  return (
    <section className="flex justify-center items-center px-16 py-16 mt-12 bg-blue-700 ">
      <div className="w-full max-w-[1248px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center self-stretch pt-1.5 pr-6 pb-8 my-auto max-md:mt-16 max-md:max-w-full">
              <h1 className="text-4xl font-bold leading-10 text-white max-md:mr-2.5 max-md:max-w-full">
                Your best nutritionist partner <br />
              </h1>
              <p className="mt-8 text-base leading-7 text-white max-md:max-w-full">
                Zikollab supports and monitors children’s nutritional recovery
                after hospital discharge. It streamlines tracking dietary
                intake, health progress, and care adjustments, helping ensure
                sustained recovery and reducing relapse risks.{" "}
              </p>
              <div className="flex flex-wrap gap-2 items-center justify-center mt-8">
                <Link
                  to="/sign-in"
                  type="button"
                  className="transition duration-300 ease-in-out flex items-center gap-2 bg-transparent hover:bg-blue-900 border text-white border-white font-semibold py-[0.4rem] px-16 rounded-md text-md"
                >
                  Get Started
                </Link>
                <a
                  href="#how-it-works"
                  type="button"
                  className="transition duration-300 ease-in-out flex items-center gap-2 bg-transparent hover:bg-blue-900 text-white font-semibold py-[0.4rem] px-8 rounded-md text-md"
                >
                  See How it works <Icon icon="mingcute:arrow-right-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full animate-bounce-up-down">
            <div className="flex flex-col grow justify-center px-16 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src={HeroImg}
                alt="Connecting Ethiopia's Top Talent with the Best Jobs"
                className="mx-4 aspect-square max-md:mx-2.5 py-16"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
