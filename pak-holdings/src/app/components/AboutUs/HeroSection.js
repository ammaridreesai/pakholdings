import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="relative bg-black text-white bg-cover bg-center" style={{ backgroundImage: 'url(/Images/About_us_image.jpg)' }}>
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="md:px-16 px-2 relative">
                <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
                    <div className="lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                        <h1 className=" text-[40px] md:text-[56px] text-center font-normal leading-10">
                            Welcome to Pak holdings
                        </h1>
                        <p className="mt-[24px] sm:mt-10 font-normal text-center text-[18px] leading-[24px]">
                            Dedicated to innovation, integrity, and excellence in investment and development across diverse sectors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
