"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const creators = [
  {
    name: "Michaela Angela Cailing",
    position: "COM223",
    image: "/discover/creator-1.jpeg",
    github: "https://github.com/michaela-cailing",
    linkedin:
      "https://www.linkedin.com/in/michaela-angela-e-cailing-a503332a2/",
  },
  {
    name: "Rodney Lei Estrada",
    position: "COM223",
    image: "/discover/creator-2.jpeg",
    github: "https://github.com/rodney-estrada",
    linkedin: "https://www.linkedin.com/in/rodneyleiestrada/",
  },
  {
    name: "Blix Foryasen",
    position: "COM223",
    image: "/discover/creator-3.jpeg",
    github: "https://github.com/blix-foryasen",
    linkedin: "https://www.linkedin.com/in/blix-machiwao-foryasen/",
  },
  {
    name: "Jerico Lim",
    position: "COM223",
    image: "/discover/creator-4.jpeg",
    github: "https://github.com/jerico-lim",
    linkedin: "https://www.linkedin.com/in/rodneyleiestrada/",
  },
  {
    name: "Reinier Odarve",
    position: "COM223",
    image: "/discover/creator-5.jpeg",
    github: "https://github.com/reinier-odarve",
    linkedin: "https://www.linkedin.com/in/rodneyleiestrada/",
  },
  {
    name: "Danyssa Tamayo",
    position: "COM223",
    image: "/discover/creator-6.jpeg",
    github: "https://github.com/danyssa-tamayo",
    linkedin: "https://www.linkedin.com/in/danyssa-tamayo-5970a4280/",
  },
];

export default function Discover() {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (startIndex + itemsPerPage < creators.length) {
      setIsTransitioning(true);
      setTimeout(() => {
        setStartIndex(startIndex + itemsPerPage);
        setIsTransitioning(false);
      }, 450);
    }
  };

  const handlePrevious = () => {
    if (startIndex - itemsPerPage >= 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setStartIndex(startIndex - itemsPerPage);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const displayedCreators = creators.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-white shadow-md py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-[#0D3B66]">About Loop</h1>
          <p className="mt-4 text-lg text-gray-600">
            Powering your passion for gaming, tech, and collectibles with the
            latest innovations and exceptional service.
          </p>
        </div>
      </header>

      {/* Mission and Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
            At <span className="font-bold text-[#0D3B66]">Loop</span>, we aim to
            become the ultimate destination for gamers, tech enthusiasts, and
            collectors. We offer an extensive range of the latest video games,
            gaming consoles, and unique collectible items to cater to your
            passion. Our mission is to create a community where gamers can
            explore, purchase, and indulge in their love for all things gaming,
            and collectibles items. We envision a platform where innovation
            meets passion, delivering exceptional experiences and memorable
            moments for our customers.
          </p>
        </div>
      </section>

      {/* Creators Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Meet the Leadership Team
          </h2>
          <p className="text-lg text-center text-gray-600 mb-8">
            Get to know the talented individuals driving our vision forward.
          </p>
          <div className="flex items-center justify-center space-x-4">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              disabled={startIndex === 0}
              className={`px-4 py-2 text-white bg-blue-900 rounded-md shadow-md hover:bg-blue-700 ${
                startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              ◀
            </button>

            {/* Card Display */}
            <div
              className={`grid grid-cols-3 gap-6 relative ${
                isTransitioning
                  ? "opacity-0 transition-opacity duration-500 ease-in-out"
                  : "opacity-100 transition-opacity duration-500 ease-in-out"
              }`}
            >
              {displayedCreators.map((creator, index) => (
                <div key={index} className="overflow-hidden">
                  <Image
                    src={creator.image}
                    alt={`Image of ${creator.name}`}
                    width={300}
                    height={300}
                    className="w-35 h-72 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-medium">{creator.name}</h3>
                    <p className="text-gray-600 text-sm">{creator.position}</p>
                    <div className="flex justify-center space-x-4 mt-4 text-2xl">
                      <a
                        href={creator.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={creator.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= creators.length}
              className={`px-4 py-2 text-white bg-blue-900 rounded-md shadow-md hover:bg-blue-700 ${
                startIndex + itemsPerPage >= creators.length
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              ▶
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
