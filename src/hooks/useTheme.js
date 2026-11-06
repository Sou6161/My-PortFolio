import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

// The inline script in index.html sets the starting theme before React loads
// (saved choice, else the OS setting), so this just reads it back and keeps
// <html class="dark"> and localStorage in sync when the toggle is used.
export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );

  const themeRef = useRef(theme);
  useEffect(() => {
    themeRef.current = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Until someone picks a theme here, keep following the OS if it changes.
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      if (!localStorage.getItem("theme")) setTheme(e.matches ? "dark" : "light");
    };
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, []);

  // Pass the click event so the new theme can grow out of the button as a
  // circle (View Transitions API). Without support, or with reduced motion,
  // it just switches.
  const toggle = useCallback((event) => {
    const next = themeRef.current === "dark" ? "light" : "dark";
    const apply = () => {
      document.documentElement.classList.toggle("dark", next === "dark");
      setTheme(next);
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* private mode: the toggle still works for this visit */
      }
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduce) {
      apply();
      return;
    }

    const x = event?.clientX ?? window.innerWidth - 40;
    const y = event?.clientY ?? 40;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );
    const transition = document.startViewTransition(() => flushSync(apply));
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 650,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }, []);

  return { theme, toggle };
}
