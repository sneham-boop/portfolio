import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

export default function Animate() {
  const [mouseLeaveStatus, setMouseLeaveStatus] = useState(false);

  const jumbotronSmallBallsRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const element = jumbotronSmallBallsRef.current;
      // gsap.to(element, { zIndex: 20 });
      mouseLeaveStatus && gsap.to(element, { y: 850, duration: 20 });
    }, jumbotronSmallBallsRef);

    return () => {
      ctx.revert();
    };
  });

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { fill: "#fc7a57" });
  };

  const onLeave = ({ currentTarget }) => {
    setMouseLeaveStatus(true);
    gsap.to(currentTarget, { fill: "#ffdd13" });
  };

  return (
    <div className="animate" ref={jumbotronSmallBallsRef}>
      <svg>
        <circle onMouseEnter={onEnter} onMouseLeave={onLeave} />
      </svg>
    </div>
  );
}
