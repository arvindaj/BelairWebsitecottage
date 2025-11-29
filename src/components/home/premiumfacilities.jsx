import { motion } from "framer-motion";

const Premiumfacilities = () => {
  // Animation variants for staggered card reveal
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: index * 0.2 },
    }),
  };

  return (
    <div className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Section */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[#A2238E] uppercase tracking-widest mb-2 text-sm resort-info-title-small"
        >
          ◆ Exclusive Hospitality Features ◆
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 resort-info-title-large"
        >
          Premium Comfort And Exclusive <br /> Facilities
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-3xl mx-auto mb-12 resort-info-desc"
        >
          Experience unparalleled comfort and convenience with thoughtfully
          curated amenities designed to elevate every moment of your luxurious
          stay.
        </motion.p>

        {/* Facility Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Panoramic Balcony Views",
              desc: "Enjoy beautiful views from your own private balcony",
            },
            {
              title: "Gourmet Dining Experience",
              desc: "Relax in comfortable suites designed for your whole family",
            },
            {
              title: "Exclusive Private Parking",
              desc: "Park easily with our safe, private guest parking",
            },
            {
              title: "Complimentary High-Speed WiFi",
              desc: "Stay connected with fast, free WiFi throughout your stay",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 hover:bg-purple-50 p-8 rounded-xl shadow-sm transition-all duration-300 facility-card"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
                className="text-purple-900 text-2xl mb-3"
              >
                ◆
              </motion.div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Premiumfacilities;
