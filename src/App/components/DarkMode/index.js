import React, { useContext } from "react";
import "./DarkMode.scss";

function DarkMode() {
  return (
    <>
      <div id="dark-mode">
        <div id="switch">
          <div id="toggler">
            <span class="night material-symbols-rounded">mode_night</span>
            <span class="day material-symbols-rounded">sunny</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default DarkMode;
