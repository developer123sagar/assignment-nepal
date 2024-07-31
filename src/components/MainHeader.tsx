import React from "react";
import { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUserDelete } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { RootState, useAppSelector } from "../redux/store";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { role } = useAppSelector((state: RootState) => state.task);

  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hanldeLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const navigateToFindTalentPage = () => {};

  return (
    <header className="bg-white-1 z-50 shadow fixed top-0 left-0 w-full px-4 sm:px-8 md:px-7 lg:px-32">
      <div className="flex items-center justify-between gap-40 lg:gap-12 h-16 border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex items-center  mr-4">
            <FaBars
              className="cursor-pointer sm:hidden"
              onClick={toggleMenu}
              size={26}
            />
          </div>
          <img
            src="/silicontech.png"
            alt="assignment"
            className="h-20 mr-2 sm:mr-0 cursor-pointer"
            onClick={() => navigate("/")}
          />

          {!isMenuOpen && (
            <ul className="hidden sm:flex items-center ml-4 text-black-1 font-medium lg:space-x-8 md:space-x-1">
              <li
                className="flex items-center cursor-pointer"
                onClick={navigateToFindTalentPage}
              >
                Find Work <RiArrowDropDownLine className="w-4 ml-1" />
              </li>
              {role === "worker" && (
                <li
                  onClick={() => navigate("/worker/myworks")}
                  className="flex items-center cursor-pointer"
                >
                  My works <RiArrowDropDownLine className="w-4 ml-1" />
                </li>
              )}
              <li className="flex items-center cursor-pointer">
                Manage Assignment <RiArrowDropDownLine className="w-4 ml-1" />
              </li>
              <li
                className="hidden sm:block cursor-pointer"
                onClick={() => navigate("/chat")}
              >
                Message
              </li>
              {role === "employer" && (
                <Link to="/register?isWorker=true">
                  <li className="hidden cursor-pointer sm:block">
                    Worker Register
                  </li>
                </Link>
              )}
              {role !== "employer" && (
                <Link to="/register?isEmplyoer=true">
                  <li className="hidden cursor-pointer sm:block">
                    Employee Register
                  </li>
                </Link>
              )}
            </ul>
          )}
        </div>
        <div className="flex  items-center">
          <div className="relative  hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-3 py-1 border border-gray-300 md:mr-1  focus:outline-none focus:border-blue-500"
            />
            <FaSearch className="absolute left-2  top-2 text-gray-900" />
          </div>
          <img
            onClick={() => setShowMenu(!showMenu)}
            src="/assignment.jpg"
            alt="Profile"
            className="h-12 w-12 cursor-pointer rounded-full"
          />
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
              Deliver Assignment{" "}
              <RiArrowDropDownLine className=" ml-1" size={30} />
            </li>
            <li className="flex items-center cursor-pointer text-lg">
              Assignment Manage{" "}
              <RiArrowDropDownLine className="ml-1" size={30} />
            </li>
            <li className="cursor-pointer">Message</li>
          </ul>
        </div>
      )}
      {showMenu ? (
        <div className="absolute bg-white-1 rounded-lg py-1.5 w-[200px] shadow-xl border top-[4.5rem] right-1">
          <button
            onClick={() => {
              setShowMenu(false);
              navigate("/user-profile");
            }}
            className="flex items-center w-full justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer"
          >
            <BiUser size="20" />
            <span className="pl-2 font-semibold text-sm">Profile</span>
          </button>
          <button
            onClick={() => {
              setShowMenu(false);
            }}
            className="flex items-center justify-start w-full py-3 px-1.5 hover:bg-gray-100 border-t cursor-pointer"
          >
            <AiOutlineUserDelete size={20} />
            <span className="pl-2 font-semibold text-sm">Delete Account</span>
          </button>
          <button
            onClick={hanldeLogout}
            className="flex items-center justify-start w-full py-3 px-1.5 hover:bg-gray-100 border-t cursor-pointer"
          >
            <FiLogOut size={20} />
            <span className="pl-2 font-semibold text-sm">Log out</span>
          </button>
        </div>
      ) : null}
    </header>
  );
};

export default MainHeader;
