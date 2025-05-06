"use client"; // Add this line to mark the file as a client component

import Image from "next/image";
import Link from "next/link";
import Value_image from "../../../../public/Images/Value_image.png";
import Value_icons_1 from "../../../../public/Images/Value_icons_1.png";

const ValueSection = () => {
  return (
    <div className="bg-[#CCE1DB] py-16">
      <div className="text-center mb-16">
        <p className="text-lg font-semibold text-[#00796B]">Value</p>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Short heading goes here
        </h2>
        <p className="text-lg sm:text-xl text-[#00796B]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="rounded overflow-hidden shadow-lg flex flex-col max-w-xs p-6">
            <div className="relative ">
              <Image
                className="object-cover"
                src={Value_icons_1}
                // layout="fill"
                height={48}
                width={48}
                alt="Icons 1"
              />
            </div>
            <div className="py-4 mb-auto">
              <a href="#" className="font-medium text-lg inline-block  mb-2">
                Our Approach to Delivering Exceptional Value
              </a>
              <p className="text-gray-500 text-sm mt-[8px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="mt-[24px]">
                <Link href="#">Learn More</Link>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded overflow-hidden shadow-lg flex flex-col max-w-xs p-6">
            <div className="relative ">
              <Image
                className="object-cover"
                src={Value_icons_1}
                // layout="fill"
                height={48}
                width={48}
                alt="Icons 1"
              />
            </div>
            <div className="py-4 mb-auto">
              <a href="#" className="font-medium text-lg inline-block mb-2">
                Our Approach to Delivering Exceptional Value
              </a>
              <p className="text-gray-500 text-sm mt-[8px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="mt-[24px]">
                <Link href="#">Contact</Link>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded overflow-hidden md:max-w-full max-w-xs shadow-lg flex  flex-">
            <div className="relative w-full h-full">
              <Image
                className="object-cover"
                src={Value_image}
                layout="fill"
                alt="Sunset in the mountains"
              />
            </div>
            {/* Text Container */}
            <div className="px-6 py-12 mb-auto flex flex-col justify-center items-start">
              <p className="text-[14px] font-semibold">Tagline</p>
              <a href="#" className="font-medium text-lg inline-block mb-2">
                Why to eat salad?
              </a>
              <p className="text-gray-500 text-sm text-start">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="mt-[24px]">
                <Link href="#">Button</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
