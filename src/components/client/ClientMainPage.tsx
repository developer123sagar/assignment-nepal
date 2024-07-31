import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const ClientMainPage = () => {
  const navigate = useNavigate();

  return (
    <section className="px-2 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-24">
      <div className="flex items-center gap-2 my-5 font-bold">
        <span className="text-xl">Your Jobs</span>{" "}
        <IoMdInformationCircleOutline size={25} />
      </div>

      <div className="w-full flex gap-5">
        <div className="w-[320px] flex items-between flex-col justify-center border border-spacing-x-3 border-dashed border-gray-400 py-8 gap-2">
          <CiCirclePlus size={35} color="grey" className="w-fit mx-auto" />
          <h2 className="text-center text-gray-400">Post a new job</h2>
          <span className="text-center">
            Craete a new job post and get proposals from talent
          </span>
          <button
            onClick={() => navigate("/createTask")}
            className="text-emerald-600 border border-emerald-600 rounded w-[80%] py-2 mt-4 mx-auto"
          >
            Post a new job
          </button>
        </div>

        <div className="w-[320px] py-4 border border-black">
          <div className="flex items-center justify-between w-full px-4">
            <div className="flex items-center gap-2">
              <MdOutlineTipsAndUpdates size={22} />
              <span>Quick tips</span>
            </div>
            <RxCross2 size={30} className="text-gray-500" />
          </div>
          <h2 className="font-bold text-base px-4 mt-3">Pay with confidence</h2>
          <p className="px-4 mt-2 text-sm text-gray-500">
            Talent look for clients with verified billing methods. There's no
            cost until you hire; you'll only be charged once you approve
            completed work.
          </p>
          <button className="px-4 mt-8 text-sm text-emerald-600">
            Learn more about payments
          </button>
        </div>

        <div className="w-[320px] py-4 border border-black">
          <div className="flex items-center justify-between w-full px-4">
            <div className="flex items-center gap-2">
              <MdOutlineTipsAndUpdates size={22} />
              <span>Quick tips</span>
            </div>
            <RxCross2 size={30} className="text-gray-500" />
          </div>
          <h2 className="font-bold text-base px-4 mt-3">
            Stay safe on Assignment
          </h2>
          <p className="px-4 mt-2 text-sm text-gray-500">
            We're doing our best to keep you safe, and it's important you learn
            how to identify and report suspicious activity.
          </p>
          <button className="px-4 mt-8 text-sm text-emerald-600">
            Learn more about safety
          </button>
        </div>

        <div className="w-[320px] flex items-between flex-col justify-center border border-spacing-x-3 border-dashed border-gray-400 py-8 gap-2">
          <CiSearch size={35} color="grey" className="w-fit mx-auto" />
          <h2 className="text-center text-gray-400">
            Search for talent in Mobile App Development
          </h2>
          <span className="text-center text-lg">
            Thousands of experts are ready to go for your next project.
          </span>
          <button
            onClick={() => navigate("/createTask")}
            className="text-emerald-600 border border-emerald-600 rounded w-[80%] py-2 mt-4 mx-auto"
          >
            Explore more experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientMainPage;
