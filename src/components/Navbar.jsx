"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const exploreCategories = [
  {
    label: "Peripherals",
    items: [
      { label: "Mice", href: "/peripherals/mice" },
      { label: "Keyboards", href: "/peripherals/keyboards" },
      { label: "Headsets", href: "/peripherals/headsets" },
      { label: "Microphones", href: "/peripherals/microphones" },
      { label: "Webcams", href: "/peripherals/webcams" },
      { label: "Gamepads", href: "/peripherals/gamepads" },
      { label: "Gaming Chairs", href: "/peripherals/chairs" },
    ],
  },
  {
    label: "Games",
    items: [
      { label: "Action", href: "/games/action" },
      { label: "Adventure", href: "/games/adventure" },
      { label: "Casual", href: "/games/casual" },
      { label: "Fighting", href: "/games/fighting" },
      { label: "Puzzle", href: "/games/puzzle" },
      { label: "Racing", href: "/games/racing" },
      { label: "Role Playing", href: "/games/role-playing" },
    ],
  },
  {
    label: "Collectibles",
    items: [
      { label: "Action Figures", href: "/collectibles/action-figures" },
      { label: "Amiibo", href: "/collectibles/amiibo" },
      { label: "Badges", href: "/collectibles/badges" },
      { label: "Cards", href: "/collectibles/cards" },
      { label: "Plush", href: "/collectibles/plush" },
    ],
  },
];

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const router = useRouter();

  const toggleSearchBar = () => setIsSearchOpen(!isSearchOpen);

  const handleMouseEnterExplore = () => {
    setIsExploreOpen(true);
  };

  const handleMouseLeaveExplore = () => {
    setIsExploreOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchTerm) {
      router.push(`/search/${searchTerm}`);
    }
  };

  return (
    <nav className="bg-white text-black pt-1 fixed top-0 left-0 right-0 shadow-md z-50 w-full">
      <div className="container mx-auto flex items-center justify-between">
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

        <div
          className={`flex-grow hidden md:flex justify-center ${
            isSearchOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <ul className="flex space-x-12">
            <li
              className="relative  hover:text-bg[#0D3B66] hover:font-semibold transition-all duration-200 ease-in-out cursor-pointer"
              style={{ minWidth: "max-content" }}
            >
              <Link href="/" className="block">
                Home
              </Link>
            </li>
            <li
              className="relative  hover:text-bg[#0D3B66] hover:font-semibold transition-all duration-200 ease-in-out cursor-pointer"
              style={{ minWidth: "max-content" }}
              onMouseEnter={handleMouseEnterExplore}
            >
              Products
            </li>
            <li
              className="relative hover:text-bg[#0D3B66] hover:font-semibold transition-all duration-200 ease-in-out cursor-pointer"
              style={{ minWidth: "max-content" }}
            >
              <Link href="/orders" className="block">
                Orders
              </Link>
            </li>
            <li
              className="relative hover:text-bg[#0D3B66] hover:font-semibold transition-all duration-200 ease-in-out cursor-pointer"
              style={{ minWidth: "max-content" }}
            >
              <Link href="/discover" className="block">
                Discover
              </Link>
            </li>
          </ul>
        </div>

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

      <div className="bg-[#0D3B66] h-1 w-full mt-1"></div>

      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white shadow-lg pt-2"
        initial={{ width: "0%", opacity: 0 }}
        animate={{
          width: isSearchOpen ? "50rem" : "0%",
          opacity: isSearchOpen ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        onMouseLeave={() => setIsSearchOpen(false)} // Close search bar on hover out
      >
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </motion.div>

      {/* Explore Dropdown */}
      {isExploreOpen && (
        <div
          className="absolute top-full left-0 w-full bg-gray-100 shadow-lg z-40"
          onMouseLeave={handleMouseLeaveExplore}
        >
          <div className="container mx-auto grid grid-cols-3 gap-8 p-4">
            {exploreCategories.map((category) => (
              <div key={category.label}>
                <h3 className="font-semibold text-lg text-[#0D3B66] mb-2">
                  {category.label}
                </h3>
                <ul>
                  {category.items.map((item) => (
                    <li key={item.label} className="mb-1">
                      <Link
                        href={item.href}
                        className="hover:text-[#0D3B66] cursor-pointer text-sm"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
