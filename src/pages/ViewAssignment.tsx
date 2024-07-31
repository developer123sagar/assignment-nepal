import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import { RootState, useAppSelector } from "../redux/store";
import { useParams } from "react-router-dom";
import { acceptTask } from "../api/APIs";
import { BiLoaderCircle } from "react-icons/bi";
import toast from "react-hot-toast";
import ViewAssignmentCard from "../components/ViewAssignmentCard";

const ViewAssignment = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { role } = useAppSelector((state: RootState) => state.task);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAcceptTask = async () => {
    setLoading(true);
    let api: string;
    let form: any;
    api = role === "worker" ? "workerAccept" : "acceptTask";
    form = role === "worker" ? { task_id: id } : { taskId: id };
    try {
      const res = await acceptTask(api, form);
      toast.success(res.data.message);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  return (
    <>
      <MainHeader />
      <div className="w-full flex gap-5 mt-32">
        <div className="h-full px-4 sm:px-12 lg:px-40 lg:w-[70%] relative">
          <ViewAssignmentCard />
        </div>

        <div className="px-10 hidden lg:block">
          <div className="flex flex-col ">
            <button
              // onClick={handleAcceptTask}
              onClick={() => setShowModal(!showModal)}
              className="bg-black-1 text-white-1 hover:bg-gray-600 px-4 py-2 lg:px-6 lg:py-3"
            >
              Start Task
            </button>
            <button className=" mt-5 text-black-1  border border-gray-600 px-4 py-2 lg:px-6 lg:py-3">
              Save Task
            </button>
          </div>
          <div>
            <h1 className="mt-5">Required Connects to submit a proposal:22 </h1>
            <h1>Available Connects: 160</h1>
            <h1 className="font-bold mt-5">About the client</h1>
            <h1>Payment method verified</h1>
            <h1>5.00 of 36 reviews</h1>
            <h1 className="mt-5 text-gray-700">Nepal</h1>
            <h1 className=" text-gray-500">Gokarna 3:14 AM</h1>
            <h1 className="mt-5 text-gray-700">62 assignment posted </h1>
            <h1 className="text-gray-500">67% hire rate 5 open jobs </h1>
            <h1 className="mt-5 text-gray-700">$31K total spent</h1>
            <h1 className=" text-gray-500">57 hires, 4 active</h1>
            <h1 className="mt-5 text-gray-700">
              $23.18 /hr avg hourly rate paid
            </h1>
            <h1 className=" text-gray-500">1,043 hours</h1>
            <h1 className="mt-5 text-gray-700">Tech & IT</h1>
            <h1 className="mt-5 text-gray-700 font-thin">
              Member since Aug 31, 2022
            </h1>
            <h1 className="mt-5 text-gray-700 font-thin">Job Link</h1>
            <input
              type="text"
              placeholder="https://www.assignment.com/"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-600"
            />
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="relative bg-white-1 rounded-lg w-[40%] p-6">
            <h1 className="text-2xl font-bold mb-4">Start Task</h1>
            <p className="mb-4 font-semibold text-lg">
              Are you sure you want to Start this task ?
            </p>

            <div className="flex justify-end">
              <button
                onClick={handleAcceptTask}
                disabled={loading}
                className="bg-green-600 text-white-1 font-semibold px-4 py-2 hover:bg-green-500"
              >
                {loading ? (
                  <BiLoaderCircle className="animate-spin" size={20} />
                ) : (
                  "Start"
                )}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="ml-4 bg-gray-300 font-semibold text-gray-700 px-4 py-2 hover:bg-gray-400 "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ViewAssignment;
