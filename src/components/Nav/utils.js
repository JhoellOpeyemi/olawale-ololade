import gsap from "gsap";

const timeline = (visible, hidden, state) => {
  const tl = gsap.timeline();

  if (state == "hover") {
    tl.to(visible, {
      y: "-100%",
      duration: 0.2,
      stagger: 0.02,
    }).to(
      hidden,
      {
        y: "-100%",
        duration: 0.2,
        stagger: 0.02,
      },
      "<"
    );
  } else {
    tl.to(hidden, {
      y: "0",
      duration: 0.2,
      stagger: 0.02,
    }).to(
      visible,
      {
        y: "0",
        duration: 0.2,
        stagger: 0.02,
      },
      "<"
    );
  }
};

export const handleHover = (e) => {
  const visible = gsap.utils.toArray(
    e.target.querySelectorAll(".visible span")
  );
  const hidden = gsap.utils.toArray(e.target.querySelectorAll(".hidden span"));

  timeline(visible, hidden, "hover");
};

export const handleLeave = (e) => {
  const visible = gsap.utils.toArray(
    e.target.querySelectorAll(".visible span")
  );
  const hidden = gsap.utils.toArray(e.target.querySelectorAll(".hidden span"));

  timeline(visible, hidden, "leave");
};
