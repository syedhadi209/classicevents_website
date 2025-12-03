"use client";

import Image from "next/image";
import styles from "./Instagram.module.css";

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

export default function Instagram() {
  return (
    <section id="instagram" className={styles.section}>
      <div className={styles.sectionHeader} data-reveal data-reveal-direction="up">
        <p className={styles.sectionEyebrow}>On Instagram</p>
        <h3 className={styles.sectionTitle}>Follow our latest celebrations.</h3>
        <p className={styles.sectionDescription}>
          See behind the scenes of our most recent events and get inspired for your
          own special day.
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
      <div className={styles.instagramCta} data-reveal data-reveal-delay="480ms">
        <a
          href="https://www.instagram.com/classic_events111?igsh=MTFiYmZsZmE2dTRobQ=="
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryBtn}
        >
          Follow @classic_events111
        </a>
      </div>
    </section>
  );
}


