import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { handleHover, handleLeave } from "../../utils.js";

import "./nav.css";
import { useLenis } from "lenis/react";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(useGSAP);

const Nav = () => {
  const navRef = useRef();
  const lenis = useLenis();
  const { pathname } = useLocation();

  const scrollToWork = () => {
    lenis.scrollTo("#work");
  };

  useEffect(() => {
    window.onscroll = () => {
      if (navRef.current !== null) {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > 550) {
          navRef.current.style.opacity = 0;
          navRef.current.style.visibility = "hidden";
        } else {
          navRef.current.style.opacity = 1;
          navRef.current.style.visibility = "visible";
        }
      }
    };
  }, [pathname]);

  return (
    <nav className="nav" ref={navRef}>
      <a
        className="nav-link"
        onMouseOver={(e) => handleHover(e)}
        onMouseLeave={(e) => handleLeave(e)}
        onClick={scrollToWork}
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
