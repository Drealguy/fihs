import SectionHeading from "./SectionHeading";

type StaffMember = {
  name: string;
  role: string;
  // Path in /public; leave empty to show the placeholder silhouette.
  image?: string;
};

// TODO: replace the placeholder names and add photos (e.g. "/staff-principal.jpg").
const STAFF: StaffMember[] = [
  { name: "Staff Name", role: "Principal" },
  { name: "Staff Name", role: "Vice Principal, Academics" },
  { name: "Staff Name", role: "Vice Principal, Administration" },
  { name: "Staff Name", role: "Head of Boarding" },
];

export default function StaffSection() {
  return (
    <section className="feature-section feature-section--tint">
      <SectionHeading
        badge="Our Staff"
        title="Our Passionate And Qualified Teaching Staff"
        subtitle="Dedicated, qualified educators with a passion for excellence, guiding every student to reach their full potential."
      />
      <div className="staff-grid">
        {STAFF.map((member) => (
          <article className="staff-card" key={member.role}>
            <div className="staff-photo">
              {member.image ? (
                <img src={member.image} alt={`${member.name}, ${member.role}`} loading="lazy" />
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <circle cx="12" cy="8" r="4.2" />
                  <path d="M3.5 22c0-4.7 3.8-8 8.5-8s8.5 3.3 8.5 8Z" />
                </svg>
              )}
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
