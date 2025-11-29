import React, { useState } from "react";

const Datecheckin = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <div className="bg-white shadow-lg rounded-lg px-6 py-8 max-w-6xl mx-auto -mt-10 -md:mt-16 relative z-10 mb-10">
      {/* ↑ added mt-10 for top padding (mobile) and mt-16 for larger screens */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
        {/* Date Selection */}
        <div className="col-span-1 md:col-span-2">
          <label className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Check-in / Check-out
          </label>
          <input
            type="date"
            className="mt-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-black text-sm py-2"
            placeholder="Select Date"
          />
        </div>

        {/* Adults Selector */}
        <div className="flex flex-col items-center">
          <label className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2">
            Adults
          </label>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setAdults(Math.max(adults - 1, 0))}
              className="border border-gray-300 px-2 py-1 text-xl leading-none"
            >
              −
            </button>
            <span className="font-bold text-md w-6 text-center">
              {adults.toString().padStart(2, "0")}
            </span>
            <button
              onClick={() => setAdults(adults + 1)}
              className="border border-gray-300 px-2 py-1 text-xl leading-none"
            >
              +
            </button>
          </div>
        </div>

        {/* Children Selector */}
        <div className="flex flex-col items-center">
          <label className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2">
            Children
          </label>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setChildren(Math.max(children - 1, 0))}
              className="border border-gray-300 px-2 py-1 text-xl leading-none"
            >
              −
            </button>
            <span className="font-bold text-md w-6 text-center">
              {children.toString().padStart(2, "0")}
            </span>
            <button
              onClick={() => setChildren(children + 1)}
              className="border border-gray-300 px-2 py-1 text-xl leading-none"
            >
              +
            </button>
          </div>
        </div>

        {/* Book Now Button */}
        <div className="col-span-1 flex justify-center md:justify-end items-center">
          <button className="w-full md:w-auto border border-black px-6 py-1 text-black font-semibold hover:bg-black hover:text-white transition-all">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Datecheckin;
