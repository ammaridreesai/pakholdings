"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
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

// Portfolio items data
const portfolioItems = {
  "Lexus-LX600h": {
    image: car1,
    title: "Lexus LX600h",
    short_description:
      "Here at Stallion Motors, we are delighted to offer this latest shape, Lexus LX600h fresh from the Japanese shores",
    description:
      "Here at Stallion Motors, we are delighted to offer this latest shape, Lexus LX600h fresh from the Japanese shores. From its striking looks, strong character lines, and sculpted creases, this flagship SUV from Lexus is bound to fulfill all of your lifestyle requirements from a car and more. Packed with a twin-turbo V6 engine, paired to a potent electric hybrid system, this LX600h is a brawny Swiss Army knife that can amply seat 7 comfortably and offers spritely performance, Japanese reliability, excellent refinement, and exceptional fuel economy.",
    tags: ["Real Estate", "Luxury Homes", "Modern Design"],
    category: "Imported Cars",
  },
  "Rolls-Royce-Cullinan-Black-Badge": {
    image: car2,
    title: "Rolls Royce Cullinan Black Badge MANSORY Edition",
    short_description:
      "Here at Stallion Motors, we are honoured to offer this bespoke, highly desirable UK model",
    description:
      "Here at Stallion Motors, we are honoured to offer this bespoke, highly desirable UK model Rolls Royce Cullinan Black Badge. This particular Cullinan is not just your run-of-the-mill version; it's been refined by world-renowned coach builders, Mansory. From its 6.75 litre V12 master craft unit of an engine, carbon fibre body kit, upgraded 24-inch Mansory alloy wheels, to its Black Badge-specific black-on-orange leather interior, this vehicle is ready to make bold statements here in Pakistan.",
    tags: ["Retail Space", "Shopping Center", "Urban Development"],
    category: "Imported Cars",
  },
  // Grouped Urban Retail Hub items with unique keys
  "urban-retail-hub-1": {
    image: car3,
    title: "Urban Retail Hub",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Retail Space", "Shopping Center", "Urban Development"],
    category: "Imported Cars",
  },
  "urban-retail-hub-2": {
    image: car4,
    title: "Urban Retail Hub",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Retail Space", "Shopping Center", "Urban Development"],
    category: "Imported Cars",
  },
  "urban-retail-hub-3": {
    image: car5,
    title: "Urban Retail Hub",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Retail Space", "Shopping Center", "Urban Development"],
    category: "Imported Cars",
  },
  "urban-retail-hub-4": {
    image: car6,
    title: "Urban Retail Hub",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Retail Space", "Shopping Center", "Urban Development"],
    category: "Imported Cars",
  },
  "urban-retail-hub-5": {
    image: car7,
    title: "Urban Retail Hub",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Retail Space", "Shopping Center", "Urban Development"],
    category: "Imported Cars",
  },
  "urban-retail-hub-6": {
    image: car8,
    title: "Urban Retail Hub",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Retail Space", "Shopping Center", "Urban Development"],
    category: "Imported Cars",
  },
  "urban-retail-hub-7": {
    image: car9,
    title: "Urban Retail Hub",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Retail Space", "Shopping Center", "Urban Development"],
    category: "Imported Cars",
  },
  "urban-retail-hub-8": {
    image: car10,
    title: "Urban Retail Hub",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Retail Space", "Shopping Center", "Urban Development"],
    category: "Imported Cars",
  },
  "urban-retail-hub-9": {
    image: car11,
    title: "Urban Retail Hub",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Retail Space", "Shopping Center", "Urban Development"],
    category: "Imported Cars",
  },
  "urban-retail-hub-10": {
    image: car12,
    title: "Urban Retail Hub",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Retail Space", "Shopping Center", "Urban Development"],
    category: "Imported Cars",
  },
  "urban-retail-hub-11": {
    image: car13,
    title: "Urban Retail Hub",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Retail Space", "Shopping Center", "Urban Development"],
    category: "Imported Cars",
  },
  "urban-retail-hub-12": {
    image: car14,
    title: "Urban Retail Hub",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Retail Space", "Shopping Center", "Urban Development"],
    category: "Imported Cars",
  },
  "urban-retail-hub-13": {
    image: car15,
    title: "Urban Retail Hub",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Retail Space", "Shopping Center", "Urban Development"],
    category: "Imported Cars",
  },
  // Luxury Home
  "luxury-home-1": {
    image: vila,
    title: "Luxury Home 1",
    description:
      "Stunning luxury villa with modern amenities and spacious design.",
    tags: ["Luxury Home", "Modern Architecture", "Interior Design"],
    category: "Luxury Home",
  },
  "luxury-home-2": {
    image: vila1,
    title: "Luxury Home 2",
    description: "A modern retreat offering comfort and class in every corner.",
    tags: ["Luxury Home", "Modern Architecture", "Interior Design"],
    category: "Luxury Home",
  },
};

// Client component that uses useSearchParams
function PortfolioContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    if (id && portfolioItems[id]) {
      setPortfolioData(portfolioItems[id]);
    }
  }, [id]);

  if (!id) {
    return <p>No project ID specified</p>;
  }

  if (!portfolioData) {
    return <p>Loading project details...</p>;
  }

  return (
    <PortfolioDetails
      title={portfolioData.title}
      description={portfolioData.description}
      image={portfolioData.image}
      tags={portfolioData.tags}
    />
  );
}

// Loading fallback component
function LoadingFallback() {
  return <div className="p-4 text-center">Loading project details...</div>;
}

// Main page component
const PortfolioDetail = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        <PortfolioContent />
      </Suspense>
      <Footer />
    </>
  );
};

export default PortfolioDetail;
