"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./SummerPromotion.module.css";

const Slideshow: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideDuration = 2000;

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
    }, slideDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.slideshow}>
      <div className={styles.slideshowContainer}>
        <div
          className={`${styles.mySlides} ${
            slideIndex === 0 ? styles.fade : ""
          }`}
        >
          <Image
            src="/images/slider-image.svg"
            alt="Slide Image 1"
            className={styles.slideImage}
            width={1312}  
            height={400} 
          />
        </div>

        <div
          className={`${styles.mySlides} ${
            slideIndex === 1 ? styles.fade : ""
          }`}
        >
          <Image
            src="/images/slider-image.svg"
            alt="Slide Image 2"
            className={styles.slideImage}
            width={1312} 
            height={400} 
          />
        </div>

        <div
          className={`${styles.mySlides} ${
            slideIndex === 2 ? styles.fade : ""
          }`}
        >
          <Image
            src="/images/slider-image.svg"
            alt="Slide Image 3"
            className={styles.slideImage}
            width={1312}  
            height={400} 
          />
        </div>

        <p>
          Receive guaranteed{" "}
          <span className={styles.giftButton}>GIFT VOUCHER</span>
          <br />
          on a monthly hire or lease
        </p>

        <div style={{ textAlign: "center" }}>
          <span
            className={`${styles.dot} ${slideIndex === 0 ? styles.active : ""}`}
          ></span>
          <span
            className={`${styles.dot} ${slideIndex === 1 ? styles.active : ""}`}
          ></span>
          <span
            className={`${styles.dot} ${slideIndex === 2 ? styles.active : ""}`}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
