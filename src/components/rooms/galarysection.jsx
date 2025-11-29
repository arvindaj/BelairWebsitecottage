import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import leaf1 from "../../assets/images/rooms/Vector.png";
import leaf2 from "../../assets/images/rooms/Vector (1).png";

export default function PremiumRoomAmenities() {
  const images = [
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200",
  ];

  return (
    <div className="min-h-screen px-4 py-16 md:py-20 relative">
    
      <style>{`
        .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          width: 9px;
          height: 9px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #a3248e;
          width: 30px;
          border-radius: 6px;
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .rotate-animation {
          display: inline-block;
          animation: rotate 3s linear infinite;
        }

        /* Image scaling effect */
        .swiper-slide {
          transition: all 0.6s ease;
          transform: scale(0.8);
          opacity: 0.5;
        }
        .swiper-slide-prev,
        .swiper-slide-next {
          transform: scale(0.9);
          opacity: 0.8;
        }
        .swiper-slide-active {
          transform: scale(1.1);
          opacity: 1;
          z-index: 10;
        
        }
      `}</style>
 
     <motion.div
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative text-center mb-10"
>

  <img
    src={leaf1}
    alt="Leaf Left"
    className="hidden lg:block absolute left-0 bottom-0 w-20 md:w-59  rotate-0"
  />
  <img
    src={leaf2}
    alt="Leaf Right"
    className="hidden lg:block absolute right-0 bottom-0 w-20 md:w-52  rotate-0"
  />


  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="text-[#a3248e] text-sm font-semibold tracking-widest mb-3"
    style={{ letterSpacing: "0.25em" }}
  >
    <span className="rotate-animation">◆</span> GALLERY{" "}
    <span className="rotate-animation">◆</span>
  </motion.p>

  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="text-3xl md:text-5xl font-serif text-gray-800 mb-4"
  >
    Premium Room Amenities
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-4"
  >
    View our meticulously curated amenities, designed to ensure unmatched
    comfort, convenience, and an elevated guest experience.
  </motion.p>
</motion.div>


      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mx-auto"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1.7 },
            1024: { slidesPerView: 1.5 },
          }}
          spaceBetween={40}
          loop={true}
          className="pb-12"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="overflow-hidden p-0 shadow-lg"
              >
                <img
                  src={img}
                  alt={`Room ${index + 1}`}
                  className=" w-[900px] h-[400px] md:h-[550px] md:w-screen object-cover"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}
