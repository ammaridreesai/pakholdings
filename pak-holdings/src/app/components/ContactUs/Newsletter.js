"use client";

import Image from "next/image";
import Link from "next/link";
import image from "../../../../public/Images/vila1.jpg";

export default function Newsletter() {
  return (
    <div className="bg-[#002A1E] md:p-16 p-6">
      <div className="max-w-screen-2x mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 text-white">
        {/* Text Section */}
        <div className="flex flex-col items-start md:py-32 py-4">
          <h2 className="md:text-[48px] text-[36px] font-normal mb-4">
            Stay Connected with Us
          </h2>
          <p className="md:text-[18px] text-[16px] mb-6">
            Join our newsletter for the latest updates and exclusive insights
            into our projects.
          </p>

          {/* Email Input & Subscribe Button */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <input
              type="email"
              placeholder="Your Email Here"
              className="w-full sm:w-auto p-3 border border-gray-300 rounded-lg text-black placeholder:text-white"
            />
            <Link
              className="flex items-center justify-center w-full md:w-[150px] h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-[#0D9161] bg-[#11B67A] text-white font-medium border-t-[1.5px] border-r-[1.5px] border-b-[4px] border-l-[1.5px]"
              href="#"
            >
              Subscribe Now
            </Link>
          </div>

          <p className="text-sm mt-4">
            By clicking Subscribe Now, you agree to our{" "}
            <a href="#" className="text-green-500 underline">
              Terms and Conditions
            </a>
            .
          </p>
        </div>

        {/* Image Section */}
        <div>
          <div className="bg-gray-300 w-full h-full rounded-lg">
            <Image
              src={image}
              alt="Image Description"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
