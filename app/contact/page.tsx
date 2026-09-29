import type { Metadata } from "next";
import ContactFlow from "@/components/ContactFlow";
import SectionHeading from "@/components/SectionHeading";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/Icons";

export const metadata: Metadata = { title: "Contact" };

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126718.084175155!2d5.167895!3d7.617536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1046e1b6b0b0b0b1%3A0x7b0b0b0b0b0b0b0!2sAdo-Ekiti!5e0!3m2!1sen!2sng!4v1699999999999!5m2!1sen!2sng";

export default function ContactPage() {
  return (
    <>
      <ContactFlow />

      <section className="feature-section feature-section--tint">
        <SectionHeading
          badge="Other Ways To Reach Us"
          title="Visit, Call, Or Message Us"
          subtitle="Our office is open Monday to Friday, 8:00am to 4:00pm, and Saturday, 9:00am to 12:00pm."
        />

        <div className="contact-cards">
          <article className="contact-card">
            <span className="feature-icon">
              <MapPinIcon size={24} />
            </span>
            <h3>Visit Us</h3>
            <p>
              P.M.B. 360101, Ado-Ekiti,
              <br />
              Ekiti State, Nigeria
            </p>
            <p className="contact-card-muted">
              Mon - Fri: 8:00am - 4:00pm
              <br />
              Sat: 9:00am - 12:00pm
            </p>
          </article>

          <article className="contact-card">
            <span className="feature-icon">
              <PhoneIcon />
            </span>
            <h3>Call Us</h3>
            <p>
              <a href="tel:+2348034290207">+234 803 429 0207</a> (Reception)
              <br />
              <a href="tel:+2348023456789">+234 802 345 6789</a>
              <br />
              <a href="tel:+2348034567890">+234 803 456 7890</a>
              <br />
              <a href="tel:+2348045678901">+234 804 567 8901</a>
            </p>
            <p className="contact-card-muted">
              WhatsApp: <a href="https://wa.me/2348060805020">+234 806 080 5020</a>
            </p>
          </article>

          <article className="contact-card">
            <span className="feature-icon">
              <MailIcon />
            </span>
            <h3>Email & Social</h3>
            <p>
              <a href="mailto:info@fountain.edu.ng">info@fountain.edu.ng</a>
              <br />
              <a href="mailto:admissions@fountain.edu.ng">admissions@fountain.edu.ng</a>
            </p>
            <p className="contact-card-muted">
              <a href="https://web.facebook.com/school.fountain/about_contact_and_basic_info" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              {" · "}
              <a href="https://www.instagram.com/janicewalsh_1213/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              {" · "}
              <a href="https://www.youtube.com/results?search_query=fountain+international+high+school" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </p>
          </article>
        </div>

        <div className="contact-map">
          <iframe title="Map of Ado-Ekiti" src={MAP_SRC} allowFullScreen loading="lazy" />
        </div>
      </section>
    </>
  );
}
