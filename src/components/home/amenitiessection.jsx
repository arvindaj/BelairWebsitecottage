import React from "react";
import { motion } from "framer-motion";

import RELAXING from "../../assets/img/Relaxing-Outdoors.svg";
import EASY from "../../assets/img/Easy-Access.svg";
import PRIME from "../../assets/img/Prime-Location.svg";
import COMFORTABLE from "../../assets/img/Comfortable-Bedding.svg";
import WARM from "../../assets/img/Warm.svg";

import "../../assets/css/home.css";

const AmenitiesSection = () => {
  const amenities = [
    { title: "RELAXING OUTDOORS", image: RELAXING },
    { title: "COMFORTABLE BEDDING", image: COMFORTABLE },
    { title: "PRIME LOCATION", image: PRIME },
    { title: "EASY ACCESS", image: EASY },
    { title: "WARM HOSPITALITY & DINING", image: WARM },
  ];

  return (
    <section className="flex flex-col-reverse lg:flex-row w-full max-w-8xl mx-auto bg-white overflow-hidden">
      {/* ✅ Left Image Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 p-4 sm:p-6"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Top two large images */}
        {amenities.slice(0, 2).map((item, idx) => (
          <motion.div
            key={idx}
            className="relative col-span-1 h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden shadow-md transition-transform duration-500 hover:scale-[1.02]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <p className="room-title text-white text-center bg-black/40 px-4 py-2 rounded-md">
                {item.title}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Bottom three smaller images */}
        <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {amenities.slice(2).map((item, idx) => (
            <motion.div
              key={idx}
              className="relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden shadow-md transition-transform duration-500 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.25 }}
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <p className="room-title text-white text-center bg-black/40 px-3 py-1 rounded-md">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ✅ Right Text Panel */}
      <motion.div
        className="flex flex-col justify-center bg-neutral-900 text-white px-6 py-10 sm:px-10 lg:w-1/3 text-center space-y-6"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full border-t border-white mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        ></motion.div>

        <p className="overlay-text text-gray-300 uppercase tracking-[0.3em]">
          ◆ Amenities ◆
        </p>

        <motion.h2
          className="Guests-Served-num text-3xl sm:text-4xl leading-snug"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          What Makes <br /> Your Stay <br /> Special
        </motion.h2>

        <motion.p
          className="room-info-description text-gray-300 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          From cozy bedrooms and scenic outdoor spaces to warm hospitality and a
          prime location near Kolar’s top attractions, every detail is designed
          for your comfort and memorable stay.
        </motion.p>

        <motion.button
          className="mt-4 mx-auto border border-white px-8 py-2 rounded-md text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Read More
        </motion.button>

        <motion.div
          className="w-full border-t border-white mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default AmenitiesSection;
