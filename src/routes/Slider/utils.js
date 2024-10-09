// slider utils
import gsap from "gsap";

export const sliderReveal = (tl, images) => {
  tl.current = gsap.timeline({ delay: 1 }).to(images, {
    clipPath: "polygon(0% 0%, 100% 0%, 1000% 100%, 0% 100%)",
    stagger: 0.1,
    duration: 1,
    ease: "power4.inOut",
  });
};
