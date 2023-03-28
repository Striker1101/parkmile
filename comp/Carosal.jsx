import React from "react";
import Image from "next/image";
import { ArrowLeft } from "@material-ui/icons";
import { carosal_image } from "@/utilitys/data";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
export default function Carosal() {
  let [size, setSize] = useState(1000);
  const tab = useRef(null);
  useEffect(() => {
    setInterval(() => {
      //Please see this article to see how the below works
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
      tab.current.insertBefore(tab.current.firstChild, null);
    }, 7000);
  }, []);
  return (
    <div class="pt-slick-carousel" style={{ visibility: "visible" }}>
      <div class="pt-slick-carousel__slides  js-pt-slick-carousel-initialize-slides  pt-slick-carousel__slides--with-captions">
        <button
          onClick={() => {
            document.getElementById("slideImage").scrollLeft += 150;
          }}
          type="button"
          class="slick-prev slick-arrow"
          style={{}}
        >
          <span class="screen-reader-text">Previous</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>menu-left</title>
            <path d="M14,7L9,12L14,17V7Z" />
          </svg>
        </button>

        <div class="slick-list">
          <div
            class="slick-track"
            id="slideImage"
            ref={tab}
            style={{
              opacity: "1",
              width: "100vw",
            }}
          >
            {carosal_image.map((item, i) => {
              return (
                <div
                  key={i}
                  class="slide-item"
                  data-slick-index={item.index}
                  aria-hidden={item.hidden}
                  style={{ width: "100%" }}
                  tabIndex={item.tabIndex}
                >
                  <img
                    src={item.src}
                    srcSet={item.setsrc}
                    alt="The Marine Plant Experts in Ireland the UK"
                    class="carousel-item__slide-image"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => {
            document.getElementById("slideImage").scrollLeft -= 150;
          }}
          type="button"
          class="slick-next slick-arrow"
          style={{}}
        >
          <span class="screen-reader-text">Next</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>menu-right</title>
            <path d="M10,17L15,12L10,7V17Z" />
          </svg>
        </button>
      </div>

      {/* <!-- Slider Content - is populated by JS --> */}
      <div class="pt-slick-carousel__container  js-pt-slick-carousel-captions-container">
        <div class="container">
          <div class="pt-slick-carousel__content  js-pt-slick-carousel-captions">
            <p class="pt-slick-carousel__content-title  js-pt-slick-carousel-captions-title">
              The Marine Plant Experts in Ireland &amp; the UK
            </p>
            <div class="pt-slick-carousel__content-description  js-pt-slick-carousel-captions-text">
              <p>
                <Link class="btn  btn-primary" href="/vessels" target="_self">
                  {" "}
                  View Vessels
                </Link>
                <Link
                  class="btn  btn-secondary"
                  href="/services"
                  target="_self"
                >
                  {" "}
                  Our Services
                </Link>
              </p>
            </div>
            <Image
              class="carousel-item__video-play-button js-pt-slick-carousel-video-play-icon"
              src="https://omalleymarineplant.ie/wp-content/themes/growthpress-pt/assets/images/play_icon.svg"
              alt="Play button"
              width={size}
              height={size}
            />
          </div>
        </div>
      </div>

      {/* <!-- Navigation arrows --> */}
      <div class="pt-slick-carousel__navigation-container">
        <div class="pt-slick-carousel__navigation  js-pt-slick-carousel-navigation"></div>
      </div>
    </div>
  );
}
