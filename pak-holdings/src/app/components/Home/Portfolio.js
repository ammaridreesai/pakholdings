import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../helpers/projects";

const Portfolio = () => {
  const customOrder = [
    "Stallion-Mart",
    "Rolls-Royce-Cullinan-Black-Badge-1",
    "Stallion-Luxury-Home",
    "Roma-Coffee-Shop",
    "Himalayan-pink-salt",
  ];

  const filteredOrderedProjects = projects
    .filter((card) => customOrder.includes(card.id))
    .sort((a, b) => customOrder.indexOf(a.id) - customOrder.indexOf(b.id))
    .reduce((acc, card) => {
      const exists = acc.find((item) => item.category === card.category);
      if (!exists) acc.push(card);
      return acc;
    }, []);

  return (
    <div id="portfolio" className="bg-black text-white py-16">
      <div className="text-center mb-16">
        <p className="mb-2 text-base sm:text-lg md:text-xl">Portfolio</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          Explore Our Diverse Ventures
        </h2>
        <p className="text-[16px]">
          Discover our innovative projects in retail and real estate.
        </p>
      </div>

      <div className="max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {filteredOrderedProjects
            .filter(
              (card) =>
                card.id === "Stallion-Mart" ||
                card.id === "Rolls-Royce-Cullinan-Black-Badge-1" ||
                card.id === "Stallion-Luxury-Home" ||
                card.id === "Roma-Coffee-Shop" ||
                card.id === "Himalayan-pink-salt"
            )
            .reduce((acc, card) => {
              const existingCategory = acc.find(
                (item) => item.category === card.category
              );
              if (!existingCategory) {
                acc.push(card);
              }
              return acc;
            }, [])
            .map((card, index) => (
              <div
                key={index}
                className="rounded overflow-hidden shadow-lg flex flex-col"
              >
                <div className="relative h-full overflow-hidden">
                  <a href={`/portfolio/?id=${card.category}`}>
                    <Image
                      className="w-full h-full object-cover"
                      src={card.image[0]}
                      alt={card.title}
                      width={500}
                      height={300}
                      unoptimized
                    />
                  </a>
                </div>

                <div className="px-2 py-4 mb-auto">
                  <a
                    href={`/portfolio/?id=${card.category}`}
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    {card.category}
                  </a>
                  <p className="text-gray-500 text-sm">
                    {card.short_description}
                  </p>

                  <div className="flex flex-wrap gap-2 my-4">
                    {card.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1 cursor-pointer transition duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {card?.link && (
                    <div className="mb-4">
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-xs bg-gray-200 rounded-full px-3 py-1 whitespace-nowrap text-blue-600 hover:underline"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}
                  <Link
                    href={`/portfolio/?id=${card.category}`}
                    className="flex items-center"
                  >
                    View Projects
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="ml-2 h-4 w-4"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* View all Button */}
      <div className="flex justify-center lg:justify-center space-x-4 ">
        <Link
          href="/portfolio"
          className="flex items-center justify-center w-[100px] h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-[#252424] bg-transparent text-white font-medium border-t-[1.5px] border-r-[1.5px] border-b-[4px] border-l-[1.5px]"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
