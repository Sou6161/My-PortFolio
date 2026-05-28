const experience = [
  {
    period: "Jan 2026 — Now",
    role: "Software Engineer",
    company: "Design Field Agency",
    location: "Amman, Jordan · Remote",
    points: [
      "Built a real-time, location-based social app for 500+ users with live maps and event discovery.",
      "Shipped 30+ screens covering stories, a follow system, loyalty rewards, and an admin panel for 50+ businesses.",
      "Launched a white-label SaaS for 5+ restaurant clients from one codebase, cutting go-live to under 24 hours.",
      "Built a food-ordering platform with live tracking, handling 500+ orders a month.",
    ],
  },
  {
    period: "Feb 2025 — Dec 2025",
    role: "Software Engineer",
    company: "Lawyal Tech",
    location: "Stockholm, Sweden · Remote",
    points: [
      "Built UI components for a legal-tech SaaS, speeding up feature delivery by ~25%.",
      "Refactored React components and API handling, cutting render times by 32%.",
      "Owned features end to end, from API design to UI.",
      "Set up CI/CD with GitHub Actions, making deployments around 40% faster.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <ol className="space-y-14">
      {experience.map((job) => (
        <li
          key={`${job.company}-${job.period}`}
          className="grid gap-6 md:grid-cols-[180px_1fr]"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
              {job.period}
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-white">
              {job.role}{" "}
              <span className="font-normal text-accent">@ {job.company}</span>
            </h3>
            <p className="mt-1 text-sm text-slate-500">{job.location}</p>

            <ul className="mt-5 space-y-2.5">
              {job.points.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-slate-400"
                >
                  <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default ExperienceSection;
