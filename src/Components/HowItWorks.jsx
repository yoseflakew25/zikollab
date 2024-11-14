import * as React from "react";
import { Icon } from "@iconify/react";

function HowItWorksStep({ imageSrc, title, description }) {
  return (
    <div className="flex flex-col items-center text-center text-white max-md:mt-10 hover:scale-105 transition-all ease-in-out duration-300 px-4">
      <div className="border aspect-square w-[55px] h-[55px] bg-blue-700 rounded-full flex justify-center items-center text-white group-hover:border-white group-hover:text-white">
        <Icon
          icon="mdi-light:home"
          className="text-3xl font-bold transition-colors duration-300"
        />
      </div>
      <h3 className="mt-6 text-base font-medium leading-4">{title}</h3>
      <p className="mt-6 text-sm leading-5">{description}</p>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d3cf5d5b6dab9b73a3ec6bf6b14499dce22bca21e3d993d90a6b661382912d4e?apiKey=da0e5699a0964f23ab3a2091e7f935a3&",
      title: "Onboarding and Setup",
      description: `Start by creating a profile for your child, including health goals and specific dietary needs.`,
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d3cf5d5b6dab9b73a3ec6bf6b14499dce22bca21e3d993d90a6b661382912d4e?apiKey=da0e5699a0964f23ab3a2091e7f935a3&",
      title: "Daily Tracking",
      description: ` Input meals, snacks, and health updates in just a few taps.`,
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/eb04b6656f6b54cba0fcb45c425592d879ae5d9dc4171b5a3a3f05c01132ab1e?apiKey=da0e5699a0964f23ab3a2091e7f935a3&",
      title: "Regular Assessments",
      description: `Zikollab evaluates data and recommends adjustments as needed, promoting continuous progress.`,
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c4ad37664ba2340bbb40318958787bfe3846cac994cf5e614929bba728aafc10?apiKey=da0e5699a0964f23ab3a2091e7f935a3&",
      title: "Progress Reports",
      description: ` Receive regular summaries, so you can see at a glance how well your child is doing.`,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="px-4 py-8 bg-blue-700 md:py-20 md:px-10 lg:px-16 xl:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16  text-3xl font-bold text-center text-white md:text-4xl">
        How Zikollab Works        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex justify-center">
              <HowItWorksStep {...step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
