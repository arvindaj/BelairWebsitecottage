import React from "react";
import { motion } from "framer-motion";

import belair1 from "../../assets/img/belair1.svg";
import belair2 from "../../assets/img/belair2.svg";
import belair3 from "../../assets/img/belair3.svg";

// ✅ Image array
const images = [belair1, belair2, belair3, belair1];

const BelairSlider = () => {
  return (
    <section className="bg-[#1a1a1a] text-white py-16 px-6 md:px-20 overflow-hidden relative">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <p className="uppercase tracking-[4px] text-[14px] font-semibold text-white leading-[28px] font-[Raleway]">
            ◆ Inside Belair Cottages ◆
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mt-2 mb-4 text-white">
            Step Inside Belair Cottages’ Serene Comfort
          </h2>

          <p className="text-white max-w-2xl text-sm leading-relaxed opacity-80">
            Every photo beautifully captures what our guests love and where they
            create their most peaceful, cherished memories.
          </p>
        </div>

        {/* Right Button */}
        <div className="w-full md:w-auto text-center md:text-right">
          <button className="px-6 py-3 border border-gray-400 hover:bg-white hover:text-black transition font-[Raleway] text-[12px] font-semibold tracking-[1px] uppercase">
            DISCOVER MORE
          </button>
        </div>
      </div>


      {/* ✅ Auto Sliding Images (Slow Motion) */}
      <div className="relative w-full overflow-hidden rounded-xl">
        <motion.div
          className="flex w-[200%] space-x-4"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30, // 🐢 slower motion for smooth slide
            ease: "linear",
          }}
        >
          {[...images, ...images].map((img, i) => (
            <div key={i} className="w-[25%] flex-shrink-0">
              <img
                src={img}
                alt={`Belair Cottage ${i + 1}`}
                className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          ))}
        </motion.div>

        {/* ✅ Left and Right Gradient Fades */}
        <div className="absolute top-0 left-0 w-32 md:w-40 h-full bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 md:w-40 h-full bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default 
BelairSlider; ;
