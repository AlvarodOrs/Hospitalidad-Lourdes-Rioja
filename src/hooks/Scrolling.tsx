"use client";

import { useEffect } from "react";

export default function ScrollingEffects() {
  useEffect(() => {
    // ── Scroll reveal ──
    const revealEls = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => observer.observe(el));

    // ── Smooth anchor scrolling ──
    const links = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const el = document.querySelector(target.getAttribute("href") || "");
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    };

    links.forEach((a) => a.addEventListener("click", handleClick));

    // CLEANUP (you ignored this before)
    return () => {
      observer.disconnect();
      links.forEach((a) => a.removeEventListener("click", handleClick));
    };
  }, []);

  return null;
}