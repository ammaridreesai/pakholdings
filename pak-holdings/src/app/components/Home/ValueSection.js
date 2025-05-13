"use client";

import Image from "next/image";
import Value from "../../../../public/Images/WhatsApp Image 2025-05-12 at 16.33.06_1274740f.jpg";

const ValueSection = () => {
  return (
    <div className="bg-[#CCE1DB] py-16">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <p className="mb-2 text-base sm:text-lg md:text-xl text-gray-700">
          Leadership & Vision
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          A Moment of Collaboration with Industry Leaders
        </h2>
        <p className="text-[16px] text-gray-600">
          Our CEO engages with renowned professionals to drive innovation and
          build meaningful partnerships.
        </p>
      </div>

      {/* Card Centered */}
      <div className="flex justify-center items-center px-5">
        <div className="rounded overflow-hidden shadow-lg flex flex-col md:flex-row border-[1px] border-[#000000]/15 max-w-sm md:max-w-lg">
          <div className="relative w-full h-[250px] md:h-full">
            <Image className="object-cover" src={Value} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
