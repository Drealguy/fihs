"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LinkButton from "./LinkButton";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Programs" },
  { href: "/admission", label: "Admissions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const toggleMenu = () => setOpen((o) => !o);

  return (
    <>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Fountain International High School home">
          <img src="/logo.png" alt="" />
          <span className="brand-text">FIHS</span>
        </Link>

        <nav id="navMenu" className={open ? "open" : undefined}>
          <button className="nav-close" onClick={toggleMenu} aria-label="Close menu">
            &times;
          </button>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <LinkButton className="apply-btn nav-apply" href="/admission" arrow>
            Apply Now
          </LinkButton>
        </nav>

        <LinkButton className="apply-btn header-apply" href="/admission" arrow>
          Apply Now
        </LinkButton>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="navMenu"
        >
          &#x2630;
        </button>
      </header>
    </>
  );
}
