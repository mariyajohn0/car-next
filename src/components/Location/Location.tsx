"use client";

import React from "react";
import styles from "./Location.module.css";

const Location: React.FC = () => {
  return (
    <section className={styles.locationSection}>
      <h2 id="locationHeadings" className={styles.locationHeadings}>
        Locations
      </h2>
      <ul className={styles.locationUl}>
        <li className={styles.locationLi}>
          <img
            src="/images/location.svg"
            alt="Location icon"
            className={styles.locationIcon}
          />
          <span>Dubai</span>
        </li>
        <li className={styles.locationLi}>
          <img
            src="/images/location.svg"
            alt="Location icon"
            className={styles.locationIcon}
          />
          <span>Abu Dhabi</span>
        </li>
        <li className={styles.locationLi}>
          <img
            src="/images/location.svg"
            alt="Location icon"
            className={styles.locationIcon}
          />
          <span>Sharjah</span>
        </li>
        <li className={styles.locationLi}>
          <img
            src="/images/location.svg"
            alt="Location icon"
            className={styles.locationIcon}
          />
          <span>Fujairah</span>
        </li>
        <li className={`${styles.locationLi} ${styles.locationLiEnd}`}>
          <img
            src="/images/location.svg"
            alt="Location icon"
            className={styles.locationIcon}
          />
          <span>Ras Al Khaimah</span>
        </li>
      </ul>
    </section>
  );
};

export default Location;
