import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white text-black pt-1 fixed top-0 left-0 right-0 shadow-md z-50">
      <div className=" container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/navbar/Logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        {/* Categories */}
        <ul className="flex space-x-8">
          <li className="hover:text-[#0D3B66] cursor-pointer font-light">Home</li>
          <li className="hover:text-[#0D3B66] cursor-pointer font-light">Featured</li>
          <li className="hover:text-[#0D3B66] cursor-pointer font-light">Products</li>
          <li className="hover:text-[#0D3B66] cursor-pointer font-light">Games</li>
          <li className="hover:text-[#0D3B66] cursor-pointer font-light">Collectibles</li>
          <li className="hover:text-[#0D3B66] cursor-pointer font-light">Orders</li>
        </ul>

        {/* Icons */}
        <div className="flex space-x-6">
          <Image
            src="/navbar/Search.png"
            alt="Search"
            width={24}
            height={24}
            className="object-contain cursor-pointer"
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

      {/* Separator Line */}
      <div className="bg-[#0D3B66] h-1 w-full mt-1"></div>
    </nav>

  );
}
