"use client";
import Image from "next/image";
import Link from "next/link";

// Array of image data
const images = [
  {
    src: "/Images/luxury-home.png",
    alt: "Award 1",
  },
  {
    src: "/Images/roma.jpg",
    alt: "Award 2",
  },
  {
    src: "/Images/salt.jpg",
    alt: "Award 3",
  },
  {
    src: "/Images/stakkion_mart.jpg",
    alt: "Award 4",
  },
  {
    src: "/Images/motor-logo (2).png",
    alt: "Award 5",
  },
];

const RewardBanner = () => {
  return (
    <div className="bg-[#002A1E] p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center text-white">
        {/* Heading Section */}
        <div className="text-start max-w-md">
          <h2 className="text-[50px] sm:text-[32px] font-normal mb-4 flex items-center">
            Our Recognitions and Awards
          </h2>
          <p className="text-[18px] font-normal leading-[24px]">
            Pak Holdings is proud to be recognized for excellence in investment
            and development across various sectors.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 whitespace-nowrap mt-[32px]">
            {/* Learn More Button */}
            <Link
              href="#"
              className="flex items-center justify-center md:w-[130px] w-[130px] h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-[#0D9161] bg-transparent text-white font-medium border-t-[1.5px] border-r-[1.5px] border-b-[4px] border-l-[1.5px]"
            >
              Learn More
            </Link>
            {/* View Button */}
            <Link href="#" className="flex items-center justify-end ">
              View {">"}
            </Link>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 md:gap-8 gap-16 md:mt-4 mt-[48px]">
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="relative w-[150px] h-[150px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={150}
                  height={150}
                  className="rounded-lg object-contain w-full h-full bg-transparent"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RewardBanner;
