"use client"; // Add this line to mark the file as a client component

import { useState, useEffect } from "react";

const Homecarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Working with Pakholding has transformed our business approach. Their insights and dedication are unmatched!",
      name: "John Doe",
      position: "CEO, Retail Inc.",
      image: "/path-to-image.jpg", // Replace with the actual image URL
    },
    {
      quote:
        "Pakholding's team provided the perfect strategy to enhance our operations. We're proud to have them as partners.",
      name: "Jane Smith",
      position: "Founder, Tech Solutions",
      image: "/path-to-image2.jpg", // Replace with the actual image URL
    },
    {
      quote:
        "Their innovative approach and expertise helped us reach new heights. Highly recommended!",
      name: "Michael Johnson",
      position: "COO, Global Ventures",
      image: "/path-to-image3.jpg", // Replace with the actual image URL
    },
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Optionally, auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="relative w-full h-screen bg-black text-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 flex items-center justify-center h-full">
        {/* Carousel Item */}
        <div className="text-center">
          <p className="text-[20px] md:text-[24px] sm:text-2xl font-normal mb-4">
            "{testimonials[currentIndex].quote}"
          </p>
          <div className="flex flex-col justify-center items-center space-y-8 mt-8">
            <img
              src={testimonials[currentIndex].image}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-center">
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-gray-400">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute z-30 flex justify-between top-1/2 w-full px-4 py-16">
        <button
          type="button"
          className="text-white bg-black/50 p-3 rounded-full focus:outline-none hover:bg-black/70"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 6 10"
            fill="none"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </button>

        <button
          type="button"
          className="text-white bg-black/50 p-3 rounded-full focus:outline-none hover:bg-black/70"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 6 10"
            fill="none"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 py-16">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Homecarousel;
