import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import ConferenceSection from "../components/ConferenceSection";
import ProgrammesSection from "../components/ProgrammesSection";
import MuseumSection from "../components/MuseumSection";
import HeritageSection from "../components/HeritageSection";
import JoinSection from "../components/JoinSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <ConferenceSection />
      <ProgrammesSection />
      <MuseumSection />
      <HeritageSection />
      <JoinSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
