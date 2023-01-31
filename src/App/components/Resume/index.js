import React, { useEffect, useContext } from "react";
// import pdf from "../../documents/Sneha_Mahajan_Web_Developer.pdf";
import { modeContext } from "../../../providers/ModeProvider";
import "./Resume.scss";

function Resume() {
  // const [width, setWidth] = useState("100vw");
  // const [height, setHeight] = useState("100vh");
  const { setBallCursorVisibility } = useContext(modeContext);
  useEffect(() => {
    // const w = window.innerWidth;
    // setWidth(`${w}`);
    // setHeight(`${1.3 * w}`);
    setBallCursorVisibility(false);
    return () => {
      setBallCursorVisibility(true);
    };
  });
  return (
    <>
      <section id="resume">
        <iframe
          title="Resume"
          src="https://drive.google.com/file/d/1KELpmafcrL21AoqJU1U2-RlonXZZDpWv/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
      </section>
    </>
  );
}

export default Resume;
