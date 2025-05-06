import Link from "next/link";

const HomeStats = () => {
  return (
    <div className="py-16 bg-[#0D3B2A]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 sm:px-10">
        {/* Left Side: Text */}
        <div className="flex flex-col items-start justify-center text-start lg:text-left">
          <p className="font-semibold text-[16px] text-white">Tagline</p>
          <h2 className="text-[48px] sm:text-[36px] font-normal max-w-sm text-[#fff] mb-4">
            Medium length section heading goes here
          </h2>
          <p className="text-[18px] sm:text-[16px] text-[#fff] mb-6">
            At Pakholding, we pride ourselves on our significant milestones and
            impactful projects. Our statistics reflect our commitment to
            excellence and innovation in every venture.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-[48px] text-white font-normal">75%</h2>
              <p className="text-[16px] font-mormal text-white">
                Increase in portfolio value over the last year.
              </p>
            </div>
            <div>
              <h2 className="text-[48px] text-white font-normal">30</h2>
              <p className="text-[16px] font-mormal text-white">
                Successful projects completed across diverse sectors.
              </p>
            </div>
          </div>
          {/* <Link
            href="/projects"
            className="px-6 py-3 mt-[20px]  text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Learn More
          </Link> */}
        </div>

        {/* Right Side: Video */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <video className="w-full h-full object-cover rounded-lg" controls>
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HomeStats;
