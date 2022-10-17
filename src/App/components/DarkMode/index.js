import React, { useContext } from "react";
import { modeContext } from "../../../providers/ModeProvider";
import "./DarkMode.scss";

function DarkMode() {
  const { dark } = useContext(modeContext);
  return (
    <>
      <div id="dark-mode">
        <div id="switch">
          <div id="toggler">
            {dark && <span class="night material-symbols-rounded">mode_night</span>}
            {!dark && <span class="day material-symbols-rounded">sunny</span>}
          </div>
        </div>
      </div>
    </>
  );
}

export default DarkMode;
