"use client";

import styles from "./PlanEvent.module.css";

export default function PlanEvent() {
  return (
    <section className={styles.planEventSection}>
      <div
        className={styles.planEventContent}
        data-reveal
        data-reveal-direction="up"
      >
        <h2 className={styles.planEventTitle}>Plan your event with us</h2>
        <p className={styles.planEventText}>
          Join us for a beautifully managed, stress-free, and memorable event.
          From intimate gatherings to grand celebrations — including Mehndi,
          Mayoon, Dholki, Engagements, Showers, Birthdays, Corporate events,
          Concerts, and Destination weddings — we bring your vision to life with
          elegant styling and seamless execution.
        </p>
      </div>
    </section>
  );
}


