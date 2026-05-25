import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  ChevronDown,
  Code2,
  Palette,
  Zap,
  Server,
  ArrowUpRight,
  MapPin,
  Download,
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
    tagline: "A fast way to find movies",
    description:
      "A movie browser for desktop and mobile, with quick search and clean results.",
    image: Cineout_Photo,
    liveLink: "https://cineout.vercel.app/",
    githubLink: "https://github.com/Sou6161/cineout",
    technologies: ["ReactJS", "JavaScript", "Tailwind CSS", "Redux", "REST API"],
  },
  {
    title: "CoinFam",
    tagline: "Crypto prices in real time",
    description:
      "A live crypto tracker on the CoinGecko API, with real-time prices and market trends.",
    image: Coinfam_Photo,
    liveLink: "https://coin-fam.vercel.app/",
    githubLink: "https://github.com/Sou6161/CoinFam",
    technologies: ["ReactJS", "JavaScript", "Tailwind CSS", "Redux", "CoinGecko API"],
  },
  {
    title: "FoldXperience",
    tagline: "A motion-led product page",
    description:
      "A Samsung Galaxy Z Fold6 showcase built with GSAP and Lenis, so the phone unfolds as you scroll.",
    image: FoldXeperince_Photo,
    liveLink: "https://z-fold6-showcase.vercel.app/",
    githubLink: "https://github.com/Sou6161/Z-Fold6-ShowCase",
    technologies: ["ReactJS", "GSAP", "Framer Motion", "Lenis", "Tailwind CSS"],
  },
  {
    title: "TactiShift",
    tagline: "Multiplayer with a twist",
    description:
      "Real-time multiplayer Tic-Tac-Toe with a shifting-board twist, built over Socket.IO for the Appwrite Hackathon.",
    image: TactiShift_Photo,
    liveLink: "https://shift-tic-tac-toe.vercel.app/",
    githubLink: "https://github.com/Sou6161/shift-tic-tac-toe",
    technologies: ["ReactJS", "Socket.IO", "Framer Motion", "Lenis", "Tailwind CSS"],
  },
];

const focusAreas = [
  {
    icon: <Code2 className="h-7 w-7" />,
    title: "Clean Code",
    desc: "Code that's easy to read and easy to change later.",
  },
  {
    icon: <Palette className="h-7 w-7" />,
    title: "Good Design",
    desc: "Interfaces that look right down to the details.",
  },
  {
    icon: <Zap className="h-7 w-7" />,
    title: "Performance",
    desc: "Quick to load and smooth to use.",
  },
  {
    icon: <Server className="h-7 w-7" />,
    title: "Full-Stack",
    desc: "I can take a feature from the API to the UI.",
  },
];

const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "React Specialist",
  "Mobile App Developer",
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* Rotating role headline */
function RotatingRole() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <span className="relative inline-flex h-[1.2em] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="gradient-text whitespace-nowrap"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function SectionHeading({ eyebrow, title, accent }) {
  return (
    <div className="mb-14 text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title} <span className="gradient-text">{accent}</span>
      </h2>
    </div>
  );
}

