import { ReactLenis } from "lenis/react";
import PropTypes from "prop-types";

const SmoothScroll = ({ children }) => {
  return (
    <ReactLenis root options={{ duration: 2 }}>
      {children}
    </ReactLenis>
  );
};

SmoothScroll.propTypes = {
  children: PropTypes.element,
};

export default SmoothScroll;
