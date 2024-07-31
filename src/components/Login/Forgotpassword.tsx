import React, { FormEvent, useState } from "react";
import { Logo } from "../../Common";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("allUser/forgot_password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      setMessage(data.message);
      setEmail("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="h-screen w-screen flex flex-col gap-4 justify-center items-center">
      <Logo />
      <div className="w-full max-w-lg p-6 bg-white-1 shadow-md">
        <h1 className="text-2xl font-semibold mb-4 px-24">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Enter Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 border"
              required
            />
          </div>
          <button type="submit" className="w-full bg-black-1 text-white-1 py-2">
            Submit
          </button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
