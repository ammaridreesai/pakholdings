'use client';
import Link from "next/link";


const AdBanner = () => {
    return (
        <div className="bg-[#0D9161] p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-start text-white">
                {/* Heading Section */}
                <div className="text-start">
                    <h2 className="text-[40px] sm:text-[32px] font-normal mb-4 flex items-center">
                        Discover Our Unique Approach
                    </h2>
                    <p className="text-[18px] font-normal leading-[24px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex justify-end items-start space-x-4">
                    <Link
                        className="flex items-center justify-center w-[130px] h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-[#0B7950] bg-[#11B67A] text-white font-medium border-t-[1.5px] border-r-[1.5px] border-b-[4px] border-l-[1.5px]"
                        href="/contact_us"
                    >
                        Learn More
                    </Link>
                    <Link
                        className="flex items-center justify-center w-[100px] h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-gray-800 bg-[#000] text-white font-medium border-t-[1.5px] border-r-[1.5px] border-b-[4px] border-l-[1.5px]"
                        href="/contact_us"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default AdBanner;
