import React, { useState } from "react";
import { motion } from "framer-motion";
import contactimg from "../../assets/images/about/contactimage.png";

const ResortContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="overflow-hidden">
      <div className="min-h-screen lg:mb-20 flex items-center justify-center lg:mt-20 p-4 sm:p-6 lg:p-8 ">
        <div className="max-w-7xl w-full relative">
          <div className="relative">
            <motion.div
              className="w-full lg:w-2/3"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="h-96 sm:h-[500px] lg:h-[600px] overflow-hidden  shadow-xl">
                <img
                  src={contactimg}
                  alt="Luxury resort with palm trees and pool"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-1/2 mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 lg:p-12 mx-auto max-w-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="mb-8 text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="text-[#a3248e] text-sm font-semibold tracking-widest mb-3">
                    <span className="rotate-animation">◆</span> GUEST ASSISTANCE{" "}
                    <span className="rotate-animation">◆</span>
                  </p>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1B1C21] mb-4 leading-tight font-normal">
                    Send Us Your Message Directly
                  </h1>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Fill out the form below to connect with our team for prompt
                    and personalized assistance.
                  </p>
                  <hr className="w-[50%] m-auto mt-5" />
                </motion.div>

                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-5"
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
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder=" "
                        className="
        peer w-full px-4 pt-5 pb-2 border border-gray-300 text-gray-800 text-sm 
        focus:outline-none focus:ring-2 focus:ring-[#a3248e] focus:border-transparent 
        transition-all placeholder-transparent
      "
                        required
                      />
                      <label
                        htmlFor="fullName"
                        className="
        absolute left-4 top-3 text-gray-400 text-sm 
        transition-all duration-300 ease-in-out
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm
        peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#a3248e]
        peer-valid:top-1 peer-valid:text-xs peer-valid:text-[#a3248e] z-0
      "
                      >
                        Full Name
                      </label>
                    </div>
                  </motion.div>

                 <div className="relative">
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder=" "
    className="peer w-full px-4 pt-5 pb-2 border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#a3248e] focus:border-transparent transition-all placeholder-transparent"
    required
  />
  <label
    htmlFor="email"
    className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-300 ease-in-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#a3248e] peer-valid:top-1 peer-valid:text-xs peer-valid:text-[#a3248e]"
  >
    Email Address
  </label>
</div>


                 <div className="relative">
  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder=" "
    rows="4"
    className="peer w-full px-4 pt-5 pb-2 border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#a3248e] focus:border-transparent transition-all placeholder-transparent resize-none"
    required
  />
  <label
    htmlFor="message"
    className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-300 ease-in-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#a3248e] peer-valid:top-1 peer-valid:text-xs peer-valid:text-[#a3248e]"
  >
    Your Message
  </label>
</div>


                  <motion.div
                    className="flex items-start gap-3"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <input
                      type="checkbox"
                      name="consent"
                      id="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-[#a3248e] border-gray-300 focus:ring-[#a3248e] flex-shrink-0"
                      required
                    />
                    <label
                      htmlFor="consent"
                      className="text-xs text-gray-600 leading-relaxed"
                    >
                      Yes, I would like to receive news via email and commercial
                      offers from Belair Cottages. I can opt out any time. See
                      our full privacy policy.
                    </label>
                  </motion.div>

                  <motion.div
                    className="text-center pt-2"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <button
                      type="submit"
                      className="relative overflow-hidden px-10 py-3 bg-none text-[#a3248e] border-2 border-[#a3248e] font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:text-white group cursor-pointer"
                    >
                      <span className="relative z-10 ">Send Message</span>

                      <span className="absolute inset-0 bg-[#a3248e] rounded-full transition-transform duration-700 ease-in-out transform scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-100"></span>

                      <style>
                        {`
      button {
        isolation: isolate;
        }
        button span:nth-child(2) {
            transform-origin: center;
            }
            button:hover span:nth-child(2) {
                transform: scale(1.5);
                opacity: 1;
                }
                button:not(:hover) span:nth-child(2) {
                    transform: scale(0);
                    opacity: 0;
                    transition: transform 0.7s ease-in-out, opacity 0.7s ease-in-out;
                    }
                    `}
                      </style>
                    </button>
                  </motion.div>
                </motion.form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResortContactForm;
