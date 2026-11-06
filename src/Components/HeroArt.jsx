import { useRef, useState } from "react";
import { motion } from "framer-motion";

const INKS = ["tomato", "cobalt", "mustard", "leaf", "plum", "ink"];
const ink = (name) => `rgb(var(--${name}))`;

const PIECES = [
  {
    id: "quarter",
    box: [40, 230, 190, 190],
    color: "mustard",
    drift: "drift-a",
    paint: (c) => <path d="M0 190 V0 A190 190 0 0 1 190 190 Z" style={{ fill: c }} />,
  },
  {
    id: "sun",
    box: [144, 54, 236, 236],
    color: "tomato",
    drift: "drift-b",
    paint: (c) => <circle cx="118" cy="118" r="118" style={{ fill: c }} />,
  },
  {
    id: "square",
    box: [276, 282, 96, 96],
    color: "cobalt",
    drift: "drift-b",
    paint: (c) => <rect width="96" height="96" style={{ fill: c }} />,
  },
  {
    id: "dot",
    box: [92, 148, 40, 40],
    color: "plum",
    drift: "drift-a",
    paint: (c) => <circle cx="20" cy="20" r="20" style={{ fill: c }} />,
  },
  {
    id: "zigzag",
    box: [30, 48, 164, 50],
    color: "leaf",
    drift: "drift-a",
    paint: (c) => (
      <polyline
        points="6,44 44,6 82,44 120,6 158,44"
        fill="none"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ stroke: c }}
      />
    ),
  },
  {
    id: "ring",
    box: [340, 32, 64, 64],
    color: "ink",
    drift: "drift-c",
    paint: (c) => (
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="none"
        strokeWidth="3"
        strokeDasharray="6 7"
        style={{ stroke: c }}
      />
    ),
  },
  {
    id: "dots",
    box: [181, 323, 66, 36],
    color: "ink",
    drift: "",
    paint: (c) => (
      <g style={{ fill: c }}>
        <circle cx="33" cy="7" r="7" />
        <circle cx="59" cy="29" r="7" />
        <circle cx="7" cy="29" r="7" />
      </g>
    ),
  },
];

const W = 420;
const H = 440;
const pct = (v, of) => `${(v / of) * 100}%`;

const Piece = ({ piece, bounds, canDrag, onPlay }) => {
  const [colorIdx, setColorIdx] = useState(INKS.indexOf(piece.color));
  const dragged = useRef(false);
  const [x, y, w, h] = piece.box;
  const color = ink(INKS[colorIdx]);

  return (
    <motion.div
      data-cursor
      drag={canDrag}
      dragConstraints={bounds}
      dragElastic={0.25}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 18 }}
      whileHover={{ scale: 1.04 }}
      whileDrag={{ scale: 1.08, zIndex: 10 }}
      onTapStart={() => {
        dragged.current = false;
      }}
      onDragStart={() => {
        dragged.current = true;
        onPlay();
      }}
      onTap={() => {
        if (dragged.current) return;
        setColorIdx((i) => (i + 1) % INKS.length);
        onPlay();
      }}
      className={`absolute ${
        canDrag ? "cursor-grab touch-none active:cursor-grabbing" : "cursor-pointer"
      }`}
      style={{
        left: pct(x, W),
        top: pct(y, H),
        width: pct(w, W),
        height: pct(h, H),
        "--c": color,
        rotate: piece.id === "square" ? 12 : 0,
      }}
    >
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className={`h-full w-full overflow-visible ${piece.drift}`}
      >
        {piece.paint(color)}
      </svg>
    </motion.div>
  );
};

const HeroArt = ({ compact = false }) => {
  const bounds = useRef(null);
  const [round, setRound] = useState(0);
  const [played, setPlayed] = useState(false);

  return (
    <div
      className={
        compact
          ? "mx-auto mt-14 w-full max-w-[300px] lg:hidden"
          : "absolute right-0 top-1/2 hidden w-[32vw] max-w-[440px] -translate-y-1/2 lg:block"
      }
    >
      <div
        ref={bounds}
        className="relative w-full select-none"
        style={{ aspectRatio: `${W} / ${H}` }}
      >
        {PIECES.map((p) => (
          <Piece
            key={`${p.id}-${round}`}
            piece={p}
            bounds={bounds}
            canDrag={!compact}
            onPlay={() => setPlayed(true)}
          />
        ))}
      </div>
      <p
        className={`mt-6 flex items-center gap-3 font-mono text-xs text-ink-muted ${
          compact ? "justify-center" : "justify-end"
        }`}
      >
        <span>
          {compact ? "tap a shape to recolour" : "drag the shapes · tap one to recolour"}
        </span>
        {played && (
          <button
            type="button"
            onClick={() => {
              setRound((r) => r + 1);
              setPlayed(false);
            }}
            className="text-ink underline decoration-tomato decoration-2 underline-offset-4 hover:text-tomato"
          >
            reset
          </button>
        )}
      </p>
    </div>
  );
};

export default HeroArt;
