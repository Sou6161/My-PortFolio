import { motion, useReducedMotion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiExpo,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiPostgresql,
  SiPrisma,
  SiFirebase,
  SiAppwrite,
  SiVercel,
  SiVite,
  SiGit,
  SiGithub,
  SiJest,
} from "react-icons/si";

// Master skill list for the marquee (icon + recognizable brand accent).
const skills = [
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "React Native", Icon: SiExpo, color: "#E2E8F0" },
  { name: "Redux Toolkit", Icon: SiRedux, color: "#7C8AF7" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "GSAP", Icon: SiGreensock, color: "#88CE02" },
  { name: "Framer Motion", Icon: SiFramer, color: "#0EA5E9" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", Icon: SiExpress, color: "#CBD5E1" },
  { name: "Socket.IO", Icon: SiSocketdotio, color: "#E2E8F0" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", Icon: SiPrisma, color: "#94A3B8" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Appwrite", Icon: SiAppwrite, color: "#E2E8F0" },
  { name: "Vercel", Icon: SiVercel, color: "#E2E8F0" },
  { name: "Vite", Icon: SiVite, color: "#22D3EE" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Jest", Icon: SiJest, color: "#C21325" },
];

// Categorised groups for the bento grid.
const groups = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript (ES6+)", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
    ],
  },
  {
    title: "Frontend & Mobile",
    items: [
      { name: "ReactJS", Icon: SiReact },
      { name: "React Native (Expo)", Icon: SiExpo },
      { name: "Redux Toolkit", Icon: SiRedux },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "Socket.IO", Icon: SiSocketdotio },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Prisma ORM", Icon: SiPrisma },
      { name: "Firebase", Icon: SiFirebase },
    ],
  },
  {
    title: "Cloud & Tooling",
    items: [
      { name: "Vercel", Icon: SiVercel },
      { name: "GitHub", Icon: SiGithub },
      { name: "Vite", Icon: SiVite },
      { name: "Jest", Icon: SiJest },
    ],
  },
];

function MarqueeRow({ data, reverse, reduce }) {
  const track = [...data, ...data];
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex w-max gap-4 py-2 ${
          reduce
            ? "flex-wrap justify-center"
            : reverse
            ? "animate-marquee-reverse group-hover:[animation-play-state:paused]"
            : "animate-marquee group-hover:[animation-play-state:paused]"
        }`}
      >
        {track.map((s, i) => (
          <div
            key={`${s.name}-${i}`}
            className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.06]"
          >
            <s.Icon className="h-6 w-6" style={{ color: s.color }} />
            <span className="font-display text-sm font-medium text-slate-200">
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const SkillsSection = () => {
  const reduce = useReducedMotion();
  const mid = Math.ceil(skills.length / 2);

  return (
    <section className="relative overflow-hidden bg-ink-900 px-4 py-28 sm:px-6 lg:px-8">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-electric/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="eyebrow">Toolkit</span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technical <span className="gradient-text">skills</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-slate-400">
            Tools I work with day to day.
          </p>
        </div>

        {/* Dual marquee */}
        <div className="mb-16 space-y-4">
          <MarqueeRow data={skills.slice(0, mid)} reverse={false} reduce={reduce} />
          <MarqueeRow data={skills.slice(mid)} reverse reduce={reduce} />
        </div>

        {/* Categorised bento grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {groups.map((group) => (
            <motion.div
              key={group.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
            >
              {/* hover spotlight */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/20" />

              <h3 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {group.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 text-slate-300 transition-colors group-hover:text-white"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/5 text-accent ring-1 ring-white/10 transition-colors group-hover:bg-accent/10">
                      <item.Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
