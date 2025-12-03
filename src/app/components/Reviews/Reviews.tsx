"use client";

import styles from "./Reviews.module.css";

const reviewsData = [
  {
    quote:
      "Our mehndi décor was vibrant and beautifully done. Everything was managed smoothly and we enjoyed the event stress-free.",
    author: "Mr and Mrs Saad",
  },
  {
    quote:
      "The musical night was arranged beautifully, from stage lighting to sound quality, everything felt premium and well-coordinated. The energy of the evening made it truly unforgettable.",
    author: "Hassan Raza",
  },
  {
    quote:
      "The barat setup looked elegant and well-balanced. Guests appreciated the décor and our photos turned out beautiful. Wonderful execution.",
    author: "Maria Ahemad",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.sectionHeader} data-reveal data-reveal-direction="up">
        <p className={styles.sectionEyebrow}>Reviews</p>
        <h3 className={styles.sectionTitle}>Whispers from delighted hosts.</h3>
        <p className={styles.sectionDescription}>
          Classic Events is trusted by discerning families, private offices, and
          cultural institutions who value discretion as much as impeccable
          delivery.
        </p>
      </div>
      <div className={styles.reviews}>
        {reviewsData.map((review, index) => (
          <article
            key={review.author}
            className={styles.reviewCard}
            data-reveal
            data-reveal-direction={index % 2 === 0 ? "right" : "left"}
            data-reveal-delay={`${index * 120}ms`}
          >
            <p className={styles.reviewQuote}>&ldquo;{review.quote}&rdquo;</p>
            <span className={styles.reviewAuthor}>{review.author}</span>
          </article>
        ))}
      </div>
    </section>
  );
}


