import { useState, useRef, useEffect, useContext } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { percentageArray, imagesArray, loadingAnimation } from "./utils";
import "./loader.css";
import { WorksContext } from "../../context";

gsap.registerPlugin(useGSAP);

const Loader = () => {
  const { setLoader } = useContext(WorksContext);
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
          setTimeout(resolve, 600);
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

      <div className="loader-images-container" aria-hidden="true">
        {imagesArray.map((image, index) => (
          <div className="loader-image-wrapper" key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>

      <div className="page-revealer" />
    </div>
  );
};

export default Loader;
