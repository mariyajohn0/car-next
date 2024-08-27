"use client";

import React from "react";
import Image from "next/image";
import styles from "./Location.module.css";

const Location: React.FC = () => {
  return (
    <section className={styles.locationSection}>
      <h2 id="locationHeadings" className={styles.locationHeadings}>
        Locations
      </h2>
      <ul className={styles.locationUl}>
        <li className={styles.locationLi}>
          <Image
            src="/images/location.svg"
            alt="Location icon"
            className={styles.locationIcon}
            width={24}
            height={24}
          />
          <span>Dubai</span>
        </li>
        <li className={styles.locationLi}>
          <Image
            src="/images/location.svg"
            alt="Location icon"
            className={styles.locationIcon}
            width={24}
            height={24}
          />
          <span>Abu Dhabi</span>
        </li>
        <li className={styles.locationLi}>
          <Image
            src="/images/location.svg"
            alt="Location icon"
            className={styles.locationIcon}
            width={24}
            height={24}
          />
          <span>Sharjah</span>
        </li>
        <li className={styles.locationLi}>
          <Image
            src="/images/location.svg"
            alt="Location icon"
            className={styles.locationIcon}
            width={24}
            height={24}
          />
          <span>Fujairah</span>
        </li>
        <li className={`${styles.locationLi} ${styles.locationLiEnd}`}>
          <Image
            src="/images/location.svg"
            alt="Location icon"
            className={styles.locationIcon}
            width={24}
            height={24}
          />
          <span>Ras Al Khaimah</span>
        </li>
      </ul>
    </section>
  );
};

export default Location;
