import React, { useEffect, useRef } from "react";
import styles from "./Start.module.css";
import bannerimage from "/banner_iamge.png";

const HeroSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Add animation classes after component mounts
    setTimeout(() => {
      if (textRef.current) {
        textRef.current.classList.add(styles.animate);
      }
      if (imageRef.current) {
        imageRef.current.classList.add(styles.animate);
      }
    }, 100);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.heroBackgroundOverlay} />
      </div>

      <div className={styles.heroContent}>
        {/* Left side - Text Content */}
        <div 
          ref={textRef} 
          className={`${styles.heroTextContent} ${styles.fadeInLeft}`}
        >
          <h1 className={styles.heroTitle}>
            <span className={styles.betext}>Be</span>
            <br />
            <span className={styles.heroTitleGradient}>Skilltastic!</span>
          </h1>

          <p className={styles.heroDescription}>
            Build and test exceptional AI solutions while using OWASP and
            OpenSSF to combat evolving AI threats and vulnerabilities
          </p>

          <button className={`${styles.heroButton} ${styles.fadeInUp}`}>
            Get Started →
          </button>
        </div>

        {/* Right side - Illustration */}
        <div 
          ref={imageRef} 
          className={`${styles.heroIllustration} ${styles.fadeInRight}`}
        >
          <img 
            className={`${styles.img} ${styles.floatAnimation}`} 
            src={bannerimage} 
            alt="Cybersecurity Illustration" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;