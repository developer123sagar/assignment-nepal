import React from "react";
import { RootState, useAppSelector } from "../redux/store";
import parser from "html-react-parser";
import { MdLocationPin } from "react-icons/md";
import { formatTimestamp } from "../helpers/formatTimestamp";

const ViewAssignmentCard = () => {
  const { selectedTask } = useAppSelector((state: RootState) => state.task);
  const { role } = useAppSelector((state: RootState) => state.task);

  return (
    <div className="h-full px-4 relative">
      <div className="w-full flex justify-between mb-4">
        <div className="flex items-center gap-1 py-1.5 px-2.5 bg-gray-100/80 w-fit">
          <MdLocationPin className="text-gray-500" />
          <span className="text-gray-800">Kathmandu</span>
        </div>
      </div>
      <div>
        <h1 className="capitalize md:text-3xl my-2 text-lime-800">
          {selectedTask?.taskName}
        </h1>
        <div className="flex justify-between">
          <div className="w-full flex justify-between mt-1">
            <span className="text-sm text-gray-500">
              Published {formatTimestamp(selectedTask?.createdAt!)}
            </span>
            {role === "employer" && (
              <span className="text-gray-500 text-sm">
                Project Amount: <span>Rs. {selectedTask?.projectAmount}</span>
              </span>
            )}
          </div>
          <ul className="absolute top-2 right-3 flex flex-col text-sm">
            <li className="text-base hover:underline">
              <span className="font-normal text-gray-900">
                Posted by:&nbsp;&nbsp;
              </span>
              <span className="capitalize">{selectedTask?.clientName}</span>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="underline font-medium text-xl mb-2">About the task</h2>
          <div className="browser-css">
            {selectedTask?.taskDescription &&
              parser(selectedTask.taskDescription)}
          </div>
        </div>
        {selectedTask?.fieldType?.length! > 0 && (
          <div className="mt-8">
            <h1 className="text-gray-900 text-xl">Fieldtype</h1>
            <span className="capitalize text-gray-500">
              {selectedTask?.fieldType[0]}
            </span>
          </div>
        )}
        <div className="mt-8">
          <h1 className="text-gray-900 text-xl">Skills required</h1>
          <div className="w-full flex gap-2 mt-2">
            {selectedTask?.skills.map((skill) => (
              <div
                key={skill}
                className="text-gray-500 px-5 text-nowrap truncate py-1 bg-gray-100"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAssignmentCard;
