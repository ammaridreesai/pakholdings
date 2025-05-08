



export default function HeroSection() {
    return (
        <div className="bg-black text-white">
            <div className="dark:bg-transparent">
                <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
                    <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                        <h1
                            className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center  font-black leading-10">
                            Innovative Retail Spaces
                        </h1>
                        <p className="mt-5 sm:mt-10 lg:w-10/12  font-normal text-center text-xl">
                            Explore our diverse portfolio of retail, real estate, and lifestyle investments that redefine excellence.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 my-4">
                            <span
                                className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1 cursor-pointer transition duration-300"
                            >
                                Retail Development
                            </span>
                            <span
                                className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1 cursor-pointer transition duration-300"
                            >
                                Real Estate
                            </span>
                            <span
                                className="text-xs bg-transparent border border-gray-400 rounded-[8px] text-white px-3 py-1 cursor-pointer transition duration-300"
                            >
                                Lifestyle Ventures
                            </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
