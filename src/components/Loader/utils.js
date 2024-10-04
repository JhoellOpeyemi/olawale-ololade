import gsap from "gsap";

export const percentageArray = [0, 0, 13, 18, 35, 49, 62, 77, 89, 100];

export const images = {
  row1: [
    "/assets/clients/clients-cover.jpg",
    "/assets/portraits/portraits1.jpg",
    "/assets/grad/graduation-cover.jpg",
  ],
  row2: [
    "/assets/clients/clients13.jpg",
    "/assets/realms/realms3.jpg",
    "/assets/portraits/portraits4.jpg",
  ],
  row3: [
    "/assets/clients/clients7.jpg",
    "/assets/realms/realms7.jpg",
    "/assets/painterly/painterly-lucynder.jpg",
  ],
};

export const loadingAnimation = (tl, setLoader) => {
  tl.current = gsap
    .timeline()
    .to(".loader-percentage", { opacity: 0, duration: 0.3 })
    .to(".row-1 .loader-image", {
      left: 0,
      duration: 2.5,
      stagger: 0.2,
      ease: "power4.inOut",
    })
    .to(
      ".row-2 .loader-image",
      {
        left: 0,
        duration: 2.5,
        stagger: -0.2,
        ease: "power4.inOut",
      },
      "-=3"
    )
    .to(
      ".row-3 .loader-image",
      {
        left: 0,
        duration: 2.5,
        stagger: 0.2,
        ease: "power4.inOut",
      },
      "-=3"
    )
    .to(
      ".loader-container",
      {
        scale: 5,
        duration: 3,
        ease: "power4.inOut",
      },
      "-=1.6"
    )
    .to(
      ".loader-container",
      {
        opacity: 0,
        duration: 1,
      },
      "-=1.3"
    )
    .to(".loader-container", {
      onUpdate: () => setLoader(false),
    });
};
