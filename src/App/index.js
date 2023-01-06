import React, { useContext, useRef } from "react";
import { modeContext } from "../providers/ModeProvider";
import "./App.scss";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import classNames from "classnames";
import Cursor from "../App/components/Cursor";

function App() {
  const app = useRef();
  const { modeStyle } = useContext(modeContext);
  return (
    <div className={classNames("main-container", modeStyle)} ref={app}>
      <Navigation />
      <Outlet />
      <Cursor app={app} />
    </div>
  );
}

export default App;
