import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    document
      .querySelectorAll("[data-reveal], .marker")
      .forEach((el) => observer.observe(el));
    root.classList.add("js-reveal");

    return () => {
      observer.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);
}
