import React from "react";
import { motion } from "framer-motion";
import aboutimage from "../../assets/images/about/video.png";

const AboutSection = () => {
  return (
    <section className="py-18 xl:py-25 bg-white px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10 overflow-hidden">
      <motion.div
        className="w-full lg:w-1/2 relative flex justify-center"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute -left-6 -bottom-6 w-[90%] h-[90%] border border-gray-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        ></motion.div>

        <motion.img
          src={aboutimage}
          alt="Hilltop Resort"
          className="relative z-10 w-full h-[420px] object-cover shadow-md rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
        />
      </motion.div>

      <motion.div
        className="w-full lg:w-1/2 space-y-5 mt-10 lg:mt-0"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p
          className="text-sm uppercase text-[#a3248e] font-medium tracking-widest flex items-center gap-2"
          style={{ letterSpacing: "0.2em" }}
        >
          <span className="text-[#a3248e] rotate-animation">◆</span> About Us{" "}
          <span className="text-[#a3248e] rotate-animation">◆</span>
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-medium leading-tight">
          Relaxed Comfort In Scenic Hilltop Surroundings
        </h2>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Nestled in Tamil Nadu's Nilgiri district, Kotagiri is a tranquil hill
          station renowned for its lush greenery, misty hills, and mild,
          pleasant climate. Famous for its European-style heritage homes and
          sprawling tea plantations, it offers a serene escape from everyday
          life. Easily accessible from Ooty and Coonoor, Kotagiri blends natural
          beauty, cultural richness, and adventure opportunities — from trekking
          to waterfalls — making it the perfect destination for travelers
          seeking relaxation, scenic views, and memorable experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
