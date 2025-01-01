"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import Link from "next/link"; // Import Link for navigation

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Add state for the search term
  const router = useRouter(); // Initialize the router

  const toggleSearchBar = () => setIsSearchOpen(!isSearchOpen);

  // Close search bar when mouse leaves
  const handleMouseLeave = () => setIsSearchOpen(false);

  // Handle Enter key press to navigate
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchTerm) {
      router.push(`/search/${searchTerm}`); // Navigate to /search/[slug]
    }
  };

  return (
    <nav className="bg-white text-black pt-1 fixed top-0 left-0 right-0 shadow-md z-50 w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo - Make it clickable */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" passHref>
            <Image
              src="/navbar/Logo.png"
              alt="Logo"
              width={150}
              height={150}
              className="object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Categories */}
        <div
          className={`flex-grow hidden md:flex justify-center ${
            isSearchOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <ul className="flex space-x-8">
            {[
              { label: "Home", href: "/" },
              { label: "Peripherals", href: "/products" },
              { label: "Games", href: "/games" },
              { label: "Collectibles", href: "/collectibles" },
              { label: "Orders", href: "/user/purchase/all" },
              { label: "Discover", href: "/discover" },
            ].map((item) => (
              <li
                key={item.label}
                className="cursor-pointer transition-all"
                style={{ minWidth: "95px", textAlign: "center" }} // Ensures consistent width
              >
                <Link href={item.href} passHref>
                  <span className="block font-light hover:font-semibold text-gray-600 hover:text-[#0D3B66]">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term as user types
          onKeyDown={handleKeyDown} // Trigger navigation on Enter key press
        />
      </motion.div>
    </nav>
  );
}
