import { testimonials } from "@/constants/Const";
import Image from "next/image";
import React from "react";
import { Star } from "./SvgIcons";

const Reviews = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Our Customers Reviews
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Here are a few sample traveler reviews that you can feature on our
          website{" "}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-md p-6 text-center max-w-sm mx-auto"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt="Reviewer"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Holiand Canals
              </h3>

              {/* Stars */}
              <div className="flex justify-center mb-3 text-yellow-500 text-lg">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx}>
                    <Star />
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
