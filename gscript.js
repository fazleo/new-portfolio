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

// GSAP Animations for Publications Section
gsap.from("#publications .publication-card", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#publications",
    start: "top center",
    toggleActions: "play none none none", // Ensure animation plays only once
    debug: true, // Enable debugging
  },
});
