import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Conference from "../components/Conference";
import Programmes from "../components/Programmes";
import Museums from "../components/Museums";
import Heritage from "../components/Heritage";
import Join from "../components/Join";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Conference />
      <Programmes />
      <Museums />
      <Heritage />
      <Join />
      <Contact />
      <Footer />
    </main>
  );
}
