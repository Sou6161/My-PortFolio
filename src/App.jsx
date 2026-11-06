import { useEffect, useState } from "react";
import {
  Github,
  Mail,
  Linkedin,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SkillsSection from "./Components/SkillsSection";
import EducationSection from "./Components/EducationSection";
import ExperienceSection from "./Components/ExperienceSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import CustomCursor from "./Components/CustomCursor";
import Navbar from "./Components/Navbar";
import Rich from "./Components/Rich";
import CountUp from "./Components/CountUp";
import HeroArt from "./Components/HeroArt";
import useReveal from "./hooks/useReveal";
import { startSmoothScroll, lockScroll } from "./lib/scroll";
import { RESUME_URL, SOCIALS } from "./constants";
import Decodr_Dashboard from "./Images/decodr/dashboard.webp";
import Decodr_Areas from "./Images/decodr/component-areas.webp";
import Decodr_Graph from "./Images/decodr/dependency-graph.webp";
import Decodr_Explain from "./Images/decodr/explain-answer.webp";
import Decodr_ExplainCode from "./Images/decodr/explain-code.webp";
import GameLog_Home from "./Images/gamelog/home.webp";
import GameLog_Discover from "./Images/gamelog/discover.webp";
import GameLog_Detail from "./Images/gamelog/game-detail.webp";
import GameLog_Review from "./Images/gamelog/write-review.webp";
import GameLog_Profile from "./Images/gamelog/profile.webp";
import Watchly_Home from "./Images/watchly/home.webp";
import Watchly_Setup from "./Images/watchly/session-setup.webp";
import Watchly_Title from "./Images/watchly/title-detail.webp";
import Watchly_Profile from "./Images/watchly/profile.webp";
import Coinfam_List from "./Images/coinfam/all-cryptocurrencies.webp";
import Coinfam_Detail from "./Images/coinfam/coin-detail.webp";
import Coinfam_Chart from "./Images/coinfam/coin-chart.webp";
import Coinfam_Exchanges from "./Images/coinfam/exchanges.webp";
import Coinfam_Nft from "./Images/coinfam/nft-collections.webp";
import Fold_Hero from "./Images/foldxperience/hero.webp";
import Fold_Colours from "./Images/foldxperience/colours.webp";
import Fold_Circle from "./Images/foldxperience/circle-to-search.webp";
import Fold_Gaming from "./Images/foldxperience/gaming-display.webp";
import Fold_Hdr from "./Images/foldxperience/super-hdr.webp";
import Tacti_Hero from "./Images/tactishift/hero.webp";
import Tacti_HowTo from "./Images/tactishift/how-to-play.webp";
import Tacti_Single from "./Images/tactishift/single-player.webp";
import Tacti_Discussion from "./Images/tactishift/discussion.webp";
// Each project renders as a case-study row. `shotType` decides how the
// screenshot strip is laid out: "web" gets a landscape grid, "mobile" gets a
// row of phone-shaped frames, so neither set gets cropped into nonsense.
const projects = [
  {
    title: "Decodr",
    color: "rgb(var(--cobalt))",
    tagline: "AI tool for understanding codebases",
    highlights: [
      "An AI tool that maps any React project into a **component graph** and answers plain-English questions about the code.",
      "Picks the relevant files by walking the import graph, then lets the model pull in more files itself through **tool calls**.",
      "Parses code with the **TypeScript Compiler API**, resolving path aliases and barrel files so the graph matches real-world imports.",
    ],
    shotType: "web",
    shots: [
      { src: Decodr_Dashboard, alt: "Decodr dashboard showing file, component and hook counts" },
      { src: Decodr_Areas, alt: "Decodr component overview grouped by feature area" },
      { src: Decodr_Graph, alt: "Decodr interactive component dependency graph" },
      { src: Decodr_Explain, alt: "Decodr explaining how the graph works" },
      { src: Decodr_ExplainCode, alt: "Decodr answer citing the relevant source code" },
    ],
    liveLink: "https://decodr-web.imsrb.in",
    liveLabel: "Live",
    githubLink: "https://github.com/Sou6161/Decodr",
    technologies: ["React 19", "TypeScript", "Express", "PostgreSQL", "React Flow"],
  },
  {
    title: "GameLog",
    color: "rgb(var(--tomato))",
    tagline: "Game tracking app",
    highlights: [
      "Letterboxd for games: a full-stack app for tracking and reviewing what you play.",
      "**One-tap Steam import** pulls in a 300+ game library and auto-matches **90%+** of it to the IGDB database.",
      "Matches games in 3 passes (exact, case-insensitive, fuzzy), sending **60 names per request** instead of one call per game.",
    ],
    shotType: "mobile",
    shots: [
      { src: GameLog_Home, alt: "GameLog home screen with Steam import prompt and featured games" },
      { src: GameLog_Discover, alt: "GameLog discover tab with featured and trending games" },
      { src: GameLog_Detail, alt: "GameLog game detail page for Cyberpunk 2077" },
      { src: GameLog_Review, alt: "GameLog write-review screen with status, rating and play details" },
      { src: GameLog_Profile, alt: "GameLog profile with Steam connection, gamer level and stats" },
    ],
    liveLink: "https://drive.google.com/file/d/1cVEIssciKpSaWn_z4KB4_bqhQH2pYwmT/view?usp=drive_link",
    liveLabel: "APK",
    githubLink: "https://github.com/Sou6161/GameLog",
    technologies: ["Expo", "React Native", "Express", "PostgreSQL", "IGDB", "Steam"],
  },
  {
    title: "Watchly",
    color: "rgb(var(--plum))",
    tagline: "Movie night matching app",
    highlights: [
      "Two people **swipe the same trailers** and only see the titles they both liked.",
      "Both phones stay in sync live over **Socket.IO**, and every vote is saved first, so a dropped connection never loses progress.",
      "Picks are ranked with weighted random sampling tuned to each person’s favourite genres, **never repeating a title within 30 days**.",
    ],
    shotType: "mobile",
    shots: [
      { src: Watchly_Home, alt: "Watchly home screen with session modes" },
      { src: Watchly_Setup, alt: "Watchly session setup: who is watching and tonight’s mood" },
      { src: Watchly_Title, alt: "Watchly title detail with trailers and streaming provider" },
      { src: Watchly_Profile, alt: "Watchly profile with region and streaming subscriptions" },
    ],
    // No web build — Watchly is an Expo app, so the "live" link is the Android
    // APK hosted on Drive rather than a URL you can just open.
    liveLink: "https://drive.google.com/file/d/1ym0XnEhKK6Z5o-ioWOwk8ciWxMHc5hnN/view",
    liveLabel: "APK",
    githubLink: "https://github.com/Sou6161/Watchly",
    technologies: ["Expo", "React Native", "TypeScript", "Prisma", "Socket.IO", "TMDB"],
  },
  {
    title: "CoinFam",
    color: "rgb(var(--leaf))",
    tagline: "Crypto market tracker",
    highlights: [
      "Crypto price tracker built on the CoinGecko API.",
      "More than prices. It also covers exchange rankings, NFT collections, derivatives and the day’s biggest gainers and losers.",
      "Market data sits in Redux, so hopping between coins doesn’t refetch what is already loaded.",
    ],
    shotType: "web",
    shots: [
      { src: Coinfam_List, alt: "CoinFam list of all active cryptocurrencies with live prices" },
      { src: Coinfam_Detail, alt: "CoinFam Bitcoin detail with USD and BTC pricing" },
      { src: Coinfam_Chart, alt: "CoinFam Bitcoin price chart across 24H to 1Y ranges" },
      { src: Coinfam_Exchanges, alt: "CoinFam top crypto exchanges ranked by trust score" },
      { src: Coinfam_Nft, alt: "CoinFam top NFT collections" },
    ],
    liveLink: "https://coin-fam.imsrb.in",
    liveLabel: "Live",
    githubLink: "https://github.com/Sou6161/CoinFam",
    technologies: ["React", "Redux", "Tailwind", "CoinGecko API"],
  },
  {
    title: "FoldXperience",
    color: "rgb(var(--ochre))",
    tagline: "Scroll-driven product page",
    highlights: [
      "Product page for the Galaxy Z Fold6 where the phone unfolds as you scroll.",
      "Scroll-pinned GSAP timelines, with Lenis handling the smoothing.",
    ],
    shotType: "web",
    shots: [
      { src: Fold_Hero, alt: "FoldXperience Galaxy Z Fold6 landing section" },
      { src: Fold_Colours, alt: "FoldXperience colour showcase with the 3D phone model" },
      { src: Fold_Circle, alt: "FoldXperience Circle to Search feature section" },
      { src: Fold_Gaming, alt: "FoldXperience gaming and display spec cards" },
      { src: Fold_Hdr, alt: "FoldXperience Super HDR camera section" },
    ],
    liveLink: "https://z-fold6-showcase.imsrb.in",
    liveLabel: "Live",
    githubLink: "https://github.com/Sou6161/Z-Fold6-ShowCase",
    technologies: ["React", "GSAP", "Framer Motion", "Lenis"],
  },
  {
    title: "TactiShift",
    color: "rgb(var(--cobalt))",
    tagline: "Two-phase multiplayer tic-tac-toe",
    highlights: [
      "Tic-tac-toe with a second phase. Once your pieces are down you win by shifting them around.",
      "Socket.IO rooms keep both players on the same board, move for move.",
      "Built for the Appwrite hackathon.",
    ],
    shotType: "web",
    shots: [
      { src: Tacti_Hero, alt: "TactiShift landing page" },
      { src: Tacti_HowTo, alt: "TactiShift how-to-play: placement, shifting and win phases" },
      { src: Tacti_Single, alt: "TactiShift single player match against the AI" },
      { src: Tacti_Discussion, alt: "TactiShift discussion chat, locked until sign in" },
    ],
    liveLink: "https://shift-tic-tac-toe.imsrb.in",
    liveLabel: "Live",
    githubLink: "https://github.com/Sou6161/shift-tic-tac-toe",
    technologies: ["React", "Socket.IO", "Framer Motion"],
  },
];

const ShotStrip = ({ shotType, shots, start, color, onOpen }) => (
  <div className="mt-8">
    <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-wider text-ink-muted">
      More screens
    </p>
    <div className="scroll-strip flex gap-3 overflow-x-auto pb-3">
      {shots.slice(start).map((shot, i) => (
        <button
          key={shot.src}
          type="button"
          onClick={() => onOpen(shots, start + i)}
          aria-label={`Open screenshot: ${shot.alt}`}
          style={{ "--c": color }}
          className={`shrink-0 cursor-pointer overflow-hidden rounded-md border border-ink/15 bg-paper-dark transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-[var(--c)] ${
            shotType === "mobile" ? "h-36" : "h-24 sm:h-28"
          }`}
        >
          <img
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            className="h-full w-auto object-cover object-top"
          />
        </button>
      ))}
    </div>
  </div>
);

const LeadShot = ({ project, onOpen }) => {
  const { shots, shotType, liveLink } = project;

  if (shotType === "mobile") {
    return (
      <div className="flex justify-center gap-5 sm:gap-7">
        {shots.slice(0, 2).map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => onOpen(shots, i)}
            aria-label={`Open screenshot: ${shot.alt}`}
            className={`group w-[44%] max-w-[220px] ${i === 1 ? "mt-12" : ""}`}
          >
            <div className="overflow-hidden rounded-[1.75rem] border-[6px] border-[#14110F] bg-[#14110F] shadow-[6px_6px_0_var(--c)] transition-[transform,box-shadow] duration-300 group-hover:-translate-y-1 group-hover:shadow-[9px_9px_0_var(--c)]">
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="aspect-[9/20] w-full rounded-[1.3rem] object-cover object-top"
              />
            </div>
          </button>
        ))}
      </div>
    );
  }

  const host = new URL(liveLink).host;
  return (
    <button
      type="button"
      onClick={() => onOpen(shots, 0)}
      aria-label={`Open screenshot: ${shots[0].alt}`}
      className="group block w-full text-left"
    >
      <div className="overflow-hidden rounded-lg border border-ink/20 bg-paper-dark shadow-[6px_6px_0_var(--c)] transition-[transform,box-shadow] duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[9px_9px_0_var(--c)]">
        <div className="flex items-center gap-1.5 border-b border-ink/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-tomato" />
          <span className="h-2 w-2 rounded-full bg-mustard" />
          <span className="h-2 w-2 rounded-full bg-leaf" />
          <span className="ml-3 truncate font-mono text-[0.7rem] text-ink-muted">
            {host}
          </span>
        </div>
        <img
          src={shots[0].src}
          alt={shots[0].alt}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover object-top"
        />
      </div>
    </button>
  );
};

