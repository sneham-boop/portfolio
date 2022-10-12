import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from "./Router";
import { RouterProvider } from "react-router-dom";
import 'normalize.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

