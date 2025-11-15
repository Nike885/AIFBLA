gsap.registerPlugin(ScrollTrigger);

// PARALLAX ORBS with scroll
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  gsap.to(".orb-1", { y: scrollY * 0.5, duration: 0.1, overwrite: "auto" });
  gsap.to(".orb-2", { y: scrollY * -0.3, duration: 0.1, overwrite: "auto" });
  gsap.to(".orb-3", { y: scrollY * 0.4, duration: 0.1, overwrite: "auto" });
});

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

// CARD HOVER ANIMATIONS
document.querySelectorAll(".track-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      y: -10,
      boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)",
      duration: 0.3,
      ease: "power2.out",
    });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      y: 0,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// METRIC CARDS HOVER
document.querySelectorAll(".metric-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// TIMELINE BUBBLE ANIMATION
gsap.utils.toArray(".timeline-item .bubble").forEach((bubble, i) => {
  gsap.to(bubble, {
    scrollTrigger: {
      trigger: bubble,
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
    scale: 1.2,
    duration: 0.4,
    ease: "back.out(2)",
    delay: i * 0.1,
  });
});

// PROGRESS RING ANIMATION
gsap.to(".progress-ring", {
  scrollTrigger: {
    trigger: ".progress-ring",
    start: "top 75%",
    toggleActions: "play none none reverse",
  },
  duration: 1.5,
  ease: "power2.out",
  onStart: function () {
    const ring = document.querySelector(".progress-ring");
    if (!ring) return;
    ring.style.backgroundImage =
      "conic-gradient(#22d3ee 0deg, #22d3ee 245deg, rgba(34, 211, 238, 0.1) 245deg)";
  },
});

// NODE LINES ANIMATION
const svgLines = document.querySelector(".node-lines");
if (svgLines) {
  gsap.to(".node-lines line", {
    scrollTrigger: {
      trigger: ".ai-node-grid",
      start: "top 60%",
      toggleActions: "play none none reverse",
    },
    strokeDasharray: 200,
    strokeDashoffset: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: "power2.inOut",
  });
}

// BUTTON HOVER GLOW
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)",
      duration: 0.3,
      ease: "power2.out",
    });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      boxShadow: "none",
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// SCROLL REVEAL for sections with scale
gsap.utils.toArray(".section-title").forEach((title) => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 20,
    scale: 0.95,
    duration: 0.6,
    ease: "power2.out",
  });
});

// FAQ CARDS WITH STAGGER
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

// HEADER STICK ON SCROLL
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  if (window.scrollY > 50) {
    gsap.to(nav, {
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  } else {
    gsap.to(nav, {
      boxShadow: "none",
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  }
});
