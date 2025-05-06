// components/Navbar.js
import Link from 'next/link';
import "@fontsource/albert-sans";

const Navbar = () => {
    return (
        <nav className="bg-[#053624] p-4 flex justify-between items-center h-[72px] font-medium  ">
            <div className="flex items-center ml-[64px] text-2xl text-white">
                <Link href="/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8"
                        alt="Flowbite Logo"
                    />
                    {/* Logo */}
                </Link>
                <div className="space-x-[32px] text-white ml-[24px] lg:block hidden">
                    <Link href="/" className=" text-[16px] leading-[64px]">
                        Home Page
                    </Link>
                    <Link href="/about" className=" text-[16px] leading-[64px]">
                        About Us
                    </Link>
                    <Link href="/services" className=" text-[16px] leading-[64px]">
                        Our Services
                    </Link>
                    <Link href="/contact" className=" text-[16px] leading-[64px]">
                        Contact Us
                    </Link>
                </div>
            </div>

            <div className="flex space-x-4 mr-[64px]">
                <button className="px-4 py-2 text-white bg-green-500 shadow-md rounded-[12px]">
                    Contact
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
