import React from "react";
import { jwtDecode } from "jwt-decode";
import { Outlet, Navigate } from "react-router-dom";

import { DecodedToken } from "../types";

const decodeToken = (token: string) => {
  try {
    const decodeToken: DecodedToken = jwtDecode(token);
    return decodeToken.role;
  } catch (error) {
    return null;
  }
};

export type Role = "admin" | "employeer" | "watcher" | "worker" | "client";

const allowedRoles: Role[] = ["admin", "watcher"];

const ProtectedRoutes = () => {
  const token = localStorage.getItem("token") || "";
  const role = decodeToken(token);

  if (token && allowedRoles.includes(role as Role)) {
    return <Outlet />;
  } else {
    return <Navigate to="/adminlogin" />;
  }
};

export default ProtectedRoutes;
