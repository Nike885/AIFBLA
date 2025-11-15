gsap.registerPlugin(ScrollTrigger);

// INTRO OVERLAY + NAV + HERO
window.addEventListener("load", () => {
  const introOverlay = document.querySelector(".intro-overlay");
  const delay = introOverlay ? 1.1 : 0;
  
  if (introOverlay) {
    const tl = gsap.timeline();

    tl.from(".intro-logo", {
      opacity: 0,
      y: 20,
      scale: 0.9,
      duration: 0.6,
      ease: "power2.out",
    })
      .from(
        ".intro-tagline",
        { opacity: 0, y: 10, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      )
      .to(".intro-overlay", {
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          if (introOverlay) introOverlay.style.display = "none";
        },
      });
  }

  const heroTl = gsap.timeline({ delay: delay });

  heroTl
    .from(".nav-logo", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power2.out",
    })
    .from(
      ".nav-links a",
      {
        opacity: 0,
        y: -10,
        stagger: 0.08,
        duration: 0.45,
        ease: "power2.out",
      },
      "-=0.3"
    )
    .from(
      ".hero-title",
      {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.2"
    )
    .from(
      ".hero-subtitle",
      {
        opacity: 0,
        y: 15,
        duration: 0.45,
        ease: "power2.out",
      },
      "-=0.3"
    )
    .from(
      ".hero-actions .btn",
      {
        opacity: 0,
        y: 10,
        stagger: 0.12,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.25"
    )
    .from(
      ".stat-pill",
      {
        opacity: 0,
        y: 10,
        stagger: 0.1,
        duration: 0.35,
        ease: "power2.out",
      },
      "-=0.3"
    )
    .from(
      ".ai-node-grid",
      {
        opacity: 0,
        x: 40,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.6"
    )
    .from(
      ".ai-node-grid .node",
      {
        opacity: 0,
        scale: 0.4,
        stagger: 0.08,
        duration: 0.4,
        ease: "back.out(2)",
      },
      "-=0.4"
    );
  
  // Animate hero elements on other pages too
  if (!introOverlay) {
    heroTl
      .from(".hero-title", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
      })
      .from(
        ".hero-subtitle",
        {
          opacity: 0,
          y: 15,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
      );
  }
});

// FLOATING ORBS
gsap.to(".orb-1", {
  y: 40,
  x: 20,
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".orb-2", {
  y: -40,
  x: -25,
  duration: 10,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".orb-3", {
  y: 30,
  x: -20,
  duration: 9,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

// NODE pulsing
gsap.to(".ai-node-grid .node", {
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  boxShadow: "0 0 26px #22d3ee",
  stagger: { each: 0.18, from: "random" },
});

// ScrollTrigger animations
gsap.utils.toArray(".track-card").forEach((card, i) => {
  gsap.to(card, {
    scrollTrigger: { trigger: card, start: "top 80%" },
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: i * 0.05,
    ease: "power2.out",
  });
});

gsap.utils.toArray(".timeline-item").forEach((item, i) => {
  gsap.to(item, {
    scrollTrigger: { trigger: item, start: "top 85%" },
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: i * 0.04,
    ease: "power2.out",
  });
});

gsap.utils.toArray(".metric-card").forEach((item, i) => {
  gsap.to(item, {
    scrollTrigger: { trigger: item, start: "top 85%" },
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: i * 0.04,
    ease: "power2.out",
  });
});

gsap.utils.toArray(".faq-card").forEach((item, i) => {
  gsap.to(item, {
    scrollTrigger: { trigger: item, start: "top 88%" },
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: i * 0.04,
    ease: "power2.out",
  });
});

// Smooth scroll
document.querySelectorAll('.nav-links a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: "smooth",
    });
  });
});
