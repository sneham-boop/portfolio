import { useEffect, useState } from "react";

export default function Animate(props) {
  const { color, setColor } = props;

  // const appStyles = {
  //   background: `${color}`,
  // };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("This will run every second!");
  //     setColor((prev) => {
  //       const prevColor = { ...prev };
  //       return "#ffb90080";
  //     });
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="animate">
      <svg>
        <circle/>
      </svg>
    </div>
  );
}
