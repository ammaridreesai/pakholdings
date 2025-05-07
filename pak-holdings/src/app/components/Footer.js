"use client"; // Add this line to mark the file as a client component

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-16">
        {/* <!--Grid--> */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5  py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a
              href="/"
              className="flex justify-center lg:justify-start text-2xl"
            >
              LOGO
            </a>
            <p className="py-8 text-sm  lg:max-w-sm lg:text-center lg:text-left">
              Subscribe to our newsletter for the latest updates on features and
              releases.
            </p>

            <form className="flex lg:flex-cols max-w-lg lg:mx-0 mx-auto">
              <label for="voice-search" className="sr-only">
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
            <p className="py-8 text-sm  lg:max-w-lg lg:text-center lg:text-left">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-[16px]   font-medium mb-7">Quick Links</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="  hover: "
                >
                  About us 
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="   hover: "
                >
                  Contact us 
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="   hover: "
                >
                  Our Services 
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="   hover: "
                >
                  Blog Posts
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="   hover: "
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-[16px]   font-medium mb-7">Resources</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="  hover: "
                >
                  Case Studies
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="   hover: "
                >
                  White Paper
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="   hover: "
                >
                  Webinar
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="   hover: "
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="   hover: "
                >
                  Newsroom
                </a>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left">
            <h4 className="text-[16px]   font-medium mb-7">Connect With Us</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="  hover: "
                >
                  Facebook
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="   hover: "
                >
                  Instagram
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="   hover: "
                >
                  X
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="   hover: "
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="   hover: "
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--Grid--> */}
        <div className="py-7 border-t border-gray-200 whitespace-nowrap">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm  ">
              ©<a href="/"> pakholdings</a> 2024, All rights
              reserved.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
              <a
                href="javascript:;"
                className="text-[14px] flex justify-center items-center "
              >
                Privacy Policy
              </a>
              <a
                href="javascript:;"
                className="text-[14px] flex justify-center items-center"
              >
                Terms of Use
              </a>
              <a
                href="javascript:;"
                className="text-[14px] flex justify-center items-center "
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
