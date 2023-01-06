import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";
import { RouterProvider, BrowserRouter } from "react-router-dom";
import App from "./App";
import ModeProvider from "./providers/ModeProvider";
import "normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModeProvider>
      {/* <RouterProvider router={Router} /> */}
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </ModeProvider>
  </React.StrictMode>
);
