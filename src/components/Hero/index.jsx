import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./hero.css";

import image from "/assets/painterly/painterly-lucynder.jpg";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const imageRef = useRef();
  const heroRef = useRef();

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [view, setView] = useState(false);

  let mm = gsap.matchMedia();

  useGSAP(() => {
    const animate = (e) => {
      setX(e.clientX - imageRef.current.offsetWidth / 2);
      setY(e.clientY - imageRef.current.offsetHeight / 2);

      mm.add("(min-width: 768px)", () => {
        gsap.to(imageRef.current, {
          x: `${x}px`,
          y: `${y}px`,
        });
      });
    };

    heroRef.current.onmousemove = (e) => {
      animate(e);
    };
  }, [x, y]);

  useGSAP(() => {
    // conditional to reveal image on text hover
    mm.add("(min-width: 768px)", () => {
      if (view == true && x !== 0 && y !== 0) {
        gsap.to(imageRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          duration: 0.3,
        });
      } else {
        if (x > window.innerWidth / 2) {
          gsap.to(imageRef.current, {
            clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
            opacity: 0,
            duration: 0.3,
          });
        } else {
          gsap.to(imageRef.current, {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            opacity: 0,
            duration: 0.3,
          });
        }
      }
    });
  }, [{ dependencies: [view] }]);

  return (
    <div className="hero-container" ref={heroRef}>
      <div className="hero-text">
        <h1
          className="hero-heading"
          onMouseOver={() => setView(true)}
          onMouseLeave={() => setView(false)}
        >
          Olawale Ololade
        </h1>
        <h3 className="hero-subheading">Photographer, NFT Creator</h3>
      </div>

      <div className="image-wrapper" aria-hidden="true" ref={imageRef}>
        <img className="hero-image" src={image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
