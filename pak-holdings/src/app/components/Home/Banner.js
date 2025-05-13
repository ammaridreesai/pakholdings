'use client';
import Link from "next/link";

 // Add this line to mark the file as a client component

const Banner = () => {
  return (
    <div className="bg-[#0D3B2A] py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-screen-x mx-auto flex flex-col sm:flex-row justify-between items-center text-white">
        {/* Text Section */}
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <h2 className="text-3xl sm:text-4xl font-normal mb-4">Join Us for Exceptional Growth</h2>
          <p className="text-lg sm:text-xl mb-4">Unlock your potential, embrace success, and elevate your journey with us.</p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex- sm:flex-row space-x-4 px-4">
          <Link href="/contact_us" className="flex items-center justify-center w-[177px]  h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-[#0D9161] bg-[#11B67A] text-white font-medium border-t-[1.5px] border-r-[1.5px] border-b-[4px] whitespace-nowrap">
            Become a Partner
          </Link>
          <Link href="/about_us"  className="flex items-center justify-center md:w-[177px] w-[130px] h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-[#0D9161] bg-transparent text-white font-medium border-t-[1.5px] border-r-[1.5px] border-b-[4px] border-l-[1.5px] whitespace-nowrap">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
