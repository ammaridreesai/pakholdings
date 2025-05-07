"use client"; // Add this line to mark the file as a client component

import Link from "next/link";
import { useState } from "react";
import "@fontsource/albert-sans";
import MenuIcon from "@mui/icons-material/Menu"; // Import Menu Icon from MUI
import CloseIcon from "@mui/icons-material/Close"; // Import Close Icon from MUI

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#053624] p-4 flex justify-between items-center h-[72px] font-medium">
      {/* Logo on the left */}
      <div className="flex items-center text-2xl text-white lg:px-16">
        <Link href="/">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          /> */}
          Logo
        </Link>
      </div>

      {/* Navbar Links for larger screens */}
      <div className="space-x-[32px] text-white flex lg:flex-row lg:ml-[24px] ml-0 lg:block hidden">
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

      {/* Hamburger menu for small and medium screens */}
      <button
        className="lg:hidden text-white text-3xl ml-auto"
        onClick={toggleMenu}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Navbar Links for small and medium screens */}
      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"} absolute top-[72px] left-0 w-full h-auto bg-[#053624] text-white p-4`}
      >
        <Link href="/" className="block text-[16px] leading-[64px]">
          Home Page
        </Link>
        <Link href="#" className="block text-[16px] leading-[64px]">
          About Us
        </Link>
        <Link href="#" className="block text-[16px] leading-[64px]">
          Our Services
        </Link>
        <Link href="#" className="block text-[16px] leading-[64px]">
          Contact Us
        </Link>
        <div className="mr-auto flex items-center justify-center lg:hidden block">
        <Link
          className="px-4 py-3 text-white bg-green-500 shadow-md rounded-[12px]"
          href="#"
        >
          Contact
        </Link>
        </div>
      </div>

      {/* Contact Button for larger screens */}
      <div className="ml-auto mr-16 lg:block hidden">
        <Link
          className="px-4 py-3 text-white bg-green-500 shadow-md rounded-[12px]"
          href="#"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
