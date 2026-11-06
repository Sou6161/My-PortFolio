import { useEffect, useRef, useState } from "react";

// "180+" counts up from 0 to 180 (keeping the "+") the first time it is
// scrolled into view. Reduced-motion users just get the final value.
const CountUp = ({ value, duration = 1400 }) => {
  const [, num, suffix] = value.match(/^(\d+)(.*)$/) || [null, null, value];
  const target = Number(num);
  const ref = useRef(null);
  const [shown, setShown] = useState(num === null ? value : "0" + suffix);

  useEffect(() => {
    if (num === null) return;
    const el = ref.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setShown(value);
      return;
    }

    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setShown(Math.round(target * eased) + suffix);
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.6 });

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, num, target, suffix, duration]);

  // Screen readers get the real figure, not the ticking one.
  return (
    <>
      <span ref={ref} aria-hidden="true">
        {shown}
      </span>
      <span className="sr-only">{value}</span>
    </>
  );
};

export default CountUp;
