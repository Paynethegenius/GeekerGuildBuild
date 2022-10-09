import gsap from "gsap";

export const animateModalEntry = () => {
  let entryTimeline = gsap.timeline();
  entryTimeline.fromTo(
    ".homepageModal",
    { x: "-100%" },
    { duration: 0.5, x: 0, ease: "back.out(1.7)" }
  );
  entryTimeline.fromTo(
    ".homepageModal__Welcome>h1",
    { opacity: 0 },
    { duration: 1, opacity: 1 }
  );
  entryTimeline.fromTo(
    ".homepageModal__Welcome>p",
    { opacity: 0 },
    { duration: 1, opacity: 1 }
  );
  entryTimeline.fromTo(
    ".homepageModal__Enter",
    { opacity: 0 },
    { duration: 1, opacity: 1 }
  );
  entryTimeline.fromTo(
    ".homepageModal__body",
    { border: "0px solid black" },
    { duration: 1, border: "10px solid black" }
  );
};

export const animateModalExit = (revealFunc) => {
  let exitTimeline = gsap.timeline();
  exitTimeline.fromTo(
    ".homepageModal",
    { x: 0 },
    { duration: 0.5, x: "+100%", ease: "back.out(1.7)" },
    { onFinish: revealFunc }
  );
};

export const animateHomePage = () => {
  let homepageEntry = gsap.timeline();
  homepageEntry.fromTo(
    ".homepage__body__main",
    { width: "60%" },
    { delay: 7, duration: 1, width: "50%", ease: "back.out(1.7)" }
  );
  homepageEntry.fromTo(
    ".homepage__body__text",
    { opacity: 0, y: "-5" },
    { duration: 2, y: 0, opacity: 1, ease: "back.out(1.7)" },
    "-=1"
  );
  homepageEntry.fromTo(
    ".homepage__footer",
    { opacity: 0, scaleY: 0, display: "none" },
    {
      duration: 1,
      y: 0,
      opacity: 1,
      scaleY: 1,
      display: "flex",
      ease: "back.out(3)",
    },
    "-=2"
  );
  homepageEntry.fromTo(
    ".homepage__footer__button",
    { opacity: 0 },
    { duration: 1, opacity: 1, ease: "ease in" },
    "-=2"
  );
};
