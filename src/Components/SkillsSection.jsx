const groups = [
  {
    title: "Languages",
    color: "rgb(var(--tomato))",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
    ],
  },
  {
    title: "Frontend & Mobile",
    color: "rgb(var(--cobalt))",
    items: [
      "React",
      "React Native (Expo, Expo Router)",
      "Zustand",
      "TanStack Query",
      "Tailwind CSS",
      "NativeWind",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    title: "Backend & Data",
    color: "rgb(var(--leaf))",
    items: [
      "Node.js",
      "Express",
      "Socket.IO",
      "REST APIs",
      "JWT",
      "PostgreSQL",
      "Prisma",
      "Drizzle",
      "Zod",
      "Stripe",
      "Appwrite",
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "rgb(var(--mustard))",
    items: [
      "DigitalOcean",
      "Vercel",
      "Render",
      "Neon",
      "GitHub Actions (CI/CD)",
      "Vite",
      "Git",
    ],
  },
  {
    title: "Testing & Quality",
    color: "rgb(var(--ochre))",
    items: [
      "Vitest",
      "Performance optimization",
      "Responsive design",
      "Accessibility (a11y)",
    ],
  },
  {
    title: "AI Engineering",
    color: "rgb(var(--plum))",
    items: [
      "OpenAI API",
      "Tool calling",
      "Claude",
      "Cursor",
      "GitHub Copilot",
      "AI-driven debugging & code review",
    ],
  },
];

// Each skill is a little sticker in its group's colour, set at a slight,
// repeatable tilt so the grid looks hand-placed rather than generated.
const TILTS = [-1.6, 1.1, -0.6, 1.8, -1.2, 0.7, 1.4, -0.9];

const SkillsSection = () => {
  return (
    <div className="grid gap-12 md:grid-cols-2">
      {groups.map((group, g) => (
        <div
          key={group.title}
          data-reveal
          style={{ "--c": group.color, "--d": `${(g % 2) * 120}ms` }}
        >
          <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted">
            <span className="h-2.5 w-2.5 rounded-sm bg-[var(--c)]" />
            {group.title}
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {group.items.map((item, i) => (
              <li
                key={item}
                style={{ "--r": `${TILTS[(i + g * 3) % TILTS.length]}deg` }}
                className="rotate-[var(--r)] rounded-sm border-[1.5px] border-[var(--c)] bg-paper px-2.5 py-1 text-sm text-ink transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:rotate-0 hover:shadow-[3px_3px_0_var(--c)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