export default App;

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <div className="relative min-h-screen overflow-hidden bg-ink-950 text-slate-200">
        {/* Global ambient background */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />
          <motion.div
            className="absolute -left-32 top-10 h-[34rem] w-[34rem] rounded-full bg-accent/20 blur-[120px]"
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-32 top-1/3 h-[32rem] w-[32rem] rounded-full bg-electric/20 blur-[130px]"
            animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/0 via-ink-950/40 to-ink-950" />
        </div>

        <main>
          {/* ===================== HERO ===================== */}
          <section
            id="hero"
            className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-28 sm:px-6 lg:px-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mx-auto max-w-4xl text-center"
            >
              {/* Availability badge */}
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full glass px-4 py-2 text-sm text-slate-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                Open to full-stack &amp; React Native roles
              </div>

              <p className="mb-3 font-body text-lg text-slate-400">
                Hi, I'm Sourabh Saini
              </p>

              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl">
                I build <span className="gradient-text animate-gradient">fast, modern</span>
                <br className="hidden sm:block" /> web &amp; mobile apps
              </h1>

              <h2 className="mt-6 font-display text-2xl font-semibold sm:text-4xl">
                <RotatingRole />
              </h2>

              <p className="mx-auto mt-7 max-w-xl text-balance font-body text-lg leading-relaxed text-slate-400">
                I build fast web and mobile apps, from frontend to backend.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-electric px-7 py-3.5 font-semibold text-ink-950 shadow-glow transition-transform hover:scale-105"
                >
                  View My Work
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 font-semibold text-white transition-colors hover:border-accent/40 hover:bg-white/5"
                >
                  <Download className="h-5 w-5" />
                  Resume
                </a>
              </div>

              {/* Socials */}
              <div className="mt-10 flex items-center justify-center gap-5">
                {[
                  { href: `mailto:${SOCIALS.email}`, Icon: Mail, label: "Email" },
                  { href: SOCIALS.github, Icon: Github, label: "GitHub" },
                  { href: SOCIALS.linkedin, Icon: Linkedin, label: "LinkedIn" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-12 w-12 place-items-center rounded-xl glass text-slate-300 transition-all hover:scale-110 hover:text-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            <a
              href="#about"
              aria-label="Scroll to about"
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-accent"
            >
              <ChevronDown className="h-7 w-7 animate-bounce" />
            </a>
          </section>

          {/* ===================== ABOUT ===================== */}
          <motion.section
            id="about"
            className="relative px-4 py-28 sm:px-6 lg:px-8 content-visibility-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="mx-auto max-w-6xl">
              <SectionHeading eyebrow="About" title="A bit" accent="about me" />

              <div className="grid items-start gap-14 lg:grid-cols-2">
                {/* Left: narrative */}
                <div className="space-y-6">
                  <p className="font-body text-xl leading-relaxed text-slate-300">
                    I'm Sourabh, a{" "}
                    <span className="font-semibold text-white">full-stack</span>{" "}
                    software engineer. React and React Native on the frontend,{" "}
                    <span className="font-semibold text-white">
                      Node.js and PostgreSQL
                    </span>{" "}
                    on the backend, mostly real-time apps.
                  </p>
                  <p className="font-body text-lg leading-relaxed text-slate-400">
                    I've worked remotely with teams in Sweden and Jordan, from
                    legal-tech to social and food apps. Big on performance,
                    accessibility, and the small details.
                  </p>
                  <p className="font-body text-lg leading-relaxed text-slate-400">
                    Right now I'm building cross-platform apps end to end, and I'm
                    always poking at something new on the side.
                  </p>

                  <div className="flex items-center gap-2 pt-2 text-slate-400">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span>Based in Gurgaon, India</span>
                  </div>
                </div>

                {/* Right: focus cards */}
                <motion.div
                  variants={listContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                >
                  {focusAreas.map((item) => (
                    <motion.div
                      key={item.title}
                      variants={listItemVariants}
                      className="group rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
                    >
                      <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-electric/20 text-accent">
                        {item.icon}
                      </div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* ===================== EXPERIENCE ===================== */}
          <div id="experience">
            <ExperienceSection />
          </div>

          {/* ===================== PROJECTS ===================== */}
          <motion.section
            id="projects"
            className="relative px-4 py-28 sm:px-6 lg:px-8 content-visibility-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            <div className="mx-auto max-w-6xl">
              <SectionHeading
                eyebrow="Portfolio"
                title="Featured"
                accent="projects"
              />

              <motion.div
                className="grid gap-8"
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                {projects.map((project, index) => (
                  <motion.article
                    key={project.title}
                    variants={listItemVariants}
                    className="group relative overflow-hidden rounded-3xl glass transition-all duration-500 hover:border-accent/30 hover:shadow-card"
                  >
                    <div
                      className={`grid items-center gap-8 p-5 md:grid-cols-2 md:p-7 ${
                        index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
                        <div className="aspect-[16/10] overflow-hidden bg-ink-800">
                          <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col">
                        <span className="font-display text-sm font-semibold text-accent">
                          0{index + 1} &middot; {project.tagline}
                        </span>
                        <h3 className="mt-2 font-display text-3xl font-bold text-white">
                          {project.title}
                        </h3>
                        <p className="mt-4 font-body leading-relaxed text-slate-400">
                          {project.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-electric px-5 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-105"
                          >
                            Live Demo <ExternalLink className="h-4 w-4" />
                          </a>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/40 hover:text-accent"
                          >
                            <Github className="h-4 w-4" /> Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* ===================== SKILLS ===================== */}
          <motion.div
            id="skills"
            className="content-visibility-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <SkillsSection />
          </motion.div>

          {/* ===================== EDUCATION ===================== */}
          <motion.div
            id="education"
            className="content-visibility-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <EducationSection />
          </motion.div>

          {/* ===================== CONTACT ===================== */}
          <ContactSection />
        </main>

        {/* ===================== FOOTER ===================== */}
        <Footer />
      </div>
    </>
  );
}
