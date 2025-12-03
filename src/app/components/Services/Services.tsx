"use client";

import styles from "./Services.module.css";

const servicesData = [
  {
    title: "Wedding Events",
    number: "01",
    description:
      "We provide complete planning and décor services for Mehndi, Mayon, Barat, and Walima events, ensuring every moment is beautifully organized and perfectly executed.",
    features: [
      "Full event coordination",
      "Custom décor themes",
      "Multi-day planning",
    ],
  },
  {
    title: "Birthday Parties",
    number: "02",
    description:
      "We offer complete planning and décor services for birthday parties, ensuring a fun, well-organized, and unforgettable event.",
    features: ["Themed decorations", "Entertainment setup", "Guest management"],
  },
  {
    title: "Corporate Events",
    number: "03",
    description:
      "We transform corporate events into meaningful experiences with smart setups, strategic planning, and professional execution.",
    features: [
      "Conference planning",
      "Brand integration",
      "Professional hosting",
    ],
  },
  {
    title: "Concerts",
    number: "04",
    description:
      "We create high-energy concert experiences with powerful staging, seamless coordination, and impactful crowd engagement.",
    features: ["Stage production", "Sound & lighting", "Crowd coordination"],
  },
  {
    title: "Consultancy",
    number: "05",
    description:
      "We provide expert event consultancy, guiding you with creative concepts, smart planning, and strategies that turn ideas into successful events.",
    features: [
      "Strategic planning",
      "Budget optimization",
      "Creative direction",
    ],
  },
  {
    title: "Live Shows",
    number: "06",
    description:
      "We bring live shows to life with creative concepts, vibrant setups, and flawless management for an unforgettable experience.",
    features: ["Creative production", "Technical setup", "Show management"],
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div
        className={styles.sectionHeader}
        data-reveal
        data-reveal-direction="up"
      >
        <p className={styles.sectionEyebrow}>Services</p>
        <h3 className={styles.sectionTitle}>
          Every chapter deserves a distinct experience.
        </h3>
        <p className={styles.sectionDescription}>
          From intimate blessings to grand multi-day productions, we translate
          your values into tailored environments—balancing artistry with
          operational precision.
        </p>
      </div>
      <div className={styles.serviceGrid}>
        {servicesData.map((service, index) => (
          <article
            key={service.title}
            className={styles.serviceCard}
            data-reveal
            data-reveal-direction={index % 2 === 0 ? "left" : "right"}
            data-reveal-delay={`${index * 100}ms`}
          >
            <div className={styles.serviceNumber}>{service.number}</div>
            <div className={styles.serviceHeader}>
              <h3>{service.title}</h3>
              <div className={styles.serviceAccent}></div>
            </div>
            <p>{service.description}</p>
            <ul className={styles.serviceFeatures}>
              {service.features.map((feature, idx) => (
                <li key={idx}>
                  <span className={styles.checkmark}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
