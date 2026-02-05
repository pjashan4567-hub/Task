import React, { useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({ label, items, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={styles.dropdown}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={`${styles.menuItemWithDropdown} ${className}`}>
        {label}
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
      
      <div className={`${styles.dropdownMenu} ${isOpen ? styles.dropdownMenuOpen : ''}`}>
        {items.map((item, index) => (
          <a key={index} href={item.href} className={styles.dropdownItem}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;