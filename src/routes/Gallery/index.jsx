import { useLenis } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

import "./gallery.css";
import { useContext, useEffect, useRef } from "react";
import { WorksContext } from "../../context";
import AnimatedLayout from "../../components/AnimatedLayout";
import { handleHover, handleLeave } from "../../utils";
import { galleryReveal } from "./utils";

gsap.registerPlugin(useGSAP);

const Gallery = () => {
  const { selected, setScrollOrientation, setClickedIndex, mobile } =
    useContext(WorksContext);

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
        <>
          <div className="gallery-container" ref={galleryContainerRef}>
            <Link
              to="/"
              className="back nav-link"
              onMouseOver={(e) => handleHover(e)}
              onMouseLeave={(e) => handleLeave(e)}
            >
              <span className="visible">
                <span>B</span>
                <span>a</span>
                <span>c</span>
                <span>k</span>
              </span>
              <span className="hidden">
                <span>B</span>
                <span>a</span>
                <span>c</span>
                <span>k</span>
              </span>{" "}
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
        </>
      )}
    </AnimatedLayout>
  );
};

export default Gallery;
