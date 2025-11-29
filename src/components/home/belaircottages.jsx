import React from "react";
import { motion } from "framer-motion";
import Belaircottages from "../../assets/img/belair-cottages.svg";
import Leaf1 from "../../assets/img/leaf1.svg";
import Leaf2 from "../../assets/img/leaf2.svg";
import "../../assets/css/home.css";

const BelairCottages = () => {
  return (
    <section className="flex flex-col md:flex-row items-center p-6 md:p-12 overflow-hidden relative">
      {/* Left: Image with overlays */}
      <motion.div
        className="relative w-full md:w-2/3 rounded-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={Belaircottages}
          alt="Belair Cottages"
          className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
        />

        {/* Overlay boxes (hidden on mobile) */}
        <div className="absolute top-0 left-0 w-full h-full flex-col justify-center md:items-start items-center gap-4 sm:gap-6 px-4 sm:px-8 hidden md:flex">
          {[
            {
              title: "Close To Nature & Attractions",
              desc: "From Belair Cottages, explore Catherine Falls, Elk Falls, and nearby Ooty and Coonoor.",
              delay: 0.3,
            },
            {
              title: "Heritage Stay With Local Experience",
              desc: "Rest in cozy cottages, feel the European-style charm, and connect with Kotagiri’s culture.",
              delay: 0.6,
            },
            {
              title: "Best Weather For Your Holiday",
              desc: "The climate stays refreshing, with October being the perfect month for sightseeing and relaxed stays.",
              delay: 0.9,
            },
          ].map((box, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: box.delay }}
              viewport={{ once: true }}
              className="bg-black/70 text-white p-4 sm:p-6 rounded-xl max-w-sm backdrop-blur-sm shadow-lg"
            >
              <h3 className="overlay-title">{box.title}</h3>
              <p className="overlay-text mt-2 leading-relaxed">{box.desc}</p>
            </motion.div>
          ))}
        </div>
         <img
            src={Leaf2}
            alt="Decorative Leaf"
            className="absolute m-0 left-0 bottom-2 w-56 sm:w-72 md:w-30 rotate-[145deg]"
          />
      </motion.div>

      {/* Right: Text content */}
      <motion.div
        className="w-full md:w-1/3 mt-8 md:mt-0 md:pl-12 text-center relative overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {/* 🌿 Background Leaf Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={Leaf1}
            alt="Decorative Leaf"
            className="absolute top-0 left-0 w-30 sm:w-72 md:w-30 rotate-[-25deg]"
          />
          <img
            src={Leaf2}
            alt="Decorative Leaf"
            className="absolute m-0 right-0 w-56 sm:w-72 md:w-30 rotate-[45deg]"
          />
          <img
            src={Leaf1}
            alt="Decorative Leaf"
            className="absolute top-0 left-0 w-30 sm:w-72 md:w-30 rotate-[-25deg]"
          />
          <img
            src={Leaf2}
            alt="Decorative Leaf"
            className="absolute m-0 left-0 bottom-2 w-56 sm:w-72 md:w-30 rotate-[145deg]"
          />
        </div>

        <div className="w-full border-t border-gray-400 mx-auto mb-6 relative z-10"></div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-gray-900 uppercase resort-info-title-large relative z-10">
          Stay in Kotagiri’s Serene Luxury with Belair Cottages
        </h2>

        <div className="w-24 border-t border-gray-400 mx-auto my-6 relative z-10"></div>

        <p className="text-gray-600 leading-relaxed max-w-md mx-auto resort-info-description relative z-10">
          Experience peaceful hills, green tea gardens, and fresh weather at
          Belair Cottages for a perfect Kotagiri stay.
        </p>

        <div className="w-full border-t border-gray-400 mx-auto my-6 relative z-10"></div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-6 py-3 border border-gray-800 text-gray-800 font-medium rounded-sm hover:bg-gray-800 hover:text-white transition relative z-10"
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
};

export default BelairCottages;
