import React from "react";
import { motion } from "framer-motion";
import resortImg2 from "../../assets/img/resort2.svg";
import resortImg1 from "../../assets/img/resort1.svg";
import CountUp from "react-countup";

import GuestIcon from "../../assets/img/guest-icon.svg";
import VillaIcon from "../../assets/img/villa-icon.svg";
import LocationIcon from "../../assets/img/location-icon.svg";

const Resortinfo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 space-y-16 pb-0">

      {/* -------- Block 1 -------- */}
      <motion.div
        className="md:flex md:items-center md:gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="md:w-1/2 mb-6 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={resortImg1}
            alt="Relaxing Stays"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-[#A2238E] uppercase tracking-widest mb-2 resort-info-title-small">
            ◆ Spacious & Comfortable Stays ◆
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 resort-info-title-large">
            Relaxing Stays Surrounded By Scenic Hills
          </h2>
          <p className="text-gray-700 resort-info-desc">
            Belair Resorts in Kotagiri offers spacious family rooms with private bathrooms,
            featuring breathtaking garden or mountain views. Each room is thoughtfully equipped
            with a tea and coffee maker, TV, and complimentary toiletries to ensure a comfortable
            and relaxing stay. Guests can also enjoy a variety of Indian and Asian cuisines,
            including vegetarian options, at our modern and family-friendly restaurant.
          </p>
        </motion.div>
      </motion.div>

      {/* -------- Block 2 -------- */}
      <motion.div
        className="md:flex md:items-center md:gap-12 md:flex-row-reverse"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="md:w-1/2 mb-6 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={resortImg2}
            alt="Relaxation Convenience"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-[#A2238E] uppercase tracking-widest mb-2 resort-info-title-small">
            ◆ Convenience & Prime Location ◆
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 resort-info-title-large">
            Relaxation And Convenience Amid Kotagiri Hills
          </h2>
          <p className="text-gray-700 resort-info-desc">
            For leisure, the resort features a sun terrace, lush gardens, and an outdoor fireplace,
            while free WiFi keeps you connected throughout your stay. Belair Resorts is conveniently
            located 7 km from Coimbatore International Airport and close to popular attractions like
            Ooty Lake and Sims Park. With free on-site private parking, it’s the perfect base to
            explore the scenic hills of Kotagiri.
          </p>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-20 text-center sm:text-left py-10 lg:py-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Guests Served */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6 lg:gap-8 xl:gap-6">
              <img
                src={GuestIcon}
                alt="Guest Icon"
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
              />
              <div className="text-center sm:text-left">
                <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black font-semibold Guests-Served-num">
                  <CountUp end={50} duration={2.5} />K+
                </p>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg xl:text-xl">
                  Guests Served
                </p>
              </div>
            </div>

            {/* Villas & Resorts */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6 lg:gap-8 xl:gap-6">
              <img
                src={VillaIcon}
                alt="Villa Icon"
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
              />
              <div className="text-center sm:text-left">
                <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black font-semibold Guests-Served-num">
                  <CountUp end={25} duration={2} />
                </p>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg xl:text-xl">
                  Villas & Resorts
                </p>
              </div>
            </div>

            {/* Locations */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6 lg:gap-8 xl:gap-6">
              <img
                src={LocationIcon}
                alt="Location Icon"
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
              />
              <div className="text-center sm:text-left">
                <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black font-semibold Guests-Served-num">
                  <CountUp end={12} duration={2} />+
                </p>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg xl:text-xl">
                  Locations
                </p>
              </div>
            </div>
          </motion.div>




        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resortinfo;
