import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./works.css";

import { worksData, worksReveal } from "./utils";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Works = () => {
  const [mobile] = useState(window.innerWidth > 768 ? false : true);
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
    <div className="works-section" ref={workRef}>
      <div className="works-container">
        {mobile ? (
          <>
            {worksData.map((work, index) => {
              return (
                <div className="work-wrapper" key={index}>
                  <div className="work-image-wrapper">
                    <img src={work.src} alt="" />
                    <div className="overlay" />
                  </div>

                  <div className="title-n-number">
                    <h2 className="work-title work-text">{work.title}</h2>
                    <h3 className="work-images-number work-text">
                      {work.pictures} Pictures
                    </h3>
                  </div>

                  <p className="progress">
                    0{index + 1} / 0{worksData.length}
                  </p>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {worksData.map((work, index) => {
              return (
                <div className="work-wrapper" key={index}>
                  <div className="title-n-progress">
                    <h2 className="work-title work-text">{work.title}</h2>
                    <p className="progress">
                      0{index + 1} / 0{worksData.length}
                    </p>
                  </div>
                  <div className="work-image-wrapper">
                    <img src={work.src} alt="" />
                    <div className="overlay" />
                  </div>
                  <h3 className="work-images-number work-text">
                    {work.pictures} Pictures
                  </h3>
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
