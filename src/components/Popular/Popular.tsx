// components/PopularCarsSection.tsx
import React from "react";
import CarCard from "../CarCard/CarCard";
import styles from "./Popular.module.css";

const PopularSection: React.FC = () => {
  return (
    <section className={styles.popularSection}>
      <h2 className={styles.popularSectionH2}>Most popular cars</h2>
      <div className={styles.popularCardRow}>
        
        {/* Mitsubishi Eclipse Car Card */}
        <CarCard
          imageSrc="/images/popular-bluecar.svg"
          altText="Mitsubishi Eclipse"
          carName="Mitsubishi Eclipse"
          description="Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology and driving confidence."
          features={["6 People", "Automatic", "5 Doors", "AC"]}
          price="AED 2700/ Monthly"
        />

        {/* Jac J7 Car Card */}
        <CarCard
          imageSrc="/images/popular-redcar.svg"
          altText="Jac J7"
          carName="Jac J7"
          description="S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test."
          features={["6 People", "Automatic", "5 Doors", "AC"]}
          price="AED 2700/ Monthly"
        />
      </div>
    </section>
  );
};

export default PopularSection;
