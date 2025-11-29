import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/images/about/facilityimg.jpg";

export default function EliteRoomAmenities() {
  const image = image1;

  const amenities = [
    {
      title: "Spacious & Comfortable",
      description: "Rooms are designed for ultimate relaxation with  décor.",
    },
    {
      title: "Modern Amenities",
      description:
        "High-speed Wi-Fi, flat-screen TV, minibar and tea/coffee facilities.",
    },
    {
      title: "Luxurious Bathrooms",
      description:
        "Rain showers, premium toiletries and 24/7 housekeeping services.",
    },
    {
      title: "Convenient Work & Storage",
      description:
        "Work desk, seating area and secure electronic safe for valuables.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1B1C21] py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden overflow-hidden" >
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <motion.div
            className="bg-white shadow-2xl p-8 sm:p-12 lg:p-16 lg:pr-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div>
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-start gap-3 mb-4">
                  <span className="text-[#a3248e]  rotate-animation">
                    ◆
                  </span>
                  <span
                    className="text-xs sm:text-sm tracking-widest text-[#a3248e] uppercase"
                    style={{ letterSpacing: "0.25em" }}
                  >
                    In-Room Comforts & Facilities
                  </span>
                  <span className="text-[#a3248e]  rotate-animation">
                    ◆
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:max-w-none lg:max-w-[380px] xl:text-4xl font-serif text-gray-900 leading-tight">
                  Elite Room Luxuries And Amenities
                </h1>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.2 },
                  },
                }}
              >
                {amenities.map((amenity, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#f4f1ee] p-5 transition-all duration-300 hover:shadow-md"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <h3 className="text-lg sm:text-xl font-serif text-gray-900 mb-2  transition-colors">
                      {amenity.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed lg:text-xs xl:text-sm">
                      {amenity.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block absolute xl:right-0 xl:left-190 overflow-x-hidden lg:left-120 top-16 bottom-16 w-1/2 overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={image}
              alt="Restaurant interior ambiance"
              className="h-full w-full object-cover overflow-x-hidden "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>

          <motion.div
            className="lg:hidden mt-6 overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={image}
              alt="Restaurant interior ambiance"
              className="h-64 sm:h-96 w-full object-cover over
              overflow-hidden"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
