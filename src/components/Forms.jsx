"use client";
import React from "react";
import { useState } from "react";
import { Input, Select, Textarea } from "./FormFields";
const Forms = () => {
  const [activeTab, setActiveTab] = useState("tenant");
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 min-h-screen bg-gradient-to-r from-purple-100 to-purple-200">
      {/* Tenant Form */}
      <div className="bg-white bg-opacity-30 rounded-2xl p-6 w-full md:w-[600px] shadow-md">
        <h2 className="text-3xl font-bold text-center">
          Are You a <span className="text-purple-600">Tenant?</span>
        </h2>
        <p className="text-sm text-center mt-2 mb-4">
          Receive personalised service through the enquiry form as agents
          shortlist homes suitable just for you!
        </p>
        <form className="space-y-3">
          <Input label="Full Name" placeholder="Enter your full name" />
          <Input label="Email Address" placeholder="Enter your email address" />
          <Input label="Phone Number" placeholder="Enter your Phone Number" />
          <div className="flex flex-col md:flex-row gap-2">
            <Select
              label="Property Rental Type:"
              options={["Select One", "HDB", "Condo", "Landed"]}
            />
            <Input
              label="Move-in Date (Optional)"
              placeholder="Enter your Move-in Date"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <Select
              label="Number of Bedrooms"
              options={["Select One", "1", "2", "3", "4+"]}
            />
            <Input label="Budget Range" placeholder="Enter your Budget Range" />
          </div>
          <Textarea
            label="Additional Comments/Preferences"
            placeholder="Please share any additional details or preferences"
          />
          <button
            type="submit"
            className="p-4 bg-purple-600 text-white font-semibold rounded-full flex gap-2 justify-center hover:bg-purple-700 transition"
          >
            <span>📝</span> Enquire Now
          </button>
        </form>
      </div>

      {/* Landlord Form */}
      <div className="bg-white bg-opacity-30 rounded-2xl p-6 w-full md:w-[600px] shadow-md">
        <h2 className="text-3xl font-bold text-center">
          Are You a <span className="text-purple-600">Tenant?</span>
        </h2>
        <p className="text-sm text-center mt-2 mb-4">
          Receive personalised service through the enquiry form as agents
          shortlist homes suitable just for you!
        </p>
        <form className="space-y-3">
          <Input label="Full Name" placeholder="Enter your full name" />
          <Input label="Email Address" placeholder="Enter your email address" />
          <Input label="Phone Number" placeholder="Enter your Phone Number" />
          <div className="flex flex-col md:flex-row gap-2">
            <Select
              label="Property Rental Type:"
              options={["Select One", "HDB", "Condo", "Landed"]}
            />
            <Input
              label="Move-in Date (Optional)"
              placeholder="Enter your Move-in Date"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <Select
              label="Number of Bedrooms"
              options={["Select One", "1", "2", "3", "4+"]}
            />
            <Input label="Budget Range" placeholder="Enter your Budget Range" />
          </div>
          <Textarea
            label="Additional Comments/Preferences"
            placeholder="Please share any additional details or preferences"
          />
          <button
            type="submit"
            className="p-4 bg-purple-600 text-white font-semibold rounded-full flex gap-2 justify-center hover:bg-purple-700 transition"
          >
            <span>📝</span> Enquire Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forms;
