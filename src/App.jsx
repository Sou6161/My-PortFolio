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
import { RESUME_URL, SOCIALS } from "./constants";
import Decodr_Dashboard from "./Images/decodr/dashboard.jpg";
import Decodr_Areas from "./Images/decodr/component-areas.jpg";
import Decodr_Graph from "./Images/decodr/dependency-graph.jpg";
import Decodr_Explain from "./Images/decodr/explain-answer.jpg";
import Decodr_ExplainCode from "./Images/decodr/explain-code.jpg";
import GameLog_Home from "./Images/gamelog/home.jpg";
import GameLog_Discover from "./Images/gamelog/discover.jpg";
import GameLog_Detail from "./Images/gamelog/game-detail.jpg";
import GameLog_Review from "./Images/gamelog/write-review.jpg";
import GameLog_Profile from "./Images/gamelog/profile.jpg";
import Watchly_Home from "./Images/watchly/home.jpg";
import Watchly_Setup from "./Images/watchly/session-setup.jpg";
import Watchly_Title from "./Images/watchly/title-detail.jpg";
import Watchly_Profile from "./Images/watchly/profile.jpg";
import Coinfam_List from "./Images/coinfam/all-cryptocurrencies.jpg";
import Coinfam_Detail from "./Images/coinfam/coin-detail.jpg";
import Coinfam_Chart from "./Images/coinfam/coin-chart.jpg";
import Coinfam_Exchanges from "./Images/coinfam/exchanges.jpg";
import Coinfam_Nft from "./Images/coinfam/nft-collections.jpg";
import Fold_Hero from "./Images/foldxperience/hero.jpg";
import Fold_Colours from "./Images/foldxperience/colours.jpg";
import Fold_Circle from "./Images/foldxperience/circle-to-search.jpg";
import Fold_Gaming from "./Images/foldxperience/gaming-display.jpg";
import Fold_Hdr from "./Images/foldxperience/super-hdr.jpg";
import Tacti_Hero from "./Images/tactishift/hero.jpg";
import Tacti_HowTo from "./Images/tactishift/how-to-play.jpg";
import Tacti_Single from "./Images/tactishift/single-player.jpg";
import Tacti_Discussion from "./Images/tactishift/discussion.jpg";

// Each project renders as a case-study row. `shotType` decides how the
// screenshot strip is laid out: "web" gets a landscape grid, "mobile" gets a
// row of phone-shaped frames, so neither set gets cropped into nonsense.
const projects = [
  {
    title: "Decodr",
    highlights: [
      "Point it at a project folder and it maps 120+ files into a component dependency graph, so getting your bearings in a React codebase takes minutes instead of days.",
      "Reads imports through the TypeScript compiler instead of regex, so the dependency graph is actually correct.",
      "Walks the import graph to hand the model only the 8-34 files a question actually needs. No embeddings, no vector DB, and no context-limit failures.",
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
    highlights: [
      "Letterboxd but for games. One Steam login auto-matched 93% of a 363-game library against IGDB, instead of hours of typing it all in.",
      "XP is append-only, so deleting a review never claws back levels you already earned.",
      "A full library sync stays under 30s by batching 60 titles per IGDB query and bulk-upserting into Postgres, rather than one call per game.",
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
    highlights: [
      "You and one other person swipe fifteen trailers each, then only see what you both liked.",
      "The catalog is fetched from TMDB per session and dealt with weighted-random sampling, so no two nights get the same deck.",
      "Closed two auth holes I found while testing: token rotation was handing back byte-identical JWTs, and a 1.2s delay on signup quietly leaked which emails were already registered.",
    ],
    shotType: "mobile",
    shots: [
      { src: Watchly_Home, alt: "Watchly home screen with session modes" },
      { src: Watchly_Setup, alt: "Watchly session setup: who is watching and tonight's mood" },
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
    highlights: [
      "Crypto price tracker built on the CoinGecko API.",
      "More than prices. It also covers exchange rankings, NFT collections, derivatives and the day's biggest gainers and losers.",
      "Market data sits in Redux, so hopping between coins doesn't refetch what is already loaded.",
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

// Screenshots stay as a short horizontal strip so a project row costs ~160px of
// page instead of a full screen. Thumbnails keep their natural aspect ratio
// (phone captures are simply taller and narrower); clicking one opens it full
// size, which is where the detail actually gets read.
const ShotStrip = ({ shotType, shots, onOpen }) => (
  <div className="relative mt-6">
    {/* Long strips run past the container; a right-edge fade signals that. */}
    {shots.length > 3 && (
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-950 to-transparent" />
    )}
    <div className="scroll-strip flex gap-3 overflow-x-auto pb-3">
    {shots.map((shot, i) => (
      <button
        key={shot.src}
        type="button"
        onClick={() => onOpen(shots, i)}
        aria-label={`Open screenshot: ${shot.alt}`}
        className={`shrink-0 cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] transition-colors hover:border-accent/60 ${
          shotType === "mobile" ? "h-52" : "h-32 sm:h-40"
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
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose, onStep]);

  const shot = shots[index];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={shot.alt}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 rounded-full border border-white/15 p-2 text-slate-300 transition-colors hover:border-white/40 hover:text-white"
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
            className="absolute left-3 rounded-full border border-white/15 p-2 text-slate-300 transition-colors hover:border-white/40 hover:text-white sm:left-6"
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
            className="absolute right-3 rounded-full border border-white/15 p-2 text-slate-300 transition-colors hover:border-white/40 hover:text-white sm:right-6"
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
        <figcaption className="text-center font-mono text-xs text-slate-500">
          {shot.alt}
          {shots.length > 1 && ` · ${index + 1}/${shots.length}`}
        </figcaption>
      </figure>
    </div>
  );
};

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
          className="flex min-h-screen flex-col justify-center pt-28"
        >
          <p className="font-mono text-sm text-accent">Hi there,</p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
            {NAME_LETTERS.map((l, i) =>
              l.color === null ? (
                <span key={i}>{l.ch}</span>
              ) : isTouch ? (
                <span
                  key={i}
                  style={{
                    color: l.color,
                    textShadow: `0 0 8px ${l.color}, 0 0 20px ${l.color}, 0 0 45px ${l.color}, 0 0 90px ${l.color}`,
                  }}
                >
                  {l.ch}
                </span>
              ) : (
                <span
                  key={i}
                  className="transition-all duration-300 hover:text-[var(--c)] hover:[text-shadow:0_0_8px_var(--c),0_0_20px_var(--c),0_0_45px_var(--c),0_0_90px_var(--c)]"
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

          <ul className="space-y-12">
            {projects.map((project) => (
              <li
                key={project.title}
                className="border-t border-white/10 pt-8 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group font-display text-2xl font-semibold text-white transition-colors hover:text-accent"
                  >
                    {project.title}
                    <ArrowUpRight className="ml-1 inline h-4 w-4 text-slate-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </a>
                  <div className="ml-auto flex items-center gap-5 font-mono text-xs">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 transition-colors hover:text-accent"
                    >
                      {project.liveLabel}
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 transition-colors hover:text-accent"
                    >
                      Code
                    </a>
                  </div>
                </div>

                <ul className="mt-4 max-w-2xl space-y-1.5">
                  {project.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                    >
                      <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 font-mono text-xs text-slate-500">
                  {project.technologies.join(" · ")}
                </p>

                <ShotStrip
                  shotType={project.shotType}
                  shots={project.shots}
                  onOpen={openShot}
                />
              </li>
            ))}
          </ul>
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
