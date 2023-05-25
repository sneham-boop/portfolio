import React, { useEffect } from "react";
import Emoji from "../Emoji";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PrettySVG from "./PrettySVG";

gsap.registerPlugin(ScrollTrigger);

function Section2() {
  // Only trigger after this component has loaded.
  useEffect(() => {
    gsap.defaults({ ease: "back" });
    gsap.set(".pretty-line", { y: 100 });

    ScrollTrigger.batch(".pretty-line", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 0.8,
          y: 0,
          stagger: { each: 0.15, grid: [1, 3] },
          overwrite: true,
        }),
      onLeave: (batch) =>
        gsap.set(batch, {
          opacity: 0,
          y: -100,
          overwrite: true,
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          opacity: 0.8,
          y: 0,
          stagger: 0.15,
          overwrite: true,
        }),
      onLeaveBack: (batch) =>
        gsap.set(batch, {
          opacity: 0,
          y: 100,
          overwrite: true,
        }),
    });

    ScrollTrigger.addEventListener("refreshInit", () =>
      gsap.set(".pretty-line", { y: 0 })
    );
  }, []);

  return (
    <div className="about-section section-2">
      <div className="section-2-pretty">
        <PrettySVG />
      </div>
      <div className="section-2-text">
        <p>
          Apart from my sense of humor and sparkling personality, I bring a
          range of qualities to the table. I enjoy helping others and upon
          completing a project, you will find me documenting and sharing my
          experiences with others. My GitHub page is an example of this. After
          every project, I've written up comprehensive instructions for those
          interested in expanding their knowledge.
        </p>
        <p>
          My experience in electrical engineering and automation has honed my
          analytical and problem solving skills. Tell me something cannot be
          done, and you'll find me fully immersed in finding a solution. And…as
          my friends and colleagues will attest, I am easy to work with and who
          doesn't appreciate that? <Emoji symbol="😉" label="wink" />
        </p>
        <p>
          Outside of work, you will find me either being goofy or hiking with my
          9-year-old dog. I enjoy participating in local art events, allowing me
          to connect with fellow artists and contribute to the vibrant
          creative scene in the Toronto area.
        </p>
      </div>
    </div>
  );
}

export default Section2;
