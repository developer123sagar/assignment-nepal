import React from "react";
import { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigateToFindTalentPage = () => {
    navigate("/findwork");
  };
  return (
    <header className="bg-white-1 z-50 shadow fixed w-full px-4  sm:px-8 md:px-5 lg:px-32">
      <div className="flex items-center justify-between  h-16 border-b border-gray-200">
        <div className="flex  items-center">
          <div className="flex items-center mr-4">
            <FaBars
              className="cursor-pointer sm:hidden"
              onClick={toggleMenu}
              size={26}
            />
          </div>
          <img
            src="./silicontech.png"
            alt="Upwork Logo"
            className="h-20 mr-2 sm:mr-0"
          />
          {!isMenuOpen && (
            <ul className="hidden sm:flex items-center ml-4 text-black-1 font-medium space-x-4">
              <li
                className="flex items-center cursor-pointer"
                onClick={navigateToFindTalentPage}
              >
                Find Work <RiArrowDropDownLine className="w-4 ml-1" />
              </li>
              <li className="flex items-center cursor-pointer">
                Find Assignment <RiArrowDropDownLine className="w-4 ml-1" />
              </li>
              <li className="flex items-center cursor-pointer">
                Why Assignment <RiArrowDropDownLine className="w-4 ml-1" />
              </li>
              <Link to="/enterprise">
                <li className="hidden sm:block">Enterprise</li>
              </Link>
            </ul>
          )}
        </div>
        <div className="header_right flex items-center">
          {!isMenuOpen && (
            <div className="relative  mr-4 hidden lg:block">
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-3 py-1  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <FaSearch className="absolute  left-2 top-2 text-gray-900 " />
            </div>
          )}
          <FaSearch className="text-2xl lg:hidden text-gray-900 mr-4" />
          <div className="header_right_btns ml-auto flex items-center">
            <button
              onClick={() => navigate("/login")}
              className="bg-black-1 text-white-1 px-2 py-2 lg:px-5 lg:py-2"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16  lg:hidden inset-x-0 bg-white-1 border-b border-gray-200 py-2 px-4">
          <ul className="flex flex-col items-start space-y-8">
            <li
              className="flex items-center cursor-pointer text-lg"
              onClick={navigateToFindTalentPage}
            >
              Find Work <RiArrowDropDownLine className="ml-1" size={30} />
            </li>
            <li className="flex items-center cursor-pointer text-lg">
              Find Assignment{" "}
              <RiArrowDropDownLine className=" ml-1" size={30} />
            </li>
            <li className="flex items-center cursor-pointer text-lg">
              Why Assignment <RiArrowDropDownLine className="ml-1" size={30} />
            </li>
            <li>Enterprise</li>
          </ul>
        </div>
      )}
      <ul className="hidden lg:flex items-center h-16 text-gray-500">
        <li className="mx-8 font-medium">Development & IT</li>
        <li className="mx-8 font-medium">Design & Creative</li>
        <li className="mx-8 font-medium">Sales & Marketing</li>
        <li className="mx-8 font-medium">Writing & Translation</li>
        <li className="mx-8 font-medium flex items-center">
          More
          <RiArrowDropDownLine className="w-4 ml-1" />
        </li>
      </ul>
    </header>
  );
}
