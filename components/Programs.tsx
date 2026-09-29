import Link from "next/link";
import { PROGRAMS } from "@/lib/programs";
import ArrowUpRight from "./ArrowUpRight";
import LinkButton from "./LinkButton";
import SectionHeading from "./SectionHeading";
import ProgramIcon from "./ProgramIcon";

export default function Programs() {
  return (
    <section className="feature-section">
      <SectionHeading
        badge="Our Programs"
        title="Pick The Right Path For Your Child"
        subtitle="From Junior to Senior Secondary, plus STEM, ICT, and the creative arts, there is a place for every learner at Fountain."
      />
      <div className="feature-grid">
        {PROGRAMS.map((program, i) => (
            <article className="feature-card program-tile" key={program.id}>
              <img className="program-tile-bg" src={program.image} alt="" loading="lazy" />
              <div className="feature-card-top">
                <span className="feature-icon">
                  <ProgramIcon id={program.id} />
                </span>
                <span className="feature-index">{String(i + 1).padStart(3, "0")}//</span>
              </div>
              <div className="feature-card-body">
                <h3>{program.title}</h3>
                <p>{program.text}</p>
                <div className="program-tile-more">
                  <ul>
                    {program.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <Link href="/academics" className="text-link">
                    Learn more <ArrowUpRight />
                  </Link>
                </div>
              </div>
            </article>
        ))}
      </div>
      <div className="section-actions">
        <LinkButton className="btn-primary" href="/academics" arrow>
          Explore All Programs
        </LinkButton>
      </div>
    </section>
  );
}
