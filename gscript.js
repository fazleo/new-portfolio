gsap.registerPlugin(ScrollTrigger);

// Add animations for each section
gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top center",
    },
  });
});

gsap.from("#home .container", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#home",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});
