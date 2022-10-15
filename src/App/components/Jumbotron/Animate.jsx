import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

export default function Animate({ play }) {
  const [mouseLeaveStatus, setMouseLeaveStatus] = useState(false);

  const jumbotronSmallBallsRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const move = [
        gsap.utils.random(-5, 5, 0.3),
        gsap.utils.random(-5, 5, 0.3),
      ];
      const element = jumbotronSmallBallsRef.current;
      mouseLeaveStatus &&
        gsap.to(element, {
          y: `${move[0]}rem`,
          x: `${move[1]}rem`,
          ease: "elastic.out(1, 0.3)",
          duration: 2,
        });
    }, jumbotronSmallBallsRef);

    return () => {
      ctx.revert();
    };
  });

  const onEnter = (e) => {
    const element = jumbotronSmallBallsRef.current;
    const { currentTarget } = e;
    const move = [gsap.utils.random(-20, 5, 0.3), gsap.utils.random(-5, 5, 0.3)];
    gsap.to(element, {
      y: `${move[0]}rem`,
      x: `${move[1]}rem`,
      ease: "elastic.out(1, 0.3)",
      duration: 2,
    });
    let tl = gsap.timeline({ repeat: 10, repeatDelay: 2 });
    tl.to(currentTarget, { fill: "#fc7a57", fillOpacity: "1" })
      .to(currentTarget, { fill: "#fc7a50" })
      .to(currentTarget, { fill: "#fc7a10", fillOpacity: "0", duration: 1 });
  };

  const onLeave = ({ currentTarget }) => {
    setMouseLeaveStatus(true);
    gsap.to(currentTarget, { fill: "#ffdd1300" });
    // setMouseLeaveStatus(false);
  };

  return (
    <div
      className={play ? "animate-play" : "animate"}
      ref={jumbotronSmallBallsRef}
    >
      <svg>
        <circle
          cx="1rem"
          cy="1rem"
          r="1rem"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        />
      </svg>
    </div>
  );
}
