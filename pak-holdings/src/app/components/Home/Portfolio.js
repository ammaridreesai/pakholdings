// components/PortfolioSection.js
import Image from "next/image"; // For optimized images
import Link from "next/link";
import portfolioImage from "../../../../public/Images/portfolioImage.png";
import portfolioImage2 from "../../../../public/Images/portfolioImage2.png";
import portfolioImage3 from "../../../../public/Images/portfolioImage3.png";
import portfolioImage4 from "../../../../public/Images/portfolioImage4.png";
import portfolioImage5 from "../../../../public/Images/portfolioImage5.png";
import portfolioImage6 from "../../../../public/Images/portfolioImage6.png";

const Portfolio = () => {
  return (
    <>
      <div className="bg-black text-white py-16">
        <div className="text-center mb-16">
          <p className="mb-2">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Explore Our Diverse Ventures
          </h2>
          <p className="text-lg sm:text-xl">
            Discover our innovative projects in retail and real estate.
          </p>
        </div>

        {/* Parent Grid Container with 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 ">
          {/* First Grid: Row of Images */}
          <div className="flex flex-col ml-[64px] mr-[64px">
            {/* First Image */}
            <div className="relative flex flex-col ">
              <div className="relative h-[350px] w-[800px]">
                <Image
                  src={portfolioImage} // Replace with actual image path
                  alt="Urban Living"
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
              </div>
              {/* Content */}
              <div className="py-[14px] text-white">
                <h3 className="text-2xl font-semibold ">Urban Living</h3>
                <p className="text-sm mt-2 mb-4">
                  Transforming cityscapes with modern residential developments
                  and vibrant community spaces.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1">
                    Tag one
                  </span>
                  <span className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1">
                    Tag two
                  </span>
                  <span className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1">
                    Tag three
                  </span>
                </div>
                <Link href="/projects" className=" flex items-center">
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

            {/* Second Image */}
            <div className="relative flex flex-col ">
              <div className="relative h-[350px] w-[800px]">
                <Image
                  src={portfolioImage2} // Replace with actual image path
                  alt="Grocery Mart"
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
              </div>
              {/* Content */}
              <div className="py-[14px] text-white">
                <h3 className="text-2xl font-semibold ">Urban Living</h3>
                <p className="text-sm mt-2 mb-4">
                  Transforming cityscapes with modern residential developments
                  and vibrant community spaces.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1">
                    Tag one
                  </span>
                  <span className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1">
                    Tag two
                  </span>
                  <span className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1">
                    Tag three
                  </span>
                </div>
                <Link href="/projects" className=" flex items-center">
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

            {/* Third Image */}
            <div className="relative flex flex-col ">
              <div className="relative h-[630px] w-[800px]">
                <Image
                  src={portfolioImage3} // Replace with actual image path
                  alt="Project name here"
                  layout="fill"
                  objectFit="cover"
                  className=" "
                />
              </div>
              {/* Content */}
              <div className="py-[14px] text-white">
                <h3 className="text-2xl font-semibold ">Urban Living</h3>
                <p className="text-sm mt-2 mb-4">
                  Transforming cityscapes with modern residential developments
                  and vibrant community spaces.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1">
                    Tag one
                  </span>
                  <span className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1">
                    Tag two
                  </span>
                  <span className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1">
                    Tag three
                  </span>
                </div>
                <Link href="/projects" className=" flex items-center">
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
            {/* Fourth Image */}
            <div className="relative flex flex-col">
              <div className="relative w-[800px] h-[350px]">
                <Image
                  src={portfolioImage4} // Replace with actual image path
                  alt="Project name here"
                  layout="fill"
                  objectFit="cover"
                  className=" "
                />
              </div>
              {/* Content */}
              <div className="py-[14px] text-white">
                <h3 className="text-2xl font-semibold ">Urban Living</h3>
                <p className="text-sm mt-2 mb-4">
                  Transforming cityscapes with modern residential developments
                  and vibrant community spaces.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1">
                    Tag one
                  </span>
                  <span className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1">
                    Tag two
                  </span>
                  <span className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1">
                    Tag three
                  </span>
                </div>
                <Link href="/projects" className=" flex items-center">
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
          </div>

          {/* Second Grid: Row of Images */}
          <div className="flex flex-col gap-8">
            {/* Fourth Image */}
            <div className="relative flex flex-col ">
              <div className="relative h-[630px] w-[800px]">
                <Image
                  src={portfolioImage6} // Replace with actual image path
                  alt="Project name here"
                  layout="fill"
                  objectFit="cover"
                  className=" "
                />
              </div>
              {/* Content */}
              <div className="py-[14px] text-white">
                <h3 className="text-2xl font-semibold ">Urban Living</h3>
                <p className="text-sm mt-2 mb-4">
                  Transforming cityscapes with modern residential developments
                  and vibrant community spaces.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1">
                    Tag one
                  </span>
                  <span className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1">
                    Tag two
                  </span>
                  <span className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1">
                    Tag three
                  </span>
                </div>
                <Link href="/projects" className=" flex items-center">
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

            {/* Fifth Image */}
            <div className="relative flex flex-col">
              <div className="relative w-[800px] h-[350px]">
                <Image
                  src={portfolioImage5} // Replace with actual image path
                  alt="Project name here"
                  layout="fill"
                  objectFit="cover"
                  className=" "
                />
              </div>
              {/* Content */}
              <div className="py-[14px] text-white">
                <h3 className="text-2xl font-semibold ">Urban Living</h3>
                <p className="text-sm mt-2 mb-4">
                  Transforming cityscapes with modern residential developments
                  and vibrant community spaces.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1">
                    Tag one
                  </span>
                  <span className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1">
                    Tag two
                  </span>
                  <span className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1">
                    Tag three
                  </span>
                </div>
                <Link href="/projects" className=" flex items-center">
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
          </div>
        </div>
        <div className="flex justify-center lg:justify-center space-x-4 ">
          {/* View Projects Button */}
          <Link
            href="/projects"
            className="px-[24px] py-[10px] bg-transparent border border-gray-700 text-white rounded-[12px] shadow-lg"
          >
            View All
          </Link>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
