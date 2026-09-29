import SectionHeading from "./SectionHeading";
import { FlaskIcon, ShieldIcon, TeacherIcon, TrophyIcon } from "./Icons";

const REASONS = [
  {
    Icon: FlaskIcon,
    title: "Modern Facilities",
    image: "/lab.jpg",
    text: "Smart classrooms, science labs, ICT center, and library",
    tags: ["Science Labs", "ICT Center", "Library", "Smart Classrooms"],
    tile: "bento-large bento-dark",
  },
  {
    Icon: TeacherIcon,
    title: "Expert Teachers",
    image: "/staff.jpg",
    text: "Dedicated, qualified educators with passion for excellence",
    tile: "bento-wide",
  },
  {
    Icon: ShieldIcon,
    title: "Moral Excellence",
    image: "/tropy.jpg",
    text: "Character development and discipline as core values",
    tile: "bento-accent",
  },
  {
    Icon: TrophyIcon,
    title: "Extracurriculars",
    image: "/culture.jpg",
    text: "Sports, clubs, debate, cultural activities, and more",
    tile: "",
  },
];

export default function WhyChoose() {
  return (
    <section className="feature-section feature-section--tint overlay-section">
      <SectionHeading
        badge="Why Choose Us"
        title="Why Choose Fountain?"
        subtitle="Excellence, character, and a supportive environment where every student gets the attention needed to excel."
      />
      <div className="bento-grid">
        {REASONS.map(({ Icon, title, text, tags, tile, image }, i) => (
          <article className={`feature-card bento-card ${tile}`} key={title} tabIndex={0}>
            <img className="bento-bg" src={image} alt="" loading="lazy" />
            <div className="feature-card-top">
              <span className="feature-icon">
                <Icon />
              </span>
              <span className="feature-index">{String(i + 1).padStart(3, "0")}//</span>
            </div>
            <div className="feature-card-body">
              <h3>{title}</h3>
              <p>{text}</p>
              {tags && (
                <ul className="bento-tags">
                  {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
