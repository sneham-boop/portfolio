import React, { useRef } from "react";
import "./App.scss";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Cursor from "./components/Cursor";

function App() {
  const app = useRef();
  return (
    <div ref={app} className="main-container">
      <Cursor app={app} />
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
