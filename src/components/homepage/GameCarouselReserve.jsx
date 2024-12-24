import React from "react";
import Slider from "react-slick";

const GameCarouselReserve = ({ games }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div
      className="px-6 py-12 bg-black text-white"
      style={{
        background: "linear-gradient(145deg, #111, #000)", // Dark gaming aesthetic
        borderRadius: "16px",
      }}
    >
      <h1 className="text-4xl font-extrabold text-center mb-12 tracking-wide uppercase">
        Featured Games
      </h1>
      <Slider {...settings}>
        {games.map((game, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center space-y-8 p-8"
          >
            {/* Game Image */}
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden relative">
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover"
                style={{
                  border: "3px solid #00FF00", // Neon green glow
                  boxShadow: "0 0 20px #00FF00",
                }}
              />
            </div>

            {/* Game Details */}
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-[#00FF00]">
                {game.name}
              </h2>
              <p className="text-lg text-gray-300 italic">{game.genre}</p>
              <div className="flex flex-col items-center space-y-2">
                <p className="text-2xl font-semibold text-white">
                  ₱ {game.price}
                </p>
                <p className="text-sm text-gray-400">
                  ⭐ {game.rating} | {game.sold} sold
                </p>
              </div>
              <ul className="list-none text-gray-400 text-sm space-y-1">
                {game.description.map((desc, i) => (
                  <li key={i}>• {desc}</li>
                ))}
              </ul>
            </div>

            {/* Buy Now Button */}
            <button
              className="mt-4 py-3 px-10 font-semibold rounded-full text-black"
              style={{
                background: "linear-gradient(145deg, #00FF00, #007F00)",
                boxShadow: "0 5px 20px rgba(0, 255, 0, 0.7)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GameCarouselReserve;
