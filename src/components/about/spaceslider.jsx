import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import sliderimg1 from "../../assets/images/about/aboutslider1.jpg";
import sliderimg2 from "../../assets/images/about/aboutslider2.jpg";
import sliderimg3 from "../../assets/images/about/aboutslider3.png";

export default function BelairCottages() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
    script.onload = () => {
      if (swiperRef.current && window.Swiper) {
        new window.Swiper(swiperRef.current, {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination1",
            clickable: true,
          },
          breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          },
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const images = [
    { url: sliderimg1, alt: "Poolside view with palm trees" },
    { url: sliderimg2, alt: "Tropical cottage with pool" },
    { url: sliderimg3, alt: "Elegant bedroom suite" },
    { url: sliderimg1, alt: "Luxury resort pool" },
    { url: sliderimg2, alt: "Modern villa exterior" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-19 sm:pt-16 lg:pt-20 pb-8 sm:pb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#a3248e] text-xl rotate-animation">◆</span>
            <span className="text-xs sm:text-sm tracking-widest text-[#a3248e] uppercase">
              Spaces that inspire
            </span>
            <span className="text-[#a3248e] text-xl rotate-animation">◆</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-serif text-gray-800 mb-4 sm:mb-6">
            A Glimpse Inside Belair Cottages
          </h1>

          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Explore curated images showcasing our elegant spaces, warm
            hospitality, and memorable guest experiences
          </p>
        </div>
      </motion.div>

      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-0 pb-16 sm:pb-20">
        <div ref={swiperRef} className="swiper">
          <div className="swiper-wrapper">
            {images.map((image, index) => (
              <div key={index} className="swiper-slide">
                <motion.div
                  className="relative overflow-hidden shadow-lg group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-[5/3] w-full">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            ))}
          </div>

          <div className="swiper-pagination1 mt-8 sm:mt-12" />
        </div>
      </div>

      <style jsx>{`
        .swiper-pagination1 {
          position: relative;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        :global(.swiper-pagination-bullet) {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }

        :global(.swiper-pagination-bullet-active) {
          width: 32px;
          border-radius: 4px;
          background: #a3248e;
        }
      `}</style>
    </div>
  );
}
