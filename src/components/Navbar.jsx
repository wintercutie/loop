"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Dropdown = ({ label, items, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Label */}
      <Link href={href} passHref>
        <span className="block font-light hover:font-semibold text-gray-600 hover:text-[#0D3B66] cursor-pointer">
          {label}
        </span>
      </Link>

      {/* Dropdown */}
      {isHovered && (
        <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md z-50">
          <ul className="flex flex-col space-y-1 py-2">
            {items.map((item) => (
              <li key={item.label}>
                <Link href={item.href} passHref>
                  <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#0D3B66] cursor-pointer">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const toggleSearchBar = () => setIsSearchOpen(!isSearchOpen);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchTerm) {
      router.push(`/search/${searchTerm}`);
    }
  };

  return (
    <nav className="bg-white text-black pt-1 fixed top-0 left-0 right-0 shadow-md z-50 w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
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
        <div className="flex-grow hidden md:flex justify-center">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" passHref>
                <span className="block font-light hover:font-semibold text-gray-600 hover:text-[#0D3B66] cursor-pointer">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Dropdown
                label="Peripherals"
                href="/products"
                items={[
                  { label: "Mice", href: "/peripherals/mice" },
                  { label: "Keyboards", href: "/peripherals/keyboards" },
                  { label: "Headsets", href: "/peripherals/headsets" },
                  { label: "Microphones", href: "/peripherals/microphones" },
                  { label: "Webcams", href: "/peripherals/webcams" },
                  { label: "Gamepads", href: "/peripherals/gamepads" },
                  { label: "Gaming Chairs", href: "/peripherals/chairs" },
                  { label: "Mousepads", href: "/peripherals/mousepads" },
                  { label: "Keyboard Covers", href: "/peripherals/covers" },
                  { label: "Headset Stands", href: "/peripherals/stands" },
                  { label: "Cables", href: "/peripherals/cables" },
                ]}
              />
            </li>
            <li>
              <Dropdown
                label="Games"
                href="/games"
                items={[
                  { label: "Action", href: "/games/action" },
                  { label: "Adventure", href: "/games/adventure" },
                  { label: "Casual", href: "/games/casual" },
                  { label: "Fighting", href: "/games/fighting" },
                  { label: "Puzzle", href: "/games/puzzle" },
                  { label: "Racing", href: "/games/racing" },
                  { label: "Role Playing", href: "/games/role-playing" },
                  { label: "Shooter", href: "/games/shooter" },
                  { label: "Simulation", href: "/games/simulation" },
                  { label: "Sports", href: "/games/sports" },
                ]}
              />
            </li>
            <li>
              <Dropdown
                label="Collectibles"
                href="/collectibles"
                items={[
                  { label: "Action Figures", href: "/collectibles/action-figures" },
                  { label: "Amiibo", href: "/collectibles/amiibo" },
                  { label: "Badges", href: "/collectibles/badges" },
                  { label: "Cards", href: "/collectibles/cards" },
                  { label: "Rubber Straps", href: "/collectibles/rubber-straps" },
                  { label: "Plush", href: "/collectibles/plush" },
                  { label: "Others", href: "/collectibles/others" },
                ]}
              />
            </li>
            <li>
              <Link href="/user/purchase/all" passHref>
                <span className="block font-light hover:font-semibold text-gray-600 hover:text-[#0D3B66] cursor-pointer">
                  Orders
                </span>
              </Link>
            </li>
            <li>
              <Link href="/discover" passHref>
                <span className="block font-light hover:font-semibold text-gray-600 hover:text-[#0D3B66] cursor-pointer">
                  Discover
                </span>
              </Link>
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
      {isSearchOpen && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white shadow-lg pt-2 w-[50rem]">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      )}
    </nav>
  );
}
