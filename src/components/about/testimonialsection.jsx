import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { ImQuotesLeft } from "react-icons/im";
import { motion } from "framer-motion"; 

import testi1 from "../../assets/images/about/testiman.jpg";
import testi2 from "../../assets/images/about/testigirl.png";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Subashini H",
      image: testi1,
      quote:
        "We had such a relaxing stay at Belair Cottages. The fully sized kitchen included the essentials to make a tasty home meal. ",
    },
    {
      name: "Priyanka J",
      image: testi2,
      quote:
        "We had such a relaxing stay at Belair Cottages. The fully sized kitchen included the essentials to make a tasty home meal.",
    },
    {
      name: "Rahul M",
      image: testi1,
      quote:
        "We had such a relaxing stay at Belair Cottages. The fully sized kitchen included the essentials to make a tasty home meal.",
    },
    {
      name: "Anita K",
      image: testi2,
      quote:
        "We had such a relaxing stay at Belair Cottages. The fully sized kitchen included the essentials to make a tasty home meal.",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 px-4 sm:px-6 lg:px-0"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#a3248e]  rotate-animation">
              ◆
            </span>
            <h3 className="text-[#a3248e] uppercase tracking-widest text-xs sm:text-sm font-semibold">
              Testimonials
            </h3>
            <span className="text-[#a3248e]  rotate-animation">
              ◆
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-medium font-serif text-gray-800 mb-4">
            Guests Share Their Belair Cottages Experience
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Many guests keep coming back because of the comfort, scenic views,
            and friendly staff that make every stay special
          </p>
        </motion.div>

        <div className="relative py-10 pt-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={800}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2, spaceBetween: 30 },
            }}
            className="pb-16 "
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#e2e2e2] rounded-lg shadow-lg overflow-hidden h-full border-2 border-purple-200"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div
                      className="md:w-2/5 w-full relative h-90 md:h-auto bg-cover bg-center"
                      style={{ backgroundImage: `url(${testimonial.image})` }}
                    >
                      <div className="absolute bottom-4 left-4 bg-white px-3 sm:px-4 py-1 sm:py-2 rounded shadow-md">
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                          {testimonial.name}
                        </h4>
                      </div>
                    </div>

                    <div className="lg:w-3/5 w-full p-4 sm:p-6 md:p-8 flex flex-col justify-center relative">
                      <div className="bg-[#a3248e] p-4 sm:p-5 md:p-8 rounded-md relative">
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                          }}
                          className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 
                          text-[#a3248e] border border-[#a3248e] bg-white rounded-full 
                          p-1.5 sm:p-2 text-xl sm:text-2xl md:text-3xl shadow-md"
                        >
                          <ImQuotesLeft />
                        </motion.div>

                        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed relative z-10">
                          {testimonial.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination mt-8 flex justify-center gap-2"></div>
          {/* <button className="swiper-button-prev !w-6 !h-6 sm:!w-8 sm:!h-8 !bg-white !rounded-full !shadow-lg hover:!bg-[#a3248e] !text-[#a3248e] hover:!text-white transition-all after:!text-xs sm:after:!text-sm"></button>
          <button className="swiper-button-next !w-6 !h-6 sm:!w-8 sm:!h-8 !bg-white !rounded-full !shadow-lg hover:!bg-[#a3248e] !text-[#a3248e] hover:!text-white transition-all after:!text-xs sm:after:!text-sm"></button> */}
        </div>

        <style>{`
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #d1d5db;
            opacity: 1;
            transition: all 0.3s;
            margin-top: 99px;
          }
          .swiper-pagination-bullet-active {
            background: #a3248e;
            width: 28px;
            border-radius: 6px;
          }
          .swiper-button-prev,
          .swiper-button-next {
            font-size: 5px!important;
          }
        `}</style>
      </div>
    </div>
  );
}
