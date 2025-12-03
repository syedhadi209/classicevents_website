"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Events.module.css";

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

export default function Events() {
  const [isPaused, setIsPaused] = useState(false);

  return (
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
                <div key={`${image.id}-${index}`} className={styles.eventSlide}>
                  <div className={styles.eventImageWrapper}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
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
  );
}
