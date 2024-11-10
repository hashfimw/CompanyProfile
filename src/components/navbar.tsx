"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { FiGlobe, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full py-4 px-10 flex items-center justify-between shadow-sm">
      <Link href={"/"}>
        <div className="flex items-center space-x-4">
          <Logo />
          <div className="flex flex-col">
            <span className="font-bold text-gray-800">PULSE</span>
            <span className="text-sm font-semibold text-gray-500 tracking-wide">
              ADVERTISING
            </span>
          </div>
        </div>
      </Link>

      <div className="md:hidden z-50">
        <button
          onClick={toggleMenu}
          className="text-gray-700 hover:text-black z-20"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-10 font-semibold">
        <Link href="/about" passHref>
          <span className="text-gray-700 hover:text-black cursor-pointer">
            About Us
          </span>
        </Link>
        <Link href="/pulseservices" passHref>
          <span className="text-gray-700 hover:text-black cursor-pointer">
            Services
          </span>
        </Link>
        <Link href="/teams" passHref>
          <span className="text-gray-700 hover:text-black cursor-pointer">
            Teams
          </span>
        </Link>
        <Link href="/contact" passHref>
          <span className="text-gray-700 hover:text-black cursor-pointer">
            Contact
          </span>
        </Link>
        <button className="text-gray-700 hover:text-black">
          <FiGlobe size={24} />
        </button>
      </nav>

      {menuOpen && (
        <nav className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-md flex flex-col items-center justify-center space-y-4 py-4 rounded-xl z-50 h-[30%] w-[90%] mx-auto my-6">
          <Link href="/about" passHref>
            <span className="text-gray-700 hover:text-black cursor-pointer">
              About Us
            </span>
          </Link>
          <Link href="/services" passHref>
            <span className="text-gray-700 hover:text-black cursor-pointer">
              Services
            </span>
          </Link>
          <Link href="/teams" passHref>
            <span className="text-gray-700 hover:text-black cursor-pointer">
              Team
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span className="text-gray-700 hover:text-black cursor-pointer">
              Contact
            </span>
          </Link>
          <button className="text-gray-700 hover:text-black hidden">
            <FiGlobe size={24} />
          </button>
        </nav>
      )}
    </header>
  );
}
