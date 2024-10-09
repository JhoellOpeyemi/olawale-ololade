import { useContext, useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import PropTypes from "prop-types";

import { WorksContext } from "../context";

const progressFromStorage = JSON.parse(localStorage.getItem("progress") || "0");

const SmoothScroll = ({ children }) => {
  const { scrollOrientation } = useContext(WorksContext);
  const [progress] = useState(progressFromStorage);

  useEffect(() => {
    localStorage.setItem("progress", JSON.stringify(progress));
  });

  return (
    <ReactLenis root options={{ lerp: 0.05, orientation: scrollOrientation }}>
      {children}
    </ReactLenis>
  );
};

SmoothScroll.propTypes = {
  children: PropTypes.element,
};

export default SmoothScroll;
