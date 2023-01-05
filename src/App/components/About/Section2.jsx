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
          When I am not working, you will find me being goofy or hiking with my
          8 year old dog. I have a little home studio in which I love making
          art. I also enjoy being involved in our local community art events.
        </p>
        <p>
          Besides a funky sense of humour and sparkling personality, I bring a
          barrage of other qualities. I genuinely enjoy helping other people
          succeed and after getting to the end of a project you will find me
          documenting and sharing my experiences with others. My GitHub page is
          an example of this. After every project, I've written up extensive
          instructions for anyone interested in learning more.
        </p>
        <p>
          An experience in electrical engineering and automation has toughened
          my analytical and problem solving skills. Tell me something can't be
          done and you'll find me knee deep in trying to find a solution. And…as
          my friends and colleagues will attest, I am easy to work with and who
          doesn't appreciate that? <Emoji symbol="😉" label="wink" />
        </p>
      </div>
    </div>
  );
}

export default Section2;
