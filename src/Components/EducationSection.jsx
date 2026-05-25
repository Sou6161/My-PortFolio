import { motion } from "framer-motion";
import {
  ExternalLink,
  GraduationCap,
  MapPin,
  CalendarDays,
  BadgeCheck,
  Award,
} from "lucide-react";

const certificates = [
  {
    issuer: "Meta",
    title: "JavaScript Certification",
    description: "Core and advanced JavaScript, plus the tooling around it.",
    link: "https://drive.google.com/file/d/1DIKPD-ICa1hJ6iQx38Wna7LsC0Ry8WZD/view",
  },
  {
    issuer: "Meta",
    title: "Advanced React Certification",
    description: "Advanced React: state management, hooks, and performance.",
    link: "https://drive.google.com/file/d/1DLr7BYZzPxbwkq8UmwviE6Gl9y3l3LZB/view",
  },
  {
    issuer: "HackerRank",
    title: "Frontend React Certification",
    description: "React component architecture and frontend fundamentals.",
    link: "https://drive.google.com/file/d/1mwcQaqoMrueQvh9oxkLkKpbNN7JLlyAA/view",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const EducationSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink-900 to-ink-950 px-4 py-28 sm:px-6 lg:px-8">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-10 h-72 w-72 rounded-full bg-electric/10 blur-[120px]" />
        <div className="absolute bottom-10 left-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="eyebrow">Background</span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Education &amp; <span className="gradient-text">certifications</span>
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* ===== Education feature card ===== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className="lg:col-span-5"
          >
            <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60 p-8 backdrop-blur-sm transition-all duration-500 hover:border-accent/40 hover:shadow-glow">
              {/* corner glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/10 blur-3xl transition-all duration-500 group-hover:bg-accent/20" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  <GraduationCap className="h-4 w-4" />
                  Education
                </span>

                <div className="mt-8 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-accent/20 to-electric/20 text-accent ring-1 ring-white/10">
                  <GraduationCap className="h-8 w-8" />
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold text-white">
                  Bachelor of Science
                </h3>
                <p className="mt-1 text-lg font-medium text-accent">
                  Biotechnology
                </p>

                <div className="mt-6 space-y-3 text-slate-400">
                  <p className="font-body text-base text-slate-300">
                    Mangalmay Institute of Engineering &amp; Technology
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent" />
                    Greater Noida, India
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <CalendarDays className="h-4 w-4 text-accent" />
                    Aug 2018 – Sep 2021
                  </p>
                </div>

                <p className="mt-8 border-t border-white/10 pt-6 font-body text-sm leading-relaxed text-slate-400">
                  Where I picked up the problem-solving habits I use as an engineer.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ===== Certifications timeline ===== */}
          <div className="lg:col-span-7">
            <div className="mb-8 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-electric/20 text-accent ring-1 ring-white/10">
                <Award className="h-5 w-5" />
              </span>
              <h3 className="font-display text-2xl font-bold text-white">
                Certifications
              </h3>
            </div>

            <motion.ol
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
              className="relative space-y-6 pl-12"
            >
              {/* full-height glowing spine */}
              <span className="pointer-events-none absolute left-[19px] top-3 bottom-3 w-0.5 rounded-full bg-gradient-to-b from-accent via-electric to-accent/20" />

              {certificates.map((cert) => (
                <motion.li
                  key={cert.title}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* node */}
                  <span className="absolute left-[19px] top-5 grid h-5 w-5 -translate-x-1/2 place-items-center rounded-full bg-ink-900 ring-2 ring-accent/60">
                    <span className="h-2 w-2 rounded-full bg-accent shadow-glow transition-transform duration-300 group-hover:scale-125" />
                  </span>

                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-electric/10 px-3 py-1 text-xs font-semibold text-electric ring-1 ring-electric/20">
                        {cert.issuer}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        Verified
                      </span>
                    </div>

                    <h4 className="mt-4 font-display text-lg font-semibold text-white">
                      {cert.title}
                    </h4>
                    <p className="mt-2 font-body text-sm leading-relaxed text-slate-400">
                      {cert.description}
                    </p>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-soft"
                    >
                      View Certificate
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
