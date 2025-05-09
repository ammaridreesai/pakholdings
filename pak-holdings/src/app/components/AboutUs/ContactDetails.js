"use client";

import dynamic from "next/dynamic";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

// Dynamically load the Iframe component to avoid SSR issues
const Iframe = dynamic(() => import("react-iframe"), { ssr: false });

const ContactDetails = () => {
    return (
        <div className="bg-gray-100">
            <div className="p-4 md:p-16">
                <div className="px-4 text-start">
                    <p className="text-[16px] font-semibold mb-[16px]">Connect</p>
                    <h2 className="text-[48px] font-normal mb-[24px]">Get in Touch</h2>
                    <p className="mt-4 text-lg text-gray-500">We`&apos`d love to hear from you!</p>
                </div>

                <div className="mt-16 lg:mt-20">
                    {/* Grid layout for content and map */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Content Section */}
                        <div className="md:col-span-1">
                            <div className="rounded-lg overflow-hidden">
                                <div className="px-6 py-4">
                                    <div className="mb-4"><EmailOutlinedIcon /></div>
                                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                                    <p className="mt-1 text-gray-600">Your email address</p>
                                    <p className="mt-1 text-gray-600 underline">hello@relume.io</p>
                                </div>
                                <div className="px-6 py-4">
                                    <div className="mb-4"><LocalPhoneOutlinedIcon /></div>
                                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                                    <p className="mt-1 text-gray-600">Reach us at</p>
                                    <p className="mt-1 text-gray-600 underline">+1 (555) 123-4567</p>
                                </div>
                                <div className="px-6 py-4">
                                    <div className="mb-4"><LocationOnOutlinedIcon /></div>
                                    <h3 className="text-lg font-medium text-gray-900">Office
                                        456 Example Ave, Melbourne VIC 3000 AU</h3>
                                    <p className="mt-1 text-gray-600">456 Example Ave, Melbourne VIC 3000 AU</p>
                                    <p className="mt-1 font-semibold">Find Us {" >"}</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Section */}
                        <div className="md:col-span-2">
                            <div className="rounded-lg overflow-hidden">
                                <Iframe
                                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                                    width="100%"
                                    height="500"
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
