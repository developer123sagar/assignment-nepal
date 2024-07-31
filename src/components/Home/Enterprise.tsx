import React from "react";
import { useNavigate } from "react-router-dom";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Help, partner } from "./Common";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import MainHeader from "../MainHeader";
import Footer from "../Footer";

export const Enterprise = () => {
  const navigate = useNavigate();
  
  const isLoggedIn = true; 

  if (!isLoggedIn) {
    navigate("/login");
    return null; 
  }
  return (
    <div>
      {/* Section3  */}
      <MainHeader />
      <section className="md:flex rounded-lg mb-10 overflow-hidden w-full px-4 lg:px-36">
        <div className="bg-black-1 mt-24 basis-full sm:basis-[60%] text-black-1 py-16 px-6">
          <h1 className="lg:text-4xl text-white-1 mb-4">Enterprise Suite</h1>
          <h1 className="lg:text-5xl text-white-1 mb-4">This is how</h1>
          <span className="lg:text-5xl mb-6 text-[#50e3a6]">
            A fast and secure way to achieve long-term success for your
            <br />
            business goals.
          </span>
          <div className="border-t border-white pt-12">
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

            <div className="flex items-center mt-6">
              <BiSolidBriefcaseAlt2 className="h-5 mr-1 text-[#90E4C1]" />
              <p className="text-white-1">
                Control your workflow: hire, classify and pay your talent
              </p>
            </div>
            <div className="flex items-center mt-6">
              <FaTools className="h-5 mr-1 text-[#90E4C1]" />
              <p className="text-white-1">
                Access expert talent to fill your skill gaps
              </p>
            </div>
            <div className="flex mt-5 items-center">
              <TfiHeadphoneAlt className="h-5 mr-1 text-[#90E4C1]" />
              <p className="text-white-1">
                Partner with Assignment for end-to-end support
              </p>
            </div>
          </div>
          <div className="pt-5 mt-6">
            <button className="bg-white-1 text-sm font-semibold py-3 px-7">
              Learn More
            </button>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/8524589/pexels-photo-8524589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="enterprise"
          className="object-cover mt-24 basis-[40%]"
        />
      </section>
      <div className="px-4 lg:px-32">
        <div className="flex justify-between ">
          {Array.isArray(partner) &&
            partner.map((item, index) => (
              <div key={index} className="">
                <figure>
                  <img src={item.image} alt={`Partner ${index + 1}`} />
                </figure>
              </div>
            ))}
        </div>
        <div className="mt-20 ">
          <h1 className="font-bold mb-[32px] text-[38px] text-[##001e00]">
            This is another heading for assignment :-
          </h1>
          <div className="flex justify-between   gap-10">
            {Help.map((item, index) => (
              <div key={index}>
                <img src={item.image} alt="" className="mb-[16px]" />
                <h1 className="text-[#001e00] text-[22px] mb-[16px] font-bold">
                  {item.title}
                </h1>
                <p className="text-[#5e6d55] text-[16px] mb-[10px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-[41px] pb-[41px]">
          <h1 className="font-bold mb-[32px] text-[38px] text-[##001e00]">
            We can help for the project and the assignment:-
          </h1>
          <div className="flex gap-10">
            <div className="basis-[50%]">
              <figure>
                <img src="/upwork.png" />
              </figure>
            </div>
            <div className="basis-[50%] p-[32px] ">
              <div className="mb-[8px]">
                <h1 className="text-[24px] mb-[8px]">
                  Talent services and management
                </h1>
                <p className="text-[#5e6d55] text-[16px]  ">
                  Do it all in one place, from shortlisting top candidates to
                  project management to collaboration tools.
                </p>
              </div>
              <hr className=" mb-[24px] mt-[16px]" />
              <div className="mb-[8px]">
                <h1 className="text-[24px] mb-[8px]">
                  Talent services and management
                </h1>
                <p className="text-[#5e6d55] text-[16px] ">
                  Do it all in one place, from shortlisting top candidates to
                  project management to collaboration tools.
                </p>
              </div>
              <hr className=" mb-[24px] mt-[16px]" />
              <div className="mb-[8px]">
                <h1 className="text-[24px] mb-[8px]">
                  Talent services and management
                </h1>
                <p className="text-[#5e6d55] text-[16px] ">
                  Do it all in one place, from shortlisting top candidates to
                  project management to collaboration tools.
                </p>
              </div>
              <button className=" bg-black-1 p-4 text-white-1  mb-[24px] mt-[16px] w-44">
                Let's Talk
              </button>
            </div>
          </div>
          <div className="flex  mt-8 gap-12">
            <div className="basis-[50%] p-[32px] ">
              <div className="mb-[8px]">
                <h1 className="text-[24px] mb-[8px]">
                  Talent services and management
                </h1>
                <p className="text-[#5e6d55] text-[16px]  ">
                  Do it all in one place, from shortlisting top candidates to
                  project management to collaboration tools.
                </p>
              </div>
              <hr className=" mb-[24px] mt-[16px]" />
              <div className="mb-[8px]">
                <h1 className="text-[24px] mb-[8px]">
                  Talent services and management
                </h1>
                <p className="text-[#5e6d55] text-[16px] ">
                  Do it all in one place, from shortlisting top candidates to
                  project management to collaboration tools.
                </p>
              </div>
              <hr className=" mb-[24px] mt-[16px]" />
              <div className="mb-[8px]">
                <h1 className="text-[24px] mb-[8px]">
                  Talent services and management
                </h1>
                <p className="text-[#5e6d55] text-[16px] ">
                  Do it all in one place, from shortlisting top candidates to
                  project management to collaboration tools.
                </p>
              </div>
              <button className=" bg-black-1 p-4 text-white-1  mb-[24px] mt-[16px] w-44">
                Let's Talk
              </button>
            </div>
            <div className="basis-[50%]">
              <figure>
                <img src="/upwork2.png" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

}