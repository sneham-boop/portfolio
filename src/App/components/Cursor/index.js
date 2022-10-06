import "./Cursor.scss";
import { gsap } from "gsap";
import React, { useEffect } from "react";

export default function Cursor({ app }) {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const hover = document.querySelectorAll("a");

      // Listeners
      document.body.addEventListener("mousemove", onMouseMove);
      for (let i = 0; i < hover.length; i++) {
        hover[i].addEventListener("mouseenter", onMouseHover);
        hover[i].addEventListener("mouseleave", onMouseHoverOut);
      }

      function onMouseMove(e) {
        gsap.to(".cursor__ball--big", {
          duration: 0.7,
          x: e.clientX - 15,
          y: e.clientY - 15,
        });
        gsap.to(".cursor__ball--small", {
          duration: 0.1,
          x: e.clientX - 5,
          y: e.clientY - 12,
        });
      }

      function onMouseHover() {
        gsap.to(".cursor__ball--big", {
          duration: 0.3,
          scale: 4,
        });
      }
      function onMouseHoverOut() {
        gsap.to(".cursor__ball--big", {
          duration: 0.3,
          scale: 1,
        });
      }
    }, app);
    return () => ctx.revert();
  });
  return (
    <>
      <div className="cursor">
        <div className="cursor__ball cursor__ball--big ">
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="13" strokeWidth="0"></circle>
          </svg>
        </div>

        <div className="cursor__ball cursor__ball--small">
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="5" strokeWidth="0"></circle>
          </svg>
        </div>
      </div>
    </>
  );
}
