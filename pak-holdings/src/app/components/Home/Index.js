import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "./Banner";
import HeroSection from "./HeroSection";
import Homecarousel from "./Homecarousel";
import HomeStats from "./HomeStats";
import Portfolio from "./Portfolio";
import ValueSection from "./ValueSection";



export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <Portfolio/>
      <ValueSection/>
      <HomeStats/>
      <Homecarousel/>
      <Banner/>
      <Footer/>
    </div>
  );
}
