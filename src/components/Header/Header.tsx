"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isBookTabsActive, setIsBookTabsActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  const toggleBookTabs = () => {
    setIsBookTabsActive(!isBookTabsActive);
  };

  return (
    <header className={styles.headerDiv}>
      <nav className={styles.navDiv}>
        <div className={styles.navSocial}>
          <ul className={styles.navSocialList}>
            <li className={styles.navSocialLi}>
              <Image
                src="/images/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </li>
            <li className={styles.navSocialLi}>
              <Image
                src="/images/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </li>
            <li className={styles.navSocialLi}>
              <Image
                src="/images/x_icon.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </li>
            <li className={styles.navSocialLi}>
              <Image
                src="/images/linkedIn.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </li>
          </ul>
        </div>
        <div className={styles.navLeft}>
          <div className={styles.navLogo}>
            <Image
              id="companyLogo"
              src="/images/logo1.svg"
              alt="Diamondlease Logo"
              width={200}
              height={50}
            />
            <Image
              id="companyLogo"
              src="/images/logo2.svg"
              alt="Al Habtoor Logo"
              width={80}
              height={50}
            />
          </div>
          <div className={styles.navList}>
            <ul className={styles.navLinkList}>
              <li className={styles.navLinkLi}>
                <Link href="#">About</Link>
              </li>
              <li className={styles.navLinkLi}>
                <Link href="#">Offers</Link>
              </li>
              <li className={styles.navLinkLi}>
                <Link href="#">Corporate</Link>
              </li>
              <li className={styles.navLinkLi}>
                <Link href="#">Personal</Link>
              </li>
              <li className={styles.navLinkLi}>
                <Link href="#">Location</Link>
              </li>
              <li className={styles.navLinkLi}>
                <Link href="#">Contact Us</Link>
              </li>
              <li className={styles.navLinkButtonLi}>
                <button className={styles.notificationButton}>
                  <Image
                    src="/images/notification.svg"
                    alt="Notification"
                    width={24}
                    height={24}
                  />
                </button>
                <button className={styles.avatarButton}>
                  <span className={styles.avatar}>J</span>
                  <span className={styles.name}>John Doe</span>
                </button>
              </li>
            </ul>

            <div className={styles.menu} onClick={toggleSidebar}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          </div>
        </div>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeContent}>
            Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand
            Sales Counters | All Rates inclusive of VAT. T&C’s apply | Follow us
            on Social Media for New Offers
          </div>
        </div>
      </nav>
      <div
        className={`${styles.sidebar} ${isSidebarActive ? styles.active : ""}`}
      >
        <Image
          src="/images/close-button.svg"
          alt="Close Icon"
          width={24}
          height={24}
          id="closeButton"
          className={styles.closeButton}
          onClick={toggleSidebar}
        />
        <div className={styles.dropNavMenu}>
          <Link href="#">About</Link>
          <hr />
          <Link href="#">Offers</Link>
          <hr />
          <Link href="#">Corporate</Link>
          <hr />
          <Link href="#">Personal</Link>
          <hr />
          <Link href="#">Locations</Link>
          <hr />
          <Link href="#">Contact Us</Link>
          <button className={styles.loginButton}>Login/Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
