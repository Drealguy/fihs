import type { Metadata } from "next";
import AdmissionGuide, { type GuideRow } from "@/components/AdmissionGuide";
import FaqSection from "@/components/FaqSection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Admissions 2026/27" };

const GUIDE: GuideRow[] = [
  {
    title: "How To Apply",
    summary: "Four simple steps: fill the form, pay the fee, send evidence, and sit the entrance exam.",
    details: [
      "Step 1: Fill the online admissions form",
      "Step 2: Pay the ₦15,000 application fee into Access Bank Account No. 0009743538 (Fountain Int'l Schools Ltd)",
      "Step 3: Send payment evidence via WhatsApp to +2348060805020 or email office@fountain.edu.ng",
      "Step 4: Receive your exam details and take the entrance examination",
    ],
    image: "/asembly.jpg",
    action: { label: "Contact Us", href: "/contact" },
  },
  {
    title: "Entrance Exam Dates 2026",
    summary: "Six exam dates through the year. Call us to arrange an alternative date.",
    details: [
      "Saturday 31st January 2026",
      "Saturday 28th February 2026",
      "Saturday 14th March 2026",
      "Saturday 25th April 2026",
      "Saturday 23rd May 2026",
      "1st August 2026",
    ],
    image: "/lab.jpg",
    action: { label: "Call Us", href: "tel:+2348034290207" },
  },
  {
    title: "Admission Criteria",
    summary: "Age, class, entrance exam, interview, and readiness for school life.",
    details: [
      "Age: at least 10 years old before resumption date",
      "Class: completed at least Primary five (5)",
      "Entrance Exam: Mathematics, English, and General Aptitude",
      "Interview: physical or virtual interview for all candidates",
      "Independence: able to manage personal belongings and self-care",
      "Health: good physical and mental health required for boarding",
    ],
    image: "/smile.jpg",
    action: { label: "Read FAQs", href: "#faq" },
  },
  {
    title: "School Fees 2026/2027",
    summary: "₦300,000 for day students and ₦750,000 for boarding, with payment plans available.",
    details: [
      "Tuition: ₦250,000 per session",
      "Boarding: ₦450,000 per session",
      "Development Levy: ₦50,000",
      "Total: ₦300,000 (Day) / ₦750,000 (Boarding)",
      "Payment plans available",
    ],
    image: "/hg%20and%20hb.jpg",
    action: { label: "Ask About Plans", href: "/contact" },
  },
  {
    title: "Scholarship Offers 2026-2027",
    summary: "Merit-based scholarships covering 25%-100% of tuition for top performers.",
    details: [
      "Covers 25%-100% of tuition",
      "Awarded to top performers in the entrance examinations",
      "Scholarship exam holds March 14th, 2026 at all centres",
    ],
    image: "/tropy.jpg",
    action: { label: "Call Us", href: "tel:+2348034290207" },
  },
];

export default function AdmissionPage() {
  return (
    <>
      <section className="feature-section">
        <SectionHeading
          level={1}
          badge="Admissions 2026/27"
          title="Admissions For The 2026/27 Session Are Now Open"
          subtitle="Admissions are open for the twenty-first academic session. Here's everything you need to join Fountain: steps, dates, requirements, fees, and scholarships."
        />
        <AdmissionGuide rows={GUIDE} />
        <p className="admit-help-line">
          Need help? Call <a href="tel:+2348034290207">+234 803 429 0207</a> or{" "}
          <a href="tel:+2348023456789">+234 802 345 6789</a>, or email{" "}
          <a href="mailto:admissions@fountain.edu.ng">admissions@fountain.edu.ng</a>
        </p>
      </section>

      <FaqSection />
    </>
  );
}
