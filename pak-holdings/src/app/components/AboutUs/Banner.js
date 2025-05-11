"use client";
// components/HeroSection.js
import Image from "next/image"; // Import Image component for optimized images
import HeroSectionImage from "../../../../public/Images/Placeholder-Image.png";
import Link from "next/link";

const Banner = () => {
  return (
    <div className=" w-full">
      {/* Content Section with Grid */}
      <div className=" inset- flex justify-center items-center gap-[180px bg-[#053624] lg:px-[64px] ">
        <div className="w-full max-w-8xl px-4 sm:px-8 lg:px-0 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 text-white  lg:text-left">
            {/* Left Grid with Heading */}
            <div className="lg:flex lg:flex-col lg:justify-center lg:items-start">
              <p className="text-[16px] font-semibold leading-[24px] mb-4">
                Who We Are
              </p>
              <h1 className="lg:text-[56px] text-[40px]  font-medium mb-4 lg:max-w-l leading-[64px] ">
                Our Journey: Building a Brighter Future
              </h1>
            </div>

            {/* Right Grid with Paragraph and Buttons */}
            <div className="flex flex-col justify-start items-center lg:items-start ">
              <p className="text-[18px] font-medium mb-[32px] max-w-3xl mx-auto lg:mx-0 leading-[150%]">
                PAK Holdings (Pvt) Ltd. was founded with a mission to turn
                vision into reality. Our journey began with a passion for
                entrepreneurship, inspired by our CEOs distinguished background
                in the military and automotive industry. With operations in both
                Pakistan and the UK, PAK Holdings serves as a bridge between
                opportunity and execution — empowering clients, investors, and
                communities through responsible growth.
              </p>
              <div className="flex justify-center lg:justify-start space-x-4 whitespace-nowrap">
                {/* Learn More Button */}
                <Link
                  href="/contact_us"
                  className="flex items-center justify-center md:w-[177px] w-[130px] h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-[#0D9161] bg-transparent text-white font-medium border-t-[1.5px] border-r-[1.5px] border-b-[4px] border-l-[1.5px]"
                >
                  Join Us {">"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
