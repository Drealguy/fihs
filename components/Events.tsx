"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { EVENTS } from "@/lib/events";
import LinkButton from "./LinkButton";
import SectionHeading from "./SectionHeading";
import EventMeta from "./EventMeta";
import { ArrowLeftIcon, ArrowRightIcon } from "./Icons";

const CARD_GAP = 20;

export default function Events() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft >= track.scrollWidth - track.clientWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    track.scrollBy({ left: direction * (card.offsetWidth + CARD_GAP), behavior: "smooth" });
  };

  return (
    <section className="feature-section feature-section--tint events-section">
      <div className="events-head">
        <SectionHeading
          align="left"
          badge="Our Events"
          title="Life Beyond The Classroom At Fountain"
        />
        <div className="events-nav">
          <button
            className="round-btn"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Previous events"
          >
            <ArrowLeftIcon />
          </button>
          <button
            className="round-btn"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Next events"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>

      <div className="events-track" ref={trackRef} onScroll={() => requestAnimationFrame(update)}>
        {EVENTS.map((event) => (
          <Link href="/gallery" className="event-card" key={event.slug}>
            <div className="event-media">
              <img src={event.image} alt="" loading="lazy" />
            </div>
            <h3>{event.title}</h3>
            <p>{event.text}</p>
            <EventMeta when={event.when} where={event.where} />
          </Link>
        ))}
      </div>

      <div className="section-actions">
        <LinkButton className="btn-primary" href="/gallery" arrow>
          View Gallery
        </LinkButton>
      </div>
    </section>
  );
}
