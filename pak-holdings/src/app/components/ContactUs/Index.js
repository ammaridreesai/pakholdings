import Footer from "../Footer";
import Header from "../Header";
import ContactusDetails from "./ContactusDetails";
import HeroSection from "./HeroSection";
import Locations from "./MapLocation";
import Newsletter from "./Newsletter";


export default function ContactIndex() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <ContactusDetails/>
      <Locations/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}
