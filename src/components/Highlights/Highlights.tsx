"use client";

import styles from "./Highlights.module.css";

export default function Highlights() {
  return (
    <section className={styles.highlightsSection}>
      <div className={styles.heroHighlights}>
        <div
          className={styles.highlightCard}
          data-reveal
          data-reveal-direction="up"
          data-reveal-delay="80ms"
        >
          <strong>1000+</strong>
          <p>
            We have successfully delivered 1000 plus events reflecting our
            expertise and commitment to excellence.
          </p>
        </div>
        <div
          className={styles.highlightCard}
          data-reveal
          data-reveal-direction="up"
          data-reveal-delay="160ms"
        >
          <strong>90%</strong>
          <p>Clients referred by our satisfied guests.</p>
        </div>
        <div
          className={styles.highlightCard}
          data-reveal
          data-reveal-direction="up"
          data-reveal-delay="240ms"
        >
          <strong>14+ Years</strong>
          <p>
            We have proudly served as a successful event management company for
            the past 14 years.
          </p>
        </div>
      </div>
    </section>
  );
}
