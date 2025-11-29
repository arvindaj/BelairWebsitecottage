import React from "react";
import { Diamond } from "lucide-react";
import { motion } from "framer-motion";

const facilities = [
  {
    title: "Panoramic Balcony Views",
    description: "Enjoy beautiful views from your own private balcony",
  },
  {
    title: "Gourmet Dining Experience",
    description: "Relax in comfortable suites designed for your whole family",
  },
  {
    title: "Exclusive Private Parking",
    description: "Park easily with our safe, private guest parking",
  },
  {
    title: "Complimentary High-Speed WiFi",
    description: "Stay connected with fast, free WiFi throughout your stay",
  },
];

const CardSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 pt-0 bg-white text-center px-6 lg:px-20 overflow-hidden">
      <motion.div
        className="max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p
          className="text-sm uppercase text-[#a3248e] font-medium font-raleway flex items-center justify-center gap-2"
          style={{ letterSpacing: "0.25em" }}
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            <Diamond className="w-3 h-3 text-[#a3248e] fill-[#a3248e]" />
          </motion.span>
          Exclusive Hospitality Features
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            <Diamond className="w-3 h-3 text-[#a3248e] fill-[#a3248e]" />
          </motion.span>
        </p>

        <h2 className="text-3xl sm:text-4xl font-serif font-medium mt-3">
          Premium Comfort And Exclusive Facilities
        </h2>
        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          Experience unparalleled comfort and convenience with thoughtfully
          curated amenities designed to elevate every moment of your luxurious
          stay.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {facilities.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="group relative bg-[#f4f1ee] border border-purple-100 p-6 xl:p-10 shadow-sm 
              hover:shadow-lg transition-all duration-700 transform hover:-translate-y-2 
              overflow-hidden rounded-none focus:rounded-none active:rounded-none"
          >
            <div className="absolute inset-0 bg-[#a3248e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <motion.div
              className="flex justify-center mb-4 relative z-10"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Diamond className="w-6 h-6 text-[#a3248e] fill-[#a3248e] rotate-animation" />
            </motion.div>

            <h3 className="text-lg font-semibold mb-3 text-gray-800 group-hover:text-[#a3248e] transition-colors duration-300 relative z-10">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300 relative z-10">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CardSection;
