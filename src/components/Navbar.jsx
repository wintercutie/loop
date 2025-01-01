"use client"
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchBar = () => setIsSearchOpen(!isSearchOpen);

  // Close search bar when mouse leaves
  const handleMouseLeave = () => setIsSearchOpen(false);

  return (
    <nav className="bg-white text-black pt-1 fixed top-0 left-0 right-0 shadow-md z-50 w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/navbar/Logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        {/* Categories */}
        <div
          className={`flex-grow hidden md:flex justify-center ${
            isSearchOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <ul className="flex space-x-8">
            <li className="hover:text-[#0D3B66] cursor-pointer font-light">
              Home
            </li>
            <li className="hover:text-[#0D3B66] cursor-pointer font-light">
              Featured
            </li>
            <li className="hover:text-[#0D3B66] cursor-pointer font-light">
              Peripherals
            </li>
            <li className="hover:text-[#0D3B66] cursor-pointer font-light">
              Games
            </li>
            <li className="hover:text-[#0D3B66] cursor-pointer font-light">
              Collectibles
            </li>
            <li className="hover:text-[#0D3B66] cursor-pointer font-light">
              Orders
            </li>
          </ul>
        </div>

        {/* Icons */}
        <div className="hidden md:flex space-x-6">
          <Image
            src="/navbar/Search.png"
            alt="Search"
            width={24}
            height={24}
            className="object-contain cursor-pointer"
            onClick={toggleSearchBar}
          />
          <Image
            src="/navbar/Shopping Cart.png"
            alt="Shopping Cart"
            width={24}
            height={24}
            className="object-contain cursor-pointer"
          />
          <Image
            src="/navbar/User.png"
            alt="User"
            width={24}
            height={24}
            className="object-contain cursor-pointer"
          />
        </div>
      </div>

      {/* Blue separator line */}
      <div className="bg-[#0D3B66] h-1 w-full mt-1"></div>

      {/* Search Bar */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white shadow-lg pt-2"
        initial={{ width: "0%", opacity: 0 }}
        animate={{
          width: isSearchOpen ? "50rem" : "0%",
          opacity: isSearchOpen ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        onMouseLeave={handleMouseLeave} // Close the search bar when mouse leaves
      >
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Search..."
        />
      </motion.div>
    </nav>
  );
}