// Full-size viewer for the strip. Arrow keys step through a project's shots,
// Escape closes, and the body scroll is locked while it's open.
const Lightbox = ({ shots, index, onClose, onStep }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    lockScroll(true);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      lockScroll(false);
    };
  }, [onClose, onStep]);

  const shot = shots[index];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#14110F]/95 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={shot.alt}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 rounded-full border border-white/20 p-2 text-white/80 transition-colors hover:border-white/50 hover:text-white"
      >
        <X className="h-5 w-5" />
      </button>

      {shots.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onStep(-1);
            }}
            aria-label="Previous screenshot"
            className="absolute left-3 rounded-full border border-white/20 p-2 text-white/80 transition-colors hover:border-white/50 hover:text-white sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onStep(1);
            }}
            aria-label="Next screenshot"
            className="absolute right-3 rounded-full border border-white/20 p-2 text-white/80 transition-colors hover:border-white/50 hover:text-white sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <figure
        className="flex max-h-full flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={shot.src}
          alt={shot.alt}
          className="max-h-[80vh] max-w-[92vw] rounded-lg object-contain"
        />
        <figcaption className="text-center font-mono text-xs text-white/60">
          {shot.alt}
          {shots.length > 1 && ` · ${index + 1}/${shots.length}`}
        </figcaption>
      </figure>
    </div>
  );
};

