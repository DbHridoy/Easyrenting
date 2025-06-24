import React from "react";

const Banner = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-screen"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      ></div>
      <div className="relative flex items-center justify-center h-full text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Rent A Home in Singapore
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Seamless Property Search, Inquiry & Agent Connection—All in One
            Place.Browse listings, submit rental inquiries instantly, and
            connect with trusted agents—no login required.
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
            Start Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
