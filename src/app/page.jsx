"use client";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { images } from "@/utils/homepage/constantsHomepage"; // Adjust your import as needed

const Page = () => {
  const handleDragStart = (e) => e.preventDefault();

  return (
    <div className="relative h-[100vh]">
      {/* Highlight Carousel */}
      <AliceCarousel
        autoPlay
        autoPlayInterval={3000}
        infinite
        renderPrevButton={({ isDisabled }) => (
          <button
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 ${
              isDisabled ? "opacity-50" : ""
            }`}
            style={{
              background: "#0D3B66",
              color: "#fff",
              border: "none",
              borderRadius: "20%",
              padding: "10px",
            }}
          >
            ◀
          </button>
        )}
        renderNextButton={({ isDisabled }) => (
          <button
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 ${
              isDisabled ? "opacity-50" : ""
            }`}
            style={{
              background: "#0D3B66",
              color: "#fff",
              border: "none",
              borderRadius: "20%",
              padding: "10px",
            }}
          >
            ▶
          </button>
        )}
      >
        {images.map((image) => (
          <div key={image.id} className="h-full">
            <div
              className="h-[70vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${image.src})` }}
            ></div>
          </div>
        ))}
      </AliceCarousel>
      <style jsx global>{`
        .alice-carousel__dots {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
        }

        .alice-carousel__dots-item {
          background: rgba(0, 0, 0, 0.5);
          border: none;
        }

        .alice-carousel__dots-item.__active {
          background: #fff;
        }
      `}</style>

      {/* Guarantee Assurance Part */}
      <div>
        <h1>puta</h1>
      </div>
      
    </div>
  );
};

export default Page;
