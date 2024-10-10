// gallery utils
import gsap from "gsap";

export const galleryReveal = (tl, images) => {
  tl.current = gsap
    .timeline({ delay: 1 })
    .to(".gallery-text", { opacity: 1 })
    .to(
      images,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 1000% 100%, 0% 100%)",
        stagger: 0.05,
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.5"
    )
    .to(".other-works-container", {
      opacity: 1,
    });
};
