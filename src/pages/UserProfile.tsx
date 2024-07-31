/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import MainHeader from "../components/MainHeader";
import PasswordChangeForm from "./ChangePasswordForm";
import { postData, profile } from "../api/APIs";
import { Link } from "react-router-dom";
import DeactivateAccount from "./Deactivate";

const ManageAccount = () => {
  const [data, setData] = useState<any>();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getClientInfo = async () => {
      try {
        const res = await profile();
        setData(res.data.found);
        setName(res.data.found?.name);
      } catch (err: any) {
        toast.error(err?.response?.data?.found || "Something went wrong");
      }
    };
    getClientInfo();
  }, []);

  const handleEditInfo = async () => {
    try {
      setLoading(true);
      const res = await postData("client/edit", { name });
      console.log(res);
      toast.success(res.data.message || "Information updated successfully");
    } catch (err: any) {
      toast.error(err?.response?.data?.found?.name || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MainHeader />
      <div className="md:mt-10  mt-5 h-full bg-gray-50 overflow-x-hidden overflow-y-scroll">
        <div className="w-full md:w-[90%]  lg:w-[90%] flex-col pl-4 md:flex-row md:ml-[20%] md:pl-10 bg-gray-50">
          <div className="flex w-full bg-gray-50 gap-5 mt-6 md:flex-row">
            <div className="p-7 md:pr-20 w-full border-[rgb(230,230,230)] shadow-lg rounded-lg">
              <h1 className="sm:text-[20px] text-[12px] font-bold">
                EDIT INFORMATION
              </h1>
              <div className="md:mt-5 mt-2 mb-5">
                <FaUserTie className="" size={56} />
              </div>
              <h1 className="sm:text-[20px] text-[12px] font-bold mb-5 mt-2 md:mt-8">
                ACCOUNT INFORMATION
              </h1>
              <div>
                <div className="flex items-center gap-5">
                  <h1 className="text-[15px] font-bold text-[rgb()] ">Name:</h1>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-[50px] border-2 border-[rgb(230,230,230)] pl-3 p-[8.5px] md:w-full"
                  />
                </div>
                <div className="flex items-center gap-[22px] mt-3">
                  <h1 className="text-[15px] font-bold text-[#000000]">
                    Email:
                  </h1>
                  <input
                    disabled
                    value={data?.email}
                    className="h-[50px] border-2 border-[rgb(230,230,230)] pl-3 p-[8.5px] md:w-full"
                  />
                </div>
              </div>
              <div className=" flex-col">
                <button
                  onClick={handleEditInfo}
                  className="bg-black-1 font-bold mt-7 border px-8 text-center text-white-1 h-[50px] z-1 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  {loading ? (
                    <BiLoaderCircle className="animate-spin" size={30} />
                  ) : (
                    "Update"
                  )}
                </button>
              </div>
            </div>

            <div className="p-7  md:pr-28 w-full admin-header border-[rgb(230,230,230)] shadow-lg">
              <h1 className="sm:text-[20px] text-[12px] font-semibold mb-2 ">
                CHANGE PASSWORD
              </h1>
              <PasswordChangeForm />
              <h1 className="sm:text-[20px] text-[12px] font-semibold mb-2 mt-9">
                UPGRADE TO WORKER
              </h1>
              <Link to="/register">
                <button className="bg-black-1 font-bold  border px-8 text-center text-white-1 h-[50px] z-1 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Upgrade to Worker
                </button>
              </Link>
              <h1 className="sm:text-[20px] text-[12px] font-semibold b-2 mt-9">
                DEACTIVATE ACCOUNT
              </h1>
              <div className="mt-2 md:pr-28 w-full admin-header">
                <DeactivateAccount />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageAccount;
