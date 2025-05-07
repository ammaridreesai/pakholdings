import Image from "next/image";
import Link from "next/link";
import portfolioImage from "../../../../public/Images/portfolioImage.png";
import portfolioImage2 from "../../../../public/Images/portfolioImage2.png";
import portfolioImage3 from "../../../../public/Images/portfolioImage3.png";
import portfolioImage4 from "../../../../public/Images/portfolioImage4.png";
import portfolioImage5 from "../../../../public/Images/portfolioImage5.png";
import portfolioImage6 from "../../../../public/Images/portfolioImage6.png";

const Portfolio = () => {
  const cards = [
    {
      image: portfolioImage,
      title: "Simplest Salad Recipe Ever",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      tags: ["Tag one", "Tag two", "Tag three"],
      link: "#",
    },
    {
      image: portfolioImage2,
      title: "Why to Eat Salad?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      tags: ["Tag one", "Tag two", "Tag three"],
      link: "#",
    },
    {
      image: portfolioImage3,
      title: "Why to Eat Salad?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      tags: ["Tag one", "Tag two", "Tag three"],
      link: "#",
    },
    {
      image: portfolioImage4,
      title: "Why to Eat Salad?",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      tags: ["Tag one", "Tag two", "Tag three"],
      link: "#",
    },
    {
      image: portfolioImage5,
      title: "Best FastFood Ideas (Yummy)",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      tags: ["Tag one", "Tag two", "Tag three"],
      link: "#",
    },
    {
      image: portfolioImage6,
      title: "Best FastFood Ideas (Yummy)",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      tags: ["Tag one", "Tag two", "Tag three"],
      link: "#",
    },
  ];

  return (
    <div className="bg-black text-white py-16">
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
              <div className="relative">
                <a href={card.link}>
                  <Image className="w-full" src={card.image} alt={card.title} />
                </a>
              </div>
              <div className="px-2 py-4 mb-auto">
                <a
                  href={card.link}
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
                <Link href={card.link} className="flex items-center">
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
          href="#"
          className="flex items-center justify-center w-[100px] h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-[#252424] bg-transparent text-white font-medium border-t-[1.5px] border-r-[1.5px] border-b-[4px] border-l-[1.5px]"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
