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

const portfolioItems = [
  {
    image: car1,
    title: "Car 1",
    short_description:
      "Here at Stallion Motors, we are delighted to offer this latest shape, Lexus LX600h fresh from the Japanese shores",
    description:
      "Here at Stallion Motors, we are delighted to offer this latest shape, Lexus LX600h fresh from the Japanese shores. From its striking looks, strong character lines, and sculpted creases, this flagship SUV from Lexus is bound to fulfill all of your lifestyle requirements from a car and more. Packed with a twin-turbo V6 engine, paired to a potent electric hybrid system, this LX600h is a brawny Swiss Army knife that can amply seat 7 comfortably and offers spritely performance, Japanese reliability, excellent refinement, and exceptional fuel economy.",
    tags: ["Luxury Car", "Imported Vehicle", "SUV"],
    category: "Imported Cars",
    id: "Lexus-LX600h",
  },
  {
    image: car2,
    title: "Car 2",
    short_description:
      "Here at Stallion Motors, we are honoured to offer this bespoke, highly desirable UK model",
    description:
      "Here at Stallion Motors, we are honoured to offer this bespoke, highly desirable UK model Rolls Royce Cullinan Black Badge. This particular Cullinan is not just your run-of-the-mill version; it’s been refined by world-renowned coach builders, Mansory. From its 6.75 litre V12 master craft unit of an engine, carbon fibre body kit, upgraded 24-inch Mansory alloy wheels, to its Black Badge-specific black-on-orange leather interior, this vehicle is ready to make bold statements here in Pakistan.",
    tags: ["Luxury Car", "Imported Vehicle", "Custom Edition"],
    category: "Imported Cars",
    id: "Rolls-Royce-Cullinan-Black-Badge",
  },
  {
    image: car3,
    title: "Car 3",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Luxury Car", "Imported Vehicle", "SUV"],
    category: "Imported Cars",
    id: "car-3",
  },
  {
    image: car4,
    title: "Car 4",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Luxury Car", "Imported Vehicle", "SUV"],
    category: "Imported Cars",
    id: "car-4",
  },
  {
    image: car5,
    title: "Car 5",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Luxury Car", "Imported Vehicle", "SUV"],
    category: "Imported Cars",
    id: "car-5",
  },
  {
    image: car6,
    title: "Car 6",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Luxury Car", "Imported Vehicle", "SUV"],
    category: "Imported Cars",
    id: "car-6",
  },
  {
    image: car7,
    title: "Car 7",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Luxury Car", "Imported Vehicle", "SUV"],
    category: "Imported Cars",
    id: "car-7",
  },
  {
    image: car8,
    title: "Car 8",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Luxury Car", "Imported Vehicle", "SUV"],
    category: "Imported Cars",
    id: "car-8",
  },
  {
    image: car9,
    title: "Car 9",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Luxury Car", "Imported Vehicle", "SUV"],
    category: "Imported Cars",
    id: "car-9",
  },
  {
    image: car10,
    title: "Car 10",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Luxury Car", "Imported Vehicle", "SUV"],
    category: "Imported Cars",
    id: "car-10",
  },
  {
    image: car11,
    title: "Car 11",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Luxury Car", "Imported Vehicle", "SUV"],
    category: "Imported Cars",
    id: "car-11",
  },
  {
    image: car12,
    title: "Car 12",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Luxury Car", "Imported Vehicle", "SUV"],
    category: "Imported Cars",
    id: "car-12",
  },
  {
    image: car13,
    title: "Car 13",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Luxury Car", "Imported Vehicle", "SUV"],
    category: "Imported Cars",
    id: "car-13",
  },
  {
    image: car14,
    title: "Car 14",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Luxury Car", "Imported Vehicle", "SUV"],
    category: "Imported Cars",
    id: "car-14",
  },
  {
    image: car15,
    title: "Car 15",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Luxury Car", "Imported Vehicle", "SUV"],
    category: "Imported Cars",
    id: "car-15",
  },
  {
    image: vila,
    title: "Villa 1",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Luxury Home", "Modern Design", "Real Estate"],
    category: "Luxury Home",
    id: "villa-1",
  },
  {
    image: vila1,
    title: "Villa 2",
    description: "A vibrant shopping destination in the heart of the city.",
    tags: ["Luxury Home", "Modern Design", "Real Estate"],
    category: "Luxury Home",
    id: "villa-2",
  },
];
// Client component that uses useSearchParams
function PortfolioContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    if (id) {
      const item = portfolioItems.find((item) => item.id === id);
      if (item) {
        setPortfolioData(item);
      }
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
