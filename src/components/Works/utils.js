import gsap from "gsap";

export const worksData = [
  {
    title: "Realms",
    src: "/assets/realms/realms-cover.jpg",
    pictures: 8,
  },
  {
    title: "Portraits",
    src: "/assets/portraits/portraits-cover.jpg",
    pictures: 12,
  },
  {
    title: "Painterly",
    src: "/assets/painterly/painterly-cover.jpg",
    pictures: 7,
  },
  {
    title: "Graduation",
    src: "/assets/grad/graduation-cover.jpg",
    pictures: 14,
  },
  {
    title: "Mobile",
    src: "/assets/mobile/mobile-photo-cover.jpg",
    pictures: 4,
  },
  {
    title: "Clients",
    src: "/assets/clients/clients-cover.jpg",
    pictures: 14,
  },
  {
    title: "Events",
    src: "/assets/events/events-cover.jpg",
    pictures: 5,
  },
];

export const worksReveal = (
  tl,
  ref,
  workWrappers,
  workTitles,
  pictureNumbers
) => {
  gsap.set(".work-wrapper:not(:first-child)", {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  });

  tl.current = gsap
    .timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "+=4500vh",
        pin: true,
        pinSpacing: true,
        scrub: true,
      },
    })
    .to(workWrappers, {
      clipPath: "polygon(0% 0%, 100% 0%, 1000% 100%, 0% 100%)",
      stagger: 2,
      duration: 1.5,
      ease: "power1.in",
    })
    .to(
      workTitles,
      {
        opacity: 1,
        duration: 0.75,
        stagger: 2,
      },
      "<=1"
    )
    .to(
      pictureNumbers,
      {
        opacity: 1,
        duration: 0.75,
        stagger: 2,
      },
      "<"
    );
};
