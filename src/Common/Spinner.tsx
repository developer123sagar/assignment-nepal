import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const Spinner = ({ btn }: { btn?: boolean }) => {
  return (
    <>
      {btn ? (
        <div className="flex items-center justify-center h-[30px] overflow-y-hidden">
          <BiLoaderCircle className="animate-spin" size={20} />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <BiLoaderCircle className="animate-spin" size={50} />
        </div>
      )}
    </>
  );
};

export default Spinner;
