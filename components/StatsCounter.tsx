"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 98, suffix: "%", label: "Pass Rate (WAEC/NECO)" },
  { value: 1000, suffix: "+", label: "Graduates" },
  { value: 30, suffix: "+", label: "Qualified Staff" },
];

const DURATION_MS = 1800;

export default function StatsCounter() {
  const ref = useRef<HTMLElement>(null);
  // Server render shows final numbers (no-JS / SEO); the client resets and counts up on scroll.
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setProgress(0);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION_MS, 1);
          setProgress(1 - Math.pow(1 - t, 3)); // ease-out cubic
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="stats-section" ref={ref} aria-label="Fountain at a glance">
      {STATS.map((stat) => (
        <div className="stat-card" key={stat.label}>
          <div className="stat-number">
            <span aria-hidden="true">{Math.round(stat.value * progress).toLocaleString()}</span>
            <span className="visually-hidden">{stat.value.toLocaleString()}</span>
            <span className="stat-suffix">{stat.suffix}</span>
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}
