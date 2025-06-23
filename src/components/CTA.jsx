import React from "react";

const CTA = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          {/* Left Text Content */}
          <div className="md:max-w-xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Grow Your Real Estate Reach?
            </h2>
            <p className="text-white">
              Join as an Agent on EasyRenting.com. Showcase your properties,
              connect with quality tenants, and grow your rental portfolio
              effortlessly.
            </p>
          </div>

          {/* Right Button */}
          <div className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Join as an Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
