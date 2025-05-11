"use client";

import { useSearchParams } from "next/navigation";
import PortfolioDetails from "../../components/Portfolio/PortfolioDetail";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// Images
import car1 from "../../../../public/Images/cars1.jpg";
import car2 from "../../../../public/Images/cars2.jpg";
import car3 from "../../../../public/Images/cars3.jpg";
import car4 from "../../../../public/Images/cars4.jpg";
import car5 from "../../../../public/Images/cars5.jpg";
import car6 from "../../../../public/Images/cars6.jpg";
import car7 from "../../../../public/Images/cars7.jpg";
import car8 from "../../../../public/Images/cars8.jpg";
import car9 from "../../../../public/Images/cars9.jpg";
import car10 from "../../../../public/Images/cars10.jpg";
import car11 from "../../../../public/Images/cars11.jpg";
import car12 from "../../../../public/Images/cars12.jpg";
import car13 from "../../../../public/Images/cars13.jpg";
import car14 from "../../../../public/Images/cars14.jpg";
import car15 from "../../../../public/Images/cars14.jpg";
// Luxury Home
import vila from "../../../../public/Images/vila.jpg";
import vila1 from "../../../../public/Images/vila1.jpg";

const PortfolioDetail = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  console.log("Search Params:", searchParams);
  console.log("Project ID:", id);

  const portfolioItems = {
    "Lexus-LX600h": {
     image: car1,
      title: "Lexus LX600h",
      short_description: "Here at Stallion Motors, we are delighted to offer this latest shape, Lexus LX600h fresh from the Japanese shores",
      description: "Here at Stallion Motors, we are delighted to offer this latest shape, Lexus LX600h fresh from the Japanese shores. From its striking looks, strong character lines, and sculpted creases, this flagship SUV from Lexus is bound to fulfill all of your lifestyle requirements from a car and more. Packed with a twin-turbo V6 engine, paired to a potent electric hybrid system, this LX600h is a brawny Swiss Army knife that can amply seat 7 comfortably and offers spritely performance, Japanese reliability, excellent refinement, and exceptional fuel economy.",
      tags: ["Real Estate", "Luxury Homes", "Modern Design"],
      category: "Imported Cars",
      id: "luxury-living-spaces",
    },
    "Rolls-Royce-Cullinan-Black-Badge": {
      image: car2,
      title: "Rolls Royce Cullinan Black Badge MANSORY Edition",
      short_description: "Here at Stallion Motors, we are honoured to offer this bespoke, highly desirable UK model",
      description: "Here at Stallion Motors, we are honoured to offer this bespoke, highly desirable UK model Rolls Royce Cullinan Black Badge. This particular Cullinan is not just your run-of-the-mill version; it’s been refined by world-renowned coach builders, Mansory. From its 6.75 litre V12 master craft unit of an engine, carbon fibre body kit, upgraded 24-inch Mansory alloy wheels, to its Black Badge-specific black-on-orange leather interior, this vehicle is ready to make bold statements here in Pakistan.",
      tags: ["Retail Space", "Shopping Center", "Urban Development"],
      category: "Imported Cars",
    },
    "luxury-living-spaces": {
      image: car3,
      title: "Urban Retail Hub",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Retail Space", "Shopping Center", "Urban Development"],
      category: "Imported Cars",
      id: "luxury-living-spaces",
    },
    "luxury-living-spaces": {
      image: car4,
      title: "Urban Retail Hub",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Retail Space", "Shopping Center", "Urban Development"],
      category: "Imported Cars",
    },
    "luxury-living-spaces": {
      image: car5,
      title: "Urban Retail Hub",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Retail Space", "Shopping Center", "Urban Development"],
      category: "Imported Cars",
    },
    "luxury-living-spaces": {
      image: car6,
      title: "Urban Retail Hub",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Retail Space", "Shopping Center", "Urban Development"],
      category: "Imported Cars",
    },
    "urban-retail-hub": {
      image: car7,
      title: "Urban Retail Hub",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Retail Space", "Shopping Center", "Urban Development"],
      category: "Imported Cars",
    },
    "urban-retail-hub": {
      image: car8,
      title: "Urban Retail Hub",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Retail Space", "Shopping Center", "Urban Development"],
      category: "Imported Cars",
    },
    "urban-retail-hub": {
      image: car9,
      title: "Urban Retail Hub",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Retail Space", "Shopping Center", "Urban Development"],
      category: "Imported Cars",
    },
    "urban-retail-hub": {
      image: car10,
      title: "Urban Retail Hub",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Retail Space", "Shopping Center", "Urban Development"],
      category: "Imported Cars",
    },
    "urban-retail-hub": {
      image: car11,
      title: "Urban Retail Hub",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Retail Space", "Shopping Center", "Urban Development"],
      category: "Imported Cars",
    },
    "urban-retail-hub": {
      image: car12,
      title: "Urban Retail Hub",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Retail Space", "Shopping Center", "Urban Development"],
      category: "Imported Cars",
    },
    "urban-retail-hub": {
      image: car13,
      title: "Urban Retail Hub",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Retail Space", "Shopping Center", "Urban Development"],
      category: "Imported Cars",
    },
    "urban-retail-hub": {
      image: car14,
      title: "Urban Retail Hub",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Retail Space", "Shopping Center", "Urban Development"],
      category: "Imported Cars",
    },
    "urban-retail-hub": {
      image: car15,
      title: "Urban Retail Hub",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Retail Space", "Shopping Center", "Urban Development"],
      category: "Imported Cars",
    },
    // Luxury Home
    "urban-retail-hub": {
      image: vila,
      title: "Urban Retail Hub",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Retail Space", "Shopping Center", "Urban Development"],
      category: "Luxury Home",
    },
    "urban-retail-hub": {
      image: vila1,
      title: "Urban Retail Hub",
      description: "A vibrant shopping destination in the heart of the city.",
      tags: ["Retail Space", "Shopping Center", "Urban Development"],
      category: "Luxury Home",
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
        title={portfolioData?.title}
        description={portfolioData?.description}
        image={portfolioData?.image}
        tags={portfolioData?.tags}
      />
      <Footer />
    </>
  );
};

export default PortfolioDetail;
