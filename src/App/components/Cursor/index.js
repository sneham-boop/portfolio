import "./Cursor.scss";
import { gsap } from "gsap";
import React, { useEffect } from "react";

export default function Cursor({ app }) {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const element = app.current;
      const hover = document.querySelectorAll("a");

      const onMouseMove = (e) => {
        gsap.to(".cursor__ball--big", {
          duration: 0.7,
          x: e.clientX - 16,
          y: e.clientY - 16,
        });
        gsap.to(".cursor__ball--small", {
          duration: 0.05,
          x: e.clientX - 5,
          y: e.clientY - 13,
        });
      };

      const onMouseEnter = () =>
        gsap.to(".cursor__ball--big", {
          duration: 0.3,
          scale: 4,
        });

      const onMouseLeave = () =>
        gsap.to(".cursor__ball--big", {
          duration: 0.3,
          scale: 1,
        });

      // Add event listeners
      element.addEventListener("mousemove", onMouseMove);
      for (let i = 0; i < hover.length; i++) {
        hover[i].addEventListener("mouseenter", onMouseEnter);
        hover[i].addEventListener("mouseleave", onMouseLeave);
      }
    }, app);
    return () => ctx.revert();
  });
  return (
    <>
      <div className="cursor">
        <div className="cursor__ball cursor__ball--big ">
          <svg height="2rem" width="2rem">
            <circle cx="1rem" cy="1rem" r="1rem" strokeWidth="0"></circle>
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
