"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavIcon } from "./SvgIcons";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="font-semibold fixed top-0 w-full z-50 bg-transparent backdrop-blur-2xl shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar Row */}
        <div className="relative flex items-center justify-between h-16">
          {/* Left: Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-2xl font-bold text-blue-600 font-poppins"
          >
            <NavIcon />
          </a>

          {/* Center: Desktop Nav Links (centered with absolute positioning) */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-4">
            <Link
              href="/"
              className=" hover:bg-purple-400 transition p-2 rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/browseproperties"
              className=" hover:bg-purple-400 transition p-2 rounded-lg"
            >
              Browse Properties
            </Link>
            <a
              href="#"
              className=" hover:bg-purple-400 transition p-2 rounded-lg"
            >
              About Us
            </a>
            <a
              href="#"
              className=" hover:bg-purple-400 transition p-2 rounded-lg"
            >
              Rental Guides
            </a>
            <a
              href="#"
              className=" hover:bg-purple-400 transition p-2 rounded-lg"
            >
              Contact Us
            </a>
          </nav>

          {/* Right: Sign In button */}
          <div className="hidden md:block">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-gray-800 shadow-md px-4 py-4 space-y-3">
          <Link href="/" className=" block hover:text-purple-600">
            Home
          </Link>
          <Link
            href="/browseproperties"
            className="block hover:text-purple-600"
          >
            Browse Properties
          </Link>
          <a href="#" className="block hover:text-purple-600">
            About Us
          </a>
          <a href="#" className="block hover:text-purple-600">
            Rental Guides
          </a>
          <a href="#" className="block hover:text-purple-600">
            Contact Us
          </a>
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
            Sign In
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
