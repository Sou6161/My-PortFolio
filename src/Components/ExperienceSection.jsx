import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays, Wifi, ArrowUpRight } from "lucide-react";

const experience = [
  {
    role: "Software Engineer",
    company: "Design Field Agency",
    location: "Amman, Jordan",
    remote: true,
    period: "Jan 2026 – Present",
    current: true,
    metrics: ["500+ users", "30+ screens", "<24h go-live", "500+ orders/mo"],
    points: [
      "Built a real-time, location-based social app for 500+ users with live maps and event discovery.",
      "Shipped 30+ screens: stories, a follow system, loyalty rewards, and an admin panel for 50+ businesses.",
      "Launched a white-label SaaS for 5+ restaurant clients from one codebase, cutting go-live to under 24 hours.",
      "Built a food-ordering platform with live tracking, handling 500+ orders a month.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Lawyal Tech",
    location: "Stockholm, Sweden",
    remote: true,
    period: "Feb 2025 – Dec 2025",
    current: false,
    metrics: ["25% faster delivery", "32% faster renders", "40% faster deploys"],
    points: [
      "Built UI components for a legal-tech SaaS, speeding up feature delivery by 25%.",
      "Refactored React components and API handling, cutting render times by 32%.",
      "Owned features end to end, from API design to UI.",
      "Set up CI/CD with GitHub Actions, making deployments 40% faster.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const ExperienceSection = () => {
  return (
    <section className="relative px-4 py-28 sm:px-6 lg:px-8 content-visibility-auto">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="eyebrow">Career</span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Professional <span className="gradient-text">experience</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-slate-400">
            Where I've worked and what I built there.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}
          className="space-y-7"
        >
          {experience.map((job) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800/50 p-7 backdrop-blur-sm transition-all duration-500 hover:border-accent/40 hover:shadow-card sm:p-9"
            >
              {/* left accent bar */}
              <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent to-electric opacity-70" />
              {/* corner glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/5 blur-3xl transition-all duration-500 group-hover:bg-accent/15" />

              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent/20 to-electric/20 text-accent ring-1 ring-white/10">
                      <Briefcase className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">
                        {job.role}
                      </h3>
                      <p className="font-body text-accent">{job.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                        job.current
                          ? "bg-emerald-400/10 text-emerald-400 ring-1 ring-emerald-400/30"
                          : "bg-white/5 text-slate-300 ring-1 ring-white/10"
                      }`}
                    >
                      <CalendarDays className="h-3.5 w-3.5" />
                      {job.period}
                    </span>
                    <span className="inline-flex items-center gap-3 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-accent" />
                        {job.location}
                      </span>
                      {job.remote && (
                        <span className="inline-flex items-center gap-1">
                          <Wifi className="h-3.5 w-3.5 text-accent" />
                          Remote
                        </span>
                      )}
                    </span>
                  </div>
                </div>

                {/* metric chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.metrics.map((m) => (
                    <span
                      key={m}
                      className="rounded-lg border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-semibold text-accent-soft"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* highlights */}
                <ul className="mt-6 space-y-3">
                  {job.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-3 font-body text-sm leading-relaxed text-slate-300"
                    >
                      <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
