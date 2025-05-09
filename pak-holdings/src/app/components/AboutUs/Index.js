import Footer from "../Footer";
import Header from "../Header";
import AdBanner from "./AdBanner";
import Banner from "./Banner";
import ContactDetails from "./ContactDetails";
import HeroSection from "./HeroSection";
import RewardBanner from "./RewardBanner";
import Teams from "./TeamMember";


export default function AboutIndex() {
    return (
        <div>
            <Header />
            <HeroSection />
            <Banner />
            <Teams />
            <RewardBanner/>
            <ContactDetails />
            <AdBanner />
            <Footer />
        </div>
    );
}
