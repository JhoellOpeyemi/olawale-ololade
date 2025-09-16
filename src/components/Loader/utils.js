import gsap from "gsap";

export const percentageArray = [0, 0, 8, 22, 39, 60, 85, 93, 100];

export const images = [
  "/assets/clients/clients-cover.jpg",
  "/assets/portraits/portraits1.jpg",
  "/assets/grad/graduation-cover.jpg",
  "/assets/clients/clients13.jpg",
  "/assets/realms/realms3.jpg",
  "/assets/portraits/portraits4.jpg",
  "/assets/clients/clients7.jpg",
  "/assets/realms/realms7.jpg",
  "/assets/painterly/painterly-lucynder.jpg",
];

export const imagesArray = [
  "/assets/realms/realms1.jpg",
  "/assets/portraits/portraits3.jpg",
  "/assets/painterly/painterly-unknown.jpg",
];

export const loadingAnimation = (tl, setLoader) => {
  tl.current = gsap
    .timeline({ defaults: { ease: "power1.inOut" } })
    .to(".loader-percentage", { opacity: 0, duration: 0.3 })
    .to(
      ".loader-images-container",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
      },
      "+=0.2"
    )
    .to(".loader-image-wrapper", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 0.8,
      stagger: {
        each: 1,
        from: "end",
      },
    })
    .to(
      ".page-revealer",
      {
        clipPath: "polygon(0% 49.5%, 100% 49.5%, 100% 50%, 0% 50%)",
        duration: 0.5,
      },
      "+=0.1"
    )
    .to(
      ".page-revealer",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power3.out",
      },
      "+=0.3"
    )
    .to(
      ".loader-container",
      {
        onUpdate: () => setLoader(false),
      },
      "-=0.15"
    );
};
