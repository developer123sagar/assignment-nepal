import React, { useEffect } from "react";
import Footer from "../Footer";
import MainHeader from "../MainHeader";
import ClientMainPage from "../client/ClientMainPage";
import { DecodedToken } from "../../types";
import { jwtDecode } from "jwt-decode";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { setRole } from "../../redux/slices/taskSlice";
import { FindWork } from "./FindWork";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { role } = useAppSelector((state: RootState) => state.task);

  const decodeToken = (token: string) => {
    try {
      const decodeToken: DecodedToken = jwtDecode(token);
      return decodeToken.role;
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    const decodedRole = decodeToken(token);
    if (decodedRole) {
      dispatch(setRole(decodedRole));
    }
  }, []);

  return (
    <div>
      <MainHeader />
      <div className="flex">
        <div className="flex w-full">
          {role === "worker" || role === "employer" ? (
            <FindWork />
          ) : (
            <ClientMainPage />
          )}
        </div>
        <div className="flex flex-col">{/* <Sidebar /> */}</div>
      </div>
      <Footer />
    </div>
  );
};
