import { recentProperties } from "@/constants/Const";
import Image from "next/image";
import React from "react";
import { Area, Baths, Beds } from "./SvgIcons";

const RecentAdded = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 border-l-purple-600 border-l-6 pl-4">
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
          {recentProperties.map((property) => {
            return (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Image Section */}
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src={property.image}
                    width={380}
                    height={254}
                    alt="Property Image"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col gap-4 bg-white rounded-lg shadow-md min-h-[300px]">
                  {/* Top Section */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xl font-bold text-gray-900">
                        {property.price}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {property.title}
                    </h3>
                    <p className="text-gray-600">{property.location}</p>
                  </div>

                  {/* Bottom Section */}
                  <div className="mt-auto">
                    <div className="flex justify-between text-sm text-gray-600 mb-4 items-center">
                      <span className="flex items-center gap-1">
                        <Beds className="w-4 h-4 inline-block" />{" "}
                        {property.beds} Beds
                      </span>
                      <span className="flex items-center gap-1">
                        <Baths className="w-4 h-4 inline-block" />{" "}
                        {property.baths} Baths
                      </span>
                      <span className="flex items-center gap-1">
                        <Area className="w-4 h-4 inline-block" />{" "}
                        {property.sqft}
                      </span>
                    </div>

                    <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentAdded;
