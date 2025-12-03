"use client";

import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContent} data-reveal data-reveal-direction="up">
        <p className={styles.aboutTagline}>We listen, we plan, we deliver</p>
        <h2 className={styles.aboutTitle}>About Us</h2>
        <div className={styles.aboutText}>
          <p>
            We are a full-service event planning company dedicated to turning
            ideas into unforgettable experiences. From intimate gatherings to
            large celebrations, we handle every detail with creativity and
            precision.
          </p>
          <p>
            Every event has a story — and we ensure yours is planned, designed
            and executed beautifully. Whether it's a wedding, corporate event,
            birthday or any social gathering, we bring your vision to life with
            customized concepts, flawless coordination and a stress-free
            experience.
          </p>
          <p>
            What sets us apart is our focus on quality, aesthetics and a
            personalized approach, allowing you to enjoy your moments while we
            manage everything behind the scenes.
          </p>
        </div>
      </div>
    </section>
  );
}

