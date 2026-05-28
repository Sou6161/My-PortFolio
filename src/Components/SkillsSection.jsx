const groups = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Frontend & Mobile",
    items: [
      "React",
      "React Native (Expo)",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "Express",
      "Socket.IO",
      "REST APIs",
      "PostgreSQL",
      "Prisma",
      "Firebase",
      "Appwrite",
    ],
  },
  {
    title: "Cloud & Tooling",
    items: ["Vercel", "GitHub Actions", "Git", "Vite", "Jest"],
  },
];

const SkillsSection = () => {
  return (
    <div className="grid gap-12 md:grid-cols-2">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500">
            {group.title}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-base text-slate-300">
            {group.items.map((item) => (
              <li
                key={item}
                className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent/70"
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
