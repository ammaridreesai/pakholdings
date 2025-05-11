"use client";
import HeroSectionImage from "../../../../public/Images/Placeholder-Image.png"; // Correct import
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-full">
      {/* Image Section with Custom Height */}
      <div
        className="relative bg-black text-white bg-cover bg-center"
        style={{ backgroundImage: "url(/Images/Placeholder-Image.png)" }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="md:px-16 px-2 relative">
          <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
              <h1 className=" text-[48px] md:text-[56px] text-center font-normal leading-10">
              Welcome to Pak holdings
              </h1>
              <p className="mt-[24px] sm:mt-10 font-normal text-center text-[18px] leading-[24px]">
              “We Design, Create & Run Your Business”

              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section with Grid */}
      <div className="flex justify-center items-center gap-[180px] bg-[#053624] lg:px-[64px]">
        <div className="w-full max-w-8xl px-4 sm:px-8 lg:px-0 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 text-white lg:text-left">
            {/* Left Grid with Heading */}
            <div className="lg:flex lg:flex-col lg:justify-center lg:items-start">
              <h1 className="lg:text-[56px] text-[40px] font-medium mb-4 lg:max-w-lg leading-[64px]">
                Transforming Investments into Exceptional Experiences
              </h1>
            </div>

            {/* Right Grid with Paragraph and Buttons */}
            <div className="flex flex-col justify-start items-center lg:items-start">
              <p className="text-[18px] font-medium mb-[32px] max-w-3xl mx-auto lg:mx-0 leading-[150%]">
                Welcome to PAK Holdings — your trusted partner in luxury real
                estate, premium salt mining, retail ventures, and high-end
                hospitality. From Pakistan to the UK, we empower investors with
                secure, profitable, and prestigious opportunities.
              </p>
              <div className="flex justify-center lg:justify-start space-x-4 whitespace-nowrap">
                {/* View Projects Button */}
                <Link
                  href="#portfolio"
                  className="flex items-center justify-center md:w-[177px] w-[140px] h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-[#0D9161] bg-[#11B67A] text-white font-medium border-t-[1.5px] border-r-[1.5px] border-b-[4px]"
                >
                  View Projects
                </Link>

                {/* Learn More Button */}
                <Link
                  href="#"
                  className="flex items-center justify-center md:w-[177px] w-[130px] h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-[#0D9161] bg-transparent text-white font-medium border-t-[1.5px] border-r-[1.5px] border-b-[4px] border-l-[1.5px]"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
