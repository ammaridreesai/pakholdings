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
  if (typeof mediaItem === "string") {
    return (
      mediaItem.endsWith(".png") ||
      mediaItem.endsWith(".jpg") ||
      mediaItem.endsWith(".jpeg") ||
      mediaItem.startsWith("/Images")
    );
  }

  if (typeof mediaItem === "object" && mediaItem.src) {
    const { src } = mediaItem;
    return (
      src.endsWith(".png") ||
      src.endsWith(".jpg") ||
      src.endsWith(".jpeg") ||
      src.startsWith("/Images")
    );
  }

  return false;
};


const PortfolioDetailPage = ({ title, description, image, tags, link }) => {
  // ✅ Ensure all media items are available for thumbnails
  const [mainMedia, setMainMedia] = useState(image[0]);

  const handleMediaClick = (clickedMedia) => {
    setMainMedia(clickedMedia);
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
            {image.map((mediaItem, index) => {
              const src = typeof mediaItem === "object" ? mediaItem.src : mediaItem;

              return (
                <div
                  key={index}
                  className={`cursor-pointer rounded-lg overflow-hidden transition duration-300 ${src === mainMedia ? "opacity-75 cursor-not-allowed" : "hover:opacity-80"
                    }`}
                  onClick={() => {
                    console.log("Clicked Media Item:", src);
                    handleMediaClick(src);
                  }}
                >
                  {isImage(mediaItem) ? (
                    <Image
                      src={src}
                      alt={`${title} - Media ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                      width={150}
                      height={150}
                      unoptimized
                    />
                  ) : isGoogleDrive(src) ? (
                    <div className="relative w-full h-32 bg-black flex items-center justify-center rounded-lg">
                      <iframe
                        src={getGoogleDriveEmbedUrl(src)}
                        className="w-full h-full pointer-events-none"
                        allow="autoplay"
                      />
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
                  ) : isVideo(src) ? (
                    <video
                      className="w-full h-32 object-cover rounded-lg"
                      muted
                      playsInline
                    >
                      <source src={src} type="video/mp4" />
                    </video>
                  ) : (
                    <div className="bg-gray-300 w-full h-32 flex items-center justify-center text-black">
                      Unknown Format
                    </div>
                  )}
                </div>
              );
            })}
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
