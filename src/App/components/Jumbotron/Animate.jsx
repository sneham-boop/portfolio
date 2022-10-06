import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

export default function Animate() {
  const [mouseLeaveStatus, setMouseLeaveStatus] = useState(false);

  const jumbotronSmallBallsRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const element = jumbotronSmallBallsRef.current;
      mouseLeaveStatus &&
        gsap.to(element, {
          y: "-1rem",
          x: "-1rem",
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
    gsap.to(element, {
      y: "1rem",
      x: "1rem",
      ease: "elastic.out(1, 0.3)",
      duration: 2,
    });
    let tl = gsap.timeline({ repeat: 5, repeatDelay: 1 });
    tl.to(currentTarget, { fill: "#fc7a57" })
    .to(currentTarget, { fill: "#fc7a50" })
    .to(currentTarget, { fill: "#fc7a10", fillOpacity: "0", duration: 1 });
  };

  const onLeave = ({ currentTarget }) => {
    setMouseLeaveStatus(true);
    gsap.to(currentTarget, { fill: "#ffdd1300" });
    // setMouseLeaveStatus(false);
  };

  return (
    <div className="animate" ref={jumbotronSmallBallsRef}>
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
