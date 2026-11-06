import Rich from "./Rich";

const experience = [
  {
    period: "Jan 2026 – Now",
    role: "Software Developer",
    company: "Designs Field Agency",
    color: "rgb(var(--cobalt))",
    location: "Amman, Jordan · Remote",
    points: [
      "Built a location-based social app (**30+ screens**, **170+ API endpoints**) with live maps, events and stories over Socket.IO.",
      "Built its admin dashboard (**17 pages**), where businesses manage venues, events and offers, and admins approve changes.",
      "Shipped online ordering for a restaurant chain with **180+ automated tests**, plus an Android POS app that alerts staff to new orders.",
      "Delivered **2 bilingual English/Arabic websites** with full right-to-left layouts for logistics clients.",
    ],
  },
  {
    period: "Feb 2025 – Dec 2025",
    role: "Software Developer",
    note: "Promoted from Frontend Developer",
    company: "Lawyal Tech",
    color: "rgb(var(--tomato))",
    location: "Stockholm, Sweden · Remote",
    points: [
      "Built a learning platform for contract automation with **3 levels**: quizzes, guided tutorials, and a real-contract editor.",
      "Built a remote notarization website with **10 services**, add-ons like rush or courier delivery, and **Stripe** checkout.",
      "Owned features **end to end**, from setting up auth and the database on **Appwrite** to shipping the final UI.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <ol className="space-y-14">
      {experience.map((job) => (
        <li
          key={`${job.company}-${job.period}`}
          data-reveal
          style={{ "--c": job.color }}
          className="grid gap-6 md:grid-cols-[180px_1fr]"
        >
          <div>
            <p className="inline-block border-l-[3px] border-[var(--c)] pl-3 font-mono text-xs uppercase tracking-wider text-ink-muted">
              {job.period}
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-ink">
              {job.role}{" "}
              <span className="font-normal italic text-[var(--c)]">@ {job.company}</span>
            </h3>
            <p className="mt-1 text-sm text-ink-muted">
              {job.location}
              {job.note && (
                <span className="ml-2 inline-block rounded-sm bg-mustard/40 px-1.5 py-0.5 font-mono text-[0.7rem] text-ink">
                  {job.note}
                </span>
              )}
            </p>

            <ul className="mt-5 space-y-2.5">
              {job.points.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                >
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--c)]" />
                  <span>
                    <Rich text={point} />
                  </span>
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
