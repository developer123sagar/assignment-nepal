import React, { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { deactivateAccount } from "../api/APIs";

const DeactivateAccount = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const handleDeactivateAccount = async () => {
    try {
      setLoading(true);
      const res = await deactivateAccount({ token: token });
      console.log(res);
      setShowModal(false);
    } catch (error) {
      console.error("Error deactivating account:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="bg-black-1 text-white-1 font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
        onClick={() => setShowModal(true)}
      >
        Deactivate Account
      </button>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="relative bg-white-1 rounded-lg w-1/3 p-6">
            <h1 className="text-2xl font-bold mb-4">Deactivate Account</h1>
            <p className="mb-4 font-semibold text-lg">
              Are you sure you want to deactivate your account?
            </p>

            <div className="flex justify-end">
              <button
                onClick={handleDeactivateAccount}
                disabled={loading}
                className="bg-red-700 text-white-1 font-semibold px-4 py-2 hover:bg-red-500 "
              >
                {loading ? (
                  <BiLoaderCircle className="animate-spin" size={20} />
                ) : (
                  "Deactivate"
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
    </>
  );
};

export default DeactivateAccount;
