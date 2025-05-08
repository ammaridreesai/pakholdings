import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="relative bg-black text-white bg-cover bg-center" style={{ backgroundImage: 'url(/Images/Contact_us_image.jpg)' }}>
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Adjust opacity for the overlay */}

            <div className="md:px-16 px-2 relative">
                <div className="mx-auto flex flex-col items-start py-12 sm:py-24">
                    <div className="lg:flex justify-start items-start flex-col mb-5 sm:mb-10">
                        <p className="text-[16px] font-semibold leading-[24px] mb-[16px]">Connect</p>
                        <h1 className=" sm:text-[40px] md:text-[56px] text-start font-normal leading-10">
                            Get in Touch
                        </h1>
                        <p className="mt-[24px] sm:mt-10 font-normal text-start text-[18px] leading-[24px]">
                            We’re here to answer your questions and help you with your inquiries.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 my-4">
                        <Link
                            className="flex items-center justify-center w-[96px] h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-[#0D9161] bg-[#11B67A] text-white font-medium border-t-[1.5px] border-r-[1.5px] border-b-[4px] border-l-[1.5px]"
                            href="#"
                        >
                            Contact
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center justify-center w-[100px] h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-[#252424] bg-transparent text-white font-medium border-t-[1.5px] border-r-[1.5px] border-b-[4px] border-l-[1.5px]"
                        >
                            Inquire
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
