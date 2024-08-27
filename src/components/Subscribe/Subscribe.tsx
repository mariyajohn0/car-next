"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Subscribe.module.css";

const Subscribe: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubscribe = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("Subscribe button clicked");
    setNameError("");
    setEmailError("");

    let isValid = true;

    if (name.trim() === "") {
      setNameError("*Required field");
      isValid = false;
    }

    if (email.trim() === "") {
      setEmailError("*Required field");
      isValid = false;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        setEmailError("Please enter a valid email address.");
        isValid = false;
      }
    }

    if (isValid) {
      setName("");
      setEmail("");
      alert("Subscribed successfully!");
    }
  };

  const handleGetLink = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setPhoneError("");

    let isValid = true;

    if (phone.trim() === "") {
      setPhoneError("*Required field");
      isValid = false;
    } else {
      const phonePattern = /^\d{10,}$/;
      if (!phonePattern.test(phone)) {
        setPhoneError(
          "Please enter a valid phone number (at least 10 digits)."
        );
        isValid = false;
      }
    }

    if (isValid) {
      setPhone("");
      alert("Link sent successfully!");
    }
  };

  return (
    <section className={styles.subscribeSection} id="subscribe">
      <div className={styles.subscribeDiv1} id="subscribeDiv1">
        <h3 className={styles.subscribeDiv1Heading}>
          Subscribe here for exclusive offers and updates!
        </h3>
        <div className={styles.subscribeDiv1InputDiv}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.enterName}
          />
          {nameError && <p className={styles.errorMessage}>{nameError}</p>}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.enterEmail}
          />
          {emailError && <p className={styles.errorMessage}>{emailError}</p>}
        </div>
        <p className={styles.subscribeDiv1Para}>
          Don&apos;t miss out! Enter your email and your name, then hit subscribe to
          unlock a world of special offers and details.
        </p>
        <button
          onClick={handleSubscribe}
          className={styles.subscribeButton}
          id="subscribeButton"
        >
          Subscribe
        </button>
      </div>

      <div className={styles.subscribeDiv2} id="subscribeDiv2">
        <Image
          className={styles.mobileAppImg}
          src="/images/subscribe-phone.svg"
          alt="Mobile Image"
          width={150}
          height={150}
        />
        <div className={styles.downloadLinkDiv}>
          <p className={styles.downloadLinkPara}>
            Enter your number and receive <br />a direct link to download the
            app
          </p>
          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.enterNumber}
          />
          {phoneError && (
            <p className={styles.numberErrorMessage}>{phoneError}</p>
          )}
          <button
            onClick={handleGetLink}
            className={styles.subscribeLinkButton}
          >
            Get the link
          </button>
          <p className={styles.getItOnPara}>Get it on</p>
          <div className={styles.storeLinks}>
            <Image src="/images/subscribe-appstore.svg" alt="App store" width={120} height={40} />
            <Image src="/images/subscribe-googleplay.svg" alt="Google play" width={120} height={40} />
          </div>
        </div>
      </div>

      {/* Mobile View Section */}
      <div className={styles.subscribeDiv2Mobile}>
        <div className={styles.subscribeDiv2Main}>
          <Image
            className={styles.mobileAppImgMV}
            src="/images/subscribe-phone.svg"
            alt="Mobile Image"
            width={150}
            height={150}
          />
          <div className={styles.downloadLinkDiv}>
            <p className={styles.getItOnParaMV}>Get it on</p>
            <div className={styles.storeLinksMV}>
              <Image src="/images/subscribe-appstore.svg" alt="App store" width={120} height={40} />
              <br />
              <Image src="/images/subscribe-googleplay.svg" alt="Google Play" width={120} height={40} />
            </div>
            <p className={styles.downloadLinkParaMV}>
              Enter your number and receive a direct link <br />
              to download the app
            </p>
          </div>
        </div>
        <div className={styles.downloadInputDiv}>
          <input
            id="enter-numberMV"
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.enterNumberMV}
          />
          <button
            onClick={handleGetLink}
            className={styles.subscribeLinkButton}
          >
            Get the link
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
