import React from "react";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Section3 = () => {
  return (
    <section className="md:flex rounded-lg mb-10 px-5 lg:px-32  overflow-hidden w-full">
      <div className="bg-black-1 text-white-1 py-16 px-6 md:w-2/3">
        <h1 className="lg:text-4xl text-white-1 mb-4">Enterprise Suite</h1>
        <h1 className="lg:text-5xl text-white-1 mb-4">This is how</h1>
        <span className="lg:text-5xl text-[#90E4C1]">
          A fast and secure way to achieve long-term success for your business goals.
        </span>
        <div className="border-t border-white mt-7 pt-12">
          <div className="flex items-center mb-6">
            <FaTools className="h-5 mr-1 text-[#90E4C1]" />
            <p className="text-white-1">
              Access expert talent to fill your skill gaps
            </p>
          </div>
          <div className="flex items-center mb-6">
            <BiSolidBriefcaseAlt2 className="h-5 mr-1 text-[#90E4C1]" />
            <p className="text-white-1">
              Control your workflow: hire, classify and pay your talent
            </p>
          </div>
          <div className="flex items-center">
            <TfiHeadphoneAlt className="h-5 mr-1 text-[#90E4C1]" />
            <p className="text-white-1">
              Partner with Assignment for end-to-end support
            </p>
          </div>
        </div>
        <div className="pt-5">
          <button className="bg-white-1 text-black-1 text-sm mt-7 font-semibold py-3 px-7">
            Learn More
          </button>
        </div>
      </div>

      <img
        src="/assign.jpg"
        alt="enterprise"
        className="object-cover w-full md:w-1/3 h-auto"
      />
    </section>
  );
};

export default Section3;
