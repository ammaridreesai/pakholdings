"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PortfolioDetailPage = ({ title, description, image, tags }) => {
  // Initial state will be the first media item
  const [mainMedia, setMainMedia] = useState(image[0]);

  /**
   * Handles media click - swaps the clicked media with the main media
   */
  const handleMediaClick = (clickedMedia) => {
    setMainMedia(clickedMedia);
  };

  /**
   * Determines if the media item is a video or image based on its extension.
   */
  const isVideo = (mediaItem) => {
    if (typeof mediaItem !== "string") return false;

    return mediaItem.endsWith(".mp4") || mediaItem.endsWith(".webm");
  };

  const isImage = (mediaItem) => {
    if (typeof mediaItem !== "string") return false;

    return (
      mediaItem.endsWith(".png") ||
      mediaItem.endsWith(".jpg") ||
      mediaItem.endsWith(".jpeg")
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap">
        {/* Main Media Display */}
        <div className="w-full md:w-1/2 px-4 mb-8">
          {isVideo(mainMedia) ? (
            <video
              controls
              className="w-full h-auto rounded-lg shadow-md mb-4"
              width={500}
              height={500}
            >
              <source src={mainMedia} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={mainMedia}
              alt={title}
              className="w-full h-auto rounded-lg shadow-md mb-4"
              width={500}
              height={500}
              unoptimized
            />
          )}

          {/* Media Gallery */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {image.map((imgSrc, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => handleMediaClick(imgSrc)}
              >
                {isVideo(imgSrc) ? (
                  <video
                    className={`w-full h-32 object-cover rounded-lg transition duration-300 ${
                      imgSrc === mainMedia
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:opacity-80"
                    }`}
                  >
                    <source src={imgSrc} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={imgSrc}
                    alt={`${title} - Media ${index + 1}`}
                    className={`w-full h-32 object-cover rounded-lg transition duration-300 ${
                      imgSrc === mainMedia
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:opacity-80"
                    }`}
                    width={150}
                    height={150}
                    unoptimized
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4 cursor-pointer">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-200 rounded-full px-3 py-1 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link href="/portfolio" passHref>
            <button className="mb-4 cursor-pointer flex items-center justify-center w-[180px] h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-[#0D9161] bg-[#11B67A] text-white font-medium border-t-[1.5px] border-r-[1.5px] border-b-[4px] border-l-[1.5px]">
              Back to Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;
