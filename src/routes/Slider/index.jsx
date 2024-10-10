import { useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import gsap from "gsap";

import { handleHover, handleLeave } from "../../utils";
import { WorksContext } from "../../context";
import AnimatedLayout from "../../components/AnimatedLayout";
import SplitText from "../../components/SplitText";

import "./slider.css";
import { sliderReveal } from "./utils";

gsap.registerPlugin(useGSAP);

const Slider = () => {
  const { selected, setScrollOrientation, clickedIndex, mobile } =
    useContext(WorksContext);

  const navigate = useNavigate();
  const lenis = useLenis();

  const imageSliderRef = useRef();
  const tl = useRef();

  const closeSlider = () => {
    setScrollOrientation("vertical");
    imageSliderRef.current.style.opacity = 0;

    setTimeout(() => {
      navigate(-1);
    }, 400);
  };

  useEffect(() => {
    setTimeout(() => {
      lenis?.scrollTo(0, { immediate: true });
    }, 400);
  });

  useEffect(() => {
    const images = gsap.utils.toArray(".slider-image-wrapper");
    const pos = images[clickedIndex]?.getBoundingClientRect();

    if (mobile == false) {
      setTimeout(() => {
        lenis?.scrollTo(pos.left - 100, {
          lock: true,
          duration: `${clickedIndex + 1}` * 0.25,
        });
      }, 800);
    }
    if (mobile == true) {
      setTimeout(() => {
        lenis?.scrollTo(pos.top - 90, {
          lock: true,
          duration: `${clickedIndex + 1}` * 0.5,
        });
      }, 800);
    }
  });

  useGSAP(() => {
    const images = gsap.utils.toArray(".slider-image-wrapper");

    sliderReveal(tl, images, clickedIndex);
  }, [{ scope: imageSliderRef.current }]);

  return (
    <AnimatedLayout>
      {selected && (
        <div className="image-slider" ref={imageSliderRef}>
          <Link
            className="close-btn nav-link"
            onClick={closeSlider}
            onMouseOver={(e) => handleHover(e)}
            onMouseLeave={(e) => handleLeave(e)}
          >
            <SplitText text="Close" />
          </Link>

          <div className="slider-container">
            {selected?.pictures.map((image, index) => (
              <div className="slider-image-wrapper" key={index}>
                <img src={image} alt="" className="slider-image" />
              </div>
            ))}
          </div>
        </div>
      )}
    </AnimatedLayout>
  );
};

export default Slider;
