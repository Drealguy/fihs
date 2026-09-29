import Link from "next/link";
import LinkButton from "./LinkButton";
import { GraduationCapIcon } from "./Icons";

const COLUMNS = [
  {
    title: "Main Pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/academics", label: "Programs" },
      { href: "/gallery", label: "Gallery" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { href: "/admission", label: "How to Apply" },
      { href: "/admission", label: "Entrance Exam Dates" },
      { href: "/admission", label: "School Fees" },
      { href: "/admission", label: "Scholarships" },
      { href: "/admission", label: "FAQs" },
    ],
  },
  {
    title: "Social Links",
    links: [
      {
        href: "https://web.facebook.com/school.fountain/about_contact_and_basic_info",
        label: "Facebook",
      },
      { href: "https://www.instagram.com/janicewalsh_1213/", label: "Instagram" },
      {
        href: "https://www.youtube.com/results?search_query=fountain+international+high+school",
        label: "YouTube",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div className="footer-cta-text">
          <span className="section-badge section-badge--accent">
            <GraduationCapIcon />
            Admissions 2026/27 Open
          </span>
          <h2>Join Fountain And Shape Your Child&apos;s Future</h2>
        </div>
        <LinkButton className="btn-white" href="/admission" arrow>
          Apply Now Today
        </LinkButton>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand" aria-label="Fountain International High School home">
            <img src="/logo.png" alt="" />
            <span className="brand-text">FIHS</span>
          </Link>
          <p>
            Fountain International High School, Ado-Ekiti. Excellence, Character, and Global
            Perspective.
          </p>
          <p className="footer-contact">
            +234 803 429 0207
            <br />
            info@fountain.edu.ng
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div className="footer-col" key={col.title}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("http") ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>© 2026 Fountain International High School. All Rights Reserved.</p>
        <a
          className="section-badge section-badge--accent footer-credit"
          href="https://wa.me/2349024931935"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Designed by Damilola. Chat on WhatsApp"
        >
          <GraduationCapIcon />
          Designed by Damilola
        </a>
      </div>
    </footer>
  );
}
