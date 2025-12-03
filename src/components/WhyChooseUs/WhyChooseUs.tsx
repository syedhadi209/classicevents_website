"use client";

import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className={styles.whyChooseSection}>
      <div className={styles.sectionHeader} data-reveal data-reveal-direction="up">
        <h3 className={styles.sectionTitle}>Why Choose Us?</h3>
      </div>
      <div className={styles.whyChooseGrid}>
        <div className={styles.whyChooseCard} data-reveal data-reveal-delay="100ms">
          <div className={styles.whyChooseIcon}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h4>Creative Staff</h4>
          <p>
            Highly Qualified & Experienced Staff easily gets client's input and
            inspirations
          </p>
        </div>
        <div className={styles.whyChooseCard} data-reveal data-reveal-delay="200ms">
          <div className={styles.whyChooseIcon}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h4>Quite Economical</h4>
          <p>
            Giving you the perfect solutions according to your desire budget frame
          </p>
        </div>
        <div className={styles.whyChooseCard} data-reveal data-reveal-delay="300ms">
          <div className={styles.whyChooseIcon}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h4>Perfect Solution</h4>
          <p>
            Our experts gives you perfect solutions and ideas for your events
            beyond your expectations.
          </p>
        </div>
        <div className={styles.whyChooseCard} data-reveal data-reveal-delay="400ms">
          <div className={styles.whyChooseIcon}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path
                d="M12 6V12L16 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h4>Always On Time</h4>
          <p>
            Classic events always gives your hassle free services on time with
            perfections
          </p>
        </div>
      </div>
    </section>
  );
}


