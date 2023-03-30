import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/gallery.module.css"; // add a CSS module for styling
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { navheader } from "@/redux/action";

function Gallery() {
  const dispatch = useDispatch();
  dispatch(navheader("gallery"));
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [photoUrls, setPhotoUrls] = useState([]);
  for (let i = 0; i < 51; i++) {
    photoUrls.push("/gallery/img" + i + ".jpg");
  }
  const [currentIndex, setCurrentIndex] = useState(null);

  const handlePhotoClick = (index) => {
    setCurrentIndex(index);
    setIsFullScreen(true);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photoUrls.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photoUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className={styles.gallery}>
        {photoUrls.map((url, index) => (
          <div
            key={index}
            className={classNames(styles.item, {
              [styles.active]: index === currentIndex,
            })}
            onClick={() => handlePhotoClick(index)}
          >
            <Image src={url} alt="A photo" width={200} height={200} />
          </div>
        ))}
      </div>
      {isFullScreen && (
        <>
          <div className={styles.fullScreen}>
            <button
              class="closeButton"
              onclick={() => {
                setIsFullScreen(false);
              }}
            >
              <span>&times;</span>
            </button>
            <button onClick={handlePrevClick}>Prev</button>
            <Image
              src={photoUrls[currentIndex]}
              alt="Full-screen"
              width={350}
              height={450}
            />
            <button onClick={handleNextClick}>Next</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Gallery;
