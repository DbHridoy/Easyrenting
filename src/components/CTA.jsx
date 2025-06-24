import React from "react";

const CTA = () => {
  return (
    <div className="py-16 w-screen bg-gradient-to-r from-purple-300 to-white">
      <div className="max-w-6xl mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          {/* Left Text Content */}
          <div className="md:max-w-xl">
            <h2 className="text-3xl font-bold text-black mb-4">
              Ready to Grow Your Real Estate Reach?
            </h2>
            <p className="text-black">
              Join as an Agent on EasyRenting.com. Showcase your properties,
              connect with quality tenants, and grow your rental portfolio
              effortlessly.
            </p>
          </div>

          {/* Right Button */}
          <div className="w-full md:w-auto">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm md:px-8 md:py-3 md:text-base hover:bg-purple-700 transition-colors duration-300">
              Join as an Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
