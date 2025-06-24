"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import { filters, properties, recentProperties } from "@/constants/Const";
import React, { useEffect, useState } from "react";
import { FaSearch, FaThLarge, FaBars } from "react-icons/fa";

const page = () => {
  const [viewMode, setViewMode] = useState("grid");
  const allProperties = [...properties, ...recentProperties];
  const [searchTerm, setSearchTerm] = useState("");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 700); // delay render by 700ms
    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return <LoadingSpinner />; // show spinner during delay
  }

  const toggleView = () => {
    setViewMode((prev) => (prev === "grid" ? "list" : "grid"));
  };
  const filteredProperties = allProperties.filter(
    (property) =>
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6">
      {/* Sidebar Filters */}
      <aside className="space-y-4">
        {filters.map(({ label, items }, index) => (
          <div key={label} className="bg-white p-4 rounded shadow">
            <details open={index === 0} className="group">
              <summary className="font-semibold cursor-pointer flex justify-between items-center list-none">
                {label}
                <span className="transition-transform duration-200 group-open:rotate-180">
                  ▼
                </span>
              </summary>

              <div className="mt-2 space-y-2">
                {items.map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input type="checkbox" className="accent-purple-600" />
                    {item}
                  </label>
                ))}
              </div>
            </details>
          </div>
        ))}
      </aside>

      {/* Listings Section */}
      <section>
        {/* Search + View Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="w-full flex items-center gap-2 bg-white px-4 py-2 rounded shadow">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search your perfect event"
              className="w-full outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={toggleView}
            className="bg-white p-2 rounded shadow hover:bg-gray-100"
            title={`Switch to ${viewMode === "grid" ? "list" : "grid"} view`}
          >
            {viewMode === "grid" ? (
              <FaBars className="text-gray-500" />
            ) : (
              <FaThLarge className="text-gray-500" />
            )}
          </button>
        </div>

        {/* Property Cards */}
        <div
          className={`grid gap-6 ${
            viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className={`bg-white rounded shadow overflow-hidden ${
                viewMode === "list" ? "flex gap-4" : ""
              }`}
            >
              <img
                src={property.image}
                alt="property"
                className={`${
                  viewMode === "list"
                    ? "w-48 h-auto object-cover"
                    : "w-full h-56 object-cover"
                }`}
              />
              <div className="p-4 space-y-2 flex-1">
                <div className="font-bold text-lg">{property.price}</div>
                <div className="font-semibold text-gray-800">
                  {property.title}
                </div>
                <div className="text-sm text-gray-600">{property.location}</div>
                <div className="flex justify-between text-sm text-gray-500 pt-2">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.sqft}</span>
                </div>
                <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
