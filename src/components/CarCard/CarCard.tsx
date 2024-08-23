import React from "react";
import Image from "next/image";
import styles from "./CarCard.module.css";

type CarCardProps = {
  imageSrc: string;
  altText: string;
  carName: string;
  description: string;
  features: string[];
  price: string;
};

const CarCard: React.FC<CarCardProps> = ({
  imageSrc,
  altText,
  carName,
  description,
  features,
  price,
}) => {
  return (
    <div className={styles.popularCarCard}>
      <Image
        src={imageSrc}
        className={styles.popularCarCardImg}
        alt={altText}
        width={500}
        height={300}
      />
      <div className={styles.popularCarCardInfo}>
        <h3 className={styles.popularCarCardInfoHeading}>{carName}</h3>
        <p className={styles.popularCarCardInfoPara}>{description}</p>
        <ul className={styles.popularCarUl}>
          {features.map((feature, index) => (
            <li className={styles.popularcarLi} key={index}>
              <Image
                src={`/images/popular-icon${index + 1}.svg`}
                className="popularcarLiImg"
                alt="Icon"
                width={24}
                height={24}
              />
              <p>{feature}</p>
            </li>
          ))}
        </ul>
        <div className={styles.popularCarCardInfo2}>
          <p className={styles.popularCardCost}>{price}</p>
          <button className={styles.bookNowButton}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
