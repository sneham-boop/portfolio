import { gsap } from "gsap";
import React, { useRef } from "react";

export default function Animate({ play, ballColor }) {
  const svgContainerRef = useRef();

  const onEnter = ({ currentTarget: currentSVG }) => {
    // movement for SVG container
    const move = [
      gsap.utils.random(-15, 10, 0.3),
      gsap.utils.random(-12, 5, 0.3),
    ];
    const currentContainer = svgContainerRef.current;
    gsap.to(currentContainer, {
      y: `${move[0]}rem`,
      x: `${move[1]}rem`,
      ease: "elastic.out(1.75, 0.55)",
      duration: 4,
    });

    // Color changes in svg element
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to(currentSVG, {
      stagger: 0.1,
      fill: ballColor.full,
      fillOpacity: "0.2",
      duration: 3,
    })
      .to(currentSVG, {
        fill: ballColor.medium,
        fillOpacity: "0.5",
        duration: 3,
      })
      .to(currentSVG, {
        fill: ballColor.medium,
        fillOpacity: "0.8",
        duration: 3,
      })
      .to(currentSVG, { fill: ballColor.low, fillOpacity: "0.3", duration: 3 })
      .to(currentSVG, { fill: ballColor.low, fillOpacity: "0", duration: 7 });
  };


  return (
    <div className={play ? "animate-play" : "animate"} ref={svgContainerRef}>
      <svg>
        <circle
          cx="1rem"
          cy="1rem"
          r="1rem"
          onMouseEnter={onEnter}
        />
      </svg>
    </div>
  );
}
