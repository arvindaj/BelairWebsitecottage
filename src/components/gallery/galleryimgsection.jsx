import React from "react";
import img1 from "../../assets/img/gallery1.svg";
import img2 from "../../assets/img/gallery2.svg";
import img3 from "../../assets/img/gallery3.svg";
import img4 from "../../assets/img/gallery4.svg";
import img5 from "../../assets/img/gallery5.svg";
import img6 from "../../assets/img/gallery6.svg";
import img7 from "../../assets/img/gallery7.svg";
import img8 from "../../assets/img/gallery8.svg";
import img9 from "../../assets/img/gallery9.svg";

const GalleryImgSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm uppercase tracking-widest text-[#A2238E] font-medium mb-3 resort-info-title-small">
          Designed For Memorable Experiences
        </p>
        <h2 className="home-hero-title text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 resort-info-title-large">
          Moments Of Comfort Captured <br className="hidden sm:block" /> In Spaces
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-14 resort-info-desc">
          Step through our gallery to explore elegant spaces that promise a truly elevated hospitality experience.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="flex flex-col gap-8">
        {/* Top Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* LEFT SIDE */}
          <div className="col-span-2 flex flex-col gap-5">
            {/* Top Row (img1 large + img8 normal) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <img
                src={img1}
                alt="Gallery Image 1"
                className="w-full sm:w-[60%] h-60 sm:h-80 md:h-96 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
              />
              <img
                src={img8}
                alt="Gallery Image 8"
                className="w-full sm:w-[40%] h-60 sm:h-80 md:h-96 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Bottom Row (img4 + img5 medium) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <img
                src={img4}
                alt="Gallery Image 4"
                className="w-full sm:w-1/2 h-56 sm:h-72 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
              />
              <img
                src={img5}
                alt="Gallery Image 5"
                className="w-full sm:w-1/2 h-56 sm:h-72 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* RIGHT SIDE (Tall img9) */}
          <div className="col-span-1">
            <img
              src={img9}
              alt="Gallery Image 9"
              className="w-full h-80 sm:h-auto md:h-full object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Bottom Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img
            src={img7}
            alt="Gallery 7"
            className="w-full h-64 sm:h-80 object-cover rounded-xl sm:col-span-2 hover:scale-105 transition-transform duration-500"
          />
          <img
            src={img5}
            alt="Gallery 5"
            className="w-full h-64 sm:h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img
            src={img2}
            alt="Gallery 2"
            className="w-full h-64 sm:h-72 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
          />
          <img
            src={img4}
            alt="Gallery 4"
            className="w-full h-64 sm:h-72 object-cover rounded-xl sm:col-span-2 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default GalleryImgSection;
