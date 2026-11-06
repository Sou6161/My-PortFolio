import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SECTION_COLORS = {
  hero: "rgb(var(--tomato))",
  about: "rgb(var(--tomato))",
  experience: "rgb(var(--cobalt))",
  projects: "rgb(var(--leaf))",
  skills: "rgb(var(--plum))",
  education: "rgb(var(--ochre))",
  contact: "rgb(var(--tomato))",
};
const FALLBACK = "rgb(var(--ink))";
const BURST = ["rgb(var(--tomato))", "rgb(var(--cobalt))", "rgb(var(--mustard))", "rgb(var(--leaf))", "rgb(var(--plum))", "rgb(var(--tomato))"];
const TRAIL = [
  { color: "rgb(var(--mustard))", size: 7, stiffness: 300 },
  { color: "rgb(var(--cobalt))", size: 6, stiffness: 190 },
  { color: "rgb(var(--leaf))", size: 5, stiffness: 120 },
];
const ON_FILL = "rgb(var(--mustard))";
const tint = (color) => color.replace(/\)\)$/, ") / 0.15)");

const colorFor = (el) => {
  const bg = getComputedStyle(el).backgroundColor;
  if (el.matches("a, button") && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
    return ON_FILL;
  }
  const custom = getComputedStyle(el).getPropertyValue("--c").trim();
  if (custom) return custom;
  const section = el.closest("section, footer");
  return SECTION_COLORS[section?.id] || FALLBACK;
};

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [color, setColor] = useState(FALLBACK);
  const [bursts, setBursts] = useState([]);
  const burstId = useRef(0);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 });
  const t0x = useSpring(x, { stiffness: TRAIL[0].stiffness, damping: 22 });
  const t0y = useSpring(y, { stiffness: TRAIL[0].stiffness, damping: 22 });
  const t1x = useSpring(x, { stiffness: TRAIL[1].stiffness, damping: 22 });
  const t1y = useSpring(y, { stiffness: TRAIL[1].stiffness, damping: 22 });
  const t2x = useSpring(x, { stiffness: TRAIL[2].stiffness, damping: 22 });
  const t2y = useSpring(y, { stiffness: TRAIL[2].stiffness, damping: 22 });
  const trail = [
    [t0x, t0y],
    [t1x, t1y],
    [t2x, t2y],
  ];

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(mql.matches);
    update();
    mql.addEventListener?.("change", update);
    return () => mql.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("has-cursor");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e) => {
      const target = e.target.closest?.("a, button, [role='button'], [data-cursor]");
      setHovering(Boolean(target));
      setColor(colorFor(target || e.target));
    };
    const onDown = (e) => {
      setPressed(true);
      if (reduceMotion) return;
      const id = ++burstId.current;
      setBursts((b) => [...b, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setBursts((b) => b.filter((p) => p.id !== id)), 650);
    };
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      root.classList.remove("has-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const ringScale = pressed ? 0.75 : hovering ? 1.9 : 1;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      {TRAIL.map((t, i) => (
        <motion.div
          key={t.color}
          className="absolute left-0 top-0 rounded-full"
          style={{
            x: trail[i][0],
            y: trail[i][1],
            translateX: "-50%",
            translateY: "-50%",
            width: t.size,
            height: t.size,
            backgroundColor: t.color,
          }}
          animate={{ opacity: visible && !hovering ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      ))}

      <motion.div
        className="absolute left-0 top-0 h-10 w-10 rounded-full border-2"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: color,
          backgroundColor:
            hovering && color !== ON_FILL ? tint(color) : "transparent",
        }}
        animate={{ scale: ringScale, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      />

      <motion.div
        className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: color,
        }}
        animate={{ scale: hovering ? 0.5 : 1, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />

      {bursts.map((b) =>
        BURST.map((c, i) => {
          const angle = (i / BURST.length) * Math.PI * 2 + b.id;
          return (
            <span
              key={`${b.id}-${i}`}
              className="absolute h-1.5 w-1.5 rounded-full"
              style={{
                left: b.x,
                top: b.y,
                backgroundColor: c,
                "--x": `${Math.cos(angle) * 34}px`,
                "--y": `${Math.sin(angle) * 34}px`,
                animation: "pop-out 0.6s cubic-bezier(0.2, 0.7, 0.3, 1) forwards",
              }}
            />
          );
        }),
      )}
    </div>
  );
};

export default CustomCursor;
