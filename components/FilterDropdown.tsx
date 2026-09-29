"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { CheckIcon } from "./Icons";

export type FilterOption = { id: string; name: string; count: number };

type Props = {
  label: string;
  options: FilterOption[];
  value: string;
  onChange: (id: string) => void;
};

// Custom listbox dropdown (WAI-ARIA listbox pattern): arrow keys, Enter/Space, Escape, outside click.
export default function FilterDropdown({ label, options, value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const id = useId();

  const selectedIndex = Math.max(0, options.findIndex((o) => o.id === value));
  const selected = options[selectedIndex];

  const openMenu = () => {
    setActive(selectedIndex);
    setOpen(true);
  };

  const close = (refocus = true) => {
    setOpen(false);
    if (refocus) triggerRef.current?.focus();
  };

  const choose = (i: number) => {
    onChange(options[i].id);
    close();
  };

  useEffect(() => {
    if (!open) return;
    listRef.current?.focus();
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) close(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const onTriggerKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      openMenu();
    }
  };

  const onListKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    const last = options.length - 1;
    const moves: Record<string, () => number> = {
      ArrowDown: () => Math.min(active + 1, last),
      ArrowUp: () => Math.max(active - 1, 0),
      Home: () => 0,
      End: () => last,
    };
    if (moves[e.key]) {
      e.preventDefault();
      setActive(moves[e.key]());
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(active);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "Tab") {
      close(false);
    }
  };

  return (
    <div className={open ? "filter-dropdown open" : "filter-dropdown"} ref={wrapRef}>
      <span className="visually-hidden" id={`${id}-label`}>
        {label}
      </span>
      <button
        ref={triggerRef}
        className="filter-dropdown-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${id}-label ${id}-value`}
        onClick={() => (open ? close() : openMenu())}
        onKeyDown={onTriggerKeyDown}
      >
        <span id={`${id}-value`}>{selected.name}</span>
        <span className="gallery-chip-count">{selected.count}</span>
        <span className="filter-dropdown-chevron" aria-hidden="true" />
      </button>

      {open && (
        <ul
          ref={listRef}
          className="filter-dropdown-menu"
          role="listbox"
          tabIndex={-1}
          aria-labelledby={`${id}-label`}
          aria-activedescendant={`${id}-opt-${active}`}
          onKeyDown={onListKeyDown}
        >
          {options.map((opt, i) => {
            const isSelected = opt.id === value;
            const classes = ["filter-dropdown-option"];
            if (isSelected) classes.push("selected");
            if (i === active) classes.push("active");
            return (
              <li
                key={opt.id}
                id={`${id}-opt-${i}`}
                role="option"
                aria-selected={isSelected}
                className={classes.join(" ")}
                onClick={() => choose(i)}
                onPointerMove={() => setActive(i)}
              >
                <span>{opt.name}</span>
                <span className="gallery-chip-count">{opt.count}</span>
                <span className="filter-dropdown-check" aria-hidden="true">
                  {isSelected && <CheckIcon />}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
