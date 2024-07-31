import React from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaCheckCircle, FaRegStar } from "react-icons/fa";
import { FaPersonThroughWindow } from "react-icons/fa6";
import { MdStars } from "react-icons/md";

const Section5 = () => {
  return (
    <section className="wrapper sm:mb-8 md:mb-8 lg:mb-24 flex flex-col lg:flex-row mt-10  px-4 lg:px-32">
      <div className="relative bg-black-1 lg:w-3/5 lg:mr-8 bg-primary-light-2 p-8">
        <h1 className="text-xl lg:text-3xl mb-4 lg:mb-10 text-white-1 lg:font-normal">
          Why businesses
          <br />
          turn to Assignment???
        </h1>
        <div className="mb-4 lg:mb-8  flex items-center">
          <MdStars className="h-4 lg:h-5 text-3xl mr-1 text-white-1" />
          <div>
            <h3 className="text-sm lg:text-xl font-semibold mb-1 lg:mb-2">
              Proof of quality
            </h3>
            <p className="text-xs lg:text-base text-white-1 font-medium">
              Check any pro’s work samples, client reviews, and <br />
              identity verification.
            </p>
          </div>
        </div>
        <div className="mb-4 lg:mb-8 flex items-center">
          <BiSolidDollarCircle className="text-white-1 text-3xl h-4 lg:h-5 mr-1" />
          <div>
            <h3 className="text-sm lg:text-xl font-semibold mb-1 lg:mb-2">
              No cost until you hire
            </h3>
            <p className="text-xs lg:text-base text-white-1 font-medium">
              Interview potential fits for your job, negotiate rates
              <br />
              only pay for work you approve.
            </p>
          </div>
        </div>
        <div className="mb-4 lg:mb-8 flex items-center">
          <FaCheckCircle className="text-white-1 h-4 lg:h-5 text-3xl  mr-1" />
          <div className="section_5_left_info_item_right">
            <h3 className="text-sm lg:text-xl font-semibold mb-1 lg:mb-2">
              Safe and secure
            </h3>
            <p className="text-xs lg:text-base text-white-1 font-medium">
              Focus on your work we help protect your data and
              <br />
              privacy. We’re here with 24/7 support if you need it.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-2/5  bg-gray-200 bg-primary">
        <div className="ml-4  lg:ml-8 mt-8 lg:mt-20">
          <h3 className="text-lg  lg:text-2xl mb-2 lg:mb-4 font-semibold text-black-1">
            We’re
            <br />
            the world’s
            <br />
            work marketplace
          </h3>
          <div className="mb-2 lg:mb-4 flex items-center">
            <FaRegStar className="h-4 lg:h-5 text-3xl mr-3" />
            <div>
              <h3 className="text-xs lg:text-base font-semibold mb-1">4.9/5</h3>
              <p className="text-xxs lg:text-xs font-medium">
                Clients rate professionals on Assignment
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <FaPersonThroughWindow className="h-4 lg:h-5 text-3xl mr-3" />
            <div>
              <h3 className="text-xs lg:text-base font-semibold mb-1">
                Award winner
              </h3>
              <p className="text-xxs lg:text-xs font-medium">
                G2’s 2021 Best Software Awards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section5;
