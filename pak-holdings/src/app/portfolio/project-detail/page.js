"use client";

import { useSearchParams } from "next/navigation";
import PortfolioDetails from "../../components/Portfolio/PortfolioDetail";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const PortfolioDetail = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  console.log("Search Params:", searchParams);
  console.log("Project ID:", id);

  const portfolioItems = {
    "urban-retail-hub": {
      title: "Urban Retail Hub",
      description: "A vibrant shopping destination in the heart of the city.",
      image: "/Images/portfolioImage5.png",
      tags: ["Retail Space", "Shopping Center", "Urban Development"],
    },
    "luxury-living-spaces": {
      title: "Luxury Living Spaces",
      description: "Exclusive apartments designed for modern lifestyles.",
      image: "/Images/portfolioImage6.png",
      tags: ["Real Estate", "Luxury Homes", "Modern Design"],
    },
  };

  if (!id) {
    console.log("ID is undefined, likely due to SSR or initial render");
    return <p>Loading...</p>;
  }

  const portfolioData = portfolioItems[id];

  console.log("Portfolio Data:", portfolioData);

  return (
    <>
      <Header />
      <PortfolioDetails
        title={portfolioData.title}
        description={portfolioData.description}
        image={portfolioData.image}
        tags={portfolioData.tags}
      />
      <Footer />
    </>
  );
};

export default PortfolioDetail;
