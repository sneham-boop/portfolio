import React, { useContext, useRef } from "react";
import { modeContext } from "../providers/ModeProvider";
import "./App.scss";
import { Outlet, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import classNames from "classnames";
import Cursor from "../App/components/Cursor";
import Home from "./components/Home";
import Play from "./components/Play";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const app = useRef();
  const { modeStyle } = useContext(modeContext);
  return (
    <div className={classNames("main-container", modeStyle)} ref={app}>
      <Navigation />
      <Outlet />
      <>
        {/* <Route path="/" element={<App />}> */}
        {/* <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="home" element={<Home />}>
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="resume" element={<Resume />} />
          <Route path="play" element={<Play />} />
        </Routes> */}
        {/* </Route> */}
      </>
      <Cursor app={app} />
    </div>
  );
}

export default App;
