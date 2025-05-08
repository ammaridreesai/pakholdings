'use client';
import Link from "next/link";

// Add this line to mark the file as a client component

const Banner = () => {
    return (
        <div className="bg-[#0D9161] py-12 px-4 sm:px-6 lg:px-16">
            <div className=" grid grid-cols-1 md:grid-cols-2 justify-start text-white">
                {/* Heading Section */}
                <div className="text-start">
                    <h2 className="text-[40px] sm:text-[32px] font-normal mb-4 lg:px-10 max-w-md">
                        Medium length section heading goes here
                    </h2>
                </div>

                {/* Content Section */}
                <div className="text-[16px] leading-[24px] font-normal pl-1">
                    <p className="mb-8">
                        At Pakholding, we pride ourselves on our innovative retail solutions that redefine shopping experiences. Our projects are designed with the customer in mind, blending functionality with aesthetic appeal to create inviting spaces. Each retail venture is a testament to our commitment to quality and excellence
                    </p>
                    <p className="mb-8">
                        One of our standout projects is the Urban Marketplace, a vibrant hub that brings together local artisans and established brands. This project not only boosts the local economy but also fosters a sense of community, making shopping a delightful experience for all.
                    </p>
                    <p className="mb-8">
                        Our expertise extends to the development of lifestyle centers, where we integrate leisure, dining, and shopping into one cohesive environment. These centers are strategically located to attract foot traffic and enhance customer engagement, ensuring a successful venture for all stakeholders involved.
                    </p>
                    <p className="mb-8">
                        In addition to retail, we also focus on sustainable practices in our developments. Our projects incorporate eco-friendly materials and energy-efficient designs, demonstrating our commitment to environmental responsibility while still delivering exceptional value.
                    </p>
                    <p className="mb-8">
                        With each project, we aim to set new standards in the industry. Our portfolio reflects our dedication to innovation, quality, and community impact, making Pakholding a leader in the investment and development space.
                    </p>
                    {/* Labels grid */}
                    <div className="grid grid-cols-2 mt-[96px] border-t border-[#fff]/20 py-4 px-2">
                            <div className="">Label</div>
                            <div className="text-end">Lorem Ipsum</div>
                    </div>
                    <div className="grid grid-cols-2  border-t border-[#fff]/20 py-4 px-2">
                            <div className="">Label</div>
                            <div className="text-end">Lorem Ipsum</div>
                    </div>
                    <div className="grid grid-cols-2  border-t border-[#fff]/20 py-4 px-2">
                            <div className="">Label</div>
                            <div className="text-end">Lorem Ipsum</div>
                    </div>
                    <div className="grid grid-cols-2  border-t border-[#fff]/20 py-4 px-2">
                            <div className="">Label</div>
                            <div className="text-end">Lorem Ipsum</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
