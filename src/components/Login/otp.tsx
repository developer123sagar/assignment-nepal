import React, { useState } from "react";
import { forgotPassword } from "../../api/APIs";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import MainHeader from "../MainHeader";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await forgotPassword({ email: email });
      if (res.status === 200) {
        navigate("/reset");
      }
      toast.success(res.data.message);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <MainHeader />
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white-1 p-8 shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-800 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border "
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-[120px] inline-flex justify-center border border-black shadow-szm px-4 py-2 bg-black-1 text-white-1 font-medium sm:ml-3 sm:text-sm"
          >
            {loading ? (
              <BiLoaderCircle className="animate-spin" size={20} />
            ) : (
              "Send Otp"
            )}
          </button>
        </form>
      </div>
    </>
  );
};
export default ForgotPassword;
