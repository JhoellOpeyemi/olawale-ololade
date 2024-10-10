import { useState } from "react";

import { useLenis } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

import "./gallery.css";
import { useContext, useEffect, useRef } from "react";
import { WorksContext } from "../../context";
import Footer from "../../components/Footer";
import AnimatedLayout from "../../components/AnimatedLayout";
import SplitText from "../../components/SplitText";
import { handleHover, handleLeave } from "../../utils";
import { data } from "../../data";
import { galleryReveal } from "./utils";

gsap.registerPlugin(useGSAP);

const Gallery = () => {
  const {
    selected,
    setSelected,
    setScrollOrientation,
    setClickedIndex,
    mobile,
    indexOfSelected,
    setIndexOfSelected,
  } = useContext(WorksContext);

  const [previousWork] = useState(data[indexOfSelected - 1]);
  const [nextWork] = useState(data[indexOfSelected + 1]);

  const galleryContainerRef = useRef();
  const tl = useRef();

  const lenis = useLenis();

  const openSlider = (index) => {
    if (mobile === false) {
      setScrollOrientation("horizontal");
    } else {
      setScrollOrientation("vertical");
    }
    setClickedIndex(index);
  };

  const handleClick = (work, index) => {
    setSelected(work);
    setIndexOfSelected(index);
  };

  useEffect(() => {
    setTimeout(() => {
      lenis?.scrollTo(0, { immediate: true });
    }, 400);
  });

  useGSAP(() => {
    const images = gsap.utils.toArray(".gallery-image-wrapper");

    galleryReveal(tl, images);
  }, [{ scope: galleryContainerRef.current }]);

  return (
    <AnimatedLayout>
      {selected && (
        <div className="gallery-page" ref={galleryContainerRef}>
          <div className="gallery-container">
            <Link
              to="/"
              className="back nav-link"
              onMouseOver={(e) => handleHover(e)}
              onMouseLeave={(e) => handleLeave(e)}
            >
              <SplitText text="Back" />
            </Link>
            <div className="gallery-wrapper">
              <div className="gallery-text">
                <h2>{selected.title}</h2>
                <p className="story">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit illo doloremque sed! Eaque at blanditiis, impedit
                  corrupti expedita mollitia culpa ea necessitatibus fugiat
                  totam ullam sit cum eius nisi, aut nobis minus incidunt quos
                  neque dolorum aperiam natus ipsum! Quasi dolore sequi fuga
                  illo debitis saepe ad quaerat ipsa?0
                </p>
              </div>

              <div className="gallery-images-container">
                {selected?.pictures.map((image, index) => (
                  <Link
                    to="slider"
                    className="gallery-image-wrapper"
                    key={index}
                    onClick={() => openSlider(index)}
                  >
                    <img src={image} alt="" className="gallery-image" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="other-works-container">
            <div className="previous-work other-work">
              {previousWork !== undefined && (
                <>
                  <Link
                    to={previousWork.slug}
                    onClick={() =>
                      handleClick(previousWork, indexOfSelected - 1)
                    }
                    className="other-works-image-wrapper"
                  >
                    <img src={previousWork.src} alt="" />
                  </Link>
                  <Link
                    to={previousWork.slug}
                    onClick={() =>
                      handleClick(previousWork, indexOfSelected - 1)
                    }
                    className="other-works-text"
                  >
                    <h3>{previousWork.title}</h3>
                    <p>{previousWork.number} Pictures</p>
                  </Link>
                </>
              )}
            </div>

            <div className="next-work other-work">
              {nextWork !== undefined && (
                <>
                  <Link
                    className="other-works-image-wrapper"
                    to={nextWork.slug}
                    onClick={() => handleClick(nextWork, indexOfSelected + 1)}
                  >
                    <img src={nextWork.src} alt="" />
                  </Link>
                  <Link
                    className="other-works-text"
                    to={nextWork.slug}
                    onClick={() => handleClick(nextWork, indexOfSelected + 1)}
                  >
                    <h3>{nextWork.title}</h3>
                    <p>{nextWork.number} Pictures</p>
                  </Link>
                </>
              )}
            </div>
          </div>

          <Footer />
        </div>
      )}
    </AnimatedLayout>
  );
};

export default Gallery;
