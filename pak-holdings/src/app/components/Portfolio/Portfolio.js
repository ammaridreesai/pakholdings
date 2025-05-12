"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import cars from "../../../../public/Images/cars.png";
import car1 from "../../../../public/Images/cars1.jpg";
import car2 from "../../../../public/Images/cars2.jpg";
import car3 from "../../../../public/Images/cars3.jpg";
import car4 from "../../../../public/Images/cars4.jpg";
import car5 from "../../../../public/Images/cars5.jpg";
import car6 from "../../../../public/Images/cars6.jpg";
import car7 from "../../../../public/Images/cars7.jpg";
import car8 from "../../../../public/Images/cars8.jpg";
import car9 from "../../../../public/Images/cars9.jpg";
import car10 from "../../../../public/Images/cars10.jpg";
import car11 from "../../../../public/Images/cars11.jpg";
import car12 from "../../../../public/Images/cars12.jpg";
import car13 from "../../../../public/Images/cars13.jpg";
import car14 from "../../../../public/Images/cars14.jpg";
import car15 from "../../../../public/Images/cars14.jpg";
// Luxury Home
import vila from "../../../../public/Images/vila.jpg";
import vila1 from "../../../../public/Images/vila1.jpg";
import { getParameterByName } from "../../../helpers/queryString";
const Portfolio = () => {
  const cards = [
    {
      image: car1,
      title: "Car 1",
      short_description:
        "Here at Stallion Motors, we are delighted to offer this latest shape, Lexus LX600h fresh from the Japanese shores",
      description:
        "Here at Stallion Motors, we are delighted to offer this latest shape, Lexus LX600h fresh from the Japanese shores. From its striking looks, strong character lines, and sculpted creases, this flagship SUV from Lexus is bound to fulfill all of your lifestyle requirements from a car and more. Packed with a twin-turbo V6 engine, paired to a potent electric hybrid system, this LX600h is a brawny Swiss Army knife that can amply seat 7 comfortably and offers spritely performance, Japanese reliability, excellent refinement, and exceptional fuel economy.",
      tags: ["Luxury Car", "Imported Vehicle", "SUV"],
      category: "Imported Cars",
      id: "Lexus-LX600h",
    },
    {
      image: car2,
      title: "Car 2",
      short_description:
        "Here at Stallion Motors, we are honoured to offer this bespoke, highly desirable UK model",
      description:
        "Here at Stallion Motors, we are honoured to offer this bespoke, highly desirable UK model Rolls Royce Cullinan Black Badge. This particular Cullinan is not just your run-of-the-mill version; it’s been refined by world-renowned coach builders, Mansory. From its 6.75 litre V12 master craft unit of an engine, carbon fibre body kit, upgraded 24-inch Mansory alloy wheels, to its Black Badge-specific black-on-orange leather interior, this vehicle is ready to make bold statements here in Pakistan.",
      tags: ["Luxury Car", "Imported Vehicle", "Custom Edition"],
      category: "Imported Cars",
      id: "Rolls-Royce-Cullinan-Black-Badge",
    },
    {
      image: car3,
      title: "Car 3",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Luxury Car", "Imported Vehicle", "SUV"],
      category: "Imported Cars",
      id: "car-3",
    },
    {
      image: car4,
      title: "Car 4",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Luxury Car", "Imported Vehicle", "SUV"],
      category: "Imported Cars",
      id: "car-4",
    },
    {
      image: car5,
      title: "Car 5",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Luxury Car", "Imported Vehicle", "SUV"],
      category: "Imported Cars",
      id: "car-5",
    },
    {
      image: car6,
      title: "Car 6",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Luxury Car", "Imported Vehicle", "SUV"],
      category: "Imported Cars",
      id: "car-6",
    },
    {
      image: car7,
      title: "Car 7",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Luxury Car", "Imported Vehicle", "SUV"],
      category: "Imported Cars",
      id: "car-7",
    },
    {
      image: car8,
      title: "Car 8",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Luxury Car", "Imported Vehicle", "SUV"],
      category: "Imported Cars",
      id: "car-8",
    },
    {
      image: car9,
      title: "Car 9",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Luxury Car", "Imported Vehicle", "SUV"],
      category: "Imported Cars",
      id: "car-9",
    },
    {
      image: car10,
      title: "Car 10",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Luxury Car", "Imported Vehicle", "SUV"],
      category: "Imported Cars",
      id: "car-10",
    },
    {
      image: car11,
      title: "Car 11",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Luxury Car", "Imported Vehicle", "SUV"],
      category: "Imported Cars",
      id: "car-11",
    },
    {
      image: car12,
      title: "Car 12",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Luxury Car", "Imported Vehicle", "SUV"],
      category: "Imported Cars",
      id: "car-12",
    },
    {
      image: car13,
      title: "Car 13",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Luxury Car", "Imported Vehicle", "SUV"],
      category: "Imported Cars",
      id: "car-13",
    },
    {
      image: car14,
      title: "Car 14",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Luxury Car", "Imported Vehicle", "SUV"],
      category: "Imported Cars",
      id: "car-14",
    },
    {
      image: car15,
      title: "Car 15",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Luxury Car", "Imported Vehicle", "SUV"],
      category: "Imported Cars",
      id: "car-15",
    },
    {
      image: vila,
      title: "Villa 1",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Luxury Home", "Modern Design", "Real Estate"],
      category: "Luxury Home",
      id: "villa-1",
    },
    {
      image: vila1,
      title: "Villa 2",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Luxury Home", "Modern Design", "Real Estate"],
      category: "Luxury Home",
      id: "villa-2",
    },
  ];

  const categories = [
    "All",
    "Roma Coffee Shop",
    "Stallion Mining Industry",
    "Luxury Home",
    "Imported Cars",
    "Stallion Mart",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get category from query param
  useEffect(() => {
    const categoryFromQuery = getParameterByName("id");
    if (categoryFromQuery && categories.includes(categoryFromQuery)) {
      setSelectedCategory(categoryFromQuery);
    }
  }, []);

  const handleTabClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter cards based on the selected category
  const filteredCards =
    selectedCategory === "All"
      ? cards
      : cards.filter((card) => card.category === selectedCategory);
  return (
    <div className="bg-white text-black py-16">
      <div className="text-center mb-8">
        <p className="mb-2 text-base sm:text-lg md:text-xl">Showcasing</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          Our Work
        </h2>
        <p className="text-[16px]">
          Discover our standout projects across various industries, showcasing
          our expertise in transforming visions into impactful realities.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="flex flex-wrap justify-center mb-8 gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-2 py-2 rounded-lg text-sm font-medium ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => handleTabClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {filteredCards.length > 0 ? (
            filteredCards.map((card, index) => (
              <div
                key={index}
                className="rounded overflow-hidden shadow-lg flex flex-col"
              >
                <div className="relative h-full overflow-hidden">
                  <Link
                    href={`/portfolio/project-detail/?id=${card.id}`}
                    passHref
                  >
                    <Image
                      className="w-full h-full object-cover"
                      src={card.image}
                      alt={card.title}
                      placeholder="blur"
                      width={500}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="px-2 py-4 mb-auto">
                  <Link
                    href={`/portfolio/project-detail/?id=${card.id}`}
                    className="font-medium text-lg inline-block mb-2"
                  >
                    {card.title}
                  </Link>
                  <p className="text-gray-500 text-sm">
                    {card.short_description}
                  </p>
                  <div className="flex flex-wrap gap-2 my-4">
                    {card.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-black px-3 py-1 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center col-span-2 text-gray-600">
              No projects available in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
