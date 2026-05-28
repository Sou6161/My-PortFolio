import { useEffect, useState } from "react";
import {
  Github,
  Mail,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import SkillsSection from "./Components/SkillsSection";
import EducationSection from "./Components/EducationSection";
import ExperienceSection from "./Components/ExperienceSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import CustomCursor from "./Components/CustomCursor";
import Navbar from "./Components/Navbar";
import { RESUME_URL, SOCIALS } from "./constants";
import Cineout_Photo from "./Images/Cineout_Portfolio_Project.png";
import Coinfam_Photo from "./Images/Coinfam_Portfolio_Project.png";
import FoldXeperince_Photo from "./Images/FoldXeperince_Portfolio_Project.png";
import TactiShift_Photo from "./Images/TactiShift_Portfolio_project.png";

const projects = [
  {
    title: "CineOut",
    year: "2024",
    description:
      "A movie browser for desktop and mobile, with quick search and clean results.",
    image: Cineout_Photo,
    liveLink: "https://cineout.vercel.app/",
    githubLink: "https://github.com/Sou6161/cineout",
    technologies: ["React", "Redux", "Tailwind", "REST API"],
  },
  {
    title: "CoinFam",
    year: "2024",
    description:
      "A live crypto tracker on the CoinGecko API, with real-time prices and market trends.",
    image: Coinfam_Photo,
    liveLink: "https://coin-fam.vercel.app/",
    githubLink: "https://github.com/Sou6161/CoinFam",
    technologies: ["React", "Redux", "Tailwind", "CoinGecko API"],
  },
  {
    title: "FoldXperience",
    year: "2024",
    description:
      "A Samsung Galaxy Z Fold6 showcase built with GSAP and Lenis, so the phone unfolds as you scroll.",
    image: FoldXeperince_Photo,
    liveLink: "https://z-fold6-showcase.vercel.app/",
    githubLink: "https://github.com/Sou6161/Z-Fold6-ShowCase",
    technologies: ["React", "GSAP", "Framer Motion", "Lenis"],
  },
  {
    title: "TactiShift",
    year: "2024",
    description:
      "Real-time multiplayer Tic-Tac-Toe with a shifting-board twist, built over Socket.IO for the Appwrite Hackathon.",
    image: TactiShift_Photo,
    liveLink: "https://shift-tic-tac-toe.vercel.app/",
    githubLink: "https://github.com/Sou6161/shift-tic-tac-toe",
    technologies: ["React", "Socket.IO", "Framer Motion"],
  },
];

// Per-letter colours for the hero name. Each letter swaps from white to its
// own distinct hue on hover (no pink / purple to keep the palette intentional).
const NAME_LETTERS = [
  { ch: "S", color: "#22D3EE" }, // cyan
  { ch: "o", color: "#FBBF24" }, // amber
  { ch: "u", color: "#34D399" }, // emerald
  { ch: "r", color: "#F87171" }, // red
  { ch: "a", color: "#60A5FA" }, // blue
  { ch: "b", color: "#FB923C" }, // orange
  { ch: "h", color: "#A3E635" }, // lime
  { ch: " ", color: null },
  { ch: "S", color: "#2DD4BF" }, // teal
  { ch: "a", color: "#FCD34D" }, // yellow
  { ch: "i", color: "#38BDF8" }, // sky
  { ch: "n", color: "#4ADE80" }, // green
  { ch: "i", color: "#F59E0B" }, // gold
  { ch: ".", color: "#67E8F9" }, // light cyan
];

const SectionLabel = ({ num, label }) => (
  <div className="mb-12 flex items-center gap-4">
    <span className="font-mono text-sm text-accent">0{num}.</span>
    <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
      {label}
    </h2>
    <span className="h-px flex-1 bg-white/10" />
  </div>
);

export default App;

function App() {
  // Touch / no-hover devices render the hero name in its colours by default,
  // since there's no hover to trigger them.
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(hover: none), (pointer: coarse)");
    setIsTouch(mql.matches);
    const onChange = (e) => setIsTouch(e.matches);
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* ===================== HERO ===================== */}
        <section
          id="hero"
          className="flex min-h-screen flex-col justify-center pt-28"
        >
          <p className="font-mono text-sm text-accent">Hi there,</p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
            {NAME_LETTERS.map((l, i) =>
              l.color === null ? (
                <span key={i}>{l.ch}</span>
              ) : isTouch ? (
                <span key={i} style={{ color: l.color }}>
                  {l.ch}
                </span>
              ) : (
                <span
                  key={i}
                  className="transition-colors duration-300 hover:text-[var(--c)]"
                  style={{ "--c": l.color }}
                >
                  {l.ch}
                </span>
              )
            )}
          </h1>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-400 sm:text-5xl lg:text-6xl">
            I build for the web.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            I&apos;m a full-stack software engineer working with{" "}
            <span className="text-slate-200">React</span>,{" "}
            <span className="text-slate-200">React Native</span>, and{" "}
            <span className="text-slate-200">Node.js</span>. Right now I&apos;m
            shipping real-time products for a remote team, after a year with a
            legal-tech startup.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${SOCIALS.email}`}
              className="group inline-flex items-center gap-2 rounded-md border border-accent/50 bg-accent/5 px-5 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Read my CV ↗
            </a>
          </div>

          <div className="mt-14 flex items-center gap-5 text-slate-500">
            <a
              href={`mailto:${SOCIALS.email}`}
              aria-label="Email"
              className="transition-colors hover:text-accent"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-accent"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-accent"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* ===================== ABOUT ===================== */}
        <section
          id="about"
          className="py-28 content-visibility-auto"
        >
          <SectionLabel num={1} label="About" />

          <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
            <div className="space-y-5 text-base leading-relaxed text-slate-400">
              <p>
                I started out in biotech, but somewhere along the way I got
                pulled into writing code and never really stopped. These days I
                work as a full-stack software engineer, mostly with React on
                the front and Node.js / PostgreSQL on the back.
              </p>
              <p>
                Most of what I&apos;ve built recently runs in real time, for
                actual people: a location-based social app for{" "}
                <span className="text-slate-200">500+ users</span>, a
                white-label food-ordering platform spun up in under a day, and
                production UI for a legal-tech SaaS.
              </p>
              <p>
                Off the keyboard I&apos;m a heavy gamer (which is how my{" "}
                <span className="text-slate-200">GameLog</span> app started),
                I read more dev blogs than I probably should, and I&apos;m
                always tinkering with something on the side.
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
                Currently
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Software Engineer at{" "}
                <span className="text-white">Design Field Agency</span>
                <br />
                <span className="text-slate-500">Remote</span>
              </p>

              <p className="mt-8 font-mono text-xs uppercase tracking-wider text-slate-500">
                Open to
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Full-stack & React Native roles
              </p>
            </div>
          </div>
        </section>

        {/* ===================== EXPERIENCE ===================== */}
        <section
          id="experience"
          className="py-28 content-visibility-auto"
        >
          <SectionLabel num={2} label="Experience" />
          <ExperienceSection />
        </section>

        {/* ===================== WORK / PROJECTS ===================== */}
        <section
          id="projects"
          className="py-28 content-visibility-auto"
        >
          <SectionLabel num={3} label="Selected work" />

          <ul className="divide-y divide-white/5">
            {projects.map((project) => (
              <li key={project.title}>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-6 py-8 transition-colors sm:grid-cols-[180px_1fr_auto] sm:items-center"
                >
                  <div className="overflow-hidden rounded-md border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-accent">
                        {project.title}
                      </h3>
                      <span className="font-mono text-xs text-slate-500">
                        {project.year}
                      </span>
                    </div>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>
                    <p className="mt-3 font-mono text-xs text-slate-500">
                      {project.technologies.join(" · ")}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 sm:justify-end">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.githubLink, "_blank");
                      }}
                      className="text-sm text-slate-500 transition-colors hover:text-white"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          window.open(project.githubLink, "_blank");
                        }
                      }}
                    >
                      Code
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm text-slate-500">
            More on{" "}
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 underline underline-offset-4 transition-colors hover:text-accent"
            >
              GitHub
            </a>
            .
          </p>
        </section>

        {/* ===================== SKILLS ===================== */}
        <section id="skills" className="py-28 content-visibility-auto">
          <SectionLabel num={4} label="Toolbox" />
          <SkillsSection />
        </section>

        {/* ===================== EDUCATION ===================== */}
        <section id="education" className="py-28 content-visibility-auto">
          <SectionLabel num={5} label="Education & certifications" />
          <EducationSection />
        </section>

        {/* ===================== CONTACT ===================== */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
