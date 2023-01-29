import React, { useEffect, useState, useContext } from "react";
import pdf from "../../documents/Sneha_Mahajan_Web_Developer.pdf";
import { modeContext } from "../../../providers/ModeProvider";
import "./Resume.scss";

function Resume() {
  const [width, setWidth] = useState("100vw");
  const [height, setHeight] = useState("100vh");
  const { setBallCursorVisibility } = useContext(modeContext);
  useEffect(() => {
    const w = window.innerWidth;
    setWidth(`${w}`);
    setHeight(`${1.3 * w}`);
    setBallCursorVisibility(false);
    return () => {
      setBallCursorVisibility(true);
    };
  }, []);
  return (
    <>
      <section id="resume">
        <embed
          title="Sneha's resume in pdf"
          type="application/pdf"
          src={pdf}
          width={width}
          height={height}
        />
      </section>
    </>
  );
}

export default Resume;
