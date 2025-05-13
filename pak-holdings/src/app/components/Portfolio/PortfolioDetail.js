"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ✅ Check if it's a Google Drive video link
const isGoogleDrive = (url) =>
  typeof url === "string" && url.includes("drive.google.com/file/d/");

// ✅ Convert Google Drive file link to iframe preview
const getGoogleDriveEmbedUrl = (url) => {
  const fileId = url.split("/d/")[1]?.split("/")[0];
  return `https://drive.google.com/file/d/${fileId}/preview`;
};

// ✅ Check if it's a standard video
const isVideo = (mediaItem) => {
  if (typeof mediaItem !== "string") return false;
  return mediaItem.endsWith(".mp4") || mediaItem.endsWith(".webm");
};

// ✅ Check if it's an image
const isImage = (mediaItem) => {
  if (typeof mediaItem !== "string") return false;
  return (
    mediaItem.endsWith(".png") ||
    mediaItem.endsWith(".jpg") ||
    mediaItem.endsWith(".jpeg") ||
    mediaItem.startsWith("/Images")
  );
};

const PortfolioDetailPage = ({ title, description, image, tags, link }) => {
  const [mainMedia, setMainMedia] = useState(image[0]);

  const handleMediaClick = (clickedMedia) => {
    if (clickedMedia !== mainMedia) {
      setMainMedia(clickedMedia);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap">
        {/* ✅ Main Media Display */}
        <div className="w-full md:w-1/2 px-4 mb-8">
          {isGoogleDrive(mainMedia) ? (
            <iframe
              src={getGoogleDriveEmbedUrl(mainMedia)}
              width="100%"
              height="400"
              allow="autoplay"
              className="rounded-lg shadow-md mb-4"
            />
          ) : isVideo(mainMedia) ? (
            <video
              autoPlay
              muted
              playsInline
              controls={false}
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

          {/* ✅ Thumbnail Gallery */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {image.map((mediaItem, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-lg overflow-hidden"
                onClick={() => handleMediaClick(mediaItem)}
              >
                {isImage(mediaItem) ? (
                  <Image
                    src={mediaItem}
                    alt={`${title} - Media ${index + 1}`}
                    className={`w-full h-32 object-cover transition duration-300 ${
                      mediaItem === mainMedia
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:opacity-80"
                    }`}
                    width={150}
                    height={150}
                    unoptimized
                  />
                ) : isGoogleDrive(mediaItem) ? (
                  <div
                    className={`relative w-full h-32 rounded-lg overflow-hidden transition duration-300 ${
                      mediaItem === mainMedia
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:opacity-80"
                    }`}
                  >
                    {/* Click target */}
                    <div className="absolute inset-0 z-10" />
                    {/* Preview-only iframe */}
                    <iframe
                      src={getGoogleDriveEmbedUrl(mediaItem)}
                      className="w-full h-full pointer-events-none"
                      allow="autoplay"
                    />
                    {/* Play icon */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <svg
                        className="w-8 h-8 text-white opacity-80"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <video
                    className={`w-full h-32 object-cover rounded-lg transition duration-300 ${
                      mediaItem === mainMedia
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:opacity-80"
                    }`}
                  >
                    <source src={mediaItem} type="video/mp4" />
                  </video>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Info Section */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-200 rounded-full px-3 py-1 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          {link && (
            <div className="mb-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm bg-gray-200 rounded-full px-3 py-1 text-blue-600 hover:underline"
              >
                Visit Website
              </a>
            </div>
          )}

          <Link href="/portfolio" passHref>
            <button className="mb-4 cursor-pointer flex items-center justify-center w-[180px] h-[44px] text-[16px] rounded-[12px] border-[1.5px] border-solid border-[#0D9161] bg-[#11B67A] text-white font-medium border-b-[4px]">
              Back to Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;
