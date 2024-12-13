"use client";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { images } from "@/utils/homepage/constantsHomepage"; // Adjust your import as needed
import AssuranceElement from "@/components/homepage/AssuranceElement";

const Page = () => {
  const handleDragStart = (e) => e.preventDefault();

  return (
    <div className="relative h-[200vh]">
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

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-3">
          <div className="relative pr-6 md:pr-8">
            <AssuranceElement
              src="/homepage/AssuranceLogo1.png"
              title="Your Most Trusted Store"
              description="100% All Brand New & Original Shop with Confidence."
            />
            <div className="absolute inset-y-0 right-0 w-px bg-gray-400 hidden md:block"></div>
          </div>
          <div className="relative pr-6 md:pr-8">
            <AssuranceElement
              src="/homepage/AssuranceLogo2.png"
              title="Fast Shipping Nationwide"
              description="Ships in 24 hours! Express and Same-Day Delivery within Metro Manila!"
            />
            <div className="absolute inset-y-0 right-0 w-px bg-gray-400 hidden md:block"></div>
          </div>
          <div className="relative pr-6 md:pr-8">
            <AssuranceElement
              src="/homepage/AssuranceLogo3.png"
              title="Save on Loyalty Rewards"
              description="Sign in to start earning Loyalty Rewards Points!"
            />
            <div className="absolute inset-y-0 right-0 w-px bg-gray-400 hidden md:block"></div>
          </div>
          <div>
            <AssuranceElement
              src="/homepage/AssuranceLogo4.png"
              title="100% Safe and Secure"
              description="All Transactions are Fully Encrypted with State of the Art Technology!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
