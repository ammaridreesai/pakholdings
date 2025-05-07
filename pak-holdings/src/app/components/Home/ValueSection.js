"use client"; // Add this line to mark the file as a client component

import Image from "next/image";
import Link from "next/link";
import Value_image from "../../../../public/Images/Value_image.png";
import Value_icons_1 from "../../../../public/Images/Value_icons_1.png";
// Icons
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

const ValueSection = () => {
  return (
    <div className="bg-[#CCE1DB] py-16">
      <div className="text-center mb-16">
        <p className="mb-2 text-base sm:text-lg md:text-xl">Portfolio</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          Explore Our Diverse Ventures
        </h2>
        <p className="text-[16px]">
          Discover our innovative projects in retail and real estate.
        </p>
      </div>

      <div className="max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-">
        <div className="grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-2">
          {/* CARD 1 */}
          <div className="rounded overflow-hidden shadow-lg flex flex-col p-6 border-[1px] border-[#000000]/15 max-w-sm">
            <div className="relative">
              <Image
                className="object-cover"
                src={Value_icons_1}
                height={48}
                width={48}
                alt="Icons 1"
              />
            </div>
            <div className="py-4 mb-auto">
              <p className="font-medium text-lg inline-block mb-2 max-w-xs">
                Our Approach to Delivering Exceptional Value
              </p>
              <p className="text-gray-500 text-sm mt-[8px] max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="mt-[24px]">
                <Link href="#">Learn More <NavigateNextOutlinedIcon /></Link>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded overflow-hidden shadow-lg flex flex-col p-6 border-[1px] border-[#000000]/15 max-w-sm">
            <div className="relative">
              <Image
                className="object-cover"
                src={Value_icons_1}
                height={48}
                width={48}
                alt="Icons 1"
              />
            </div>
            <div className="py-4 mb-auto">
              <a href="#" className="font-medium text-lg inline-block mb-2 max-w-xs">
                Our Approach to Delivering Exceptional Value
              </a>
              <p className="text-gray-500 text-sm mt-[8px] max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="mt-[24px]">
                <Link href="#">Contact <NavigateNextOutlinedIcon /></Link>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded overflow-hidden shadow-lg flex flex-col md:flex-row  border-[1px] border-[#000000]/15 max-w-sm md:max-w-lg">
            {/* Image Container */}
            <div className="relative w-full h-[250px] md:h-full">
              <Image
                className="object-cover"
                src={Value_image}
                layout="fill"
                alt=""
              />
            </div>

            {/* Text Container */}
            <div className="px-6 py-12 flex flex-col justify-center items-start">
              <p className="text-[14px] font-semibold">Tagline</p>
              <a href="#" className="font-medium text-lg inline-block mb-2">
                Innovation at the Heart of Our Projects
              </a>
              <p className="text-gray-500 text-sm text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="mt-[24px]">
                <Link href="#">
                  Button <NavigateNextOutlinedIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ValueSection;
