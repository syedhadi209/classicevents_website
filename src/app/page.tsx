"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const services = [
  {
    title: "Signature Weddings",
    description:
      "Full-service planning that delivers couture celebrations, from private estate vows to ballroom soirées.",
    details: [
      "Venue sourcing & styling",
      "Creative direction",
      "Guest experience concierge",
    ],
  },
  {
    title: "Milestone Birthdays",
    description:
      "Immersive, story-driven parties that feel effortless while honoring every detail of your legacy.",
    details: [
      "Theme & entertainment curation",
      "Custom culinary programs",
      "VIP logistics",
    ],
  },
  {
    title: "Religious & Cultural Events",
    description:
      "Respectful interpretations of treasured traditions with modern production value and flawless flow.",
    details: [
      "Ceremonial coordination",
      "Family hospitality suites",
      "Spiritual advisory partners",
    ],
  },
  {
    title: "Bespoke Experiences",
    description:
      "Product launches, destination weekends, and intimate affairs designed entirely around your vision.",
    details: [
      "Brand storytelling",
      "Travel & accommodation",
      "On-site executive producers",
    ],
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
      "Every guest felt seen. The concierge texts, the chef's table, the lighting—luxury lived in every touchpoint.",
    author: "Lucia R. — Manhattan",
  },
  {
    quote:
      "They choreographed a three-day celebration with military precision and soulful warmth. We simply arrived and shined.",
    author: "Imran K. — Dubai",
  },
];

// Instagram posts - Replace with real API data
// To connect Instagram: Use Instagram Basic Display API or a service like Instafeed.js
const instagramPosts = [
  {
    id: "1",
    image: "/api/placeholder/400/400",
    caption: "Timeless elegance",
    link: "#",
  },
  {
    id: "2",
    image: "/api/placeholder/400/400",
    caption: "Dream wedding",
    link: "#",
  },
  {
    id: "3",
    image: "/api/placeholder/400/400",
    caption: "Beautiful moments",
    link: "#",
  },
  {
    id: "4",
    image: "/api/placeholder/400/400",
    caption: "Luxury celebration",
    link: "#",
  },
  {
    id: "5",
    image: "/api/placeholder/400/400",
    caption: "Perfect day",
    link: "#",
  },
  {
    id: "6",
    image: "/api/placeholder/400/400",
    caption: "Memories made",
    link: "#",
  },
];

