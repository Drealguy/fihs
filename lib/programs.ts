export type Program = {
  id: "jss" | "ss" | "stem" | "arts";
  title: string;
  text: string;
  points: string[];
  image: string;
};

// Shared by the home page Programs section and the Programs (academics) page.
export const PROGRAMS: Program[] = [
  {
    id: "jss",
    title: "Junior Secondary (JSS 1-3)",
    text: "Foundational education in core subjects: Mathematics, English, Basic Science, Social Studies, Computer Studies, and Cultural Arts.",
    points: [
      "Strong literacy and numeracy foundation",
      "Introduction to sciences and technology",
      "Character and moral education",
    ],
    image: "/smile.jpg",
  },
  {
    id: "ss",
    title: "Senior Secondary (SS 1-3)",
    text: "Specialized preparation for WAEC, NECO, and JAMB examinations across Science, Arts, and Commercial departments.",
    points: [
      "Science: Physics, Chemistry, Biology, Further Maths",
      "Arts: Literature, Government, CRS, Economics",
      "Commercial: Accounting, Commerce, Economics",
    ],
    image: "/hg%20and%20hb.jpg",
  },
  {
    id: "stem",
    title: "STEM & ICT Program",
    text: "Hands-on learning in coding, robotics, computer applications, and digital literacy for 21st-century careers.",
    points: [
      "Computer Programming (Python, Scratch)",
      "Robotics and AI fundamentals",
      "Digital content creation",
    ],
    image: "/lab.jpg",
  },
  {
    id: "arts",
    title: "Creative & Cultural Arts",
    text: "Music, drama, visual arts, and cultural heritage programs to nurture creativity and expression.",
    points: [
      "Annual Cultural Day",
      "Art exhibitions and competitions",
      "Drama and music performances",
    ],
    image: "/music.jpg",
  },
];
