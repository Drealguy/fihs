"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const REVEAL_SELECTOR = [
  ".section-heading",
  ".feature-card",
  ".program-row",
  ".event-card",
  ".staff-card",
  ".gallery-card",
  ".contact-card",
  ".accordion-item",
  ".admit-row",
  ".values-layout",
  ".about-intro-media",
  ".footer-cta",
].join(", ");

// Whether ScrollSmoother runs; components creating pins use this to pick the pin type.
export const smoothScrollEnabled = () =>
  typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useGSAP(() => {
    if (!smoothScrollEnabled()) return;
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.1,
      smoothTouch: false, // native scrolling on phones feels better
      effects: true,
    });
    // Triggers created by child components before the smoother existed need recalculating.
    ScrollTrigger.refresh();
  });

  // One consistent entrance for headings and cards on every page: fade up, staggered per row.
  useGSAP(
    () => {
      if (!smoothScrollEnabled()) return;
      const items = gsap.utils.toArray<HTMLElement>(REVEAL_SELECTOR);
      gsap.set(items, { opacity: 0, y: 40 });
      ScrollTrigger.batch(items, {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            overwrite: true,
            // Hand transforms back to CSS so hover effects keep working.
            clearProps: "transform,opacity",
          }),
      });
    },
    { dependencies: [pathname], revertOnUpdate: true }
  );

  // New page: start at the top and recalculate trigger positions.
  useEffect(() => {
    ScrollSmoother.get()?.scrollTo(0, false);
    ScrollTrigger.refresh();
  }, [pathname]);

  // In-page anchor links (e.g. "#faq") scroll through the smoother.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const smoother = ScrollSmoother.get();
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      const hash = link?.getAttribute("href");
      if (!smoother || !hash || hash.length < 2) return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      smoother.scrollTo(target, true, "top 100px");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
