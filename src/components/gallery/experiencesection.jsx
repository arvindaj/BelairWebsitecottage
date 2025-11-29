import React from "react";
import bedroomImg from "../../assets/img/bedroom.svg";
import buildingImg from "../../assets/img/building.svg";

const ExperienceSection = () => {
  return (
    <section className="relative bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-0">
        
        {/* Text Section */}
        <div className="relative text-left mt-20">
          {/* Text visible only on large screens */}
          <div className="lg:block">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-snug gallery-title">
              Experience Elegance, Comfort, And Refined Spaces
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed room-info-description mt-3 mb-4">
              Explore our gallery to witness the perfect blend of design, comfort,
              and sophistication. Each space is thoughtfully curated to reflect our
              commitment to exceptional hospitality, offering a glimpse into the
              serene, welcoming, and meticulously maintained environments that define
              every stay with us.
            </p>
          </div>

          {/* Foreground Bedroom Image (Visible only on desktop) */}
          <div
            className="
              absolute
              top-2/2
              z-10 
              w-[90%] lg:w-[150%]
              border-8 border-white
              left-2/2 -translate-x-1/2 
              hidden lg:block   /* 👈 Hide on mobile & tablet, show on large screens */
            "
          >
            <img
              src={bedroomImg}
              alt="Bedroom"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full flex justify-center md:justify-end items-center order-2 md:order-2">
          {/* Background Building Image */}
          <div className="relative top-0 right-0 md:right-2 lg:right-0 
                          w-[260px] sm:w-[320px] md:w-[420px] lg:w-[660px] 
                          rounded-xl overflow-hidden shadow-lg z-0 mx-auto md:mx-0">
            <img
              src={buildingImg}
              alt="Building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
