import gsap from "gsap";

export const aboutReveal = (tl, ref) => {
  tl.current = gsap
    .timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "+=1500vh",
        markers: true,
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    })
    .to(
      ".text-1",
      {
        opacity: 0,
        duration: 1,
      },
      "+=2"
    )
    .to(
      ".text-2",
      {
        opacity: 1,
        duration: 1,
      },
      "+=0.5"
    )
    .to(
      ".text-2",
      {
        opacity: 0,
        duration: 1,
      },
      "+=2"
    )
    .to(
      ".text-3",
      {
        opacity: 1,
        duration: 1,
      },
      "+=0.5"
    );
};

export const mobileReveal = () => {
  const texts = gsap.utils.toArray(".about-text");

  texts.forEach((text) => {
    gsap.to(text, {
      opacity: 1,
      scrollTrigger: {
        trigger: text,
        start: "clamp(top 85%)",
      },
    });
  });
};
