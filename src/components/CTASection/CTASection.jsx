import React from "react";
import { Parallax } from "react-parallax";
import styles from "./CTASection.module.css";
import secondeffect from "/2ndeffect.jpg";

const CTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <Parallax className={styles.image} bgImage={secondeffect} strength={300}>
        <br></br>
        <div className={styles.ctaSectionContent}>
          <h2 className={styles.ctaTitle}>
            Join us on a journey to excellence
          </h2>
          <button className={styles.ctaButton}>Get Started →</button>
        </div>
      </Parallax>
    </section>
  );
};

export default CTASection;