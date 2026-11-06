import Lenis from "lenis";
import "lenis/dist/lenis.css";

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

export function lockScroll(locked) {
  if (!lenis) return;
  if (locked) lenis.stop();
  else lenis.start();
}
