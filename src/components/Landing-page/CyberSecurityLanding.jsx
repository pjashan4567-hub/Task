import React, { useState } from "react";
import bannerimage from "/banner_iamge.png";
import { Parallax } from "react-parallax";
import first from "/01.png";
import second from "/02.png";
import third from "/03.png";
import firsteffect from "/firsteffect.jpg";
import secondeffect from "/2ndeffect.jpg";
import styles from "./CyberSecurityLanding.module.css";
import { FaArrowUp, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function CyberSecurityLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          {/* Desktop Navigation */}
          <div className={styles.navTop}>
            <div className={styles.logo}>
              <div className={styles.horizonal}></div>
              <div className={styles.logoIcon}>
                <span
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "35px",
                  }}
                >
                  GCA
                </span>
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
            <div className={styles.navRight}>
              <div className={styles.userSection}>
                {/* User info */}
                <div className={styles.userInfo}>
                  <span className={styles.userIcon}>👤</span>
                  <span className={styles.userName}>Jashanpreet Singh</span>
                  <span className={styles.dropdownIcon}>▾</span>
                </div>

                <span className={styles.separator}>|</span>

                {/* Social icons */}
                <button className={styles.iconButton} aria-label="LinkedIn">
                  <FaLinkedinIn />
                </button>

                <button className={styles.iconButton} aria-label="YouTube">
                  <FaYoutube />
                </button>
              </div>
            </div>
          </div>

          {/* Menu Items Row */}

          <div className={styles.menuRow}>
            <a
              href="#"
              className={`${styles.menuItem} ${styles.menuItemActive}`}
            >
              Home
            </a>

            <div className={styles.dropdown}>
              <button className={styles.menuItemWithDropdown}>
                About
                <svg
                  className={styles.dropdownIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className={styles.dropdownMenu}>
                <a href="#" className={styles.dropdownItem}>
                  Our Story
                </a>
                <a href="#" className={styles.dropdownItem}>
                  Team
                </a>
                <a href="#" className={styles.dropdownItem}>
                  Careers
                </a>
              </div>
            </div>

            <a href="#" className={styles.menuItem}>
              Event
            </a>

            <div className={styles.dropdown}>
              <button className={styles.menuItemWithDropdown}>
                Free Learnings
                <svg
                  className={styles.dropdownIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className={styles.dropdownMenu}>
                <a href="#" className={styles.dropdownItem}>
                  Tutorials
                </a>
                <a href="#" className={styles.dropdownItem}>
                  Webinars
                </a>
                <a href="#" className={styles.dropdownItem}>
                  Resources
                </a>
              </div>
            </div>

            <div className={styles.dropdown}>
              <button className={styles.menuItemWithDropdown}>
                Certifications
                <svg
                  className={styles.dropdownIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className={styles.dropdownMenu}>
                <a href="#" className={styles.dropdownItem}>
                  Comptia
                </a>
                <a href="#" className={styles.dropdownItem}>
                  EC-Council
                </a>
                <a href="#" className={styles.dropdownItem}>
                  Syncsoc
                </a>
              </div>
            </div>

            <div className={styles.dropdown}>
              <button className={styles.menuItemWithDropdown}>
                Courses
                <svg
                  className={styles.dropdownIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className={styles.dropdownMenu}>
                <a href="#" className={styles.dropdownItem}>
                  Beginner
                </a>
                <a href="#" className={styles.dropdownItem}>
                  Intermediate
                </a>
                <a href="#" className={styles.dropdownItem}>
                  Advanced
                </a>
              </div>
            </div>

            <div className={styles.dropdown}>
              <button className={styles.menuItemWithDropdown}>
                Store
                <svg
                  className={styles.dropdownIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className={styles.dropdownMenu}>
                <a href="#" className={styles.dropdownItem}>
                  Merchandise
                </a>
                <a href="#" className={styles.dropdownItem}>
                  Books
                </a>
                <a href="#" className={styles.dropdownItem}>
                  Software
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroBackgroundOverlay} />
        </div>

        <div className={styles.heroContent}>
          {/* Left side - Text Content */}
          <div className={styles.heroTextContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.betext}>Be</span>
              <br />
              <span className={styles.heroTitleGradient}>Skilltastic!</span>
            </h1>

            <p className={styles.heroDescription}>
              Build and test exceptional AI solutions while using OWASP and
              OpenSSF to combat evolving AI threats and vulnerabilities
            </p>

            <button className={styles.heroButton}>Get Started →</button>
          </div>

          {/* Right side - Geometric Illustration */}
          <div className={styles.heroIllustration}>
            <img className={styles.img} src={bannerimage} />
          </div>
        </div>
      </section>

      {/* Three Steps Section */}
      <section className={styles.stepsSection}>
        <Parallax bgImage={firsteffect} strength={300}>
          <div className={styles.stepsSectionContent}>
            <h2 className={styles.stepsTitle}>
              Three steps. A million possibilities.
            </h2>
          </div>
        </Parallax>
        {/* Step 01 - Build */}
        <div className={styles.cardcontainer}>
          <div className={styles.stepCard}>
            <div className={styles.stepCardContent}>
              <div className={styles.stepNumber}>
                <div className={styles.stepNumberText}>01</div>
                <div className={styles.stepTitle}>Build</div>
              </div>
              <div className={styles.stepVisual}>
                <img src={first} className={styles.cardimage} />
                <div className={styles.stepDescription}>
                  <h3 className={styles.stepDescriptionTitle}>
                    Identify Your Cybersecurity Skills
                  </h3>
                  <p>
                    Build a personalized skill matrix that helps in just 10
                    minutes. Designed to build graduate and experience
                    professionals alike. Start here.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 02 - Validate */}
          <div className={`${styles.stepCard}`}>
            <div className={styles.stepCardContent}>
              <div className={styles.stepVisual}>
                <img src={second} className={styles.cardimage} />
                <div className={styles.stepDescription}>
                  <h3 className={styles.stepDescriptionTitle}>
                    Validate to Conquer
                  </h3>
                  <p>
                    Verify the currency and credibility of your cybersecurity
                    skills and knowledge via bite-size quizzes and
                    scenario-based mini challenges to verify your knowledge and
                    questions are based.
                  </p>
                </div>
              </div>

              <div className={styles.stepNumber}>
                <div className={styles.stepNumberText}>02</div>
                <div className={styles.stepTitle}>Validate</div>
              </div>
            </div>
          </div>

          {/* Step 03 - Grow */}
          <div className={styles.stepCard}>
            <div className={styles.stepCardContent}>
              <div className={styles.stepNumber}>
                <div className={styles.stepNumberText}>03</div>
                <div className={styles.stepTitle}>Grow</div>
              </div>

              <div className={styles.stepVisual}>
                <img src={third} className={styles.cardimage} />

                <div className={styles.stepDescription}>
                  <h3 className={styles.stepDescriptionTitle}>
                    Unleash your Potential
                  </h3>
                  <p>
                    Get dynamic learning recommendations and one aligned
                    learning paths to address your skill gaps and help you
                    advance your skill or career seamlessly and quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <Parallax bgImage={secondeffect} strength={300}>
          <div className={styles.ctaSectionContent}>
            <h2 className={styles.ctaTitle}>
              Join us on a journey to excellence
            </h2>
            <button className={styles.ctaButton}>Get Started →</button>
          </div>
        </Parallax>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <div className={styles.logo}>
              <div className={styles.horizonal}></div>
              <div className={styles.logoIcon}>
                <span
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "35px",
                  }}
                >
                  GCA
                </span>
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
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Membership</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Terms and Condition</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Concellation and Refund</a>
                  </li>
                  <li>
                    <a href="#">Shipping and Exchange</a>
                  </li>
                </ul>
              </div>
              <div className={styles.footerColumn}>
                <h3>Stay Connected</h3>
                <ul>
                  <li>
                    <FaYoutube /> Youtube
                  </li>
                  <li>
                    <FaLinkedinIn /> Linkedin
                  </li>
                </ul>
              </div>
              <div className={styles.footerColumn}>
                <h3>Get In Touch </h3>
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
    </div>
  );
}
