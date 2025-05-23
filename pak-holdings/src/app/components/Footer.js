"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import CompanyLogo from "../../../public/Images/logo-1-removebg-preview.png";
import Image from "next/image";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (isValidEmail) {
      setShowSuccess(true);
      setEmail("");
      setIsInvalidEmail(false); // Reset invalid state
      setTimeout(() => setShowSuccess(false), 5000);
    } else {
      setIsInvalidEmail(true); // Show red border
    }
  };
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-16">
        {/* <!--Grid--> */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="col-span-full mb-10 lg:col-span-3 lg:mb-0">
            <div className="w-[100px]">
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
            <p className="py-8 text-sm  lg:max-w-sm text-start lg:text-left">
              Subscribe to our newsletter for the latest updates on features and
              releases.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex items-center max-w-lg mx-aut"
            >
              <label htmlFor="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="email"
                  className={`border text-white text-sm rounded-lg focus:ring-blue-500 focus:border-gray-700 block w-full p-2.5 ${
                    isInvalidEmail ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your Email Here"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (isInvalidEmail) setIsInvalidEmail(false); // Clear red border on change
                  }}
                />
              </div>
              <button
                type="submit"
                className="cursor-pointer ml-2 flex items-center justify-center w-[100px] h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-[#252424] bg-transparent text-white font-medium border-t-[1.5px] border-r-[1.5px] border-b-[4px] border-l-[1.5px]"
              >
                Join
              </button>
            </form>
            {isInvalidEmail && (
              <div className="mt-2 text-red-500 text-sm">
                Please enter a valid email address.
              </div>
            )}
            {showSuccess && (
              <div className="mt-4 text-green-600">
                Newsletter has been subscribed successfully!
              </div>
            )}
            <p className="py-8 text-sm  lg:max-w-lg text-start lg:text-left">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </p>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-[16px]   font-medium mb-7">Quick Links</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <Link href="/about_us" className="">
                  About Us
                </Link>
              </li>
              <li className="mb-6">
                <Link href="/contact_us" className="">
                  Contact Us
                </Link>
              </li>
              <li className="mb-6">
                <Link href="/portfolio" className="">
                  Our Services
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="">
                  FAQs
                </Link>
              </li> */}
            </ul>
          </div>
          {/* <!--End Col--> */}
          {/* <div className="lg:mx-auto text-left ">
            <h4 className="text-[16px]   font-medium mb-7">Resources</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <Link
                  href="javascript:;"
                  className="  hover: "
                >
                  Case Studies
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="javascript:;"
                  className="   hover: "
                >
                  White Paper
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="javascript:;"
                  className="   hover: "
                >
                  Webinar
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="javascript:;"
                  className="   hover: "
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="javascript:;"
                  className="   hover: "
                >
                  Newsroom
                </Link>
              </li>
            </ul>
          </div> */}
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left">
            <h4 className="text-[16px] font-medium mb-7">Connect With Us</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6 flex items-center">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/share/15N4K76ukc/?mibextid=wwXIfr"
                  className=""
                >
                  <Facebook className="mr-3 rounded-full " />{" "}
                  {/* Facebook Icon */}
                  Facebook
                </Link>
              </li>

              <li className="mb-6 flex items-center">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/pakholdingpk?igsh=MTZnZ2QzcWkwYjU3Mg=="
                  className=""
                >
                  <Instagram className="mr-3 " /> {/* Instagram Icon */}
                  Instagram
                </Link>
              </li>
              {/* <li className="mb-6 flex items-center">
                <Twitter className="mr-3 " /> 
                <Link href="javascript:;" className="">
                  X
                </Link>
              </li> */}
              <li className="mb-6 flex items-center">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/pak-holdings/"
                  className=""
                >
                  <LinkedIn className="mr-3 " /> {/* LinkedIn Icon */}
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--Grid--> */}
        <div className="py-7 border-t border-gray-200 whitespace-nowrap">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm  ">
              ©<Link href="/"> Pak Holdings</Link> 2025, All rights reserved.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
              <Link
                href="/privacy_policy"
                className="text-[14px] flex justify-center items-center "
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms_and_condition"
                className="text-[14px] flex justify-center items-center"
              >
                Terms of Use
              </Link>
              {/* <Link
                href="javascript:;"
                className="text-[14px] flex justify-center items-center "
              >
                Cookie Settings
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
