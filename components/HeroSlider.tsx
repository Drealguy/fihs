"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ArrowUpRight from "./ArrowUpRight";
import LinkButton from "./LinkButton";
import { smoothScrollEnabled } from "./SmoothScroll";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SLIDES = [
  {
    title: "Shape Tomorrow's",
    accent: "Leaders",
    text: "Excellence, Character, and Global Perspective — raising world-class citizens",
    cta: { label: "Enroll Now", href: "/admission" },
    secondary: { label: "Explore Programs", href: "/academics" },
    image: "/field.jpg",
    alt: "Fountain International High School campus",
  },
  {
    title: "State-of-the-Art",
    accent: "Labs",
    text: "Modern science and technology facilities for future innovators",
    cta: { label: "Explore Programs", href: "/academics" },
    secondary: { label: "Apply Now", href: "/admission" },
    image: "/lab.jpg",
    alt: "Science laboratory at Fountain International High School",
  },
  {
    title: "Holistic",
    accent: "Development",
    text: "Arts, sports, and character formation beyond academics",
    cta: { label: "View Campus Life", href: "/gallery" },
    secondary: { label: "About Us", href: "/about" },
    image: "/music.jpg",
    alt: "Music and arts class at Fountain International High School",
  },
];

const INTERVAL_MS = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [showToast, setShowToast] = useState(true);

  // Restart the timer whenever the slide changes, so manual picks get a full interval.
  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL_MS);
    return () => clearTimeout(id);
  }, [index]);

  // Desktop: pin the hero so the next section slides up over it, while the hero text drifts away.
  // Below 1101px the admissions card sits under the hero, so pinning would hide it.
  const heroRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1101px) and (prefers-reduced-motion: no-preference)", () => {
        const hero = heroRef.current!;
        const headerHeight = () => document.querySelector(".site-header")?.clientHeight ?? 0;
        const range = {
          trigger: hero,
          start: () => `top ${headerHeight()}px`,
          end: () => `+=${hero.offsetHeight}`,
          invalidateOnRefresh: true,
        };
        ScrollTrigger.create({
          ...range,
          pin: true,
          pinSpacing: false,
          pinType: smoothScrollEnabled() ? "transform" : "fixed",
        });
        gsap.to(hero.querySelectorAll(".slide-content, .hero-dots"), {
          yPercent: -18,
          opacity: 0,
          ease: "none",
          scrollTrigger: { ...range, scrub: true },
        });
      });
      return () => mm.revert();
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="Highlights"
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.image}
          className={i === index ? "slide active" : "slide"}
          aria-hidden={i !== index}
        >
          <img className="slide-bg" src={slide.image} alt={slide.alt} />
          <div className="slide-content">
            <h1>
              {slide.title} <span className="accent">{slide.accent}</span>
            </h1>
            <p>{slide.text}</p>
            <div className="hero-actions">
              <LinkButton className="hero-cta" href={slide.cta.href} arrow>
                {slide.cta.label}
              </LinkButton>
              <LinkButton className="hero-cta-ghost" href={slide.secondary.href}>
                {slide.secondary.label}
              </LinkButton>
            </div>
          </div>
        </div>
      ))}

      {showToast && (
        <aside className="hero-toast" aria-label="Admissions announcement">
          <div className="hero-toast-head">
            <span className="hero-toast-tag">
              <span className="pulse-dot" aria-hidden="true" />
              Now Open
            </span>
            <button
              className="hero-toast-close"
              onClick={() => setShowToast(false)}
              aria-label="Dismiss announcement"
            >
              &times;
            </button>
          </div>
          <h2>Admissions for 2026/27</h2>
          <p>
            Admissions are now open for the twenty-first academic session. Limited seats available.
          </p>
          <Link href="/admission" className="text-link">
            Apply now <ArrowUpRight />
          </Link>
        </aside>
      )}

      <div className="hero-dots">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.image}
            className={i === index ? "hero-dot active" : "hero-dot"}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
