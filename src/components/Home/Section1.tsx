import React from "react";

const Section1 = () => {
  return (
    <section className="font-sans pt-10 sm:pt-20 lg:pt-36 pb-20">
      <div className="lg:px-32 px-4 relative">
        <h1 className="text-primary font-serif text-3xl mt-7 sm:text-4xl lg:text-5xl xl:text-6xl text-black-1 font-bold mb-4 sm:mb-6">
          How Assignment should work?
        </h1>
        <h3 className="text-gray-500 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 sm:mb-8">
          Forget the old rules. You can have the best people.
          <br />
          Right now. Right here.
        </h3>
        <button className="bg-black-1 text-white-1 hover:bg-gray-600 px-4 sm:px-5 py-3 sm:py-4 mr-4 sm:mr-8">
          Get Started
        </button>
        <div className="mt-6 sm:mt-8 lg:mt-10">
          <h4 className="text-gray-400 font-semibold mb-2 sm:mb-4">Trusted by</h4>
          <div className="flex items-center flex-wrap">
            <img
              src="https://silicontechnepal.com.np/media/Clients/logo.png"
              alt=""
              className="h-12 sm:h-16 lg:h-20 mr-4 mb-4 sm:mr-8"
            />
            <img
              src="https://silicontechnepal.com.np/media/Clients/logo.5dde5010d300db2d6d70.png"
              alt=""
              className="h-12 sm:h-16 lg:h-20 mr-4 mb-4 sm:mr-8"
            />
            <img
              src="https://silicontechnepal.com.np/media/Clients/mb-logo.png"
              className="h-12 sm:h-16 lg:h-20 mb-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
