import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { aboutReveal, mobileReveal } from "./utils.js";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const About = () => {
  const aboutRef = useRef();
  const tl = useRef();

  let mm = gsap.matchMedia();

  useGSAP(() => {
    mm.add("(min-width: 768px)", () => {
      aboutReveal(tl, aboutRef);
    });

    mm.add("(max-width: 768px)", () => {
      mobileReveal();
    });
  }, [{ scope: aboutRef.current }]);

  return (
    <div className="about-container" ref={aboutRef}>
      <p className="about-text text-1">
        Through surrealist portraiture, I explore the enigmatic nature of the
        unseen world. My subjects, veiled in metaphorical sense, represent the
        elusive and indescribable aspects of existence. While we may be aware of
        their presence, their true essence remains hidden, a mystery that
        continues to intrigue and perplex us.
      </p>
      <p className="about-text text-2">
        Influenced by a lifelong fascination with the spiritual and the
        paranormal, my work draws on insights from personal experiences and a
        unique religious upbringing. This background has shaped my understanding
        of the unseen world and the profound mysteries beyond our ordinary
        perception
      </p>
      <p className="about-text text-3">
        By obscuring the identity of my subjects, I invite viewers to
        contemplate the universal human experience of grappling with the
        unknown. These portraits evoke a sense of &apos;what is&apos;, prompting
        us to question our perceptions and the tangible and intangible
        boundaries.
      </p>
    </div>
  );
};

export default About;
