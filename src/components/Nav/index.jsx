import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { handleHover, handleLeave } from "./utils.js";

import "./nav.css";

gsap.registerPlugin(useGSAP);
const Nav = () => {
  const navRef = useRef();

  useEffect(() => {
    window.onscroll = () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 650) {
        navRef.current.style.opacity = 0;
      } else {
        navRef.current.style.opacity = 1;
      }
    };
  });

  return (
    <nav className="nav" ref={navRef}>
      <a
        href="#"
        className="nav-link"
        onMouseOver={(e) => handleHover(e)}
        onMouseLeave={(e) => handleLeave(e)}
      >
        <span className="visible">
          <span>W</span>
          <span>o</span>
          <span>r</span>
          <span>k</span>
          <span>s</span>
        </span>
        <span className="hidden">
          <span>W</span>
          <span>o</span>
          <span>r</span>
          <span>k</span>
          <span>s</span>
        </span>
      </a>

      <a
        href="#"
        className="nav-link"
        onMouseOver={(e) => handleHover(e)}
        onMouseLeave={(e) => handleLeave(e)}
      >
        <span className="visible">
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
        </span>
        <span className="hidden">
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
        </span>
      </a>
    </nav>
  );
};

export default Nav;
