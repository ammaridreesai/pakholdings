"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getParameterByName } from "../../../helpers/queryString";
import { projects } from "../../../helpers/projects";

const Portfolio = () => {
  const categories = [
    "All",
    "Roma Coffee Shop",
    "Stallion Mining Industry",
    "Luxury Home",
    "Imported Cars",
    "Stallion Mart",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    const categoryFromQuery = getParameterByName("id");
    if (categoryFromQuery && categories.includes(categoryFromQuery)) {
      setSelectedCategory(categoryFromQuery);
    }
  }, []);

  const handleTabClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredCards =
    selectedCategory === "All"
      ? projects
      : projects.filter((card) => card.category === selectedCategory);
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
            className={`px-2 py-2 rounded-lg text-sm font-medium cursor-pointer ${
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
