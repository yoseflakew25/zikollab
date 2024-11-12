// React Related Imports
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components Imports
import Button from "./Button";

// Resources Imports

import Hamburger from "hamburger-react";

const NavBar = ({ displayPage, setDisplayPage }) => {
  const [isOpen, setOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ${
        isScrolled
          ? "bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-sm bg-[#F9FAFB]"
          : ""
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="text-3xl font-bold text-blue-800">
          Zikollab
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 ">
          <Link to="/create-profile">
            <Button text="Add Patient" />
          </Link>

          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
        <div
          className={` ${
            isOpen ? "block" : "hidden"
          } items-center justify-between  w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg lg:bg-transparent md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 focus:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/patients"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 focus:text-blue-500"
              >
                Patients
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 focus:text-blue-500"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
