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
        Ckdvhkv duwvi d i iiw ii iwd oev bvvv chdcvd dvwdv owvwvow vwvw vow
        vocwvo vowoc vo vvoovoveoovi hov ovow vowov 90vwvwv wvalcadnkcbakc
        auctufdcehcep clicohcohoo vohl c ac cljpcjpcv cjcpwp diviwuhvo owvo o
        owowcodoc oco
      </p>
      <p className="about-text text-2">
        Ckdvhkv duwvi d i iiw ii iwd oev bvvv chdcvd dvwdv owvwvow vwvw vow
        vocwvo vowoc vo vvoovoveoovi hov ovow vowov 90vwvwv wvalcadnkcbakc
        auctufdcehcep clicohcohoo vohl c ac cljpcjpcv cjcpwp diviwuhvo owvo o
        owowcodoc oco
      </p>
      <p className="about-text text-3">
        Ckdvhkv duwvi d i iiw ii iwd oev bvvv chdcvd dvwdv owvwvow vwvw vow
        vocwvo vowoc vo vvoovoveoovi hov ovow vowov 90vwvwv wvalcadnkcbakc
        auctufdcehcep clicohcohoo vohl c ac cljpcjpcv cjcpwp diviwuhvo owvo o
        owowcodoc oco
      </p>
    </div>
  );
};

export default About;
