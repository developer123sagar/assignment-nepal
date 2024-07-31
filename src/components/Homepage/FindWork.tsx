import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  getTasks } from "../../api/APIs";
import { Tasks } from "../../types";
import { CiSearch } from "react-icons/ci";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { setSelectedTask } from "../../redux/slices/taskSlice";
import { PiSmileySadLight } from "react-icons/pi";
import "react-loading-skeleton/dist/skeleton.css";
import TaskCard from "../../Common/TaskCard";
import SkeletonCard from "../../Common/SkeletonCard";

export const FindWork = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [allTask, setAllTask] = useState<Tasks[] | null>(null);
  const { role } = useAppSelector((state: RootState) => state.task);
  const [selectedButton, setSelectedButton] = useState<
    "NEW" | "COMPLETED" | "ONGOING"
  >("NEW");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (role === "employer") {
      (async () => {
        try {
          let api = "";
          if (selectedButton === "NEW") {
            api = "task/employerTask-accepted";
          }
          if (selectedButton === "ONGOING") {
            api = "task/AcceptedTask-byWorker";
          }
          if (selectedButton === "COMPLETED") {
            api = "task/employerTask-completed";
          }
          setLoading(true);

          const res = await getTasks(api);

          setAllTask(res.data.Data || res.data.data);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      })();
    }
    if (role === "worker") {
      (async () => {
        try {
          let api = "";
          if (selectedButton === "NEW") {
            api = "task/AcceptedTask-byWorker";
          }
          if (selectedButton === "ONGOING") {
            api = "task/WorkerAcceptedTask";
          }
          if (selectedButton === "COMPLETED") {
            api = "task/WorkerCompletedTask";
          }
          setLoading(true);
          const res = await getTasks(api);
          setAllTask(res.data.data);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [role, selectedButton]);

  const filteredTasks = allTask?.filter((task) =>
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTaskClick = (task: Tasks) => {
    dispatch(setSelectedTask(task));
    navigate(`/view-assignment/${task?._id}`);
  };

  return (
    <section className="px-2 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full">
      <div className="mt-24 px-8 lg:px-20">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search assignments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-[80%] pl-12 py-2 border border-gray-300 focus:outline-none focus:border-gray-300"
          />
          <CiSearch size={25} className="absolute left-4 text-gray-400" />
        </div>
        <h1 className="text-3xl sm:text-4xl mt-8 font-medium text-gray-600">
          Assignments You Might Like
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Browse assignments that match your experience to a client's hiring
          preferences. Ordered by most relevant.
        </p>
        <h1 className="text-gray-600 text-2xl mt-3">Best Matches</h1>

        <div className="mt-1 mb-2 flex gap-5">
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setSelectedButton("NEW")}
              className="rounded px-6 py-1.5 bg-[#00308F] text-white-1"
            >
              New
            </button>
            <button
              type="button"
              onClick={() => setSelectedButton("ONGOING")}
              className="rounded px-6 py-1.5 bg-[#ffbf00] text-white-1"
            >
              Ongoing
            </button>
            <button
              type="button"
              onClick={() => setSelectedButton("COMPLETED")}
              className="rounded px-6 py-1.5 bg-[#32CD32] text-white-1"
            >
              Completed
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-6 px-6 lg:px-20 flex-wrap w-full md:gap-8 mt-6">
        {filteredTasks &&
          filteredTasks.length > 0 &&
          filteredTasks.map((task) => (
            <TaskCard
              task={task}
              key={task._id}
              handleClick={() => handleTaskClick(task)}
            />
          ))}
        {!loading && filteredTasks && filteredTasks.length === 0 && (
          <div className="flex justify-center items-center gap-3 text-red-600">
            <PiSmileySadLight size={40} />
            <span className="text-2xl">Not Found</span>
          </div>
        )}
      </div>
      {loading && (
        <div className="px-6 lg:px-20 flex flex-wrap gap-10">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}
    </section>
  );
};
