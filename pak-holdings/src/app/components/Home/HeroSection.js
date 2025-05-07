// components/HeroSection.js
import Image from "next/image"; // Import Image component for optimized images
import HeroSectionImage from "../../../../public/Images/Placeholder-Image.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className=" w-full">
      {/* Image Section with Custom Height */}
      <div className="">
        <Image
          src={HeroSectionImage}
          alt="Hero Image"
          layout="responsive" // Use responsive to maintain the aspect ratio
          // width={1440} // You can set the width here
          // height={500} // Set a custom height
          objectFit="cover"
        />
      </div>

      {/* Content Section with Grid */}
      <div className=" inset- flex justify-center items-center gap-[180px bg-[#053624] lg:px-[64px] ">
        <div className="w-full max-w-8xl px-4 sm:px-8 lg:px-0 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 text-white  lg:text-left">
            {/* Left Grid with Heading */}
            <div className="lg:flex lg:flex-col lg:justify-center lg:items-start">
              <h1 className="lg:text-[56px] text-[40px]  font-medium mb-4 lg:max-w-lg leading-[64px] ">
                Transforming Investments into Exceptional Experiences
              </h1>
            </div>

            {/* Right Grid with Paragraph and Buttons */}
            <div className="flex flex-col justify-start items-center lg:items-start ">
              <p className="text-[18px] font-medium mb-[32px] max-w-3xl mx-auto lg:mx-0 leading-[150%]">
                At Pakholding, we are dedicated to creating innovative retail
                and lifestyle spaces that inspire and engage. Our mission is to
                redefine the landscape of investment and development through
                strategic insights and exceptional execution.
              </p>
              <div className="flex justify-center lg:justify-start space-x-4 whitespace-nowrap">
                {/* View Projects Button */}
                <Link
                  href="#"
                  className="px-[24px] py-[10px] bg-green-600 text-white rounded-[12px] shadow-lg"
                >
                  View Projects
                </Link>

                {/* Learn More Button */}
                <Link
                  href="#"
                  className="px-[24px] py-[10px] bg-transparent text-white rounded-[12px] border-1 border-white shadow-lg hover:shadow-lg hover:bg-white hover:text-black"
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