const ProjectRow = ({ project, index, onOpen }) => {
  const flip = index % 2 === 1;
  const leadCount = project.shotType === "mobile" ? 2 : 1;

  return (
    <li
      data-reveal
      style={{ "--c": project.color }}
      className="border-t border-ink/15 pt-14 first:border-t-0 first:pt-0"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={flip ? "lg:order-2" : ""}>
          <p className="font-mono text-xs tabular-nums text-[var(--c)]">
            No. {String(index + 1).padStart(2, "0")}
          </p>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 inline-block font-display text-3xl font-semibold text-ink transition-colors hover:text-[var(--c)] sm:text-4xl"
          >
            {project.title}
            <ArrowUpRight className="ml-1 inline h-5 w-5 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--c)]" />
          </a>
          <p className="mt-1 font-display text-lg italic text-ink-muted">
            {project.tagline}
          </p>

          <ul className="mt-5 space-y-2">
            {project.highlights.map((point) => (
              <li
                key={point}
                className="flex gap-2.5 text-[0.95rem] leading-relaxed text-ink-soft"
              >
                <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--c)]" />
                <span>
                  <Rich text={point} />
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-5 font-mono text-xs text-ink-muted">
            {project.technologies.join(" · ")}
          </p>

          <div className="mt-6 flex items-center gap-6">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-ink-soft underline decoration-[var(--c)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--c)]"
            >
              {project.liveLabel} ↗
            </a>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-ink-soft underline decoration-[var(--c)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--c)]"
              >
                Code ↗
              </a>
            )}
          </div>
        </div>

        <div className={flip ? "lg:order-1" : ""}>
          <LeadShot project={project} onOpen={onOpen} />
        </div>
      </div>

      {project.shots.length > leadCount && (
        <ShotStrip
          shotType={project.shotType}
          shots={project.shots}
          start={leadCount}
          color={project.color}
          onOpen={onOpen}
        />
      )}
    </li>
  );
};

