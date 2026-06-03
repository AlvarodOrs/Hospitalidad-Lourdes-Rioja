"use client";

import { useEffect } from "react";

export function useScrollNav() {
  useEffect(() => {
    const nav = document.getElementById("main-nav");

    const onScroll = () => {
      if (!nav) return;
      nav.classList.toggle("scrolled", window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}