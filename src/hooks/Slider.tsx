"use client";

import { useEffect, useState } from "react";

type Slide = {
  image: string;
  order: number;
};

export default function Slider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  const sortedSlides = [...slides].sort((a, b) => a.order - b.order);

  useEffect(() => {
    if (!sortedSlides.length) return;

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % sortedSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [sortedSlides]);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {sortedSlides.map((slide, i) => (
          <div className="slide" key={i}>
            <img src={slide.image} alt={`Slide ${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}