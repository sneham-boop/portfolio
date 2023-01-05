import React from "react";
import pdf from "../../documents/Resume.pdf";
import "./Resume.scss";

function Resume() {
  return (
    <>
      <section id="resume">
        <embed src={pdf}/>
      </section>
    </>
  );
}

export default Resume;
