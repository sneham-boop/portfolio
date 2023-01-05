import React, { useContext } from "react";
import { modeContext } from "../../../providers/ModeProvider";
import "./DarkMode.scss";

function DarkMode() {
  const { modeStyle, setModeStyle } = useContext(modeContext);

  const toggleMode = () => {
    setModeStyle((prev) => {
     return prev === "dark" ? "light" : "dark";
    });
  };

  return (
    <>
      <div id="dark-mode">
        <div id="switch" onClick={toggleMode} className={modeStyle}>
          <div id="toggler" className={modeStyle}>
            {modeStyle === "dark" && (
              <span className="night material-symbols-rounded">mode_night</span>
            )}
            {modeStyle === "light" && (
              <span className="day material-symbols-rounded">sunny</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DarkMode;
