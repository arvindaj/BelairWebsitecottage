import React from "react";
import { motion } from "framer-motion";

import villa1 from "../../assets/img/blog1.svg";
import villa2 from "../../assets/img/blog2.svg";
import villa3 from "../../assets/img/blog3.svg";

const BlogSection = () => {
  const blogs = [
    {
      image: villa1,
      title: "Belair Cottages Unveils New Luxury Villas With Stunning Mountain Views",
      date: "July 29, 2024",
    },
    {
      image: villa2,
      title: "Special Offer: Save 20% On All Bookings At Pine Hills This Summer!",
      date: "July 29, 2024",
    },
    {
      image: villa3,
      title: "Belair Cottages Announces Exciting New Wellness Retreat Program",
      date: "July 29, 2024",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-16 text-center overflow-hidden">
      {/* Section Header */}
      <motion.p
        className="text-sm uppercase tracking-widest text-[#A2238E] font-medium mb-3 resort-info-title-small"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        ◆ Explore Kotagiri With Us ◆
      </motion.p>

      <motion.h2
        className="home-hero-title text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 resort-info-title-large"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Stories And Tips From Life At Belair Cottages
      </motion.h2>

      <motion.p
        className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-14 resort-info-desc"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Read about memorable stays, local experiences, and travel advice from guests enjoying
        the comfort of Belair Cottages.
      </motion.p>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <motion.div
              className="overflow-hidden rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
              />
            </motion.div>

            <motion.h3
              className="text-lg md:text-xl font-serif text-gray-900 mt-5 leading-snug"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
              viewport={{ once: true }}
            >
              {blog.title}
            </motion.h3>

            <motion.p
              className="text-gray-500 text-sm mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
              viewport={{ once: true }}
            >
              {blog.date}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
