import Logo from "../Common/Logo";
import Buttons from "../Common/Button";

import React from "react";
import { LoginForm } from "../constants";

export const Login = () => {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white-1 shadow-default">
        <div className="flex flex-wrap h-[100vh] items-center ">
          <div className="hidden w-full xl:block xl:w-1/2 h-full ">
            <div className="h-full">
              <img src="" alt="" className="h-full  object-cover" />
            </div>
          </div>
          <div className="w-full border-stroke xl:w-1/2 xl:border-l-2">
            <div>
              <Logo large className="mb-10 " />
            </div>
            <div className="w-full p-4 sm:p-12.5  mt-10 xl:p-17.5">
              <h2 className="mb-9 xl:text-3xl text-2xl  font-bold text-black-1   text-center sm:text-title-xl2">
                Login
              </h2>
              <form className="flex-col justify-center  flex  items-center">
                {LoginForm.map((field, index) => (
                  <div key={index} className="mb-4  w-full xl:w-[60%]">
                    <div className="relative">
                      <input
                        name={field.name}
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        className="w-full rounded  border-black border-2 bg-transparent py-4 pl-6 pr-10 text-black-1 outline-none focus:border-primary focus-visible:shadow-none"
                      />
                    </div>
                  </div>
                ))}
                <div className="mb-5  w-[60%] ">
                  <Buttons
                    type="submit"
                    className="w-full cursor-pointer font-bold border border-primary bg-primary text-white-1 transition hover:bg-opacity-90"
                  >
                    Submit
                  </Buttons>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
