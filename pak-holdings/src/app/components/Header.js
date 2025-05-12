"use client";

import Link from "next/link";
import { useState } from "react";
import "@fontsource/albert-sans";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import CompanyLogo from "../../../public/Images/logo-1-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#053624] p-4 flex justify-between items-center h-[72px] font-medium relative">
      {/* Left side: Logo and Links */}
      <div className="flex items-center">
        <div className="lg:px-16">
          <Link href="/">
            <Image
              className="company-logo"
              src={CompanyLogo}
              alt="logo"
              height={70}
              width={80}
            />
          </Link>
        </div>

        {/* Nav Links - large screens only */}
        <div className="space-x-[32px] text-white ml-6 hidden lg:flex">
          <Link href="/" className="text-[16px] leading-[64px]">
            Home Page
          </Link>
          <Link href="/about_us" className="text-[16px] leading-[64px]">
            About Us
          </Link>
          <Link href="/portfolio" className="text-[16px] leading-[64px]">
            Our Services
          </Link>
          {/* <Link href="/contact_us" className="text-[16px] leading-[64px]">
            Contact Us
          </Link> */}
        </div>
      </div>

      {/* Right side: Contact Button (large screens) */}
      <div className="hidden lg:block mr-[64px]">
        <Link
          className="flex items-center justify-center w-[110px] h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-[#0D9161] bg-[#11B67A] text-white font-medium border-t-[1.5px] border-r-[1.5px] border-b-[4px] border-l-[1.5px]"
          href="/contact_us"
        >
          Contact Us
        </Link>
      </div>

      {/* Hamburger (small screens) */}
      <button
        className="lg:hidden text-white text-3xl ml-auto mr-4"
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
          <Link href="/about_us" className="block text-[16px] leading-[48px]">
            About Us
          </Link>
          <Link href="/portfolio" className="block text-[16px] leading-[48px]">
            Our Services
          </Link>
          {/* <Link href="/contact_us" className="block text-[16px] leading-[48px]">
            Contact Us
          </Link> */}
          <Link
            className="flex items-center justify-center w-[96px] h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-[#0D9161] bg-[#11B67A] text-white font-medium border-t-[1.5px] border-r-[1.5px] border-b-[4px] border-l-[1.5px]"
            href="/contact_us"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
