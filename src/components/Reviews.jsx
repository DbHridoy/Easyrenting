import { testimonials } from "@/constants/Const";
import React from "react";

const Reviews = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Our Customers Reviews
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Here are the positive reviews and testimonials of our customers.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                {testimonial.name}
              </h4>
              <p className="text-gray-600 text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
