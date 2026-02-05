import React from "react";
import { FaArrowUp, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
              <div className={styles.horizonal}></div>
              <div className={styles.logoIcon}>
                <span className={styles.logoIconText}>GCA</span>
              </div>
              <div className={styles.verticalline} />
              <span className={styles.logoText}>
                <b>GLOBAL</b>
                <br />
                CYBERSECURITY
                <br />
                ASSOCIATION
              </span>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h3>Quick Navigation</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Membership</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Terms and Condition</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cancellation and Refund</a></li>
                <li><a href="#">Shipping and Exchange</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h3>Stay Connected</h3>
              <ul>
                <li><FaYoutube /> Youtube</li>
                <li><FaLinkedinIn /> Linkedin</li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h3>Get In Touch</h3>
              <ul>
                <li>team@gcaforum.com</li>
                <li>Phone No. +91 8910392803</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerSocial}>
          <div className={styles.socialIcon}>
            <button
              onClick={scrollToTop}
              className={styles.scrollTopButton}
              aria-label="Scroll to top"
            >
              <FaArrowUp className={styles.whiteIcon} />
            </button>
          </div>
        </div>

        <div className={styles.footerCopyright}>
          © 2026 Global Cybersecurity Association. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;