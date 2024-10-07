import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./works.css";

import { data } from "../../data";
import { worksReveal } from "./utils";
import { WorksContext } from "../../context";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Works = () => {
  const [mobile] = useState(window.innerWidth > 768 ? false : true);

  const { setSelected } = useContext(WorksContext);

  const workRef = useRef();
  const tl = useRef();

  useGSAP(() => {
    const workWrappers = gsap.utils.toArray(".work-wrapper:not(:first-child)");
    const workTitles = gsap.utils.toArray(
      ".work-wrapper:not(:first-child) .work-title"
    );
    const pictureNumbers = gsap.utils.toArray(
      ".work-wrapper:not(:first-child) .work-images-number"
    );

    worksReveal(tl, workRef, workWrappers, workTitles, pictureNumbers);
  }, [{ scope: workRef.current }]);

  return (
    <div className="works-section" ref={workRef} id="work">
      <div className="works-container">
        {mobile ? (
          <>
            {data.map((work, index) => {
              return (
                <div className="work-wrapper" key={index}>
                  <Link to={work.slug} className="work-image-wrapper">
                    <img src={work.src} alt="" />
                    <div className="overlay" />
                  </Link>

                  <div className="title-n-number">
                    <Link to={work.slug} className="work-title work-text">
                      {work.title}
                    </Link>
                    <Link
                      to={work.slug}
                      className="work-images-number work-text"
                    >
                      {work.number} Pictures
                    </Link>
                  </div>

                  <p className="progress">
                    0{index + 1} / 0{data.length}
                  </p>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {data.map((work, index) => {
              return (
                <div className="work-wrapper" key={index}>
                  <div className="title-n-progress">
                    <Link
                      to={work.slug}
                      className="work-title work-text"
                      onClick={() => setSelected(work)}
                    >
                      {console.log(work)}
                      <span>{work.title}</span>
                    </Link>
                    <p className="progress">
                      0{index + 1} / 0{data.length}
                    </p>
                  </div>
                  <Link
                    to={work.slug}
                    className="work-image-wrapper"
                    onClick={() => setSelected(work)}
                  >
                    <img src={work.src} alt="" />
                    <div className="overlay" />
                  </Link>
                  <Link
                    to={work.slug}
                    className="work-images-number work-text"
                    onClick={() => setSelected(work)}
                  >
                    {work.number} Pictures
                  </Link>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Works;
