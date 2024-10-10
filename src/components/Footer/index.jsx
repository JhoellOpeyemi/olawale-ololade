import { handleHover, handleLeave } from "../../utils.js";

import SplitText from "../SplitText";
import { contactLinks } from "../../data";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-link-group">
        {contactLinks.map((contact, index) => (
          <a
            href={contact.link}
            className="nav-link small-link footer-link"
            key={index}
            onMouseOver={(e) => handleHover(e)}
            onMouseLeave={(e) => handleLeave(e)}
            target="_blank"
          >
            <SplitText text={contact.platform} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
