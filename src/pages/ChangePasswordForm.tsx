import React, { FormEvent, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import toast from "react-hot-toast";
import { changepassword } from "../api/APIs";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Input from "@/Common/Input";

const PasswordChangeForm = () => {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleChangePassword = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await changepassword(form);
      setShowModal(false);
      toast.success(res.data.message || "Password is changed successfully");
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="bg-black-1 text-white-1 font-bold  py-2 px-4 focus:outline-none focus:shadow-outline"
        onClick={() => setShowModal(true)}
      >
        Change Password
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <form
              onSubmit={handleChangePassword}
              className="inline-block align-bottom bg-white-1 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <div className="bg-white-1 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Change Password
                    </h3>
                    <div className="mt-5">
                      <div className="mb-4 relative">
                        <Input
                          required
                          type={showOldPass ? "text" : "password"}
                          placeholder="Enter old password"
                          value={form.oldPassword}
                          onChange={(e) =>
                            setForm({ ...form, oldPassword: e.target.value })
                          }
                        />
                        <div
                          onClick={() => setShowOldPass(!showOldPass)}
                          className="absolute right-2 bottom-4 cursor-pointer"
                        >
                          {showOldPass ? (
                            <FaRegEyeSlash
                              size={20}
                              className="text-gray-400"
                            />
                          ) : (
                            <FaRegEye size={20} className="text-gray-400" />
                          )}
                        </div>
                      </div>
                      <div className="mb-4 relative">
                        <Input
                          required
                          type={showNewPass ? "text" : "password"}
                          placeholder="Enter new password"
                          value={form.newPassword}
                          onChange={(e) =>
                            setForm({ ...form, newPassword: e.target.value })
                          }
                        />
                        <div
                          onClick={() => setShowNewPass(!showNewPass)}
                          className="absolute right-2 bottom-4 cursor-pointer"
                        >
                          {showNewPass ? (
                            <FaRegEyeSlash
                              size={20}
                              className="text-gray-400"
                            />
                          ) : (
                            <FaRegEye size={20} className="text-gray-400" />
                          )}
                        </div>
                      </div>
                      <div className="mb-6 relative">
                        <Input
                          required
                          type={showConfirmPass ? "text" : "password"}
                          placeholder="Confirm new password"
                          value={form.confirmPassword}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              confirmPassword: e.target.value,
                            })
                          }
                        />
                        <div
                          onClick={() => setShowConfirmPass(!showConfirmPass)}
                          className="absolute right-2 bottom-4 cursor-pointer"
                        >
                          {showConfirmPass ? (
                            <FaRegEyeSlash
                              size={20}
                              className="text-gray-400"
                            />
                          ) : (
                            <FaRegEye size={20} className="text-gray-400" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full inline-flex justify-center border border-transparent shadow-sm px-4 py-2 bg-black-1 text-white-1 font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  {loading ? (
                    <BiLoaderCircle className="animate-spin" size={20} />
                  ) : (
                    "Change Password"
                  )}
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-3 w-full inline-flex justify-center border border-gray-300 shadow-sm px-4 py-2 bg-white-1 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PasswordChangeForm;
