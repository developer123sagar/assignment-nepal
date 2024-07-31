import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const Section2 = () => {
  const categories = [
    { title: "Development & IT", stars: "4.85/5", skills: "1,853 skills" },
    { title: "Design", stars: "4.75/5", skills: "1,432 skills" },
    { title: "Marketing", stars: "4.90/5", skills: "2,105 skills" },
    { title: "Assignment", stars: "4.99/5", skills: "2,444 skills" },
    { title: "Marketing", stars: "4.90/5", skills: "2,105 skills" },
    { title: "Marketing", stars: "4.90/5", skills: "2,105 skills" },
    { title: "Marketing", stars: "4.90/5", skills: "2,105 skills" },
  ];
  return (
    <section className="font-sans">
      <div className="flex flex-col">
        <h3 className="text-5xl font-serif lg:px-32 px-4 font-medium mb-4">
          Browse talent by category
        </h3>
        <div className="flex flex-row lg:px-32 px-4 text-base font-medium">
          <p className="text-gray-700 mr-2 mb-10">Looking for Assignment?</p>
          <a href="#" className="no-underline hover:underline text-gray-600">
            Browse Assignment
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:px-32 px-4 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 mt-8 mb-20 ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg p-5 text-lg font-medium cursor-pointer transition-colors hover:bg-gray-300 hover:shadow-md"
          >
            <h4 className="text-lg mb-8">{category.title}</h4>
            <div className="flex justify-between items-center text-base text-gray-700">
              <span className="flex items-center">
                <TiStarFullOutline className="h-5 text-[#F1C40F] mr-2" />
                <span>{category.stars}</span>
              </span>
              <span className="mr-10">{category.skills}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Section2;
