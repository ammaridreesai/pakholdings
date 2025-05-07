"use client"; // Add this line to mark the file as Link client component

import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-16">
        {/* <!--Grid--> */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="col-span-full mb-10 lg:col-span-3 lg:mb-0">
            <Link
              href="/"
              className="flex justify-center lg:justify-start text-2xl"
            >
              LOGO
            </Link>
            <p className="py-8 text-sm  lg:max-w-sm text-center lg:text-left">
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
                className="ml-4 px-[24px] py-[10px] bg-transparent border border-gray-700 text-white rounded-[12px] shadow-lg"
              >
                Join
              </button>
            </form>
            <p className="py-8 text-sm  lg:max-w-lg text-center lg:text-left">
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
            <h4 className="text-[16px]   font-medium mb-7">Connect With Us</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <Link href="javascript:;" className="  hover: ">
                  Facebook
                </Link>
              </li>
              <li className="mb-6">
                <Link href="javascript:;" className="   hover: ">
                  Instagram
                </Link>
              </li>
              <li className="mb-6">
                <Link href="javascript:;" className="   hover: ">
                  X
                </Link>
              </li>
              <li className="mb-6">
                <Link href="javascript:;" className="   hover: ">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="javascript:;" className="   hover: ">
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