// Sample carousel images - replace with your actual event images
const carouselImages = [
  {
    id: 1,
    src: "https://picsum.photos/600/800?random=1",
    alt: "Elegant wedding celebration",
  },
  {
    id: 2,
    src: "https://picsum.photos/600/800?random=2",
    alt: "Luxury event setup",
  },
  {
    id: 3,
    src: "https://picsum.photos/600/800?random=3",
    alt: "Beautiful ceremony",
  },
  {
    id: 4,
    src: "https://picsum.photos/600/800?random=4",
    alt: "Stunning reception",
  },
  {
    id: 5,
    src: "https://picsum.photos/600/800?random=5",
    alt: "Elegant dining setup",
  },
  {
    id: 6,
    src: "https://picsum.photos/600/800?random=6",
    alt: "Floral arrangements",
  },
  {
    id: 7,
    src: "https://picsum.photos/600/800?random=7",
    alt: "Wedding decor",
  },
  {
    id: 8,
    src: "https://picsum.photos/600/800?random=8",
    alt: "Event planning",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal-state", "visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -5%" }
    );

    elements.forEach((element) => {
      const delay = element.dataset.revealDelay ?? "0ms";
      element.style.setProperty("--reveal-delay", delay);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <nav className={styles.nav} data-reveal data-reveal-direction="down">
          <div className={styles.brand}>
            <span>Since 2009</span>
            <h1>Classic Events</h1>
          </div>
          <div className={styles.navLinks}>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
            <a href="#reviews" onClick={closeMenu}>
              Reviews
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
            <a className={styles.navCta} href="#contact" onClick={closeMenu}>
              Book Consultation
            </a>
          </div>
          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </nav>

        <div
          className={`${styles.mobileDrawer} ${
            isMenuOpen ? styles.mobileDrawerOpen : ""
          }`}
          onClick={closeMenu}
        >
          <div
            className={styles.mobileDrawerContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.mobileDrawerHeader}>
              <h2>Classic Events</h2>
              <button
                className={styles.closeButton}
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <nav className={styles.mobileNavLinks}>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
              <a href="#reviews" onClick={closeMenu}>
                Reviews
              </a>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
              <a
                className={styles.mobileCta}
                href="#contact"
                onClick={closeMenu}
              >
                Book Consultation
              </a>
            </nav>
          </div>
        </div>

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
              We orchestrate weddings, milestone birthdays, religious
              gatherings, and bespoke experiences with concierge-level care. Our
              team fuses refined design, cultural fluency, and technical mastery
              so you can be present for every luminous moment.
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

        <section className={styles.highlightsSection}>
          <div className={styles.heroHighlights}>
            <div
              className={styles.highlightCard}
              data-reveal
              data-reveal-direction="up"
              data-reveal-delay="80ms"
            >
              <strong>300+</strong>
              <p>Signature celebrations delivered across 12 countries.</p>
            </div>
            <div
              className={styles.highlightCard}
              data-reveal
              data-reveal-direction="up"
              data-reveal-delay="160ms"
            >
              <strong>94%</strong>
              <p>Clients referred by family & private members clubs.</p>
            </div>
            <div
              className={styles.highlightCard}
              data-reveal
              data-reveal-direction="up"
              data-reveal-delay="240ms"
            >
              <strong>24/7</strong>
              <p>Concierge planning team for white-glove communication.</p>
            </div>
          </div>
        </section>

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
              From intimate blessings to grand multi-day productions, we
              translate your values into tailored environments—balancing
              artistry with operational precision.
            </p>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <article
                key={service.title}
                className={styles.serviceCard}
                data-reveal
                data-reveal-direction={index % 2 === 0 ? "left" : "right"}
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

        <section id="events" className={styles.section}>
          <div
            className={styles.sectionHeader}
            data-reveal
            data-reveal-direction="up"
          >
            <p className={styles.sectionEyebrow}>Our Events</p>
            <h3 className={styles.sectionTitle}>Celebrations that inspire.</h3>
            <p className={styles.sectionDescription}>
              Explore our portfolio of meticulously crafted events, each one a
              unique masterpiece.
            </p>
          </div>
          <div className={styles.eventsCarousel}>
            <div
              className={styles.eventsCarouselContainer}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className={`${styles.eventsCarouselTrack} ${
                  isPaused ? styles.paused : ""
                }`}
              >
                {[...carouselImages, ...carouselImages, ...carouselImages].map(
                  (image, index) => (
                    <div
                      key={`${image.id}-${index}`}
                      className={styles.eventSlide}
                    >
                      <div className={styles.eventImageWrapper}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 50vw, 40vw"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className={styles.eventContent}>
                        <h4>{image.alt}</h4>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className={styles.section}>
          <div
            className={styles.sectionHeader}
            data-reveal
            data-reveal-direction="up"
          >
            <p className={styles.sectionEyebrow}>Reviews</p>
            <h3 className={styles.sectionTitle}>
              Whispers from delighted hosts.
            </h3>
            <p className={styles.sectionDescription}>
              Classic Events is trusted by discerning families, private offices,
              and cultural institutions who value discretion as much as
              impeccable delivery.
            </p>
          </div>
          <div className={styles.reviews}>
            {reviews.map((review, index) => (
              <article
                key={review.author}
                className={styles.reviewCard}
                data-reveal
                data-reveal-direction={index % 2 === 0 ? "right" : "left"}
                data-reveal-delay={`${index * 120}ms`}
              >
                <p className={styles.reviewQuote}>
                  &ldquo;{review.quote}&rdquo;
                </p>
                <span className={styles.reviewAuthor}>{review.author}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="instagram" className={styles.section}>
          <div
            className={styles.sectionHeader}
            data-reveal
            data-reveal-direction="up"
          >
            <p className={styles.sectionEyebrow}>On Instagram</p>
            <h3 className={styles.sectionTitle}>
              Follow our latest celebrations.
            </h3>
            <p className={styles.sectionDescription}>
              See behind the scenes of our most recent events and get inspired
              for your own special day.
            </p>
          </div>
          <div className={styles.instagramGrid}>
            {instagramPosts.map((post, index) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instagramPost}
                data-reveal
                data-reveal-delay={`${index * 80}ms`}
              >
                <div className={styles.instagramImage}>
                  <Image
                    src={`https://picsum.photos/400/400?random=${post.id}`}
                    alt={post.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.instagramOverlay}>
                    <span className={styles.instagramIcon}>📷</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div
            className={styles.instagramCta}
            data-reveal
            data-reveal-delay="480ms"
          >
            <a
              href="https://instagram.com/classicevents"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              Follow @classicevents
            </a>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div
            className={styles.sectionHeader}
            data-reveal
            data-reveal-direction="up"
          >
            <p className={styles.sectionEyebrow}>Contact</p>
            <h3 className={styles.sectionTitle}>Begin your Classic chapter.</h3>
            <p className={styles.sectionDescription}>
              Share a few details and our executive producer will follow up
              within 24 hours to design a tailored consultation—virtual or
              in-person.
            </p>
          </div>
          <div className={styles.contact}>
            <div
              className={styles.contactDetails}
              data-reveal
              data-reveal-direction="left"
            >
              <p>Concierge line: +1 (646) 555-0199</p>
              <p>Email: hello@classicevents.studio</p>
              <p>
                Studios in New York, Dubai, and London. Available worldwide.
              </p>
              <p>
                Office hours: Monday–Saturday, 9a–7p (client services 24/7).
              </p>
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

        <footer
          className={styles.footer}
          data-reveal
          data-reveal-direction="up"
        >
          <p>
            © {new Date().getFullYear()} Classic Events. All rights reserved.
          </p>
          <p>Luxury event management • concierge planning • immersive design</p>
        </footer>
      </div>
    </div>
  );
}
