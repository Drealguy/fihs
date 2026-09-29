import type { Metadata } from "next";
import LinkButton from "@/components/LinkButton";
import ProgramIcon from "@/components/ProgramIcon";
import SectionHeading from "@/components/SectionHeading";
import { BookIcon, GraduationCapIcon, LaptopIcon, TrophyIcon } from "@/components/Icons";
import { PROGRAMS } from "@/lib/programs";

export const metadata: Metadata = { title: "Programs" };

const EXAMS = [
  { Icon: GraduationCapIcon, name: "WAEC", desc: "West African Senior School Certificate Examination" },
  { Icon: BookIcon, name: "NECO", desc: "National Examination Council (Nigeria)" },
  { Icon: TrophyIcon, name: "JAMB/UTME", desc: "University Tertiary Matriculation Examination" },
  { Icon: LaptopIcon, name: "Digital Literacy", desc: "Certificate in Computer Applications" },
];

const index = (i: number) => `${String(i + 1).padStart(3, "0")}//`;

export default function AcademicsPage() {
  return (
    <>
      <section className="about-intro">
        <SectionHeading
          level={1}
          badge="Our Programs"
          title="Academic Excellence Through A Comprehensive Curriculum And Future-Ready Skills"
          subtitle="Comprehensive curriculum, modern pedagogy, and future-ready skills, from Junior Secondary through to WAEC, NECO, and JAMB."
        />
        <div className="about-intro-media">
          <img src="/asembly.jpg" alt="Fountain International High School building and students" />
        </div>
      </section>

      <section className="feature-section">
        <SectionHeading
          badge="What We Offer"
          title="Programs Designed For Every Stage"
          subtitle="Each program combines the Nigerian curriculum with modern international practice, character education, and hands-on learning."
        />
        <div className="program-rows">
          {PROGRAMS.map((program, i) => (
            <article className="program-row" key={program.id}>
              <div className="program-row-media">
                <img src={program.image} alt={program.title} loading="lazy" />
              </div>
              <div className="program-row-body">
                <div className="feature-card-top">
                  <span className="feature-icon">
                    <ProgramIcon id={program.id} />
                  </span>
                  <span className="feature-index">{index(i)}</span>
                </div>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
                <ul className="dot-list">
                  {program.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section feature-section--tint">
        <SectionHeading
          badge="Examinations"
          title="Examinations & Certifications"
          subtitle="Students are fully prepared for national examinations and leave with practical digital certification."
        />
        <div className="feature-grid">
          {EXAMS.map(({ Icon, name, desc }, i) => (
            <article className="feature-card exam-card" key={name}>
              <div className="feature-card-top">
                <span className="feature-icon">
                  <Icon />
                </span>
                <span className="feature-index">{index(i)}</span>
              </div>
              <div className="feature-card-body">
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="section-actions">
          <LinkButton className="btn-primary" href="/admission" arrow>
            Apply Now
          </LinkButton>
        </div>
      </section>
    </>
  );
}
