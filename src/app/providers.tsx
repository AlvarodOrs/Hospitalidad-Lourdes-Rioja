"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { usePageTheme } from "@/lib/themes/getTheme";

function applyTheme(theme: Record<string, string>) {
  const root = document.documentElement;

  for (const [key, value] of Object.entries(theme)) {
    root.style.setProperty(`--${key}`, value);
  }
}

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const theme = usePageTheme(pathname);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return <>{children}</>;
}