import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_LINKS, RESUME_URL } from "../constants";
import useTheme from "../hooks/useTheme";
import { scrollToId } from "../lib/scroll";
import Monogram from "./Monogram";

const NUM_COLORS = [
  "rgb(var(--ink))",
  "rgb(var(--tomato))",
  "rgb(var(--cobalt))",
  "rgb(var(--leaf))",
  "rgb(var(--plum))",
  "rgb(var(--ochre))",
  "rgb(var(--tomato))",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    scrollToId(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/95"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo / Name */}
        <a
          href="#hero"
          onClick={(e) => handleNav(e, "hero")}
          className="flex items-center gap-2.5"
        >
          <Monogram />
          <span className="font-display text-base font-semibold text-ink">
            Sourabh Saini
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNav(e, link.id)}
                className={`group relative flex items-center gap-1.5 py-1 text-sm transition-colors ${
                  active === link.id
                    ? "text-ink"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                <span className="font-mono text-xs" style={{ color: NUM_COLORS[i] }}>
                  0{i + 1}.
                </span>
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full"
                    style={{ backgroundColor: NUM_COLORS[i] }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
            className="grid h-9 w-9 place-items-center rounded-md border border-ink/15 text-ink transition-colors hover:border-ink/40"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-mustard" />
            ) : (
              <Moon className="h-4 w-4 text-cobalt" />
            )}
          </button>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-ink px-4 py-1.5 text-sm font-medium text-paper transition-colors hover:bg-tomato sm:inline-block"
          >
            Resume
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md border border-ink/15 text-ink lg:hidden"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="border-t border-ink/10 bg-paper lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
            {NAV_LINKS.map((link, i) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNav(e, link.id)}
                  className={`flex items-center gap-2 py-2.5 text-base transition-colors ${
                    active === link.id
                      ? "text-ink"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  <span className="font-mono text-xs" style={{ color: NUM_COLORS[i] }}>
                    0{i + 1}.
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper"
              >
                Resume ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
