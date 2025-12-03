"use client";

import Link from "next/link";
import styles from "./gallery.module.css";

export default function EventGallery() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.backButton}>
            ← Back to Home
          </Link>
        </nav>

        <header className={styles.header}>
          <h1 className={styles.title}>Event Gallery</h1>
          <p className={styles.subtitle}>
            Explore our portfolio of beautifully executed events
          </p>
        </header>

        <section className={styles.gallerySection}>
          <p className={styles.comingSoon}>
            Gallery coming soon...
          </p>
        </section>
      </div>
    </div>
  );
}

