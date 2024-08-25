"use client";

import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Main Footer Section */}
      <div className={styles.footerdiv}>
        <div className={styles.footerdiv2}>
          <div className={styles.footerdiv3}>
            <div className={styles.footerdiv4}>
              <Image
                src="/images/logo2.svg"
                alt="Al Habtoor Logo"
                className={styles.footerimg}
                width={150}
                height={50}
              />
              <div className={styles.memberOfTheAlHabtoorGroup}>
                Member of the <br />
                Al Habtoor Group
              </div>
            </div>
            <div className={styles.footerdiv5}>
              <div className={styles.footerdiv6}>
                <div className={`${styles.footerhome} ${styles.footerCursor}`}>Home</div>
                <div className={`${styles.footeraboutUs} ${styles.footerCursor}`}>About Us</div>
                <div className={`${styles.footerservices} ${styles.footerCursor}`}>Services</div>
              </div>
              <div className={styles.footerdiv7}>
                <div className={styles.footerCursor}>Offers</div>
                <div className={`${styles.footerlocations} ${styles.footerCursor}`}>Locations</div>
                <div className={`${styles.footercontactUs} ${styles.footerCursor}`}>Contact Us</div>
              </div>
              <div className={styles.footerdiv8}>
                <div className={styles.footerCursor}>FAQ</div>
                <div className={`${styles.footerprivacyPolicy} ${styles.footerCursor}`}>Privacy Policy</div>
                <div className={`${styles.footerserviceRequest} ${styles.footerCursor}`}>
                  Service Request
                </div>
              </div>
              <div className={styles.footerdiv9}>
                <div className={`${styles.footercareer} ${styles.footerCursor}`}>Career</div>
                <div className={`${styles.footertermsConditions} ${styles.footerCursor}`}>
                  Terms & Conditions
                </div>
              </div>
            </div>
            <div className={styles.footerdiv10}>
              <div>FOLLOW US ON</div>
              <div className={`${styles.footerimg2} ${styles.footerCursor}`}>
                <Image
                  src="/images/footer-facebook.svg"
                  alt="Facebook"
                  width={16}
                  height={16}
                />
                <Image
                  src="/images/footer-x.svg"
                  alt="Twitter"
                  width={16}
                  height={16}
                />
                <Image
                  src="/images/footer-instagram.svg"
                  alt="Instagram"
                  width={16}
                  height={16}
                />
                <Image
                  src="/images/footer-linkedin.svg"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                />
                <Image
                  src="/images/footer-youtube.svg"
                  alt="YouTube"
                  width={16}
                  height={16}
                />
              </div>
              <div className={styles.footerimg3}>
                <Image
                  src="/images/footer-icon1.svg"
                  alt="Footer icon"
                  width={67}
                  height={38}
                />
                <Image
                  src="/images/footer-icon2.svg"
                  alt="Footer icon"
                  width={67}
                  height={38}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.alHabtoorCompanies} ${styles.footerCursor}`}>Al Habtoor Companies</div>
          <div className={styles.footerdiv11}>
            <div className={`${styles.footerhospitality} ${styles.footerCursor}`}>Hospitality</div>
            <div className={`${styles.footerrealEstate} ${styles.footerCursor}`}>Real Estate</div>
            <div className={`${styles.footereducation} ${styles.footerCursor}`}>Education</div>
            <div className={`${styles.footerpublishing} ${styles.footerCursor}`}>Publishing</div>
            <div className={`${styles.footerautomotive} ${styles.footerCursor}`}>Automotive</div>
            <div className={`${styles.footervehicleLeasing} ${styles.footerCursor}`}>Vehicle Leasing</div>
          </div>
          <div className={styles.footerdiv12}></div>
          <div className={styles.carRentalLLCAllRightsReserved}>
            © 2018 Car rental LLC - All Rights Reserved.
          </div>
        </div>
      </div>

      {/* Footer Section for Mobile View */}
      <div className={styles.footerMobile}>
        <div className={styles.topFooter}>
          <div className={styles.logoSection}>
            <Image
              src="/images/logo2.svg"
              alt="Al Habtoor Logo"
              width={150}
              height={50}
            />
            <div className={styles.alHabtoorText}>
              <p>
                Member of the
                <br />
                Al Habtoor Group
              </p>
            </div>
          </div>
          <div className={`${styles.socialIconsMobileFooter} ${styles.footerCursor}`}>
            <a href="#">
              <Image
                src="/images/facebook-mv.svg"
                alt="Facebook"
                width={16}
                height={16}
              />
            </a>
            <a href="#">
              <Image
                src="/images/x-mv.svg"
                alt="Twitter"
                width={16}
                height={16}
              />
            </a>
            <a href="#">
              <Image
                src="/images/instagram.svg"
                alt="Instagram"
                width={16}
                height={16}
              />
            </a>
            <a href="#">
              <Image
                src="/images/linkedin-mv.svg"
                alt="LinkedIn"
                width={16}
                height={16}
              />
            </a>
            <a href="#">
              <Image
                src="/images/youtube.svg"
                alt="YouTube"
                width={16}
                height={16}
              />
            </a>
          </div>
        </div>

        <div className={styles.middleFooterMobile}>
          <a href="#">Home</a>
          <a href="#">Offers</a>
          <a href="#">Career</a>
          <a href="#">About Us</a>
          <a href="#">Locations</a>
          <a href="#">FAQ</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Service Request</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Services</a>
          <a href="#">Contact Us</a>
        </div>

        <div className={styles.bottomFooterMobile}>
          <p>Al Habtoor Companies</p>
          <div className={styles.companiesMobileFooter}>
            <a href="#">Hospitality</a>
            <a href="#">Real Estate</a>
            <a href="#">Publishing</a>
            <a href="#">Automotive</a>
            <a href="#">Vehicle Leasing</a>
          </div>

          <div className={styles.secureSealMobileFooter}>
            <Image
              src="/images/footer-last.svg"
              alt="Secure GlobalSign Seal"
              width={58}
              height={26}
            />
          </div>
          <hr />
          <p>© 2023 Car rental LLC - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
