import React, { useEffect, useState } from "react";
import pdf from "../../documents/Resume.pdf";
import "./Resume.scss";

function Resume() {
  const [width, setWidth] = useState("100vw");
  const [height, setHeight] = useState("100vh");
  useEffect(() => {
    const w = window.innerWidth;
    setWidth(`${w}`);
    setHeight(`${1.3 * w}`);
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
