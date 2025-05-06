'use client'; // Add this line to mark the file as a client component

const Banner = () => {
  return (
    <div className="bg-[#0D3B2A] py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center text-white">
        {/* Text Section */}
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <h2 className="text-3xl sm:text-4xl font-normal mb-4">Join Us for Exceptional Growth</h2>
          <p className="text-lg sm:text-xl mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex- sm:flex-row space-x-4">
          <button className="px-6 py-3 bg-green-500 text-white font-normal rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 ">
            Become a Partner
          </button>
          <button className="px-6 py-3 bg-gray-700 text-white font-normal rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
