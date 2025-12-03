"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div
        className={styles.heroContent}
        data-reveal
        data-reveal-direction="up"
        data-reveal-delay="0ms"
      >
        <p className={styles.eyebrow}>Luxury Event Atelier</p>
        <h2 className={styles.heroTitle}>
          Modern celebrations curated with classic taste.
        </h2>
        <p className={styles.heroSubtitle}>
          We orchestrate weddings, milestone birthdays, religious gatherings,
          and bespoke experiences with concierge-level care. Our team fuses
          refined design, cultural fluency, and technical mastery so you can be
          present for every luminous moment.
        </p>
        <div className={styles.heroActions}>
          <a className={styles.primaryBtn} href="#contact">
            Plan a consultation
          </a>
          <a className={styles.secondaryBtn} href="#services">
            Explore services
          </a>
        </div>
      </div>
    </header>
  );
}


