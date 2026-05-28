import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, RESUME_URL, LOGO_URL } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");

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
    const target = document.getElementById(id);
    if (target) {
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-ink-950/80 backdrop-blur-md"
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
          <span className="grid h-8 w-8 place-items-center overflow-hidden rounded-md ring-1 ring-white/10">
            <img
              src={LOGO_URL}
              alt=""
              className="h-full w-full object-cover"
            />
          </span>
          <span className="font-display text-base font-semibold text-white">
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
                className={`group flex items-center gap-1.5 text-sm transition-colors ${
                  active === link.id
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span className="font-mono text-xs text-accent/70">
                  0{i + 1}.
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md border border-accent/40 px-4 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10 sm:inline-block"
          >
            Resume
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md border border-white/10 text-white lg:hidden"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="border-t border-white/5 bg-ink-950 lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
            {NAV_LINKS.map((link, i) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNav(e, link.id)}
                  className={`flex items-center gap-2 py-2.5 text-base transition-colors ${
                    active === link.id
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="font-mono text-xs text-accent/70">
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
                className="inline-block rounded-md border border-accent/40 px-4 py-2 text-sm font-medium text-accent"
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
