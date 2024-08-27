"use client";

import React from "react";
import Image from "next/image";
import styles from "./RentSteps.module.css";

const RentSteps: React.FC = () => {
  return (
    <section className={styles.rentSteps}>
      <h2 className={styles.rentStepsHeading}>
        Rent/Lease In three easy steps
      </h2>
      <div className={styles.rentStepsRow}>
        <div className={styles.rentStepCols}>
          <h3 className={styles.rentSteph3}>01</h3>
          <div className={styles.rentStepSubdiv}>
            <Image
              src="/images/rent-location.svg"
              alt="Location icon"
              className={styles.rentStepIcon}
              width={50}
              height={50}
            />
            <p className={styles.rentDivPara}>
              Select the location. Browse through our available options and find
              the perfect car to suit your needs.
            </p>
          </div>
        </div>

        <div className={styles.rentStepCols}>
          <h3 className={styles.rentSteph3}>02</h3>
          <div className={styles.rentStepSubdiv}>
            <Image
              src="/images/rent-calender.svg"
              alt="Calendar icon"
              className={styles.rentStepIcon}
              width={50}
              height={50}
            />
            <p className={styles.rentDivPara}>
              Choose your desired Pick-Up date and time.
            </p>
          </div>
        </div>

        <div className={styles.rentStepCols}>
          <h3 className={styles.rentSteph3}>03</h3>
          <div className={styles.rentStepSubdiv}>
            <Image
              src="/images/rent-car.svg"
              alt="Payment icon"
              className={styles.rentStepIcon}
              width={50}
              height={50}
            />
            <p className={styles.rentDivPara}>
              Make payment and book the car. Select an option to either have the
              car delivered to your location or pick it up directly from us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentSteps;
