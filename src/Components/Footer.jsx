import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { scrollToTop } from "../lib/scroll";

const WATERMARK = "Sourabh";

// Highly contrasting colours so each letter pops next to its neighbours.
const LETTERS = [
  { ch: "S", color: "rgb(var(--tomato))" },
  { ch: "o", color: "rgb(var(--cobalt))" },
  { ch: "u", color: "rgb(var(--mustard))" },
  { ch: "r", color: "rgb(var(--leaf))" },
  { ch: "a", color: "rgb(var(--plum))" },
  { ch: "b", color: "rgb(var(--tomato))" },
  { ch: "h", color: "rgb(var(--cobalt))" },
];

const formatIndiaTime = () =>
  new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());

const LocalTime = () => {
  const [time, setTime] = useState(formatIndiaTime);
  useEffect(() => {
    const id = setInterval(() => setTime(formatIndiaTime()), 30_000);
    return () => clearInterval(id);
  }, []);
  return <time className="tabular-nums">{time}</time>;
};

const Footer = () => {
  const year = new Date().getFullYear();
  const spotRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  // True on touch / no-hover devices (phones, tablets).
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(hover: none), (pointer: coarse)");
    setIsTouch(mql.matches);
    const onChange = (e) => setIsTouch(e.matches);
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, []);

  const handleSpot = (e) => {
    const el = spotRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  // On touch, a tap on the watermark briefly expands the letters (the same
  // breathe effect mouse users get on hover).
  const handleTap = () => {
    if (!isTouch) return;
    setExpanded(true);
    setTimeout(() => setExpanded(false), 1400);
  };

  // Mask is only applied on hover-capable devices. On touch we drop the mask
  // and show the whole colourful watermark at all times.
  const maskStyle = isTouch
    ? {}
    : {
        WebkitMaskImage:
          "radial-gradient(circle 16vw at var(--mx, 50%) var(--my, 50%), #000 0%, rgba(0,0,0,0.4) 45%, transparent 72%)",
        maskImage:
          "radial-gradient(circle 16vw at var(--mx, 50%) var(--my, 50%), #000 0%, rgba(0,0,0,0.4) 45%, transparent 72%)",
      };

  return (
    <footer className="relative overflow-hidden border-t border-ink/10 bg-paper-dark">
      {/* top row */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 py-10 text-sm">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-ink-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf" />
            </span>
            <span className="text-ink">Available for work</span>
            <span className="text-ink-muted">
              · <LocalTime /> in India
            </span>
          </p>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
          >
            Back to top
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* Watermark — full footer width.
          Desktop: faint base + cursor spotlight reveals per-letter colours.
          Mobile : full colourful watermark by default; tap = breathe. */}
      <div
        ref={spotRef}
        onMouseMove={handleSpot}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onTouchStart={handleTap}
        className="group relative -mb-4 cursor-default select-none overflow-hidden"
        style={{
          letterSpacing: expanded ? "0.12em" : "-0.04em",
          transition:
            "letter-spacing 800ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Faint base — visible on desktop before hover. Hidden on touch
            since the colourful layer below takes over. */}
        {!isTouch && (
          <span
            aria-hidden="true"
            className="block whitespace-nowrap text-center font-display text-[24vw] sm:text-[18vw] font-bold leading-[0.8] text-ink/[0.06] transition-colors duration-500 group-hover:text-ink/[0.1]"
          >
            {WATERMARK}
          </span>
        )}

        {/* Colour layer — per-letter colours.
            Desktop: masked to cursor circle, opacity 0 → 1 on hover.
            Mobile : no mask, full opacity, always visible. */}
        <span
          aria-hidden="true"
          className={`pointer-events-none ${
            isTouch ? "block" : "absolute inset-0 block opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          } whitespace-nowrap text-center font-display text-[24vw] sm:text-[18vw] font-bold leading-[0.8]`}
          style={maskStyle}
        >
          {LETTERS.map((l, i) => (
            <span key={i} style={{ color: l.color }}>
              {l.ch}
            </span>
          ))}
        </span>
      </div>

      {/* bottom row */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-ink/10 py-6 text-xs text-ink-muted">
          <p>© {year} Sourabh Saini · Hand-coded by me</p>
          <p className="font-mono">Thanks for stopping by.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
