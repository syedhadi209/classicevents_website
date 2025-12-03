"use client";

import Image from "next/image";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerOverlay}></div>
      <div className={styles.bannerContent}>
        <div
          className={styles.logoWrapper}
          data-reveal
          data-reveal-delay="100ms"
        >
          <Image
            src="/images/logo.png"
            alt="Classic Events Logo"
            width={200}
            height={200}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
        <h1 className={styles.bannerTitle} data-reveal data-reveal-delay="200ms">
          Classic Events
        </h1>
        <p
          className={styles.bannerSubtitle}
          data-reveal
          data-reveal-delay="300ms"
        >
          by Arif and Abid
        </p>
      </div>
    </section>
  );
}

