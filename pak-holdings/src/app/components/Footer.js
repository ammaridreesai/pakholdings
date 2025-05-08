"use client"; // Add this line to mark the file as Link client component

import Link from "next/link";
import logo from "../../../public/Images/company-logo.svg";
import Image from "next/image";
import { Facebook, Instagram, Twitter, LinkedIn, YouTube } from '@mui/icons-material';
const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-16">
        {/* <!--Grid--> */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="col-span-full mb-10 lg:col-span-3 lg:mb-0">
            <div className="w-[100px]">
              <Link href="/">
                <Image className="w-[100px]" src={logo} alt="logo" />
              </Link>
            </div>
            <p className="py-8 text-sm  lg:max-w-sm text-start lg:text-left">
              Subscribe to our newsletter for the latest updates on features and
              releases.
            </p>

            <form className="flex items-center max-w-lg mx-aut">
              <label htmlFor="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="voice-search"
                  className="bg- border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-gray-700 block w-full  p-2.5 "
                  placeholder="Your Email Here"
                  required
                />
              </div>
              <button
                type="submit"
                className="cursor-pointer ml-2 flex items-center justify-center w-[100px] h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-[#252424] bg-transparent text-white font-medium border-t-[1.5px] border-r-[1.5px] border-b-[4px] border-l-[1.5px]"
              >
                Join
              </button>
            </form>
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
                <Link href="javascript:;" className="  hover: ">
                  About us
                </Link>
              </li>
              <li className="mb-6">
                <Link href="javascript:;" className="   hover: ">
                  Contact us
                </Link>
              </li>
              <li className="mb-6">
                <Link href="javascript:;" className="   hover: ">
                  Our Services
                </Link>
              </li>
              <li className="mb-6">
                <Link href="javascript:;" className="   hover: ">
                  Blog Posts
                </Link>
              </li>
              <li>
                <Link href="javascript:;" className="   hover: ">
                  FAQs
                </Link>
              </li>
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
                <Facebook className="mr-3 rounded-full " /> {/* Facebook Icon */}
                <Link href="javascript:;" className="">
                  Facebook
                </Link>
              </li>

              <li className="mb-6 flex items-center">
                <Instagram className="mr-3 " /> {/* Instagram Icon */}
                <Link href="javascript:;" className="">
                  Instagram
                </Link>
              </li>
              <li className="mb-6 flex items-center">
                <Twitter className="mr-3 " /> {/* Twitter (X) Icon */}
                <Link href="javascript:;" className="">
                  X
                </Link>
              </li>
              <li className="mb-6 flex items-center">
                <LinkedIn className="mr-3 " /> {/* LinkedIn Icon */}
                <Link href="javascript:;" className="">
                  LinkedIn
                </Link>
              </li>
              <li className="flex items-center">
                <YouTube className="mr-3 " /> {/* YouTube Icon */}
                <Link href="javascript:;" className="">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--Grid--> */}
        <div className="py-7 border-t border-gray-200 whitespace-nowrap">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm  ">
              ©<Link href="/"> pak holdings</Link> 2024, All rights reserved.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
              <Link
                href="javascript:;"
                className="text-[14px] flex justify-center items-center "
              >
                Privacy Policy
              </Link>
              <Link
                href="javascript:;"
                className="text-[14px] flex justify-center items-center"
              >
                Terms of Use
              </Link>
              <Link
                href="javascript:;"
                className="text-[14px] flex justify-center items-center "
              >
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


