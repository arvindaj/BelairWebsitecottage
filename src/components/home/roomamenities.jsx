import React from "react";
import { motion } from "framer-motion";
import Room1 from "../../assets/img/room1.svg";
import Room2 from "../../assets/img/room2.svg";

import SPACIOUS1 from "../../assets/img/SPACIOUS.svg";
import MODERN1 from "../../assets/img/MODERN.svg";
import LUXURIOUS1 from "../../assets/img/LUXURIOUS.svg";
import CONVENIENT1 from "../../assets/img/CONVENIENT.svg";

export default function RoomAmenities() {
  const amenities = [
    {
      icon: SPACIOUS1,
      title: "SPACIOUS & COMFORTABLE",
      desc: "Rooms are designed for ultimate relaxation with plush beds and elegant décor",
    },
    {
      icon: MODERN1,
      title: "MODERN AMENITIES",
      desc: "High-speed Wi-Fi, flat-screen TV, minibar, and tea/coffee facilities",
    },
    {
      icon: LUXURIOUS1,
      title: "LUXURIOUS BATHROOMS",
      desc: "Rain showers, premium toiletries, and 24/7 housekeeping services",
    },
    {
      icon: CONVENIENT1,
      title: "CONVENIENT WORK & STORAGE",
      desc: "Work desk, seating area, and secure electronic safe for valuables",
    },
  ];

  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20 lg:px-32 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

        {/* Left: Text & list */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-[#A2238E] font-medium mb-3 resort-info-title-small">
            ◆ In-room comforts & facilities ◆
          </p>

          <h2 className="home-hero-title text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 resort-info-title-large">
            Elite Room Luxuries And Amenities
          </h2>

          <p className="text-gray-700 resort-info-desc mb-8">
            Each room is thoughtfully designed to combine luxury and convenience,
            offering plush beds, modern facilities, and a peaceful retreat for every guest.
          </p>

          <div className="space-y-6">
            {amenities.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 border-t border-gray-200 pt-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className="rounded-md p-3 flex items-center justify-center"
                  style={{ minWidth: 48, minHeight: 48 }}
                >
                  <img src={item.icon} alt={`${item.title} icon`} className="w-2/3 h-2/3" />
                </div>

                <div>
                  <h3 className="font-semibold tracking-wider text-gray-900 mb-1 overlay-title">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed room-info-description">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: image collage */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={Room2}
            alt="Resort pool"
            className="rounded-2xl shadow-lg w-full h-[650px] object-cover"
          />

          <motion.div
            className="absolute -left-1/10 w-2/4"
            style={{ bottom: "-0px" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={Room1}
              alt="Luxury room"
              className="shadow-xl w-full border-t-[10px] border-r-[10px] border-white"
            />
          </motion.div>

          <motion.div
            className="absolute top-6 right-6 bg-[#A2238E] text-white font-raleway font-medium italic text-[14px] leading-[20px] p-3 rounded-md shadow-md w-60"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            “Belair Cottages started as a small family-owned getaway nestled in the
            heart of the mountains. Over the years.”
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
