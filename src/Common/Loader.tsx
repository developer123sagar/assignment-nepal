import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

export const Loaders = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-white-1">
        <div className="h-36 w-36  ">
          <BiLoaderCircle className="animate-spin " color="black" size={56} />
        </div>
      </div>
    </>
  );
};
