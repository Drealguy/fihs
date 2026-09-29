"use client";

import { useId, useState, type KeyboardEvent } from "react";
import SectionHeading from "./SectionHeading";

export type ShowcaseItem = {
  name: string;
  paragraphs: string[];
  image: string;
  alt: string;
};

type Props = {
  badge: string;
  title: string;
  subtitle?: string;
  items: ShowcaseItem[];
  tint?: boolean;
};

// Numbered tab list on the left, text + photo panel on the right.
export default function TabShowcase({ badge, title, subtitle, items, tint = false }: Props) {
  const [active, setActive] = useState(0);
  const id = useId();
  const item = items[active];
  const label = (i: number) => `${String(i + 1).padStart(2, "0")} - ${items[i].name}`;

  // Arrow keys move between tabs (WAI-ARIA tabs pattern); the list is a row on small screens.
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const steps: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    const step = steps[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (active + step + items.length) % items.length;
    setActive(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  };

  return (
    <section className={tint ? "feature-section feature-section--tint" : "feature-section"}>
      <SectionHeading badge={badge} title={title} subtitle={subtitle} />

      <div className="values-layout">
        <div className="values-tabs" role="tablist" aria-orientation="vertical" onKeyDown={onKeyDown}>
          {items.map((it, i) => (
            <button
              key={it.name}
              id={`${id}-tab-${i}`}
              role="tab"
              aria-selected={i === active}
              aria-controls={`${id}-panel`}
              tabIndex={i === active ? 0 : -1}
              className={i === active ? "values-tab active" : "values-tab"}
              onClick={() => setActive(i)}
            >
              {label(i)}
            </button>
          ))}
        </div>

        <div
          className="values-panel"
          id={`${id}-panel`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${active}`}
          key={item.name}
        >
          <div className="values-panel-text">
            <h3>{label(active)}</h3>
            {item.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="values-panel-media">
            <img src={item.image} alt={item.alt} />
          </div>
        </div>
      </div>
    </section>
  );
}
