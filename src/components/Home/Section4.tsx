import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Section4 = () => {
  return (
    <section className="relative">
      <div className="rounded-md h-[65rem] lg:h-[40rem] overflow-hidden px-4 lg:px-32 md:min-w-[700px]">
        <img
          src="/talent.jpg"
          alt="find_talent"
          className="w-full object-cover h-full"
        />
      </div>
      <div className="absolute  top-0 left-0 text-white-1 w-full">
        <div className="lg:px-52 md:px-10 p-8">
          <h4 className="lg:text-3xl font-semibold mb-3">For Clients</h4>
          <h1 className="text-4xl lg:text-6xl font-normal mb-8">
            Find talent <br />
            your way
          </h1>
        </div>

        <div className="mb-8 lg:px-52 md:px-10 px-8">
          <h5 className="text-xl text-white-1 font-semibold mb-5">
            Work with the largest network of independent
            <br />
            professionals and get things done—from quick <br />
            turnarounds to big changes.
          </h5>
        </div>
        <div className="flex flex-col md:flex-row md:gap-4 px-10 lg:px-52 md:flex-wrap lg:flex-nowrap md:px-10">
          <div className="w-full md:w-1/3  mb-4">
            <button className="w-full  py-4 bg-black-1 px-6 flex flex-col items-start rounded-lg bg-primary lg:text-white-1 text-white-1 hover:text-black transition duration-200 ease-in-out hover:bg-white-1 hover:text-primary">
              <span className="mb-5 text-2xl hover:text-[#222422] font-semibold">
                Post a job <br />
                and hire a pro
              </span>
              <span className="text-lg font-semibold flex items-center">
                Talent Marketplace
                <sup className="relative text-xs font-bold top-[0.1em] ml-1">
                  TM
                </sup>
                <FaArrowRight className="h-5 ml-1 hover:text-black-1 " />
              </span>
            </button>
          </div>
          <div className="w-full md:w-1/3 mb-4">
            <button className="w-full py-4 px-6 bg-black-1 flex flex-col items-start rounded-lg bg-primary lg:text-white-1 text-white-1 hover:text-black transition duration-200 ease-in-out hover:bg-white-1 hover:text-primary">
              <span className="mb-5 text-2xl font-semibold">
                Browse and <br />
                buy projects
              </span>
              <span className="text-lg font-semibold flex items-center">
                Project Catalog
                <sup className="relative text-xs font-bold top-[0.1em] ml-1">
                  TM
                </sup>
                <FaArrowRight className="h-5 ml-1 hover:text-black-1" />
              </span>
            </button>
          </div>
          <div className="w-full md:w-1/3 mb-4">
            <button className="w-full py-4 bg-black-1 px-6 flex flex-col items-start rounded-lg bg-primary lg:text-white-1 text-white-1 hover:text-black-1 transition duration-200 ease-in-out hover:bg-white-1 hover:text-primary">
              <span className="mb-5 text-2xl font-semibold">
                Let us help you find <br />
                the right talent
              </span>
              <span className="text-lg font-semibold flex items-center">
                Talent Scout
                <sup className="relative text-xs font-bold top-[0.1em] ml-1">
                  TM
                </sup>
                <FaArrowRight className="h-5 ml-1 hover:text-black-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
