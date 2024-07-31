import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonCard = () => {
  return (
    <div className="p-4 w-[500px] max-h-[220px] cursor-pointer relative shadow-lg border border-gray-200">
      <div className="w-full mb-7">
        <Skeleton height={26} />
      </div>
      <h1 className="text-gray-700 truncate">
        <Skeleton height={15} />
      </h1>
      <span className="text-gray-500">
        <Skeleton height={15} />
      </span>
      <span className="text-gray-500">
        <Skeleton height={12} />
      </span>
    </div>
  );
};

export default SkeletonCard;
