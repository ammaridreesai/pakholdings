import Header from "../Header";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import ValueSection from "./ValueSection";



export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <Portfolio/>
      <ValueSection/>
    </div>
  );
}
