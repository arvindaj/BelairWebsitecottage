import React from "react";
import { BedDouble, UtensilsCrossed, Trees } from "lucide-react";

export default function ExceptionalServices() {
  return (
      <div className="bg-black py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
    <section className="bg-white py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-6">
        <p className="text-sm tracking-widest text-[#A2238E] font-semibold">
         ◆ OUR SIGNATURE SERVICES ◆
        </p>

        <h2 className="text-4xl font-serif text-gray-900 leading-tight">
          Exceptional Services <br /> For An Unforgettable Stay
        </h2>

        <div className="space-y-4 mt-8">
          {/* Service Card 1 */}
          <div className="bg-gray-100 p-5 rounded-lg flex items-start space-x-4">
            <div className="text-purple-600 mt-1">
              <BedDouble className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 uppercase text-sm">
                Premium Family Suites for Comfort
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Spacious and elegantly designed, our family suites offer plush
                beds, cozy seating, and all modern amenities for a relaxing stay.
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-gray-100 p-5 rounded-lg flex items-start space-x-4">
            <div className="text-purple-600 mt-1">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 uppercase text-sm">
                Gourmet Dining & Restaurants
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Savor delicious meals at our in-house restaurants, offering a
                variety of local and international cuisines in a warm, welcoming
                ambiance.
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-gray-100 p-5 rounded-lg flex items-start space-x-4">
            <div className="text-purple-600 mt-1">
              <Trees className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 uppercase text-sm">
                Expansive Outdoor Spaces
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Enjoy lush gardens, terraces with scenic hill views, and peaceful
                corners to relax, unwind, and soak in Kotagiri’s natural beauty.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-6">
          <p className="text-gray-700 text-sm">
            Reserve your cozy family suite at BelAir Cottages and experience
            serene luxury, scenic views, and unforgettable moments in Kotagiri.
          </p>
          <button className="mt-4 px-6 py-2 bg-black text-white text-sm font-semibold rounded hover:bg-gray-800 transition">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mt-10 lg:mt-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Luxury resort pool"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
    </section>
    </div>
  );
}
