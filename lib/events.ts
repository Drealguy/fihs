export type SchoolEvent = {
  slug: string;
  title: string;
  text: string;
  when: string;
  where: string;
  image: string;
};

export const EVENTS: SchoolEvent[] = [
  {
    slug: "inter-house-sports",
    title: "Inter-House Sports",
    text: "Red, Blue, Green, and Yellow houses march past and compete for the overall trophy.",
    when: "Second Term",
    where: "School Sports Field",
    image: "/yellow.jpg",
  },
  {
    slug: "christmas-carol-and-party",
    title: "Christmas Carol & Party",
    text: "Carols, drama, gifts, and a festive party to close the first term together.",
    when: "December",
    where: "School Hall",
    image: "/photo.jpg",
  },
  {
    slug: "end-of-year-party-and-prize-giving",
    title: "End of Year Party & Prize Giving",
    text: "Celebrating our best students with awards, crowns, and a well-earned party.",
    when: "July",
    where: "School Hall",
    image: "/green.jpg",
  },
  {
    slug: "cultural-day",
    title: "Cultural Day",
    text: "Students showcase Nigeria's rich heritage through attire, food, music, and dance.",
    when: "First Term",
    where: "School Campus",
    image: "/blue.jpg",
  },
  {
    slug: "entrance-examination",
    title: "Entrance Examination",
    text: "Mathematics, English, and General Aptitude for 2026/27 admission candidates.",
    when: "Sat 23rd May 2026",
    where: "All Centres",
    image: "/asembly.jpg",
  },
];

