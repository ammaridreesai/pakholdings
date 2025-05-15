import Link from "next/link";

const HomeStats = () => {
  return (
    <div className="py-16 bg-[#001F17]">
      <div className="max-w-screen-x mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 sm:px-16">
        {/* Left Side: Text */}
        <div className="flex flex-col items-start justify-center text-start lg:text-left">
          <h2 className="md:text-[48px] text-[36px] font-normal max-w-lg text-[#fff] mb-4">
            Driving Excellence Through Milestones and Impactful Projects
          </h2>
          <p className="text-[18px] sm:text-[16px] text-[#fff] mb-6">
            At Pak Holdings, we pride ourselves on our significant milestones
            and impactful projects. Our statistics reflect our commitment to
            excellence and innovation in every venture.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-[48px] text-white font-normal">75%</h2>
              <p className="md:text-[16px] text-[14px] font-mormal text-white">
                Increase in portfolio value over the last year.
              </p>
            </div>
            <div>
              <h2 className="text-[48px] text-white font-normal">30</h2>
              <p className="md:text-[16px] text-[14px] font-mormal text-white">
                Successful projects completed across diverse sectors.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Video */}
        <div className="relative w-full h-auto">
          <video
            autoPlay
            className="w-full h-full object-contain rounded-lg"
            controls
          >
            <source src="/Video/Main_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HomeStats;
