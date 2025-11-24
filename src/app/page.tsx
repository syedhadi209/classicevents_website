"use client";

import { useEffect } from "react";
import styles from "./page.module.css";

const services = [
  {
    title: "Signature Weddings",
    description:
      "Full-service planning that delivers couture celebrations, from private estate vows to ballroom soirées.",
    details: ["Venue sourcing & styling", "Creative direction", "Guest experience concierge"],
  },
  {
    title: "Milestone Birthdays",
    description:
      "Immersive, story-driven parties that feel effortless while honoring every detail of your legacy.",
    details: ["Theme & entertainment curation", "Custom culinary programs", "VIP logistics"],
  },
  {
    title: "Religious & Cultural Events",
    description:
      "Respectful interpretations of treasured traditions with modern production value and flawless flow.",
    details: ["Ceremonial coordination", "Family hospitality suites", "Spiritual advisory partners"],
  },
  {
    title: "Bespoke Experiences",
    description:
      "Product launches, destination weekends, and intimate affairs designed entirely around your vision.",
    details: ["Brand storytelling", "Travel & accommodation", "On-site executive producers"],
  },
];

const reviews = [
  {
    quote:
      "Classic Events translated our heritage and love story into an evening that felt cinematic yet deeply personal.",
    author: "Amira & Farhan — Marrakech",
  },
  {
    quote:
      "Every guest felt seen. The concierge texts, the chef’s table, the lighting—luxury lived in every touchpoint.",
    author: "Lucia R. — Manhattan",
  },
  {
    quote:
      "They choreographed a three-day celebration with military precision and soulful warmth. We simply arrived and shined.",
    author: "Imran K. — Dubai",
  },
];

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => {
      element.classList.add(styles.reveal);
      const delay = element.dataset.revealDelay;
      if (delay) {
        element.style.setProperty("--reveal-delay", delay);
      }
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <nav className={styles.nav} data-reveal>
          <div className={styles.brand}>
            <span>Since 2009</span>
            <h1>Classic Events</h1>
          </div>
          <div className={styles.navLinks}>
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
            <a className={styles.navCta} href="#contact">
              Book Consultation
            </a>
          </div>
        </nav>

        <header className={styles.hero}>
          <div className={styles.heroContent} data-reveal data-reveal-delay="0ms">
            <p className={styles.eyebrow}>Luxury Event Atelier</p>
            <h2 className={styles.heroTitle}>
              Modern celebrations curated with classic taste.
            </h2>
            <p className={styles.heroSubtitle}>
              We orchestrate weddings, milestone birthdays, religious gatherings, and bespoke
              experiences with concierge-level care. Our team fuses refined design, cultural fluency,
              and technical mastery so you can be present for every luminous moment.
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

          <div className={styles.heroHighlights}>
            <div className={styles.highlightCard} data-reveal data-reveal-delay="80ms">
              <strong>300+</strong>
              <p>Signature celebrations delivered across 12 countries.</p>
            </div>
            <div className={styles.highlightCard} data-reveal data-reveal-delay="160ms">
              <strong>94%</strong>
              <p>Clients referred by family & private members clubs.</p>
            </div>
            <div className={styles.highlightCard} data-reveal data-reveal-delay="240ms">
              <strong>24/7</strong>
              <p>Concierge planning team for white-glove communication.</p>
            </div>
          </div>
        </header>

        <section id="services" className={styles.section}>
          <div className={styles.sectionHeader} data-reveal>
            <p className={styles.sectionEyebrow}>Services</p>
            <h3 className={styles.sectionTitle}>Every chapter deserves a distinct experience.</h3>
            <p className={styles.sectionDescription}>
              From intimate blessings to grand multi-day productions, we translate your values into
              tailored environments—balancing artistry with operational precision.
            </p>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <article
                key={service.title}
                className={styles.serviceCard}
                data-reveal
                data-reveal-delay={`${index * 120}ms`}
              >
                <span className={styles.serviceTag}>Bespoke</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className={styles.serviceList}>
                  {service.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="reviews" className={styles.section}>
          <div className={styles.sectionHeader} data-reveal>
            <p className={styles.sectionEyebrow}>Reviews</p>
            <h3 className={styles.sectionTitle}>Whispers from delighted hosts.</h3>
            <p className={styles.sectionDescription}>
              Classic Events is trusted by discerning families, private offices, and cultural
              institutions who value discretion as much as impeccable delivery.
            </p>
          </div>
          <div className={styles.reviews}>
            {reviews.map((review, index) => (
              <article
                key={review.author}
                className={styles.reviewCard}
                data-reveal
                data-reveal-delay={`${index * 120}ms`}
              >
                <p className={styles.reviewQuote}>&ldquo;{review.quote}&rdquo;</p>
                <span className={styles.reviewAuthor}>{review.author}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={styles.sectionHeader} data-reveal>
            <p className={styles.sectionEyebrow}>Contact</p>
            <h3 className={styles.sectionTitle}>Begin your Classic chapter.</h3>
            <p className={styles.sectionDescription}>
              Share a few details and our executive producer will follow up within 24 hours to
              design a tailored consultation—virtual or in-person.
          </p>
        </div>
          <div className={styles.contact}>
            <div className={styles.contactDetails} data-reveal>
              <p>Concierge line: +1 (646) 555-0199</p>
              <p>Email: hello@classicevents.studio</p>
              <p>Studios in New York, Dubai, and London. Available worldwide.</p>
              <p>Office hours: Monday–Saturday, 9a–7p (client services 24/7).</p>
            </div>
            <form className={styles.contactForm} data-reveal data-reveal-delay="120ms">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />

              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@email.com" required />

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

        <footer className={styles.footer} data-reveal>
          <p>© {new Date().getFullYear()} Classic Events. All rights reserved.</p>
          <p>Luxury event management • concierge planning • immersive design</p>
        </footer>
        </div>
    </div>
  );
}
