"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Hero from "../components/Hero/Hero";
import Highlights from "../components/Highlights/Highlights";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Events from "../components/Events/Events";
import Reviews from "../components/Reviews/Reviews";
import Instagram from "../components/Instagram/Instagram";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import PlanEvent from "../components/PlanEvent/PlanEvent";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
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

  return (
    <div className={styles.page}>
      <Header />
      <Banner />

      <div className={styles.shell}>
        <Hero />
        <Highlights />
      </div>

      <About />

      <div className={styles.shell}>
        <Services />
        <Events />
        <Reviews />
        <Instagram />
        <WhyChooseUs />
      </div>

      <PlanEvent />

      <div className={styles.shell}>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
