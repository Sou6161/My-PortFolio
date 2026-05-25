import { useRef } from "react";
import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";
import { SOCIALS, NAV_LINKS, LOGO_URL } from "../constants";

const WATERMARK = "Sourabh";

const socialItems = [
  { href: `mailto:${SOCIALS.email}`, Icon: Mail, label: "Email" },
  { href: SOCIALS.github, Icon: Github, label: "GitHub" },
  { href: SOCIALS.linkedin, Icon: Linkedin, label: "LinkedIn" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const spotRef = useRef(null);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Move the reveal "flashlight" to follow the cursor over the watermark.
  const handleSpot = (e) => {
    const el = spotRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-900/50">
      {/* top accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Upper grid */}
        <div className="grid gap-10 py-16 md:grid-cols-[1.6fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#hero" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-xl ring-1 ring-white/15">
                <img
                  src={LOGO_URL}
                  alt="Sourabh Saini logo"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="font-display text-lg font-semibold text-white">
                Sourabh Saini
              </span>
            </a>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-slate-400">
              Full-stack software engineer building fast web and mobile apps,
              frontend to backend.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialItems.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-slate-400 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Get in touch
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${SOCIALS.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {SOCIALS.email}
                </a>
              </li>
              <li>Gurgaon, India</li>
              <li className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to work
              </li>
            </ul>
          </div>
        </div>

        {/* Quote */}
        <p className="border-t border-white/5 py-8 text-center font-body text-sm italic text-slate-500">
          "Code that speaks to the heart, design that touches the soul, and pixels
          that bring it all to life."
        </p>

        {/* Giant name watermark — a cursor-following flashlight reveals the color */}
        <div
          ref={spotRef}
          onMouseMove={handleSpot}
          className="group relative -mb-4 cursor-default select-none overflow-hidden"
        >
          {/* faint base */}
          <span
            aria-hidden="true"
            className="block whitespace-nowrap text-center font-display text-[20vw] font-bold leading-[0.8] tracking-tight text-white/[0.04]"
          >
            {WATERMARK}
          </span>

          {/* vivid layer, revealed only around the cursor */}
          <span
            aria-hidden="true"
            className="animate-gradient pointer-events-none absolute inset-0 block whitespace-nowrap bg-gradient-to-r from-accent via-electric to-accent bg-[length:200%_auto] bg-clip-text text-center font-display text-[20vw] font-bold leading-[0.8] tracking-tight text-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              WebkitMaskImage:
                "radial-gradient(circle 18vw at var(--mx, 50%) var(--my, 50%), #000 0%, rgba(0,0,0,0.4) 45%, transparent 72%)",
              maskImage:
                "radial-gradient(circle 18vw at var(--mx, 50%) var(--my, 50%), #000 0%, rgba(0,0,0,0.4) 45%, transparent 72%)",
            }}
          >
            {WATERMARK}
          </span>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-4 border-t border-white/5 py-7 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-500">
            © {year} Sourabh Saini. Designed and built by me. Thanks for stopping
            by.
          </p>
          <button
            onClick={scrollTop}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-accent/40 hover:text-accent"
          >
            Back to top
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
