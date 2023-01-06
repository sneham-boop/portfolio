import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";
import { RouterProvider } from "react-router-dom";
import ModeProvider from "./providers/ModeProvider";
import "normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModeProvider>
      <RouterProvider router={Router} />  
    </ModeProvider>
  </React.StrictMode>
);
