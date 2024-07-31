import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";
import "./Common/parser.css";
import { ReduxProvider } from "./providers/ReduxProvider";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReduxProvider>
    <Router>
      <SkeletonTheme baseColor="#F5F5F5" highlightColor="#EFEFEF">
        <App />
        <Toaster position="top-right" />
      </SkeletonTheme>
    </Router>
  </ReduxProvider>
);
