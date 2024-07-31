import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Skeleton from "react-loading-skeleton";
import { RootState, useAppSelector } from "../../redux/store";
import { getAcceptedWorkerTasks } from "../../api/APIs";
import { Tasks } from "../../types";
import { PiSmileySadLight } from "react-icons/pi";
import MainHeader from "../MainHeader";
import TaskCard from "../../Common/TaskCard";

const MyWorks = () => {
  const [mytasks, setMyTasks] = useState<Tasks[] | null>(null);
  const [loading, setLoading] = useState(false);
  const { role } = useAppSelector((state: RootState) => state.task);

  useEffect(() => {
    if (role === "worker") {
      (async () => {
        try {
          setLoading(true);
          const res = await getAcceptedWorkerTasks();
          setMyTasks(res.data.data);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [role]);

  return (
    <>
      <MainHeader />
      <section className="px-2 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="mt-24 px-8 lg:px-20">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search assignments..."
              className="w-full md:w-[80%] pl-12 py-2 border border-gray-300 focus:outline-none focus:border-gray-300"
            />
            <CiSearch size={25} className="absolute left-4 text-gray-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl mt-8 font-medium text-gray-700">
            My Works
          </h1>
        </div>

        <div className="flex flex-col gap-6 px-6 lg:px-20 md:gap-8 mt-6">
          {mytasks &&
            mytasks.length > 0 &&
            mytasks.map((task) => <TaskCard task={task} key={task._id} />)}
          {!loading && mytasks && mytasks.length === 0 && (
            <div className="flex justify-center items-center gap-3 text-red-600">
              <PiSmileySadLight size={40} />
              <span className="text-2xl">Not Found</span>
            </div>
          )}
        </div>
        {loading && (
          <div>
            <Skeleton count={2} height={40} />
          </div>
        )}
      </section>
    </>
  );
};

export default MyWorks;
