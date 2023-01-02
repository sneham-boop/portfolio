import React, { useState, useContext, useEffect } from "react";
import { modeContext } from "../../../providers/ModeProvider";
import Emoji from "../Emoji";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PrettySVG from "./PrettySVG";

gsap.registerPlugin(ScrollTrigger);

function Section2() {
  const { dark } = useContext(modeContext);
  const [ballColor, setBallColor] = useState({
    full: "#030E11",
    medium: "#0F4757",
    low: "#1B819D",
  });

  useEffect(() => {
    if (!dark) {
      setBallColor({
        full: "#030E11",
        medium: "#0F4757",
        low: "#1B819D",
      });
    }
  }, [dark]);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const balls = gsap.utils.toArray(".pretty-line");
      balls.forEach((ball) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: ball,
            scrub: 3,
            toggleActions: "restart pause reverse pause",
          },
          scale: 1,
          opacity: 0.2
        });
        tl.to(ball, {
          fill: ballColor.full,
          scale: 1.25,
          ease: "none",
          duration: 2,
          opacity: 0.4
        })
          .to(ball, {
            fill: ballColor.medium,
            scale: 1.5,
            duration: 2,
            opacity: 0.7
          })
          .to(ball, { fill: ballColor.low, scale: 2, duration: 2, opacity: 1 });
      });

      // let tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: `#about img`,
      //     start: "top 25%",
      //     endTrigger: `#about`,
      //     end: "bottom bottom",
      //     markers: true,
      //     scrub: 3,
      //     toggleActions: "restart pause reverse pause",
      //   },
      //   scale: 1,
      // });
      // tl.to(`.pretty-line`, {
      //   fill: ballColor.full,
      //   scale: 1.25,
      //   ease: "none",
      //   duration: 5,
      // })
      //   .to(`.pretty-line`, {
      //     fill: ballColor.medium,
      //     scale: 1.5,
      //     duration: 5,
      //   })
      //   .to(`.pretty-line`, { fill: ballColor.low, scale: 2, duration: 5 });
    });
    return () => {
      ctx.revert();
    };
  });
  return (
    <div className="about-section section-2">
      <div className="section-2-pretty">
        {Array(1150)
          .fill(true)
          .map((_, i) => (
            <PrettySVG key={i} id={i} />
          ))}
      </div>
      <div className="section-2-text">
        <p>
          Since bootcamp, I've learnt many new skills. What has been
          particularly exciting is plain old CSS and what all magic can be done
          with it to liven up a simple website. I've also learnt a little more
          about NoSQL databases, I plan to integrate MongoDB into my current
          project about finding fun eating spots near dependable parking
          locations in Toronto. Ask me more about this when we chat!
        </p>
        <p>
          When I am not working, you will find me being goofy with my doggo,
          involved in local community art events or making art in my little home
          studio, listening to music, reading or hiking with my doggo and
          husband in the beautiful Niagara escarpment area.
        </p>
        <p>
          Besides my funky sense of humour and sparkling personality, I bring a
          barrage of other qualities with me. I genuinely enjoy helping people
          succeed. After getting to the end of a project involving complex
          problems, you will find me documenting and sharing my experiences with
          others. An experience in electrical engineering and automation has
          toughened my analytical and problem solving skills. Tell me something
          can't be done and you'll find me knee deep in trying to find a
          solution.
        </p>
        <p>
          And...as my colleagues and friends will attest, I am easy to work with
          and who doesn't appreciate that? <Emoji symbol="😉" label="wink" />
        </p>
      </div>
    </div>
  );
}

export default Section2;
