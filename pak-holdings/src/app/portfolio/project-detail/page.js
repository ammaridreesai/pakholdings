"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import PortfolioDetails from "../../components/Portfolio/PortfolioDetail";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { projects } from "../../../helpers/projects.js";
function PortfolioContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    if (id) {
      const item = projects.find((item) => item.id === id);
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
