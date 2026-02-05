import React, { useState } from "react";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import styles from "./Navigation.module.css";
import Dropdown from "../Common/Select/Dropdown";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const aboutDropdownItems = [
    { label: "Our Story", href: "#" },
    { label: "Team", href: "#" },
    { label: "Careers", href: "#" }
  ];

  const learningsDropdownItems = [
    { label: "Tutorials", href: "#" },
    { label: "Webinars", href: "#" },
    { label: "Resources", href: "#" }
  ];

  const certificationsDropdownItems = [
    { label: "Comptia", href: "#" },
    { label: "EC-Council", href: "#" },
    { label: "Syncsoc", href: "#" }
  ];

  const coursesDropdownItems = [
    { label: "Beginner", href: "#" },
    { label: "Intermediate", href: "#" },
    { label: "Advanced", href: "#" }
  ];

  const storeDropdownItems = [
    { label: "Merchandise", href: "#" },
    { label: "Books", href: "#" },
    { label: "Software", href: "#" }
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        {/* Desktop Navigation */}
        <div className={styles.navTop}>
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
          <a href="#" className={`${styles.menuItem} ${styles.menuItemActive}`}>
            Home
          </a>

          <Dropdown 
            label="About" 
            items={aboutDropdownItems} 
            className={styles.menuItemWithDropdown}
          />

          <a href="#" className={styles.menuItem}>
            Event
          </a>

          <Dropdown 
            label="Free Learnings" 
            items={learningsDropdownItems} 
            className={styles.menuItemWithDropdown}
          />

          <Dropdown 
            label="Certifications" 
            items={certificationsDropdownItems} 
            className={styles.menuItemWithDropdown}
          />

          <Dropdown 
            label="Courses" 
            items={coursesDropdownItems} 
            className={styles.menuItemWithDropdown}
          />

          <Dropdown 
            label="Store" 
            items={storeDropdownItems} 
            className={styles.menuItemWithDropdown}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;