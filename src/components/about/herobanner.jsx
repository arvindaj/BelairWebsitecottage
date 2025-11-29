import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/images/about/aboutbanner.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[80vh] md:h-[90vh] bg-cover bg-center mt-10 overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex bottom-4 items-center justify-start h-screen px-6 md:px-16">
        <motion.div
          className="bg-black/40 text-white p-7 md:p-10 max-w-3xl backdrop-blur-xs rounded-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="font-gfs text-2xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight mb-4 font-serif"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Experience Comfort And <br /> Luxury At Belair
          </motion.h1>

          <motion.p
            className="text-[12px] sm:text-sm md:text-base uppercase tracking-wide text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Every detail reflects our commitment to comfort, style, and
            providing an extraordinary guest experience
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
