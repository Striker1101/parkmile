import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { navheader } from "@/redux/action";
import styles from "@/styles/contact.module.css";

export default function Contact() {
  const dispatch = useDispatch();
  dispatch(navheader("contact"));

  const [currentImg, setCurrentImg] = useState(0);
  const images = [
    "/profile/img0.jpg",
    "/profile/img1.jpg",
    "/profile/img2.jpg",
    "/profile/img4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((currentImg + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImg]);

  return (
    <div>
      <div className={styles.wallpaper}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Wallpaper ${index}`}
            className={`${styles.img} ${
              index === currentImg ? styles.active : ""
            }`}
          />
        ))}
        <div className={styles.profile}>
          <img
            src="/profile/img3.jpg"
            alt="Profile"
            className={styles.profileImg}
          />
        </div>
      </div>
      <div className={styles.contact_links}>
        <div className={styles.contact_link}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>cellphone</title>
            <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
          </svg>
          <p>+190 (840) 91225</p>
        </div>
        <div className={styles.contact_link}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>map-marker-radius</title>
            <path d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z" />
          </svg>
          <p>Prospect, Westport, Southeastern Sicily F28 H521</p>
        </div>
        <div className={styles.contact_link}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>email-check</title>
            <path d="M13 19C13 15.69 15.69 13 19 13C20.1 13 21.12 13.3 22 13.81V6C22 4.89 21.1 4 20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H13.09C13.04 19.67 13 19.34 13 19M4 8V6L12 11L20 6V8L12 13L4 8M17.75 22.16L15 19.16L16.16 18L17.75 19.59L21.34 16L22.5 17.41L17.75 22.16" />
          </svg>
          <p>bruncehenderson@gmail.com</p>
        </div>
      </div>
      <div className={styles.inquire}>
        <p>Have an enquiry?</p>
        <h2>Contact Us</h2>
        <form className={styles.form}>
          <input placeholder="Name*" type="text" name="name" id="name" />
          
          <input
            placeholder="Phone Number"
            type="number"
            name="number"
            id="number"
          />
          <input placeholder="Email" type="email" name="email" id="email" />
          <textarea
            placeholder="Message"
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  );
}
