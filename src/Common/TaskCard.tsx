import React from "react";
import { Tasks } from "../types";
import { MdLocationPin } from "react-icons/md";
import { VscVerified } from "react-icons/vsc";
import { formatTimestamp } from "../helpers/formatTimestamp";

const TaskCard = ({
  task,
  handleClick,
}: {
  task: Tasks;
  handleClick?: () => void;
}) => {
  return (
    <div
      onClick={handleClick ? handleClick : undefined}
      className="p-4 w-[500px] cursor-pointer relative shadow-lg border border-gray-200"
    >
      <div className="w-full flex justify-between mb-4">
        <div className="flex items-center gap-1 py-1.5 px-2.5 bg-gray-100/80 w-fit">
          <MdLocationPin className="text-gray-500" />
          <span className="text-gray-500">Kathmandu</span>
        </div>
        <div className="flex items-center gap-1 py-1.5 px-2.5 bg-gray-100/80 w-fit">
          <VscVerified />
          <span className="text-gray-500">Payment verified</span>
        </div>
      </div>
      <h1 className="text-gray-700 my-2 truncate capitalize">{task?.taskName}</h1>
      <span className="text-sm text-gray-500">
        Published {formatTimestamp(task.createdAt)}
      </span>
      <div className="mt-4">
        <h1 className="text-gray-500">Skills required</h1>
        <div className="w-full flex gap-2 mt-2">
          {task.skills.slice(0, 4).map((skill) => (
            <div key={skill} className="text-gray-500 px-5 text-nowrap truncate py-1 bg-gray-100">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
