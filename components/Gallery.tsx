"use client";

import { useState } from "react";
import { GALLERY } from "@/lib/gallery";
import FilterDropdown from "./FilterDropdown";

const ALL = "all";
const TOTAL = GALLERY.reduce((n, g) => n + g.photos.length, 0);

export default function Gallery() {
  const [filter, setFilter] = useState(ALL);
  const groups = filter === ALL ? GALLERY : GALLERY.filter((g) => g.id === filter);

  const chips = [
    { id: ALL, name: "All Photos", count: TOTAL },
    ...GALLERY.map((g) => ({ id: g.id, name: g.name, count: g.photos.length })),
  ];

  return (
    <>
      <div className="gallery-filters" role="group" aria-label="Filter photos">
        {chips.map((chip) => (
          <button
            key={chip.id}
            className={filter === chip.id ? "gallery-chip active" : "gallery-chip"}
            aria-pressed={filter === chip.id}
            onClick={() => setFilter(chip.id)}
          >
            {chip.name}
            <span className="gallery-chip-count">{chip.count}</span>
          </button>
        ))}
      </div>

      {/* Phones get a dropdown instead of the chip row. */}
      <div className="gallery-select">
        <FilterDropdown label="Filter photos" options={chips} value={filter} onChange={setFilter} />
      </div>

      {groups.map((group) => (
        <section className="gallery-group" key={group.id} aria-labelledby={`g-${group.id}`}>
          <div className="gallery-group-head">
            <h2 id={`g-${group.id}`}>{group.name}</h2>
            <p>{group.description}</p>
          </div>
          <div className="gallery-grid">
            {group.photos.map((photo) => (
              <div className="gallery-card" key={photo.src}>
                <img src={photo.src} alt={photo.caption} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
