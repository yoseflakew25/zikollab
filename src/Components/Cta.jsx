import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import featureImg from "../assets/features3.jpg";

const Cta = () => {
  return (
    <div className="flex items-center justify-center gap-4 my-24 lg:px-32">
      <section className=" flex gap-6 justify-center rounded-md bg-white shadow-md max-w-[600px] group hover:shadow-lg transition-all duration-300">
        <div className="flex flex-col w-[65%]">
          <div className="flex flex-col gap-1  my-auto font-semibold p-4">
            <h2 className="text-2xl leading-5 text-blue-700 font-bold mb-2 mx-2 ">
              Ready to Transform Your{" "}
            </h2>

            <h2 className="text-2xl leading-5 text-blue-700 font-bold mb-4 mx-2 ">
              {" "}
              Exam Process?
            </h2>

            <Link
              to="/patients"
              className="flex items-center justify-center gap-2"
            >
              <Button text="Get Started Today" />
            </Link>
          </div>
        </div>

        <img
          loading="lazy"
          src={featureImg}
          alt="Employer image"
          className="hidden lg:flex grow shrink-0 max-w-full aspect-[0.93] w-[187px]"
        />
      </section>
    </div>
  );
};

export default Cta;
