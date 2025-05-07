"use client";

import Link from "next/link";
import { useState } from "react";
import "@fontsource/albert-sans";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import logo from "../../../public/Images/company-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#053624] p-4 flex justify-between items-center h-[72px] font-medium relative">
      {/* Left side: Logo and Links */}
      <div className="flex items-center">
        <div className="text-2xl text-white lg:px-16">
          <Link href="/">
            <Image className="" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Nav Links - large screens only */}
        <div className="space-x-[32px] text-white ml-6 hidden lg:flex">
          <Link href="/" className="text-[16px] leading-[64px]">
            Home Page
          </Link>
          <Link href="#" className="text-[16px] leading-[64px]">
            About Us
          </Link>
          <Link href="#" className="text-[16px] leading-[64px]">
            Our Services
          </Link>
          <Link href="#" className="text-[16px] leading-[64px]">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Right side: Contact Button (large screens) */}
      <div className="hidden lg:block mr-[64px]">
        <Link
          className="px-4 py-3 text-white bg-green-500 shadow-md rounded-[12px]"
          href="#"
        >
          Contact
        </Link>
      </div>

      {/* Hamburger (small screens) */}
      <button
        className="lg:hidden text-white text-3xl ml-auto"
        onClick={toggleMenu}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 w-full bg-[#053624] text-white p-4 z-50">
          <Link href="/" className="block text-[16px] leading-[48px]">
            Home Page
          </Link>
          <Link href="#" className="block text-[16px] leading-[48px]">
            About Us
          </Link>
          <Link href="#" className="block text-[16px] leading-[48px]">
            Our Services
          </Link>
          <Link href="#" className="block text-[16px] leading-[48px]">
            Contact Us
          </Link>
          <Link
            className="block mt-4 px-4 py-3 text-white bg-green-500 shadow-md rounded-[12px] text-center"
            href="#"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
