export type GalleryGroup = {
  id: string;
  name: string;
  description: string;
  photos: { src: string; caption: string }[];
};

// Grouped by what each photo shows; captions are used as alt text.
export const GALLERY: GalleryGroup[] = [
  {
    id: "cultural-day",
    name: "Cultural Day",
    description: "Traditional attire, food, music, drama, and games celebrating Nigerian heritage.",
    photos: [
      { src: "/culture.jpg", caption: "Cultural Day Guests" },
      { src: "/blue.jpg", caption: "Royal Attire" },
      { src: "/img6.jpg", caption: "Traditional Dance" },
      { src: "/img1.jpg", caption: "Talking Drum" },
      { src: "/img2.jpg", caption: "Traditional Song" },
      { src: "/img3.jpg", caption: "Cultural Presentation" },
      { src: "/img8.jpg", caption: "Cultural Performance" },
      { src: "/img17.jpg", caption: "Cultural Queen" },
      { src: "/img12.jpg", caption: "Traditional Couple" },
      { src: "/img43.jpg", caption: "Gele & Ankara" },
      { src: "/img44.jpg", caption: "Calabash Carriers" },
      { src: "/img18.jpg", caption: "Drama Sketch" },
      { src: "/img25.jpg", caption: "Village Drama" },
      { src: "/img32.jpg", caption: "Stage Drama" },
      { src: "/img0.jpg", caption: "Traditional Food" },
      { src: "/img9.jpg", caption: "Food Exhibition" },
      { src: "/img14.jpg", caption: "Cooking Team" },
      { src: "/img15.jpg", caption: "Cooking Demo" },
      { src: "/img16.jpg", caption: "Pounding Yam" },
      { src: "/img13.jpg", caption: "Ayo Game" },
    ],
  },
  {
    id: "sports",
    name: "Sports",
    description: "Inter-house sports, football, march past, and our trophy winners.",
    photos: [
      { src: "/yellow.jpg", caption: "Yellow House" },
      { src: "/red.jpg", caption: "Red House March Past" },
      { src: "/img35.jpg", caption: "Field Display" },
      { src: "/img28.jpg", caption: "School Team" },
      { src: "/img27.jpg", caption: "Football" },
      { src: "/img33.jpg", caption: "Champions" },
      { src: "/tropy.jpg", caption: "Trophy Winners" },
      { src: "/img36.jpg", caption: "Sports Officials" },
    ],
  },
  {
    id: "celebrations",
    name: "Celebrations",
    description: "Graduation, prize giving, valedictory, and end of year parties.",
    photos: [
      { src: "/img22.jpg", caption: "Graduation Day" },
      { src: "/img38.jpg", caption: "Graduands" },
      { src: "/img19.jpg", caption: "Proud Graduate" },
      { src: "/img23.jpg", caption: "Valedictory Dance" },
      { src: "/img29.jpg", caption: "Special Guests" },
      { src: "/green.jpg", caption: "Prize Giving" },
      { src: "/photo.jpg", caption: "Awards Night" },
      { src: "/img00.jpg", caption: "Award Presentation" },
      { src: "/jamb.jpg", caption: "2025 UTME Results" },
      { src: "/img30.jpg", caption: "Kids Co. Show" },
    ],
  },
  {
    id: "events",
    name: "Events & Talks",
    description: "Guest speakers, student voices, music, and parents' forums.",
    photos: [
      { src: "/img4.jpg", caption: "Guest Speaker" },
      { src: "/img41.jpg", caption: "Motivational Talk" },
      { src: "/img24.jpg", caption: "Open-Air Talk" },
      { src: "/img11.jpg", caption: "Student Speaker" },
      { src: "/img5.jpg", caption: "Student Audience" },
      { src: "/img26.jpg", caption: "School Choir" },
      { src: "/img7.jpg", caption: "Saxophone Solo" },
      { src: "/img37.jpg", caption: "Live Music" },
      { src: "/img34.jpg", caption: "Parents' Forum" },
    ],
  },
  {
    id: "staff-campus",
    name: "Staff & Campus",
    description: "The people and places behind a Fountain education.",
    photos: [
      { src: "/staff.jpg", caption: "Our Staff" },
      { src: "/img42.jpg", caption: "Management Team" },
      { src: "/director.jpg", caption: "Leadership" },
      { src: "/hg%20and%20hb.jpg", caption: "House Prefects" },
      { src: "/asembly.jpg", caption: "Morning Assembly" },
      { src: "/field.jpg", caption: "School Field" },
      { src: "/lab.jpg", caption: "Science Lab" },
      { src: "/music.jpg", caption: "Music Class" },
      { src: "/img39.jpg", caption: "ICT Lab" },
      { src: "/img40.jpg", caption: "ICT Instructor" },
      { src: "/smile.jpg", caption: "Happy Student" },
    ],
  },
];
