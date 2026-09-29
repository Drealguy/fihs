"use client";

import { useState } from "react";
import { FAQS } from "@/lib/faqs";
import LinkButton from "./LinkButton";
import SectionHeading from "./SectionHeading";

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="feature-section faq-home" id="faq">
      <div className="faq-home-intro">
        <SectionHeading
          align="left"
          badge="Quick Answers"
          title="Everything You Want To Know"
          subtitle="Admissions, fees, scholarships, and more. Can't find your answer? Our admissions office is happy to help."
        />
        <LinkButton className="btn-primary" href="/contact" arrow>
          Contact Us
        </LinkButton>
      </div>

      <div className="accordion">
        {FAQS.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div className={isOpen ? "accordion-item open" : "accordion-item"} key={faq.q}>
              <h3>
                <button
                  className="accordion-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {faq.q}
                  <span className="accordion-icon" aria-hidden="true" />
                </button>
              </h3>
              <div
                className="accordion-panel"
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
              >
                <div>
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
