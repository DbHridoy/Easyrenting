import { recentProperties } from "@/constants/Const";
import Image from "next/image";
import React from "react";

const RecentAdded = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Recently Added Property
          </h2>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            View More →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src={property.image}
                  width={380}
                  height={254}
                  alt="Property Image"
                />
              </div>
              {/* Card */}
              <div className="p-6 flex flex-col justify-between bg-white rounded-lg shadow-md min-h-[340px]">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold ">{property.price}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>🛏️ {property.beds} Beds</span>
                    <span>🚿 {property.baths} Baths</span>
                    <span>📐 {property.sqft}</span>
                  </div>
                  <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentAdded;
