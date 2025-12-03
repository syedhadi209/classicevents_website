"use client";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div
        className={styles.sectionHeader}
        data-reveal
        data-reveal-direction="up"
      >
        <p className={styles.sectionEyebrow}>Contact</p>
        <h3 className={styles.sectionTitle}>Begin your Classic chapter.</h3>
        <p className={styles.sectionDescription}>
          Share a few details and our executive producer will follow up within 24
          hours to design a tailored consultation—virtual or in-person.
        </p>
      </div>
      <div className={styles.contact}>
        <div
          className={styles.contactDetails}
          data-reveal
          data-reveal-direction="left"
        >
          <div className={styles.contactGroup}>
            <h4 className={styles.contactLabel}>Phone No#</h4>
            <a href="tel:+92228402007" className={styles.contactLink}>
              +92 228 402007
            </a>
            <a href="tel:+92008402005" className={styles.contactLink}>
              +92 00-8402005
            </a>
          </div>
          <div className={styles.contactGroup}>
            <h4 className={styles.contactLabel}>Email</h4>
            <a
              href="mailto:classic.ahussain@gmail.com"
              className={styles.contactLink}
            >
              classic.ahussain@gmail.com
            </a>
          </div>
          <div className={styles.contactGroup}>
            <h4 className={styles.contactLabel}>Instagram</h4>
            <a
              href="https://www.instagram.com/classic_events111?igsh=MTFiYmZsZmE2dTRobQ=="
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              @classic_events111
            </a>
          </div>
        </div>
        <form
          className={styles.contactForm}
          data-reveal
          data-reveal-direction="right"
          data-reveal-delay="120ms"
        >
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@email.com"
            required
          />

          <label htmlFor="event">Event type</label>
          <select id="event" name="event">
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Religious / Cultural</option>
            <option>Custom Experience</option>
          </select>

          <label htmlFor="message">Tell us about your vision</label>
          <textarea
            id="message"
            name="message"
            placeholder="Guest count, location, dates, inspirations..."
          />

          <button type="submit" className={styles.primaryBtn}>
            Request a callback
          </button>
        </form>
      </div>
    </section>
  );
}

