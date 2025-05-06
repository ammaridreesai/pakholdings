
import Image from "next/image"; 
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
            {/* First Grid Row */}
            <div className="grid gap-8">
              {/* <!-- CARD 1 --> */}
              <div className="rounded overflow-hidden shadow-lg flex flex-col">
                <a href="#"></a>
                <div className="relative">
                  <a href="#">
                    <Image
                      className="w-full"
                      src={portfolioImage}
                      alt="Sunset in the mountains"
                    />
                  </a>
                </div>
                <div className="px-2 py-4 mb-auto">
                  <a
                    href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    Simplest Salad Recipe ever
                  </a>
                  <p className="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="flex flex-wrap gap-2 my-4">
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
                  <Link href="#" className=" flex items-center">
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
              {/* <!-- CARD 2 --> */}
              <div className="rounded overflow-hidden shadow-lg flex flex-col">
                <a href="#"></a>
                <div className="relative">
                  <a href="#">
                    <Image
                      className="w-full"
                      src={portfolioImage2}
                      alt="Sunset in the mountains"
                    />
                  </a>
                </div>
                <div className="px-2 py-4 mb-auto">
                  <a
                    href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    Why to eat salad?
                  </a>
                  <p className="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="flex flex-wrap gap-2 my-4">
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
                  <Link href="#" className=" flex items-center">
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
              {/* <!-- CARD 3 --> */}
              <div className="rounded overflow-hidden shadow-lg ">
                <a href="#"></a>
                <div className="relative">
                  <a href="#">
                    <Image
                      className="w-full"
                      src={portfolioImage3}
                      alt="Sunset in the mountains"
                    />
                  </a>
                </div>
                <div className="px-2 py-4 mb-auto">
                  <a
                    href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    Why to eat salad?
                  </a>
                  <p className="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="flex flex-wrap gap-2 my-4">
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
                  <Link href="#" className=" flex items-center">
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
              {/* <!-- CARD 4 --> */}
              <div className="rounded overflow-hidden shadow-lg flex flex-col">
                <a href="#"></a>
                <div className="relative">
                  <a href="#">
                    <Image
                      className="w-full"
                      src={portfolioImage4}
                      alt="Sunset in the mountains"
                    />
                  </a>
                </div>
                <div className="px-2 py-4 mb-auto">
                  <a
                    href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    Why to eat salad?
                  </a>
                  <p className="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="flex flex-wrap gap-2 my-4">
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
                  <Link href="#" className=" flex items-center">
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
            {/* Second Grid row */}
            <div className="grid gap-8">
              {/* <!-- CARD 3 --> */}
              <div className="rounded overflow-hidden shadow-lg">
                <a href="#"></a>
                <div className="relative">
                  <a href="#">
                    <Image
                      className="w-full"
                      src={portfolioImage5}
                      alt="Sunset in the mountains"
                    />
                  </a>
                </div>
                <div className="px-2 py-4 mb-auto">
                  <a
                    href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    Best FastFood Ideas (Yummy)
                  </a>
                  <p className="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="flex flex-wrap gap-2 my-4">
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
                  <Link href="#" className=" flex items-center">
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
              {/* <!-- CARD 4 --> */}
              {/* <div className="rounded overflow-hidden shadow-lg ">
                <a href="#"></a>
                <div className="">
                  <a href="#">
                    <Image
                      className="w-full"
                      src={portfolioImage6}
                      alt="Sunset in the mountains"
                    />
                    
                  </a>
                </div>
                <div className="px-2 py-4 mb-auto">
                  <a
                    href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    Best FastFood Ideas (Yummy)
                  </a>
                  <p className="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* View all Button */}
        <div className="flex justify-center lg:justify-center space-x-4 ">
          {/* View Projects Button */}
          <Link
            href="#"
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
