// slider utils
import gsap from "gsap";

export const sliderReveal = (tl, images, clickedIndex) => {
  tl.current = gsap.timeline({ delay: clickedIndex * 0.2 }).to(images, {
    clipPath: "polygon(0% 0%, 100% 0%, 1000% 100%, 0% 100%)",
    stagger: 0.05,
    duration: 1,
    ease: "power4.inOut",
  });
};
