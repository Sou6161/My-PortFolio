import Lenis from "lenis";
import "lenis/dist/lenis.css";

// One Lenis instance for the whole page. Wheel/trackpad scrolling gets eased;
// touch keeps the phone's native scrolling. Anything that scrolls in code
// (nav links, back-to-top) or needs to freeze the page (lightbox) goes through
// the helpers below so it works the same with or without Lenis.
let lenis = null;

export function startSmoothScroll() {
  if (lenis) return () => {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }
  lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4) });
  let frame;
  const raf = (time) => {
    lenis.raf(time);
    frame = requestAnimationFrame(raf);
  };
  frame = requestAnimationFrame(raf);
  return () => {
    cancelAnimationFrame(frame);
    lenis.destroy();
    lenis = null;
  };
}

// Scroll to a section. The gap for the fixed navbar comes from
// `scroll-padding-top` on <html> (index.css), which both Lenis and the native
// fallback respect, so there's no extra offset here.
export function scrollToId(id) {
  const target = document.getElementById(id);
  if (!target) return;
  if (lenis) lenis.scrollTo(target);
  else target.scrollIntoView({ behavior: "smooth" });
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

// Pause/resume page scrolling (e.g. while the lightbox is open).
export function lockScroll(locked) {
  if (!lenis) return;
  if (locked) lenis.stop();
  else lenis.start();
}
