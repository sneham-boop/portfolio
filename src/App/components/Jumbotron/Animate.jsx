import { gsap } from "gsap";
import React, { useEffect } from "react";

export default function Animate(props) {
  const { color, setColor } = props;

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { fill: "#fc7a57" });
  };
  
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { fill: "#ffdd13" });
  };

  return (
    <div className="animate" >
      <svg>
        <circle onMouseEnter={onEnter} onMouseLeave={onLeave}/>
      </svg>
    </div>
  );
}
