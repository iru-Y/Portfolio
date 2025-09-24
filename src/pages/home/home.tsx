import AboutSection from "../../components/AboutSection";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import ServiceSection from "../../components/ServiceSection";

export default function Home() {
  return (
    <>
        <Header />
        <HeroSection/>
        <AboutSection/>
        <ServiceSection></ServiceSection>
    </>
  );
}
