import React, { useContext } from "react";
import { modeContext } from "../providers/ModeProvider";
import "./App.scss";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

import classNames from "classnames";

function App() {
  
  const { modeStyle } = useContext(modeContext);
  return (
    <div id="tesssst" className={classNames("main-container", modeStyle)}>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
