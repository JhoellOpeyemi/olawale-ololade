import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timeline = (visible, hidden, state) => {
  const tl = gsap.timeline();

  if (state == "hover") {
    tl.to(visible, {
      y: "-100%",
      duration: 0.15,
      stagger: 0.01,
    }).to(
      hidden,
      {
        y: "-100%",
        duration: 0.15,
        stagger: 0.01,
      },
      "<"
    );
  } else {
    tl.to(hidden, {
      y: "0",
      duration: 0.15,
      stagger: 0.01,
    }).to(
      visible,
      {
        y: "0",
        duration: 0.15,
        stagger: 0.01,
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

export const horizontalScroll = (container) => {
  const getScrollAmount = () => {
    const containerWidth = container.current.offsetWidth;
    console.log(container.current.offsetWidth);
    return -(containerWidth - window.innerWidth);
  };

  const tween = gsap.to(container.current, {
    x: getScrollAmount,
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: container.current,
    start: "top top",
    end: () => `+${getScrollAmount()} `,
    pin: true,
    pinSpacing: true,
    animation: tween,
    scrub: 2.4,
    markers: true,
    invalidateOnRefresh: true,
  });
};
