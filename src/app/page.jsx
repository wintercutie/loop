"use client"
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; // Import styles
import { images } from '@/utils/homepage/constantsHomepage'; // Adjust your import as needed

const Page = () => {
  const handleDragStart = (e) => e.preventDefault();

  return (
    <div className="h-[707px]"> {/* Adjust the height as per your requirement */}
      <AliceCarousel
        autoPlay
        autoPlayInterval={3000}
        infinite
        className="h-full" // Ensure AliceCarousel fills the parent container
      >
        {images.map((image) => (
          <div key={image.id} className="relative h-full">
            {/* Background image as a full container */}
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              {/* Flexbox for centering the text */}
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <h2 className="text-white text-3xl">{`Highlight ${image.id}`}</h2>
              </div>
            </div>
          </div>
        ))}
      </AliceCarousel>
    </div>
  );
};

export default Page;
