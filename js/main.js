/* ══════════════════════════════════════════════════════════════
   CLIPPSTER — landing interactions
   Vanilla JS · IntersectionObserver reveals · no libraries
   ══════════════════════════════════════════════════════════════ */
(() => {
  "use strict";

  /* ── App Store links ─────────────────────────────────── */
  const url = window.APP_STORE_URL || "#";
  document.querySelectorAll("[data-download]").forEach((a) => {
    a.setAttribute("href", url);
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  /* ?snap — verification mode: no reveals, instant anchor jumps (screenshots) */
  const snapMode = new URLSearchParams(location.search).has("snap");
  if (snapMode) {
    document.documentElement.style.scrollBehavior = "auto";
    document.documentElement.classList.add("no-hero-black"); /* keep full-page captures readable */
    const hero = document.querySelector(".hero");
    if (hero) hero.style.minHeight = "880px"; /* compact hero for full-page capture */
  }

  /* ── black-hero scroll fade ────────────────────────────
     Primary path is pure CSS (animation-timeline: scroll).
     Fallback: toggle a class when the hero leaves the viewport. */
  const heroEl = document.querySelector(".hero");
  if (heroEl && !CSS.supports("animation-timeline: scroll()")) {
    const heroIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          document.body.classList.toggle("past-hero", entry.intersectionRatio < 0.25);
        });
      },
      { threshold: [0, 0.25, 0.5, 1] }
    );
    heroIO.observe(heroEl);
  }


  /* ── nav scroll state (skipped on pages with a permanently solid nav) ── */
  const nav = document.getElementById("nav");
  if (!nav.hasAttribute("data-solid")) {
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* hero video: plays once and holds the last frame (no loop);
     reduced-motion users get the static poster instead */
  const heroVideo = document.querySelector(".hero-video");
  if (heroVideo && reduceMotion) {
    heroVideo.removeAttribute("autoplay");
    heroVideo.pause();
  }

  if (reduceMotion || snapMode) return; /* everything below is motion; content stays visible */

  /* ── hero load choreography ──────────────────────────── */
  const heroBits = document.querySelectorAll("[data-hero]");
  document.body.classList.add("hero-load");
  heroBits.forEach((el) => el.classList.add("will-hero"));
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      heroBits.forEach((el) => el.classList.add("hero-in"));
    });
  });

  /* ── scroll reveals (varied per element kind) ────────── */
  const revealText = document.querySelectorAll("[data-reveal]");
  const revealMedia = document.querySelectorAll("[data-reveal-media]");

  revealText.forEach((el) => el.classList.add("will-reveal"));
  revealMedia.forEach((el) => el.classList.add("will-reveal-media"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal-in");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
  );

  revealText.forEach((el) => io.observe(el));
  revealMedia.forEach((el) => io.observe(el));

  /* ── keycap press moment ─────────────────────────────── */
  const trio = document.querySelector(".keycap-trio");
  if (trio) {
    const pressIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          trio.classList.add("pressed");
          pressIO.disconnect();
        });
      },
      { threshold: 0.6 }
    );
    pressIO.observe(trio);
  }
})();