const NAME_LETTERS = [
  { ch: "S", color: "rgb(var(--tomato))" },
  { ch: "o", color: "rgb(var(--cobalt))" },
  { ch: "u", color: "rgb(var(--mustard))" },
  { ch: "r", color: "rgb(var(--leaf))" },
  { ch: "a", color: "rgb(var(--plum))" },
  { ch: "b", color: "rgb(var(--tomato))" },
  { ch: "h", color: "rgb(var(--cobalt))" },
  { ch: " ", color: null },
  { ch: "S", color: "rgb(var(--mustard))" },
  { ch: "a", color: "rgb(var(--leaf))" },
  { ch: "i", color: "rgb(var(--plum))" },
  { ch: "n", color: "rgb(var(--tomato))" },
  { ch: "i", color: "rgb(var(--cobalt))" },
  { ch: ".", color: "rgb(var(--mustard))" },
];

const FIGURES = [
  { value: "30+", label: "screens in a live social app", color: "rgb(var(--tomato))" },
  { value: "170+", label: "API endpoints behind it", color: "rgb(var(--cobalt))" },
  { value: "180+", label: "automated tests on a restaurant ordering system", color: "rgb(var(--leaf))" },
  { value: "2", label: "bilingual English/Arabic sites with full RTL", color: "rgb(var(--plum))" },
];

