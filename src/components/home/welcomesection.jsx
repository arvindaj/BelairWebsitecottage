import { motion } from "framer-motion";
import heroBg from "../../assets/img/homebanner.svg";
import "../../assets/css/home.css";

const Welcomesection = () => {
  return (
    <div
      className="relative w-full h-screen bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">

        {/* Small top text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="home-hero-text mb-4 text-gray-200 text-sm sm:text-sm md:text-base lg:text-lg"
        >
          ◆ Welcome to Belair Cottages Kotagiri
        </motion.p>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="home-hero-title font-normal text-center
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[88px]
            leading-snug sm:leading-snug md:leading-snug lg:leading-[100px]
            tracking-tight sm:tracking-tight md:tracking-tight lg:tracking-[-0.02em]"
        >
          The Luxurious Resort <br /> Experience Awaits
        </motion.h1>

        {/* Hero Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="home-hero-text mt-4 text-sm sm:text-sm md:text-base lg:text-lg leading-[28px] max-w-4xl"
        >
          Immerse yourself in the serene hills where comfort meets nature and
          every <br /> moment is designed for your ultimate relaxation.
        </motion.p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="view-facilities-btn transition-all text-sm sm:text-base md:text-base lg:text-lg mt-3"
        >
          View Facilities
        </motion.button>
      </div>

      {/* WhatsApp Ribbon */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        whileHover={{ scale: 1.05 }}
        className="absolute right-0 top-1/2 -translate-y-1/2
          bg-[#2CA008] hover:bg-[#239007] text-gray-200 font-raleway font-semibold
          px-2 py-2 text-center text-xs sm:text-sm md:text-base rotate-180
          [writing-mode:vertical-rl] [text-orientation:mixed] rounded-md cursor-pointer"
      >
        WHATSAPP NOW
      </motion.div>
    </div>
  );
};

export default Welcomesection;
