"use client";

import { useEffect, useState } from "react";

type Quote = {
  text: string;
  author: string;
  role: string;
};

export default function Testimonials({ quotes }: { quotes: Quote[] }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (!quotes?.length) return;

    const interval = setInterval(() => {
      setFade(true);

      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setFade(false);
      }, 682);

      return () => clearTimeout(timeout);
    }, 20000);

    return () => clearInterval(interval);
  }, [quotes]);

  if (!quotes?.length) return null;

  const q = quotes[index];

  return (
    <div className={`testimonial-quote ${fade ? "fade-out" : ""}`}>
      <blockquote>“{q.text}”</blockquote>

      <div className="testimonial-author">
        <div className="author-line" />
        <span className="author-name">
          {q.author} · {q.role}
        </span>
      </div>
    </div>
  );
}