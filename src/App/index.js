import React, { useRef, useContext } from "react";
import { modeContext } from "../providers/ModeProvider";
import "./App.scss";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Cursor from "./components/Cursor";
import classNames from "classnames";

function App() {
  const app = useRef();
  const { modeStyle } = useContext(modeContext);
  return (
    <div ref={app} className={classNames("main-container", modeStyle)}>
      <Cursor app={app} />
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
