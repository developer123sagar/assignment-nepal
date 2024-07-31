import React, { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { resetPassword } from "../api/APIs";
import toast from "react-hot-toast";
import MainHeader from "../components/MainHeader";

const ResetPassword = () => {
  const [form, setForm] = useState({
    email: "",
    enteredOTP: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await resetPassword(form);
      toast.success(res.data.message || "Password is reset successfully");
      console.log(res);
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MainHeader />
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="w-full max-w-md bg-white-1 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Reset Password
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="otp"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                OTP
              </label>
              <input
                type="number"
                id="otp"
                value={form.enteredOTP}
                onChange={(e) =>
                  setForm({ ...form, enteredOTP: e.target.value })
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={form.newPassword}
                onChange={(e) =>
                  setForm({ ...form, newPassword: e.target.value })
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              disabled={loading}
              type="submit"
              className="w-full inline-flex justify-center border border-transparent shadow-sm px-4 py-2 bg-black-1 text-white-1 font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              {loading ? (
                <BiLoaderCircle className="animate-spin mr-2" size={20} />
              ) : (
                "Reset Password"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
