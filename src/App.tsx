import { Route, Routes } from "react-router-dom";
import { AuthForm } from "./Common";
import { FindWork } from "./components/Homepage/FindWork";
import { Home } from "./components/Home/Home";
import { Enterprise } from "./components/Home/Enterprise";
import ViewAssignment from "./pages/ViewAssignment";
import Form from "./pages/Form";
import React from "react";
import Chat from "./components/Message/Chat";
import UserProfile from "./pages/UserProfile";
import CreateTaskForm from "./pages/CreateTaskForm";
import ForgotPasswordForm from "./components/Login/Forgotpassword";
import ForgotPassword from "./components/Login/otp";
import ResetPassword from "./pages/ResetPassword";
import MyWorks from "./components/worker/MyWorks";
import Payment from "./pages/Payment";

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const isWorker = urlParams.get("isWorker") === "true" || false;
  const registerApi = isWorker ? "auth/worker" : "client/register";

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<AuthForm api="login" title="Login" variant="SIGNIN" />}
        />
        <Route
          path="/register/*"
          element={
            <AuthForm api={registerApi} title="Register" variant="SIGNUP" />
          }
        />
        <Route path="/view-assignment/:id" element={<ViewAssignment />} />
        <Route path="/findwork" element={<FindWork />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/form" element={<Form />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/createtask" element={<CreateTaskForm />} />
        <Route path="/forgotpassword" element={<ForgotPasswordForm />} />
        <Route path="/Otp" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/worker/myworks" element={<MyWorks />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}
export default App;
