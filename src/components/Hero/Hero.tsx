"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import styles from "./Hero.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
  },
};

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  const title = "Modern celebrations curated with classic taste.";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove);
      return () => hero.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Calculate parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    mouseX.set((mousePosition.x / window.innerWidth - 0.5) * 20);
    mouseY.set((mousePosition.y / window.innerHeight - 0.5) * 20);
  }, [mousePosition, mouseX, mouseY]);

  const titleX = useTransform(smoothX, (value) => value * 0.5);
  const titleY = useTransform(smoothY, (value) => value * 0.5);
  const subtitleX = useTransform(smoothX, (value) => value * 0.3);
  const subtitleY = useTransform(smoothY, (value) => value * 0.3);
  const glowX = useTransform(smoothX, (value) => value * 2);
  const glowY = useTransform(smoothY, (value) => value * 2);

  return (
    <motion.header
      ref={heroRef}
      className={styles.hero}
      variants={floatingVariants}
      animate="animate"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated background glow */}
      <motion.div
        className={styles.heroGlow}
        style={{
          x: glowX,
          y: glowY,
        }}
        animate={{
          scale: isHovering ? [1, 1.2, 1] : 1,
          opacity: isHovering ? [0.3, 0.5, 0.3] : 0.2,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={styles.particle}
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0,
          }}
          animate={{
            y: [null, "-20px", "20px", null],
            x: [null, "10px", "-10px", null],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <motion.div
        className={styles.heroContent}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p
          className={styles.eyebrow}
          variants={itemVariants}
          whileHover={{ scale: 1.05, letterSpacing: "0.5em" }}
          transition={{ duration: 0.3 }}
        >
          Luxury Event Atelier
        </motion.p>

        <motion.h2
          className={styles.heroTitle}
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            x: titleX,
            y: titleY,
          }}
        >
          {title.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              style={{ display: "inline-block", marginRight: "0.3em" }}
              whileHover={{
                scale: 1.1,
                rotateY: 15,
                color: "var(--color-gold)",
                transition: { duration: 0.3 },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          className={styles.heroSubtitle}
          variants={itemVariants}
          style={{
            x: subtitleX,
            y: subtitleY,
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          We orchestrate weddings, milestone birthdays, religious gatherings,
          and bespoke experiences with concierge-level care. Our team fuses
          refined design, cultural fluency, and technical mastery so you can be
          present for every luminous moment.
        </motion.p>

        <motion.div
          className={styles.heroActions}
          variants={itemVariants}
        >
          <MagneticButton
            href="#contact"
            className={styles.primaryBtn}
            text="Plan a consultation"
          />
          <MagneticButton
            href="#services"
            className={styles.secondaryBtn}
            text="Explore services"
          />
        </motion.div>
      </motion.div>
    </motion.header>
  );
}

// Magnetic Button Component
function MagneticButton({
  href,
  className,
  text,
}: {
  href: string;
  className: string;
  text: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x * 0.3);
      mouseY.set(y * 0.3);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.08,
        boxShadow: "0 20px 40px rgba(232, 157, 122, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <motion.span
        whileHover={{
          scale: 1.05,
        }}
      >
        {text}
      </motion.span>
    </motion.a>
  );
}


