import Image from "next/image";
import Link from "next/link";
// Images
import car2 from "../../../../public/Images/cars2.jpg";
// Luxury Home
import vila from "../../../../public/Images/vila.jpg";

const Portfolio = () => {
  const cards = [
    {
      image: car2,
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
      image: vila,
      title: "Villa 1",
      short_description:
        "A vibrant shopping destination in the heart of the city.",
      description:
        "Villas offer a luxurious and private living experience, often set in serene locations that provide a perfect balance between comfort and style. These spacious homes typically feature expansive floor plans, modern amenities, and exquisite interior designs. Whether nestled by the beach, in the countryside, or within exclusive gated communities, villas are designed to offer a retreat from the everyday hustle. With large living areas, multiple bedrooms, private pools, lush gardens, and scenic views, villas offer an unparalleled level of comfort, making them ideal for family vacations, private events, or a long-term peaceful escape. Many villas are also equipped with state-of-the-art facilities, such as home theaters, gyms, and outdoor entertainment spaces, elevating the experience for residents and guests alike.",
      tags: ["Luxury Home", "Modern Design", "Real Estate"],
      category: "Luxury Home",
      id: "villa-1",
    },
  ];

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
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative h-full overflow-hidden">
                <a href={card.link}>
                  <Image
                    className="w-full h-full object-cover"
                    src={card.image}
                    alt={card.title}
                    placeholder="blur"
                  />
                </a>
              </div>
              <div className="px-2 py-4 mb-auto">
                <a
                  href={`/portfolio/?id=${card.category}`}
                  className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                >
                  {card.title}
                </a>
                <p className="text-gray-500 text-sm">{card.description}</p>
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
                <Link
                  href={`/portfolio/?id=${card.category}`}
                  className="flex items-center"
                >
                  View Project
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
