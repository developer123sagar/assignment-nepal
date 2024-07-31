
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white-1 hidden text-black-1 mt-40 h-screen w-64 lg:flex flex-col">
      <div className="relative flex items-center p-4">
        <img
          className="w-12 h-12 rounded-full mr-2"
          src="./assignment.jpg"
          alt="Profile Picture"
        />
        <div className="text-lg font-semibold hover:text-gray-800">
          Roju Ghimire
          <div className="text-sm">Frontend Developer</div>
        </div>
      </div>
      <div className="text-sm text-gray-600 text-center py-2 hover:underline cursor-pointer">
        Complete your profile
      </div>
      <div className="">
        <div
          onClick={() => navigate("/createTask")}
          className="text-lg text-black-1  py-2 underline cursor-pointer"
        >
          Create Task
        </div>
        <div className="text-lg text-black-1 py-2 underline cursor-pointer">
          Connects
        </div>
        <div className="text-lg text-black-1 py-2 underline cursor-pointer">
          Preferences
        </div>
        <div className="text-lg text-black-1 py-2 underline cursor-pointer">
          Proposals
        </div>
        <div className="text-lg text-black-1 py-2 underline cursor-pointer">
          Project Catalog
        </div>
      </div>
    </div>
  );
};

export default Sidebar;