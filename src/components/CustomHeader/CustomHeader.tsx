"use client";

import { useState, useEffect } from "react";
import styles from "./CustomHeader.module.css";

export default function CustomHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <>
      <nav className={styles.nav} data-reveal data-reveal-direction="down">
        <div className={styles.brand}>
          <span>Since 2009</span>
          <h1>Classic Events</h1>
        </div>
        <div className={styles.navLinks}>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="/event-gallery">Event Gallery</a>
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
            <a href="/event-gallery" onClick={closeMenu}>
              Event Gallery
            </a>
            <a href="#reviews" onClick={closeMenu}>
              Reviews
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
            <a className={styles.mobileCta} href="#contact" onClick={closeMenu}>
              Book Consultation
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
