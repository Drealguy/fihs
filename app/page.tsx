import HeroSlider from "@/components/HeroSlider";
import WhyChoose from "@/components/WhyChoose";
import Programs from "@/components/Programs";
import Events from "@/components/Events";
import FaqSection from "@/components/FaqSection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <WhyChoose />
      <Programs />
      <Events />
      <FaqSection />
    </>
  );
}
