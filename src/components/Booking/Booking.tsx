"use client";

import React, { useState } from "react";
import styles from "./Booking.module.css";

const QuickBook: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleBookACarClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <section className={styles.quickBook}>
        <div className={styles.quickBookTabs}>
          <ul className={styles.quickBookTabsList}>
            <li className={styles.quickBookTabsLi}>
              <a href="#">Same as Pick-Up</a>
            </li>
            <li className={styles.quickBookTabsLi}>
              <a href="#">Different Drop-Off</a>
            </li>
            <li>
              <select name="vehicle" className={styles.vehicleSelect}>
                <option value="default" disabled hidden>
                  Select Vehicle Type
                </option>
                <option value="sedan">Sedan</option>
                <option value="hatchback">Hatchback</option>
                <option value="suv">SUV</option>
              </select>
            </li>
          </ul>
        </div>

        <div className={styles.bookInput}>
          <select name="location" className={styles.locationSelect}>
            <option value="default" disabled hidden>
              Al Quaz
            </option>
            <option value="dubai">Dubai</option>
            <option value="saudi">Saudi</option>
          </select>

          <input
            type="datetime-local"
            defaultValue="2023-10-30T09:00"
            className={styles.startTime}
          />
          <input
            type="datetime-local"
            defaultValue="2023-10-30T09:00"
            className={styles.endTime}
          />
          <button className={styles.searchButton}>
            <img src="/images/search-button.svg" alt="Search Button" />
          </button>
          <div className={styles.vDivider}></div>
          <button className={styles.quickBookButton}>Quick Book</button>
        </div>

        <div className={styles.appStore}>
          <p className={styles.downloadPara}>
            Download our App for easy accessibility anytime, anywhere!
          </p>
          <div className={styles.appImages}>
            <img
              className={styles.storeDownloadImage}
              src="/images/appstore.svg"
              alt="App Store"
            />
            <img
              className={styles.storeDownloadImage}
              src="/images/googleplay.svg"
              alt="Google Play"
            />
          </div>
        </div>
      </section>

      <div className={styles.iconsSide}>
        <button className={styles.iconButton}>
          <img src="/images/phone-icon.svg" alt="Phone icon" />
        </button>
        <button className={styles.iconButton}>
          <img
            src="/images/side-icon-bg.svg"
            alt="Icon background"
            className={styles.sideButtonBg}
          />
          <img
            src="/images/side-icon.svg"
            alt="Icon"
            className={styles.sideButtonIcon}
          />
        </button>
      </div>

      {/* Booking Section for Mobile */}
      <section className={styles.quickBookMobile}>
        <div className={styles.bookDropdownMenu}>
          <button className={styles.bookACar} onClick={handleBookACarClick}>
            Book a car
          </button>
          <button className={styles.bookQuick}>Quick book</button>
        </div>

        <div className={`${styles.bookTabs} ${isActive ? styles.active : ""}`}>
          <ul className={styles.bookTabsListMv}>
            <li className={styles.bookTabsLiMv}>
              <a href="#">Same as Pick-Up</a>
            </li>
            <li className={styles.bookTabsLiMv}>
              <a href="#">Different Drop-Off</a>
            </li>
            <li>
              <select name="vehicle" className={styles.vehicleSelectmv}>
                <option value="default" disabled hidden>
                  Vehicle Type
                </option>
                <option value="sedan">Sedan</option>
                <option value="hatchback">Hatchback</option>
                <option value="suv">SUV</option>
              </select>
            </li>
          </ul>
          <ul className={styles.quickBookmobileInput}>
            <li className={styles.quickBookLi}>
              <select name="pickup" className={styles.pickupSelectmv}>
                <option value="default" disabled hidden>
                  Pick up location
                </option>
                <option value="sedan">Dubai</option>
                <option value="hatchback">Saudi</option>
              </select>
            </li>
            <li className={styles.quickBookLi}>
              <select name="vehicle" className={styles.dropOffLocation}>
                <option value="default" disabled hidden>
                  Drop off location
                </option>
                <option value="sedan">Dubai</option>
                <option value="hatchback">Saudi</option>
              </select>
            </li>
            <li className={styles.quickBookLi}>
              <input
                type="datetime-local"
                placeholder="Pick-Up Date and Time"
                className={styles.pickupDate}
              />
            </li>
            <li className={styles.quickBookLi}>
              <input
                type="datetime-local"
                placeholder="Drop off Date and Time"
                className={styles.dropOffDate}
              />
            </li>
            <button className={styles.quickbookSearch}>Search</button>
          </ul>
        </div>
      </section>
    </>
  );
};

export default QuickBook;
