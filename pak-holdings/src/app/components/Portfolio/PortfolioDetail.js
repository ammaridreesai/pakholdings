import Image from "next/image";
import Link from "next/link";

const PortfolioDetailPage = ({ title, description, image, tags }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <Image
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg shadow-md mb-4"
            width={500}
            height={500}
          />
        </div>
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
