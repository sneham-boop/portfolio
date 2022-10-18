import React, { useContext } from "react";
import { modeContext } from "../../../providers/ModeProvider";
import "./DarkMode.scss";

function DarkMode() {
  const { dark, setDark, modeStyle } = useContext(modeContext);

  const toggleMode = () => {
    setDark((prev) => !prev);
  };

  return (
    <>
      <div id="dark-mode">
        <div id="switch" onClick={toggleMode} className={modeStyle}>
          <div id="toggler" className={modeStyle}>
            {dark && (
              <span className="night material-symbols-rounded">mode_night</span>
            )}
            {!dark && <span className="day material-symbols-rounded">sunny</span>}
          </div>
        </div>
      </div>
    </>
  );
}

export default DarkMode;
