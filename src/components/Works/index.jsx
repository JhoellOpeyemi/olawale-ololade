import { useRef, useContext } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./works.css";

import { data } from "../../data";
import { worksReveal } from "./utils";
import DesktopWork from "./DesktopWork";
import MobileWork from "./MobileWork";

import { WorksContext } from "../../context";
import AnimatedLayout from "../AnimatedLayout";

gsap.registerPlugin(useGSAP);

const Works = () => {
  const { mobile } = useContext(WorksContext);

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
    <AnimatedLayout>
      <div className="works-section" ref={workRef} id="work">
        <div className="works-container">
          {mobile ? (
            <>
              {data.map((work, index) => {
                return (
                  <MobileWork
                    work={work}
                    key={index}
                    index={index}
                    data={data}
                  />
                );
              })}
            </>
          ) : (
            <>
              {data.map((work, index) => {
                return (
                  <DesktopWork
                    work={work}
                    key={index}
                    index={index}
                    data={data}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </AnimatedLayout>
  );
};

export default Works;
