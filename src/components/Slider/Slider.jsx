import { useState } from "react";
import "./slider.css";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/img/coffee.jpg",
    "/img/coffee.jpg",
    "/img/coffee.jpg",
    "/img/coffee.jpg",
  ];

  const nextSlide = () => {
    if (activeIndex < images.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative w-full h-96 flex justify-center items-center overflow-hidden">
      {/* Left Arrow */}
      {activeIndex > 0 && (
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          onClick={prevSlide}
        >
          &#8592;
        </button>
      )}

      {/* Slides */}
      {images.map((image, index) => {
        let position = "hidden opacity-0 scale-50";
        if (index === activeIndex) {
          position = "z-30 opacity-100 scale-100 transform translate-y-0";
        } else if (index === (activeIndex + 1) % images.length) {
          position =
            "z-20 opacity-80 scale-75 transform translate-x-40 -translate-y-10";
        } else if (index === (activeIndex - 1 + images.length) % images.length) {
          position =
            "z-20 opacity-80 scale-75 transform -translate-x-40 -translate-y-10";
        }

        return (
          <div
            key={index}
            className={`absolute w-64 h-40 bg-cover bg-center rounded-lg transition-all duration-500 ease-in-out ${position}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        );
      })}

      {/* Right Arrow */}
      {activeIndex < images.length - 1 && (
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          onClick={nextSlide}
        >
          &#8594;
        </button>
      )}
    </div>
  );
};

export default Slider;