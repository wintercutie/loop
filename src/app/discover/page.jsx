import React from "react";
import Image from "next/image";

const creators = [
  { name: "Alice Johnson", position: "Chairperson", image: "/discover/creator-1.jpeg" },
  { name: "Bob Smith", position: "Chief Executive Officer", image: "/discover/creator-2.jpeg" },
  { name: "Cathy Lee", position: "Chief Financial Officer", image: "/discover/creator-3.jpeg" },
  { name: "David Kim", position: "Chief Technology Officer", image: "/discover/creator-4.jpeg" },
  { name: "Ella Brown", position: "Chief Marketing Officer", image: "/discover/creator-5.jpeg" },
  { name: "Frank Green", position: "Chief Operating Officer", image: "/discover/creator-6.jpeg" },
];

export default function Discover() {
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
          <h2 className="text-3xl font-semibold text-center mb-8">
            Meet the Leadership Team
          </h2>
          <div className="flex overflow-x-auto space-x-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {creators.map((creator, index) => (
              <div key={index} className="overflow-hidden min-w-[250px]">
                <Image
                  src={creator.image}
                  alt={`Image of ${creator.name}`}
                  width={300}
                  height={300}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{creator.name}</h3>
                  <p className="text-gray-600 text-sm">{creator.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
