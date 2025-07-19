import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "./ImageSlider.css";

const ImageSlider = () => {
  const imageSets = [
    {
      desktop: "/images/galaxy-packtech-banner/GS-20-HSI.jpg",
      mobile: "/images/galaxy-packtech-banner/mobile-view/GS-20-HSI.jpg",
      alt: "GS-20 HSI Machine",
    },
    {
      desktop: "/images/galaxy-packtech-banner/GS-24-PLUS-200.jpg",
      mobile: "/images/galaxy-packtech-banner/mobile-view/GS-24-PLUS-200.jpg",
      alt: "GS-24 PLUS 200 Machine",
    },
    {
      desktop: "/images/galaxy-packtech-banner/GS-24-TSG.jpg",
      mobile: "/images/galaxy-packtech-banner/mobile-view/GS-24-TSG.jpg",
      alt: "GS-24 TSG Machine",
    },
    {
      desktop: "/images/galaxy-packtech-banner/GS-24-XPRESS-200.jpg",
      mobile: "/images/galaxy-packtech-banner/mobile-view/GS-24-XPRESS-200.jpg",
      alt: "GS-24 XPRESS 200 Machine",
    },
    {
      desktop: "/images/galaxy-packtech-banner/GSC-14-PLUS-200.jpg",
      mobile: "/images/galaxy-packtech-banner/mobile-view/GSC-14-PLUS-200.jpg",
      alt: "GSC-14 PLUS 200 Machine",
    },
    {
      desktop: "/images/galaxy-packtech-banner/GSC-20-Combi.jpg",
      mobile: "/images/galaxy-packtech-banner/mobile-view/GSC-20-Combi.jpg",
      alt: "GSC-20 Combi Machine",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="slider-container ">
      <Swiper
        className="zoom-effect-swiper"
        spaceBetween={isMobile ? 10 : 30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        loop={true}
        speed={1200}
      >
        {imageSets.map((imageSet, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <picture>
                <source media="(max-width: 768px)" srcSet={imageSet.mobile} />
                <source media="(min-width: 769px)" srcSet={imageSet.desktop} />
                <img
                  src={imageSet.desktop}
                  alt={imageSet.alt}
                  className="zoom-image"
                  loading="lazy"
                />
              </picture>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
