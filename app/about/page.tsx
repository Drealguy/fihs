import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import StatsCounter from "@/components/StatsCounter";
import TabShowcase, { type ShowcaseItem } from "@/components/TabShowcase";
import StaffSection from "@/components/StaffSection";

export const metadata: Metadata = { title: "About FIHS" };

const WHO_WE_ARE: ShowcaseItem[] = [
  {
    name: "Our Philosophy",
    paragraphs: [
      "Fountain International High School, located in Ado-Ekiti, Ekiti State, is committed to delivering world-class education in a disciplined and intellectually stimulating environment. Since its establishment, the school has focused on raising well-rounded students who are academically sound, morally upright, and prepared to contribute meaningfully to society.",
      "The school operates a curriculum that combines the Nigerian educational system with modern international practices. Students are prepared for key examinations such as WAEC and NECO while also developing critical thinking, creativity, and leadership skills needed in today's world.",
    ],
    image: "/lab.jpg",
    alt: "Students learning in the science laboratory",
  },
  {
    name: "Our Commitment",
    paragraphs: [
      "At Fountain International High School, education extends beyond academics. The institution emphasizes character formation, discipline, and responsibility. Students are guided to become confident individuals with integrity and strong moral values.",
      "With qualified teachers, modern learning facilities, and a supportive environment, the school ensures every student receives the attention needed to excel.",
    ],
    image: "/staff.jpg",
    alt: "Fountain International High School staff",
  },
  {
    name: "Our Achievements",
    paragraphs: [
      "Fountain International High School has recorded several achievements in both academics and student development. The school is widely recognized for its outstanding performance in external examinations, including WAEC and NECO, with students consistently producing excellent results.",
      "In UTME (JAMB), students have achieved high scores, with many scoring above 300. The school has also made significant progress in science and technology education, providing modern ICT facilities and encouraging participation in coding, robotics, and science clubs.",
    ],
    image: "/jamb.jpg",
    alt: "Fountain International High School 2025 UTME results",
  },
  {
    name: "Leadership Message",
    paragraphs: [
      "“We believe that every child has unique potential waiting to be unleashed. At Fountain International, we don't just teach; we inspire, mentor, and prepare students for life beyond the classroom. Our commitment is to raise leaders who will transform Nigeria and the world.”",
      "— Principal, Fountain International High School",
    ],
    image: "/download.jpg",
    alt: "Fountain International High School crest",
  },
];

const CORE_VALUES: ShowcaseItem[] = [
  {
    name: "Excellence",
    paragraphs: [
      "Striving for the highest standards in academics and character. Our students are consistently recognised for outstanding WAEC, NECO, and JAMB results, and we push every learner to reach their full potential.",
    ],
    image: "/tropy.jpg",
    alt: "Students with awards",
  },
  {
    name: "Integrity",
    paragraphs: [
      "Building honest, responsible, and trustworthy individuals. We guide students to become confident young people with strong moral values who do the right thing, even when no one is watching.",
    ],
    image: "/hg%20and%20hb.jpg",
    alt: "Student prefects",
  },
  {
    name: "Discipline",
    paragraphs: [
      "Cultivating self-control, respect, and order. A disciplined, supportive environment gives every student the focus and structure they need to excel in class and beyond.",
    ],
    image: "/asembly.jpg",
    alt: "Students at morning assembly",
  },
  {
    name: "Service",
    paragraphs: [
      "Encouraging contribution to community and society. We raise leaders who will use their knowledge and character to make a meaningful difference in Nigeria and the world.",
    ],
    image: "/culture.jpg",
    alt: "Cultural Day celebration",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="about-intro">
        <SectionHeading
          level={1}
          badge="About Us"
          title="Fountain International High School: Where Excellence, Character, And Global Perspective Raise Tomorrow's Leaders"
        />
        <div className="about-intro-media">
          <img src="/field.jpg" alt="Fountain International High School campus" />
        </div>
      </section>

      <StatsCounter />

      <TabShowcase
        tint
        badge="Who We Are"
        title="Get To Know Fountain International High School"
        subtitle="Our philosophy, our commitment to every student, and the results that make us proud."
        items={WHO_WE_ARE}
      />

      <TabShowcase
        badge="Our Core Values"
        title="The Values That Shape Every Fountain Student"
        subtitle="Education at Fountain extends beyond academics: character, discipline, and responsibility guide everything we do."
        items={CORE_VALUES}
      />

      <StaffSection />
    </>
  );
}
