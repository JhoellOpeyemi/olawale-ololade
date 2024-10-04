import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PropTypes from "prop-types";

import { percentageArray, images, loadingAnimation } from "./utils";
import "./loader.css";

gsap.registerPlugin(useGSAP);

const Loader = ({ setLoader }) => {
  const [percentageText, setPercentageText] = useState(0);
  const [percentageDone, setPercentageDone] = useState(false);

  const loaderRef = useRef();
  const tl = useRef();

  useEffect(() => {
    let promise = Promise.resolve();

    percentageArray.forEach((percent) => {
      promise = promise.then(() => {
        setPercentageText(percent);
        return new Promise((resolve) => {
          setTimeout(resolve, 850);
        });
      });
    });

    promise.then(() => {
      setPercentageDone(true);
    });
  }, []);

  useGSAP(() => {
    if (percentageDone == true) {
      loadingAnimation(tl, setLoader);
    }
  }, [{ dependencies: [percentageDone], scope: loaderRef.current }]);

  return (
    <div className="loader-container" ref={loaderRef}>
      <p className="loader-percentage">{percentageText}%</p>

      <div className="loader-images" aria-hidden="true">
        <div className="row row-1">
          {images.row1.map((src, index) => {
            return (
              <div className="loader-image" key={index}>
                <img src={src} alt="" />
                <div className="loader-image-overlay" />
              </div>
            );
          })}
        </div>

        <div className="row row-2">
          {images.row2.map((src, index) => {
            return (
              <div className="loader-image" key={index}>
                <img src={src} alt="" />
                <div className="loader-image-overlay" />
              </div>
            );
          })}
        </div>

        <div className="row row-3">
          {images.row3.map((src, index) => {
            return (
              <div className="loader-image" key={index}>
                <img src={src} alt="" />
                <div className="loader-image-overlay" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Loader.propTypes = {
  setLoader: PropTypes.func,
};

export default Loader;
