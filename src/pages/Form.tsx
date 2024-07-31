import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import React from "react";

const CheckBoxdesign = "w-5 h-5";
const Form = () => {
  return (
    <>
      <MainHeader />
      <div className="w-[70%] px-4 lg:px-40 gap-5  mt-24">
        <h1 className="font-bold md:text-2xl mb-3  mt-2 ">
          Screening question (Optional)
        </h1>
        <h1 className="text-base md:text-lg mt-3 mb-4 text-gray-600">
          Narrow Down Your Candidate
        </h1>
        <h1 className="font-bold md:text-xl mb-3  mt-2 ">
          Select or add up to 5 questions
        </h1>
        <button className="border-gray-500 bg-black-1 text-white-1 border p-4  mb-5 font-bold">
          + Write Your Own Question
        </button>
        <h1 className="font-bold md:text-xl mb-3  mt-2 ">Suggested</h1>
        <div className="border-gray-300 border-b ">
          <ul className="pb-5  flex flex-col  gap-2 font-semibold">
            <div className="flex gap-6">
              <input type="checkbox" className={`${CheckBoxdesign}`}></input>{" "}
              Lorem, ipsum dolor sit amet consectetur{" "}
            </div>
            <div className="flex gap-6">
              <input type="checkbox" className={`${CheckBoxdesign}`}></input>{" "}
              Lorem, ipsum dolor sit amet consectetur{" "}
            </div>
            <div className="flex gap-6">
              <input type="checkbox" className={`${CheckBoxdesign}`}></input>{" "}
              Lorem, ipsum dolor sit amet consectetur{" "}
            </div>
            <div className="flex gap-6">
              <input type="checkbox" className={`${CheckBoxdesign}`}></input>{" "}
              Lorem, ipsum dolor sit amet consectetur{" "}
            </div>
            <div className="flex gap-6">
              <input type="checkbox" className={`${CheckBoxdesign}`}></input>{" "}
              Lorem, ipsum dolor sit amet consectetur{" "}
            </div>
          </ul>
        </div>
        <div>
          <h1 className="font-bold md:text-xl mb-1  mt-2 ">
            Advance Preference
          </h1>
          <h1 className="text-base md:text-lg mt-1 mb-4 text-gray-600">
            Hour Per Week, hire date, and more
          </h1>
          <ul className="w-full  h-full flex justify-between">
            {/* left part */}
            <li>
              <h1 className="font-bold text-lg">English Level</h1>
              <ul className="pb-5  flex flex-col gap-2  font-semibold mt-2">
                <div className="flex gap-6">
                  <input
                    type="checkbox"
                    className={`${CheckBoxdesign}`}
                  ></input>
                  Any Level{" "}
                </div>
                <div className="flex gap-6">
                  <input
                    type="checkbox"
                    className={`${CheckBoxdesign}`}
                  ></input>
                  Conversational or Better{" "}
                </div>
                <div className="flex gap-6">
                  <input
                    type="checkbox"
                    className={`${CheckBoxdesign}`}
                  ></input>
                  Fluent or Better
                </div>
                <div className="flex gap-6">
                  <input
                    type="checkbox"
                    className={`${CheckBoxdesign}`}
                  ></input>
                  Native{" "}
                </div>
              </ul>
              <h1 className="font-bold text-lg">Other Languages</h1>
              <button className="border border-gray-500 text-gray-400 mt-4 rounded py-1 px-2">
                Add Language
              </button>
              <h1 className="font-bold mt-5 text-lg">Time Requirement</h1>
              <ul className="pb-5  flex flex-col gap-2 font-semibold ">
                <div className="flex gap-6">
                  <input
                    type="checkbox"
                    className={`${CheckBoxdesign}`}
                  ></input>
                  More Than 30 hrs/week{" "}
                </div>
                <div className="flex gap-6">
                  <input
                    type="checkbox"
                    className={`${CheckBoxdesign}`}
                  ></input>
                  Less Than 30 hrs/week
                </div>
              </ul>
              <h1 className="font-bold mt-5 text-lg">Talent Type</h1>
              <button className="border border-gray-500 text-gray-400 mt-4 rounded py-1 px-2">
                Independent
              </button>
              <h1 className="font-bold mt-5 text-lg">Location</h1>
              <button className="border border-gray-500 text-gray-400 py-1 px-2 mt-4 rounded ">
                Add Region or countries
              </button>
              <h1 className="text-base md:text-sm mt-2  text-gray-600">
                These Location preferences will be displayed to all candidates,
                but anyone can submit proposals.{" "}
              </h1>
            </li>
            {/* right part */}
            <li className="px-10">
              <div className="flex flex-col">
                <h1 className="font-bold text-lg">Hire Date</h1>
                <ul className="pb-5  flex flex-col gap-2 font-semibold mt-2">
                  <div className="flex gap-6">
                    <input
                      type="checkbox"
                      className={`${CheckBoxdesign}`}
                    ></input>
                    1-2 Day
                  </div>
                  <div className="flex gap-6">
                    <input
                      type="checkbox"
                      className={`${CheckBoxdesign}`}
                    ></input>
                    One Week
                  </div>
                  <div className="flex gap-6">
                    <input
                      type="checkbox"
                      className={`${CheckBoxdesign}`}
                    ></input>
                    One Week
                  </div>
                  <div className="flex gap-6">
                    <input
                      type="checkbox"
                      className={`${CheckBoxdesign}`}
                    ></input>
                    One Month
                  </div>
                </ul>
                <h1 className="font-bold text-lg">
                  Number of professional needed
                </h1>
                <ul className="pb-5  flex flex-col gap-2 font-semibold mt-2">
                  <div className="flex gap-6">
                    <input
                      type="checkbox"
                      className={`${CheckBoxdesign}`}
                    ></input>
                    One Person
                  </div>
                  <div className="flex gap-6">
                    <input
                      type="checkbox"
                      className={`${CheckBoxdesign}`}
                    ></input>
                    More Than One Person
                  </div>
                </ul>
                <h1 className="font-bold text-lg">Assignment Success Rate</h1>
                <ul className="pb-5  flex flex-col gap-2 font-semibold mt-2">
                  <div className="flex gap-6">
                    <input
                      type="checkbox"
                      className={`${CheckBoxdesign}`}
                    ></input>
                    Any Assignment Success
                  </div>
                  <div className="flex gap-6">
                    <input
                      type="checkbox"
                      className={`${CheckBoxdesign}`}
                    ></input>
                    80% & up
                  </div>
                  <div className="flex gap-6">
                    <input
                      type="checkbox"
                      className={`${CheckBoxdesign}`}
                    ></input>
                    90% & up
                  </div>
                </ul>
                <h1 className="font-bold text-lg">Amount Earned</h1>
                <ul className="pb-5  flex flex-col gap-2 font-semibold mt-2">
                  <div className="flex gap-6">
                    <input
                      type="checkbox"
                      className={`${CheckBoxdesign}`}
                    ></input>
                    $100 + Earned
                  </div>
                  <div className="flex gap-6">
                    <input
                      type="checkbox"
                      className={`${CheckBoxdesign}`}
                    ></input>
                    $1k + Earned
                  </div>
                  <div className="flex gap-6">
                    <input
                      type="checkbox"
                      className={`${CheckBoxdesign}`}
                    ></input>
                    $10k + Earned
                  </div>
                </ul>
              </div>
            </li>
          </ul>
          <h1 className="font-bold md:text-xl mb-1  mt-3 ">
            Assignment Post Preference (optional){" "}
          </h1>
          <h1 className="text-base md:text-sm mt-2  text-gray-600">
            Adjust visibility and add coworkers
          </h1>
          <h1 className="font-bold md:text-xl mb-1  mt-3 ">
            Who can see your assignment?{" "}
          </h1>
          <ul className="pb-5  flex flex-col gap-2 font-semibold mt-2">
            <div className="flex gap-6">
              <input type="checkbox" className={`${CheckBoxdesign}`}></input>
              Anyone including Search engine
            </div>
            <div className="flex gap-6">
              <input type="checkbox" className={`${CheckBoxdesign}`}></input>
              Only Assignment User
            </div>
            <div className="flex gap-6">
              <input type="checkbox" className={`${CheckBoxdesign}`}></input>
              Invite Only
            </div>
          </ul>
          <h1 className="font-bold md:text-xl mb-1  mt-3 ">
            Boost Your Assignment Visibility
          </h1>
          <h1 className="font-semibold md:text-xl mb-1  mt-3 ">
            We'll feature your job and top talent recieve special discounts to
            work on your project
          </h1>
          <ul className="pb-5  flex flex-col gap-2 font-semibold mt-2">
            <div className="flex gap-6">
              <input type="checkbox" className={`${CheckBoxdesign}`}></input>
              Tell me how I can reach more freelancers and agencies and hire in
              less time
            </div>
          </ul>
          <h1 className="font-bold md:text-xl mb-1  mt-3 ">
            Invite Talent(optional)
          </h1>
          <h1 className="text-base md:text-sm mt-2  text-gray-600">
            Request visibility and add coworkers
          </h1>
          <h1 className="font-bold mt-5 text-lg">
            Invite talent you've worked with before
          </h1>
          <button className="border border-gray-500 text-gray-400 py-1 px-2 mt-4 rounded ">
            select freelancer and agencies
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Form;
