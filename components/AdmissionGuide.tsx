"use client";

import Link from "next/link";
import { useId, useState } from "react";
import ArrowUpRight from "./ArrowUpRight";
import { CheckIcon } from "./Icons";

export type GuideRow = {
  title: string;
  summary: string;
  details: string[];
  image: string;
  action: { label: string; href: string };
};

function Action({ label, href }: GuideRow["action"]) {
  const content = (
    <>
      {label} <ArrowUpRight />
    </>
  );
  // tel:/mailto:/#anchor links are plain anchors; site pages use Link.
  return href.startsWith("/") ? (
    <Link href={href} className="admit-row-action">
      {content}
    </Link>
  ) : (
    <a href={href} className="admit-row-action">
      {content}
    </a>
  );
}

// Full-width rows; the active one expands over a darkened photo.
// Mouse hover opens a row; tap/click/keyboard toggles it.
export default function AdmissionGuide({ rows }: { rows: GuideRow[] }) {
  const [open, setOpen] = useState(0);
  const id = useId();

  return (
    <div className="admit-list">
      {rows.map((row, i) => {
        const isOpen = open === i;
        return (
          <div
            key={row.title}
            className={isOpen ? "admit-row open" : "admit-row"}
            onPointerEnter={(e) => e.pointerType === "mouse" && setOpen(i)}
          >
            <img className="admit-row-bg" src={row.image} alt="" loading="lazy" />
            <div className="admit-row-head">
              <div>
                <h3>
                  <button
                    className="admit-row-toggle"
                    aria-expanded={isOpen}
                    aria-controls={`${id}-panel-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    {row.title}
                    {/* Visible +/- cue for touch screens, where there is no hover. */}
                    <span className="admit-row-icon" aria-hidden="true" />
                  </button>
                </h3>
                <p>{row.summary}</p>
              </div>
              <Action {...row.action} />
            </div>
            <div className="admit-row-panel" id={`${id}-panel-${i}`}>
              <div>
                <ul className="check-list">
                  {row.details.map((d) => (
                    <li key={d}>
                      <CheckIcon />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
