// components/ValueSection.js
import Image from 'next/image';  // For optimized images
import Link from 'next/link';
import Value_image from "../../../../public/Images/Value_image.png";  // Replace with actual image path

const ValueSection = () => {
    return (
        <div className="bg-[#CCE1DB] py-16 w-full max-w-auto">
            <div className="text-center mb-16">
                <p className="text-lg font-semibold text-[#00796B]">Value</p>
                <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Short heading goes here</h2>
                <p className="text-lg sm:text-xl text-[#00796B]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* Parent Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   w-full max-w-[1400px] mx-auto">

                {/* First Box */}
                <div className="bg-[#CCE1DB] p-6 rounded-lg shadow-lg flex flex-col items-start h-[360px] w-[350px]">
                    <div className="bg-[#00796B] text-white p-4 rounded-full mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8M8 12h8"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Our Approach to Delivering Exceptional Value</h3>
                    <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link href="/projects" className="text-[#00796B] font-medium hover:underline">
                        Learn More
                    </Link>
                </div>

                {/* Second Box */}
                <div className="bg-[#CCE1DB] p-6 rounded-lg shadow-lg flex flex-col items-start h-[360px] w-[350px]">
                    <div className="bg-[#00796B] text-white p-4 rounded-full mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8M8 12h8"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Market Insight Drives Our Strategic Decisions</h3>
                    <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link href="/contact" className="text-[#00796B] font-medium hover:underline">
                        Contact
                    </Link>
                </div>

                {/* Third Box with Image */}
                <div className="bg-[#CCE1DB] w-[640px] h-[360px]  shadow-lg border border-[#000] flex flex-row items-center">
                    <div className="relative w-[320px] h-[360px] ">
                        <Image
                            src={Value_image}  // Replace with the image path
                            alt="Innovation at the Heart of Our Projects"
                            layout="fill"
                            // height={360}
                            // width={320}
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold ml-4 w-[320px]">Innovation at the Heart of Our Projects</h3>
                        <p className="text-sm ml-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link href="/projects" className="text-[#00796B] font-medium mt-4 hover:underline ml-2">
                            Button
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValueSection;
