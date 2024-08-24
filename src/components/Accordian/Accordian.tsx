"use client";

import React, { useState } from "react";
import styles from "./Accordian.module.css"; 

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What is my eligibility to book a car?",
    answer:
      "You should be of 18 years old above and you must possess a valid driving license.",
  },
  {
    question: "Can I book for any period of time?",
    answer:
      "Yes, you can book for any duration, from a few hours to several months.",
  },
  {
    question: "Can I opt for a longer period?",
    answer:
      "Yes, you can rent a car for an extended period, such as weeks or months.",
  },
  {
    question: "Can I book one-way trip?",
    answer: "Yes, one-way trips are available for booking.",
  },
  {
    question: "Is there a home delivery option available?",
    answer: "Yes, we offer home delivery for your rental car.",
  },
  {
    question: "How can I make the payment?",
    answer:
      "You can pay online using credit/debit cards or through other accepted payment methods.",
  },
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className={styles.faqItem}>
          <div
            className={styles.faqQuestion}
            onClick={() => toggleAnswer(index)}
          >
            <span>{item.question}</span>
            <span className={styles.faqToggle}>
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          <div
            className={`${styles.faqAnswer} ${
              activeIndex === index ? styles.show : ""
            }`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FaqSection;
