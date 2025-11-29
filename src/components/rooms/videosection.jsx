import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LuxuryCottage() {
  const [isPlaying, setIsPlaying] = useState(false);

  const amenities = [
    { label: "Availability", value: "One-Bedroom House" },
    { label: "Occupancy", value: "Up to 4 guests" },
    { label: "Room Size", value: "24m²" },
    { label: "Bed Type", value: "2 Double Beds" },
  ];

  return (
    <div className="min-h-screen px-4 py-10 md:py-15 md:pb-30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#a3248e] rotate-animation">◆</span>
            <p className="text-[#a3248e] text-sm tracking-widest uppercase font-medium">
              Room
            </p>
            <span className="text-[#a3248e] rotate-animation">◆</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-4 md:mb-6 px-4">
            The One-Bedroom Luxury Cottage
          </h1>

          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Experience personalized service, warm hospitality, and serene
            comfort in our elegantly appointed one-bedroom retreat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-6 -bottom-6 w-[90%] h-[90%] border border-gray-300"></div>

            <div className="relative overflow-hidden shadow-2xl group">
              <motion.img
                src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800"
                alt="Luxury cottage with pool"
                className="w-full h-[400px] md:h-[400px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />

              <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300"
                aria-label="Play video"
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="w-20 h-20 md:w-20 md:h-20 border-4 border-white rounded-full flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <svg
                    className="w-8 h-8 md:w-12 md:h-12 text-[#ffffff] ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4">
                Availability & Reservations
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                The One-Bedroom House offers spacious interiors, modern
                amenities, and a private balcony, creating an ideal setting for
                comfort and relaxation.
              </p>

              <ul className="space-y-3 mb-8">
                {amenities.map((amenity, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start text-gray-700"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-[#a3248e] mr-3 mt-1">•</span>
                    <span className="text-sm md:text-base">
                      <span className="font-medium">{amenity.label}:</span>{" "}
                      {amenity.value}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl md:text-3xl font-semibold text-gray-800">
                  ₹3,000
                </span>
                <span className="text-gray-500 text-sm md:text-base">
                  per night
                </span>
              </div>

             <div className="flex flex-col sm:flex-row gap-4">
      {/* BOOK NOW Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden flex-[0.3] bg-white text-[#a3248e] font-medium py-3 px-3 rounded-none border-2 border-[#a3248e] text-sm md:text-base cursor-pointer wave-btn"
        data-color="#a3248e"
      >
        <span className="relative z-20 pointer-events-none">BOOK NOW</span>
      </motion.button>

      {/* SEND ENQUIRY Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden flex-[0.4] bg-white text-black font-medium py-3 px-3 rounded-none border-2 border-black text-sm md:text-base cursor-pointer wave-btn"
        data-color="#000000"
      >
        <span className="relative z-20 pointer-events-none">SEND ENQUIRY</span>
      </motion.button>
    </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>
        {
          `
      /* Ensure this file is imported (import "./buttonWave.css") */

.wave-btn {
  position: relative;
  z-index: 10;                /* base stacking for the element */
  transition: color 5s ease, transform 0.25s ease;
  -webkit-tap-highlight-color: transparent;
}

/* the sliding fill layer */
.wave-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -150%;
  width: 140%;
  height: 100%;
  transform: skewX(-18deg);
  transition: left 1.50s cubic-bezier(.2,.9,.2,1);
  z-index: 5;                 /* put it above the button background but below the text span (z-20) */
  border-radius: inherit;
  pointer-events: none;
}

/* slide it in on hover */
.wave-btn:hover::before {
  left: 0;
}

/* ensure the visible text turns white on hover */
.wave-btn:hover .relative.z-20,
.wave-btn:hover {
  color: #fff !important;
}

/* set per-button color using data-color attribute */
.wave-btn[data-color="#a3248e"]::before {
  background-color: #a3248e;
}

.wave-btn[data-color="#000000"]::before {
  background-color: #000000;
}

/* preserve border visibility when fill slides in */
.wave-btn[data-color="#a3248e"] {
  border-color: #a3248e;
}
.wave-btn[data-color="#000000"] {
  border-color: #000000;
}

`
        }
      </style>
    </div>
  );
}
