import Footer from "../Footer";
import Header from "../Header";
import Banner from "./Banner";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";



export default function PortfolioIndex() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <Portfolio/>
      <Banner/>
      <Footer/>
    </div>
  );
}