const SectionLabel = ({ num, label, color }) => (
  <div data-reveal className="mb-12 flex items-center gap-4">
    <span
      className="rounded-sm px-2 py-0.5 font-mono text-xs font-medium text-paper"
      style={{ backgroundColor: color }}
    >
      0{num}
    </span>
    <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
      {label}
    </h2>
    <span className="rule h-px flex-1 bg-ink/15" />
  </div>
);

export default App;

function App() {
  // { shots, index } while a screenshot is open full size, otherwise null.
  const [lightbox, setLightbox] = useState(null);
  const openShot = (shots, index) => setLightbox({ shots, index });
  const closeShot = () => setLightbox(null);
  const stepShot = (delta) =>
    setLightbox((cur) =>
      cur
        ? {
            ...cur,
            index: (cur.index + delta + cur.shots.length) % cur.shots.length,
          }
        : cur,
    );
  useReveal();
  useEffect(() => startSmoothScroll(), []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      {lightbox && (
        <Lightbox
          shots={lightbox.shots}
          index={lightbox.index}
          onClose={closeShot}
          onStep={stepShot}
        />
      )}

      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* ===================== HERO ===================== */}
        <section
          id="hero"
          className="relative flex flex-col justify-center pb-10 pt-32 lg:min-h-screen lg:pb-0 lg:pt-28"
        >
          <HeroArt />
          <p data-reveal className="font-mono text-sm text-tomato">
            Hi there,
          </p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-7xl lg:text-8xl">
            {NAME_LETTERS.map((l, i) =>
              l.color === null ? (
                <span key={i}> </span>
              ) : (
                <span
                  key={i}
                  className="letter-in inline-block transition-transform duration-200 hover:-translate-y-2 hover:-rotate-6"
                  style={{ color: l.color, "--d": `${150 + i * 55}ms` }}
                >
                  {l.ch}
                </span>
              )
            )}
          </h1>
          <h2
            data-reveal
            style={{ "--d": "700ms" }}
            className="mt-3 font-display text-3xl font-medium italic text-ink-soft sm:text-5xl lg:text-6xl"
          >
            I build for the{" "}
            <span className="marker text-ink" style={{ "--mark": "rgb(var(--mk-yellow))" }}>
              web
            </span>
            .
          </h2>

          <p
            data-reveal
            style={{ "--d": "850ms" }}
            className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            I’m a full-stack software developer working with{" "}
            <span className="marker text-ink" style={{ "--mark": "rgb(var(--mk-blue))" }}>React</span>,{" "}
            <span className="marker text-ink" style={{ "--mark": "rgb(var(--mk-red))" }}>React Native</span>, and{" "}
            <span className="marker text-ink" style={{ "--mark": "rgb(var(--mk-green))" }}>Node.js</span>. Right now I’m
            shipping real-time products for a remote team, after a year with a
            legal-tech startup.
          </p>

          <div
            data-reveal
            style={{ "--d": "1000ms" }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={`mailto:${SOCIALS.email}`}
              className="group inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-tomato"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-soft underline decoration-mustard decoration-2 underline-offset-4 transition-colors hover:text-ink"
            >
              Read my CV ↗
            </a>
          </div>

          <div
            data-reveal
            style={{ "--d": "1100ms" }}
            className="mt-14 flex items-center gap-5 text-ink-muted"
          >
            <a
              href={`mailto:${SOCIALS.email}`}
              aria-label="Email"
              className="transition-colors hover:text-tomato"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-ink"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-cobalt"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <HeroArt compact />
        </section>

        {/* ===================== ABOUT ===================== */}
        <section
          id="about"
          className="py-28"
        >
          <SectionLabel num={1} label="About" color="rgb(var(--tomato))" />

          <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
            <div data-reveal className="space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                I started out in biotech, but somewhere along the way I got
                pulled into writing code and never really stopped. These days I
                work as a full-stack software developer, mostly with React and
                React Native on the front and Node.js / PostgreSQL on the back.
              </p>
              <p>
                Most of what I’ve built recently is in the hands of real
                people: a{" "}
                <span className="marker text-ink">location-based social app</span>{" "}
                with live maps and stories, online ordering for a restaurant
                chain, bilingual English/Arabic sites with full right-to-left
                layouts, and a learning platform for contract automation.
              </p>
              <p>
                Off the keyboard I’m a heavy gamer (which is how my{" "}
                <span className="marker text-ink" style={{ "--mark": "rgb(var(--mk-red))" }}>GameLog</span> app started),
                I read more dev blogs than I probably should, and I’m
                always tinkering with something on the side.
              </p>
            </div>

            <div data-reveal style={{ "--d": "150ms" }}>
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                Currently
              </p>
              <p className="mt-2 text-sm text-ink">
                Software Developer at{" "}
                <span className="font-medium text-cobalt">Designs Field Agency</span>
                <br />
                <span className="text-ink-muted">Remote</span>
              </p>

              <p className="mt-8 font-mono text-xs uppercase tracking-wider text-ink-muted">
                Open to
              </p>
              <p className="mt-2 text-sm text-ink">
                Full-stack & React Native roles
              </p>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink/15 pt-10 sm:grid-cols-4">
            {FIGURES.map((f, i) => (
              <div key={f.label} data-reveal style={{ "--d": `${i * 120}ms` }}>
                <dt className="sr-only">{f.label}</dt>
                <dd
                  className="font-display text-5xl font-semibold leading-none tabular-nums"
                  style={{ color: f.color }}
                >
                  <CountUp value={f.value} />
                </dd>
                <dd className="mt-3 max-w-[12rem] text-sm leading-snug text-ink-soft">
                  {f.label}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ===================== EXPERIENCE ===================== */}
        <section
          id="experience"
          className="relative isolate py-28 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-[rgb(var(--band-blue))]"
        >
          <SectionLabel num={2} label="Experience" color="rgb(var(--cobalt))" />
          <ExperienceSection />
        </section>

        {/* ===================== WORK / PROJECTS ===================== */}
        <section
          id="projects"
          className="py-28"
        >
          <SectionLabel num={3} label="Selected work" color="rgb(var(--leaf))" />

          <ul className="space-y-20">
            {projects.map((project, i) => (
              <ProjectRow
                key={project.title}
                project={project}
                index={i}
                onOpen={openShot}
              />
            ))}
          </ul>
        </section>

        {/* ===================== SKILLS ===================== */}
        <section id="skills" className="relative isolate py-28 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-[rgb(var(--band-plum))]">
          <SectionLabel num={4} label="Toolbox" color="rgb(var(--plum))" />
          <SkillsSection />
        </section>

        {/* ===================== EDUCATION ===================== */}
        <section id="education" className="py-28">
          <SectionLabel num={5} label="Education & certifications" color="rgb(var(--ochre))" />
          <EducationSection />
        </section>

        {/* ===================== CONTACT ===================== */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
