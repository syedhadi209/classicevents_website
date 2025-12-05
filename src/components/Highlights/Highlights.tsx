"use client";

import { motion } from "framer-motion";
import styles from "./Highlights.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const numberVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const highlights = [
  {
    number: "1000+",
    text: "We have successfully delivered 1000 plus events reflecting our expertise and commitment to excellence.",
  },
  {
    number: "90%",
    text: "Clients referred by our satisfied guests.",
  },
  {
    number: "14+ Years",
    text: "We have proudly served as a successful event management company for the past 14 years.",
  },
];

export default function Highlights() {
  return (
    <section className={styles.highlightsSection}>
      <motion.div
        className={styles.heroHighlights}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            className={styles.highlightCard}
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
              rotateY: 2,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            <motion.strong variants={numberVariants}>
              {highlight.number}
            </motion.strong>
            <motion.p variants={textVariants}>{highlight.text}</motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
