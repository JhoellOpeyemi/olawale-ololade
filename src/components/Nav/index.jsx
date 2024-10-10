import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { handleHover, handleLeave } from "../../utils.js";

import "./nav.css";
import { useLenis } from "lenis/react";
import { useLocation } from "react-router-dom";

import SplitText from "../SplitText";
import { contactLinks } from "../../data";

gsap.registerPlugin(useGSAP);

const Nav = () => {
  const [openContact, setOpenContact] = useState(false);

  const navRef = useRef();
  const lenis = useLenis();
  const { pathname } = useLocation();

  const scrollToWork = () => {
    lenis.scrollTo("#work");
  };

  const handleClick = () => {
    setOpenContact(!openContact);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (navRef.current !== null) {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > 500) {
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
      <div className="links-group-wrapper works-wrapper">
        <a
          className="nav-link big-link"
          onMouseOver={(e) => handleHover(e)}
          onMouseLeave={(e) => handleLeave(e)}
          onClick={scrollToWork}
        >
          <SplitText text="Works" />
        </a>
      </div>

      <div className="links-group-wrapper contact-wrapper">
        <button
          className="nav-link big-link"
          onClick={handleClick}
          onMouseOver={(e) => handleHover(e)}
          onMouseLeave={(e) => handleLeave(e)}
        >
          <SplitText text="Contact" />
        </button>

        <div className={openContact ? "link-group active" : "link-group"}>
          {contactLinks.map((contact, index) => (
            <a
              href={contact.link}
              className="nav-link small-link"
              key={index}
              onMouseOver={(e) => handleHover(e)}
              onMouseLeave={(e) => handleLeave(e)}
              target="_blank"
            >
              <SplitText text={contact.platform} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
