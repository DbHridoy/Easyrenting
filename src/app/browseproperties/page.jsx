import React from "react";
import { FaSearch, FaThLarge } from "react-icons/fa";

const page = () => {
  return (
    <main className="pt-24 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6">
      {/* Sidebar Filters */}
      <aside className="space-y-4">
        {[
          "Property Type",
          "Price Range",
          "Location",
          "Available For",
          "Bedrooms",
          "Bathrooms",
          "Size (Square Footage)",
          "Sort By",
        ].map((label) => (
          <div key={label} className="bg-white p-4 rounded shadow">
            <details open>
              <summary className="font-semibold cursor-pointer">
                {label}
              </summary>
              <div className="mt-2 space-y-2">
                {/* Example checkboxes */}
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-purple-600" />
                  Option 1
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-purple-600" />
                  Option 2
                </label>
              </div>
            </details>
          </div>
        ))}
      </aside>

      {/* Listings */}
      <section>
        {/* Search and view toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="w-full flex items-center gap-2 bg-white px-4 py-2 rounded shadow">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search your perfect event"
              className="w-full outline-none"
            />
          </div>
          <button className="bg-white p-2 rounded shadow hover:bg-gray-100">
            <FaThLarge className="text-gray-500" />
          </button>
        </div>

        {/* Property Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div key={id} className="bg-white rounded shadow overflow-hidden">
              <img
                src="/apartment.jpg"
                alt="property"
                className="w-full h-56 object-cover"
              />
              <div className="p-4 space-y-2">
                <div className="font-bold text-lg">$780,000</div>
                <div className="font-semibold text-gray-800">
                  Sunset View Apartment
                </div>
                <div className="text-sm text-gray-600">
                  415 Broadway, New York, NY 10013
                </div>
                <div className="flex justify-between text-sm text-gray-500 pt-2">
                  <span>3 Beds</span>
                  <span>2 Baths</span>
                  <span>1,500 sq ft</span>
                </div>
                <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
