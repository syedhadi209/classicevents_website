"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} data-reveal data-reveal-direction="up">
      <p>© {new Date().getFullYear()} Classic Events. All rights reserved.</p>
      <p>Luxury event management • concierge planning • immersive design</p>
    </footer>
  );
}

