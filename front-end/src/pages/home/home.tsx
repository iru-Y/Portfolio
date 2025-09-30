import AboutSection from "../../components/AboutSection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import PortfolioSection from "../../components/PortfolioSection";
import ServiceSection from "../../components/ServiceSection";

export default function Home() {
  return (
    <>
        <Header />
        <HeroSection/>
        <AboutSection/>
        <ServiceSection></ServiceSection>
        <PortfolioSection></PortfolioSection>
        <ContactSection></ContactSection>
        <Footer></Footer>
    </>
  );
}
