import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <section className="feature-section">
      <SectionHeading
        level={1}
        badge="Gallery"
        title="Memory Lane: Moments Of Excellence, Culture, And Joy"
        subtitle="Browse life at Fountain by category, from Cultural Day and sports to graduation and the people who make it all happen."
      />
      <Gallery />
    </section>
  );
}
